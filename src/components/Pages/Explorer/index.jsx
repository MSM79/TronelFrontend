import React, { Component } from 'react';

import Header from 'Root/components/Tools/Header';
import Form from 'Root/components/Tools/Form';
import Dropdown from 'Root/components/Tools/Dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import Modals from 'Root/components/Pages/Modal';
import Modal from 'Root/components/Tools/Modal';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import acceptIcon from 'Root/images/accept.png';
import 'rc-slider/assets/index.css';
import styles from './styles.less';

import bitcoinIcon from 'Root/images/bitcoin.png';
import ethereumIcon from 'Root/images/ethereum.png';

function onSelect({ key }) {
  console.log(`${key} selected`);
}

const Range = createSliderWithTooltip(Slider.Range);

const menu = (
  <Menu onSelect={onSelect} className={styles.menu}>
    <MenuItem key="1" className={styles.menuItem}>
      Bitcoin
      <img src={bitcoinIcon} alt="bitcoin" />
    </MenuItem>
    <Divider />
    <MenuItem key="2" className={styles.menuItem}>
      Ethereum
      <img src={ethereumIcon} alt="ethereum" />
    </MenuItem>
  </Menu>
);

function range(e) {
  console.log(e);
}

class Explorer extends Component {

  state = {
    visible: false,
  }

  show = () => {
    this.setState({
      visible: true,
    });
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible } = this.state;

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.h1Title}>Explorer</h1>
        <section>
          <div className={styles.row1}>
            <article className={styles.currency}>
              <p>Currency</p>
              <Dropdown menu={menu} title="All" width="152" />
            </article>
            <article className={styles.amount}>
              <p>Amount of bet</p>
                <Range onChange={range}
                  min= {0}
                  max= {1000}
                  defaultValue={[200,500]}
                  railStyle={{ background:'#b2b4b7'}}
                  className={styles.range}
                  tipFormatter={value => `${value} TRX`}
                  tipProps={{
                     overlayClassName: styles.tooltip,
                     placement: 'bottom',
                   }}
                />
            </article>
            <article className={styles.form}>
              <p>Form number</p>
              <div className={styles.searchContainer}>
                <input type="text" placeholder="Enter your form number" pattern="[A-Za-z]" />
                <input type="submit" value="Search" />
              </div>
            </article>
          </div>
          <div className={styles.row2}>
            <Form
              handleDelete={this.show}
              handleClose={this.hide}
              formnumber="WTEA674fdDe714fd979de3EdF6AAA"
              requseter="WTEA674fdDe714fd979de3EdF6AAA"
              predictedprice="Greater than or equal $30"
              amountofbet="500 TRX"
              specifieddate="2019/05/12     12:00 UTC"
              value="Accept"
              src={bitcoinIcon}
            />
            <Form
              handleDelete={this.show}
              handleClose={this.hide}
              formnumber="WTEA674fdDe714fd979de3EdF6AAA"
              requseter="WTEA674fdDe714fd979de3EdF6AAA"
              predictedprice="Greater than or equal $30"
              amountofbet="500 TRX"
              specifieddate="2019/05/12  |  12:00 UTC"
              value="Accept"
              src={ethereumIcon}
            />
          </div>
        </section>
      </div>
      <Modal width={479} height={225} visible={visible} onClose={this.hide} theme="blue">
        <Modals
          text="Are you sure you want to accept this request?"
          title="Accept Requset"
          button="Accept"
          handleClose={this.hide}
          icon={acceptIcon}
         />
      </Modal>
      <Menu />
    </div>
  );
  }
}

export default Explorer;
