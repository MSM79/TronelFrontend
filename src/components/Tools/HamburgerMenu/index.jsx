import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu'

import assetIcon from 'Root/images/asset-6-4-x@2x.png';
import iconcopy from 'Root/images/icons-8-copy.png';
import trx from 'Root/images/image-2019-04-20-01-21-26.png';
import exitIcon from 'Root/images/icons8-delete.svg';

import styles from './styles.less';

class BurgerMenu extends Component {
  constructor(props) {
      super(props)

      this.state = {
        menuIsOpen: false,
      }
    }

    openMenu() {
      this.setState({ menuIsOpen: true })
    }

    closeMenu() {
      this.setState({ menuIsOpen: false })
    }

    closeMenu = () => {
   this.setState({
     menuIsOpen: false,
   });
 }

  render() {

  return (
    <div>
      <CheeseburgerMenu isOpen={this.state.menuIsOpen} closeCallback={this.closeMenu} backgroundColor="#313035" className={styles.hmenu}>
        <div className={styles.myMenuContent}>
          <ul>
            <div className={styles.exit}>
              <img src={exitIcon} alt="exitIcon" onClick={this.closeMenu} />
            </div>
            <li><Link to="/" onClick={this.closeMenu}>Explorer</Link></li>
            <li><Link to="/mybets" onClick={this.closeMenu}>My Bets</Link></li>
            <li><Link to="/myrequests" onClick={this.closeMenu}>My Requests</Link></li>
            <li><Link to="/createrequest" onClick={this.closeMenu}>Create Request</Link></li>
             <li className={styles.space}>
             <div className={styles.addressBar}>
               <label>
                 <b>Address : </b>
                 <img src={iconcopy} alt="copy" />
               </label>
               <p>JWzn8rjLYbfS3hcAVVscLeERUs6rfMoA5</p>
             </div>
               <div className={styles.trx}>
                 <p>100 TRX</p>
                 <div>
                   <img src={trx} alt={trx} />
                   <small>Balance</small>
                 </div>
               </div>
             </li>
          </ul>
        </div>
    </CheeseburgerMenu>
    <section className={styles.hamburger}>
      <HamburgerMenu
        className={styles.hamburger}
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu.bind(this)}
        width={32}
        height={24}
        strokeWidth={3}
        rotate={0}
        color='white'
        borderRadius={0}
        animationDuration={0.5}
          />
          <img src={assetIcon} alt="asset" />
      </section>
    </div>
  );
  }
}

export default BurgerMenu;
