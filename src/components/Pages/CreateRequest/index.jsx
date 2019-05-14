import React from 'react';

import Header from 'Root/components/Tools/Header';

import Dropdown from 'Root/components/Tools/Dropdown';
import RadioButton from 'Root/components/Tools/RadioButton';

import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import styles from './styles.less';

function onSelect({ key }) {
  console.log(`${key} selected`);
}

const menu = (
  <Menu onSelect={onSelect} className={styles.menu}>
    <MenuItem key="1" className={styles.menuItem}>one</MenuItem>
    <Divider />
    <MenuItem key="2" className={styles.menuItem}>two</MenuItem>
  </Menu>
);

function CreateRequest() {
  return (
    <div>
      <Header />
      <h1 className={styles.h1title}>Create Request</h1>
      <div className={styles.container}>
        <div>
          <p>Select a currency</p>
          <Dropdown menu={menu} title="Ethereum" width="559" />
        </div>
        <div className={styles.row}>
          <div>
            <p>Greater and Equal</p>
            <p>Lesser and Equal</p>
          </div>
          <div>
            <input type="text" placeholder="Place holder" />
            <input type="text" placeholder="Place holder" />
          </div>
        </div>
        <div className={styles.rows}>
          <p>Specified date (UTC)</p>
          <input type="text" placeholder="Place holder" />
        </div>
        <ul className={styles.rows}>
          <p>Expiration date:</p>
          <li><RadioButton /> <p>15 Min</p> </li>
          <li><RadioButton /> <p>1 Hour</p> </li>
          <li><RadioButton /> <p>12 Hour</p> </li>
          <li><RadioButton /> <p>2 Month</p> </li>
        </ul>

        <div className={styles.rows}>
          <p>Amount bet</p>
          <input type="text" placeholder="Place holder" />
        </div>
        <button type="button" className={styles.sendButton}>Send Request</button>
      </div>
    </div>
  );
}

export default CreateRequest;
