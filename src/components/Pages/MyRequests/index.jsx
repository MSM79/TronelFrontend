import React, { Component } from 'react';

import Header from 'Root/components/Tools/Header';

import FormDelete from 'Root/components/Tools/FormDelete';

import Modals from 'Root/components/Pages/Modal';

import Modal from 'Root/components/Tools/Modal';
import Menu from 'Root/components/Tools/HamburgerMenu';

import warningIcon from 'Root/images/warning.png';
import bitcoinIcon from 'Root/images/bitcoin.png';
import ethereumIcon from 'Root/images/ethereum.png';

import styles from './styles.less';

class MyRequsets extends Component {
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
          <h1 className={styles.h1Title}> My Requsets</h1>
          <section>
            <div className={styles.row1}>
              <article className={styles.form}>
                <p>Form number</p>
                <div>
                  <input type="text" placeholder="Enter ypur form number" />
                  <input type="submit" value="Search" />
                </div>
              </article>
            </div>
            <div className={styles.row2}>
              <FormDelete
                handleDelete={this.show}
                handleClose={this.hide}
                formnumber="276736719919836672"
                requseter="WTEA674fdDe714fd979de3EdF6A…"
                predictedprice="Greater than or equal $30"
                amountofbet="500 TRX"
                specifieddate="2019/05/12  |  12:00 UTC"
                value="Delete"
                src={bitcoinIcon}
              />
              <FormDelete
              handleDelete={this.show}
                formnumber="276736719919836672"
                requseter="WTEA674fdDe714fd979de3EdF6A…"
                predictedprice="Greater than or equal $30"
                amountofbet="500 TRX"
                specifieddate="2019/05/12  |  12:00 UTC"
                value="Delete"
                src={ethereumIcon}
              />
            </div>
          </section>
        </div>
        <Modal width={479} height={225} visible={visible} onClose={this.hide} theme="red" >
          <Modals
            text="Are you sure you want to delete this request?"
            title="Delete Requset"
            button="Delete"
            handleClose={this.hide}
            icon={warningIcon}
           />
        </Modal>
        <Menu />
      </div>
    );
  }
}

export default MyRequsets;
