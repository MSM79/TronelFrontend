import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import CheeseburgerMenu from 'cheeseburger-menu';

import assetIcon from 'Root/images/asset.png';

import styles from './styles.less';

class BurgerMenu extends Component {
  state = {
    menuIsOpen: true,
  }

  closeMenu = () => {
    this.setState({
      menuIsOpen: false,
    });
  }
  render() {

  return (
    <CheeseburgerMenu isOpen={this.state.menuIsOpen} closeCallback={this.closeMenu} backgroundColor="#313035">
      <div className={styles.myMenuContent}>
        <ul>
          <li><Link to="/" onClick={this.closeMenu}><img src={assetIcon} alt="assetIcon" /></Link></li>
          <li><Link to="/" onClick={this.closeMenu}>Explorer</Link></li>
          <li><Link to="/mybets" onClick={this.closeMenu}>My Bets</Link></li>
          <li><Link to="/myrequests" onClick={this.closeMenu}>My Requests</Link></li>
          <li><Link to="/createrequests" onClick={this.closeMenu}>Create Requests</Link></li>
        </ul>
      </div>
  </CheeseburgerMenu>
  );
  }
}

export default BurgerMenu;
