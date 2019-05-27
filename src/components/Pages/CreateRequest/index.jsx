import React, { Component } from 'react';

import Header from 'Root/components/Tools/Header';

import Dropdown from 'Root/components/Tools/Dropdown';
import RadioButton from 'Root/components/Tools/RadioButton';
import DatePicker from 'antd/lib/date-picker'; // for js
import { TimePicker } from 'antd';
import 'antd/lib/date-picker/style/css'; // for css
import moment from 'moment';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import styles from './styles.less';

import bitcoinIcon from 'Root/images/bitcoin.png';
import ethereumIcon from 'Root/images/ethereum.png';

class CreateRequest extends Component {
   state = {
     amountValue: '',
     disabled1: true,
     disabled2: true,
     greaterValue: '',
     lowerValue: '',
     title: 'Bitcoin',
   }

  handleChange1 = (value) => {
    if (/^\d+$/.test(value.target.value)) {
      this.setState({
        greaterValue: value.target.value,
      });
    }
  }

  handleChange2 = (value) => {
    if (/^\d+$/.test(value.target.value)) {
      this.setState({
        lowerValue: value.target.value,
      });
    }
  }

  handleChange3 = (value) => {
    if (/^\d+$/.test(value.target.value)) {
      this.setState({
        amountValue: value.target.value,
      });
    }
  }

  handleSelect = ({ key }) => {
    this.setState({
      title: key,
    });
  }

  handle1 = () => {
    this.setState({
      disabled1: false,
      disabled2: true,
    });
  }

  handle2 = () => {
    this.setState({
      disabled1: true,
      disabled2: false,
    });
  }

  render() {
    const { MonthPicker, RangePicker } = DatePicker;

    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';
    const format = 'HH:mm';

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

    const menu = (
      <Menu onSelect={this.handleSelect} className={styles.menu}>
        <MenuItem key="Bitcoin" className={styles.menuItem}>
          Bitcoin
        </MenuItem>
        <Divider />
        <MenuItem key="Ethereum" className={styles.menuItem}>
          Ethereum
        </MenuItem>
      </Menu>
    );

  return (
    <div>
      <Header />
      <h1 className={styles.h1title}>Create Request</h1>
      <div className={styles.container}>
        <div>
          <p>Select a currency</p>
          <Dropdown menu={menu} title={this.state.title} width="559" />
        </div>
        <div className={styles.row}>
          <div>
            <div className={styles.cell}>
              <RadioButton handleCheck={this.handle1} />
              <p>Greater and Equal</p>
            </div>
            <div className={styles.cell}>
              <RadioButton handleCheck={this.handle2} />
              <p>Lesser and Equal</p>
            </div>
          </div>
          <div className={styles.inputrows}>
            <input
              type="text"
              pattern="[0-9]*"
              onChange={this.handleChange1}
              disabled={this.state.disabled1}
              value={this.state.greaterValue}
            />

            <input
              type="text"
              pattern="[0-9]*"
              onChange={this.handleChange2}
              disabled={this.state.disabled2}
              value={this.state.lowerValue}
            />
          </div>
        </div>
        <div className={styles.datepicker}>
          <p>Specified date (UTC)</p>
          <div>
            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} className={styles.time}/>
            <TimePicker defaultValue={moment('12:08', format)} format={format}/>
          </div>
        </div>
        <ul className={styles.rows}>
          <p>Expiration date:</p>
          <li><RadioButton /> <p>15 Min</p> </li>
          <li><RadioButton /> <p>1 Hour</p> </li>
          <li><RadioButton /> <p>12 Hour</p> </li>
          <li><RadioButton /> <p>2 Month</p> </li>
        </ul>

        <div className={styles.rows}>
          <p>Amount bet (TRX)</p>
          <input
            type="text"
            pattern="[0-9]*"
            onChange={this.handleChange3}
            value={this.state.amountValue}
          />
        </div>
        <button type="button" className={styles.sendButton}>Send Request</button>
      </div>
    </div>
  );
  }
}

export default CreateRequest;
