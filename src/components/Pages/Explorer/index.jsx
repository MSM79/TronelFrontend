import React from 'react';

import Header from 'Root/components/Tools/Header';

import Form from 'Root/components/Tools/Form';
import Dropdown from 'Root/components/Tools/Dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import styles from './styles.less';

function onSelect({ key }) {
  console.log(`${key} selected`);
}

const menu = (
  <Menu onSelect={onSelect}>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem key="1">one</MenuItem>
    <Divider />
    <MenuItem key="2">two</MenuItem>
  </Menu>
);

function Explorer() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <section>
          <div className={styles.row1}>
            <article className={styles.currency}>
              <p>Currency</p>
              <Dropdown menu={menu} title="All" width="152" />
            </article>
            <article className={styles.amount}>
              <p>Amount of bet</p>
            </article>
            <article className={styles.form}>
              <p>Form number</p>
              <div>
                <input type="text" placeholder="Enter ypur form number" />
                <input type="submit" value="Search" />
              </div>
            </article>
          </div>
          <div className={styles.row2}>
            <Form
              formnumber="276736719919836672"
              requseter="WTEA674fdDe714fd979de3EdF6A…"
              predictedprice="Greater than or equal $30"
              amountofbet="500 TRX"
              specifieddate="2019/05/12     12:00 UTC"
            />
            <Form
              formnumber="276736719919836672"
              requseter="WTEA674fdDe714fd979de3EdF6A…"
              predictedprice="Greater than or equal $30"
              amountofbet="500 TRX"
              specifieddate="2019/05/12  |  12:00 UTC"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Explorer;
