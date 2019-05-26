import React from 'react';

import { NavLink } from 'react-router-dom';
import CopyText from 'Root/components/Tools/CopyText';

import shorter from 'Root/helpers/shorter';

import assetIcon from 'Root/images/asset.png';
import iconsplus from 'Root/images/icons-8-plus.png';
import iconcopy from 'Root/images/icons-8-copy.png';
import trx from 'Root/images/image-2019-04-20-01-21-26.png';
import styles from './styles.less';

function Header() {
  var address = "TJWzn8rjLYbfS3hcAVVscLeERUs6rfMoA5";

  return (
    <header className={styles.header}>
      <div>
        <img src={assetIcon} alt="asset" className={styles.logo} />
      </div>
      <div className={styles.first}>
        <NavLink exact to="/" activeClassName={styles.activeLink}>Explorer</NavLink>
        <NavLink exact to="/mybets" activeClassName={styles.activeLink}>My Bets</NavLink>
        <NavLink exact to="/myrequests" activeClassName={styles.activeLink}>My Requests</NavLink>
      </div>
      <div>
        <NavLink to="/createrequest">
          <button type="button" className={styles.headerButton}>
            <img src={iconsplus} alt="iconsplus" />
            Create request
          </button>
        </NavLink>
      </div>
      <div className={styles.address}>
        <p>Address:</p>
        <span>{shorter(address)}</span>
        <CopyText text={address} />
      </div>
      <div className={styles.trx}>
        <p>100 TRX</p>
        <div>
          <img src={trx} alt={trx} />
          <small>Balance</small>
        </div>
      </div>
    </header>
  );
}

export default Header;
