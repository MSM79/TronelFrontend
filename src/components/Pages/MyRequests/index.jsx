import React, { Component } from 'react';

import Header from 'Root/components/Tools/Header';

import Form from 'Root/components/Tools/FormDelete';

import Modals from 'Root/components/Pages/Modal';

import Modal from 'Root/components/Tools/Modal';

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
              <Form
                formnumber="276736719919836672"
                requseter="WTEA674fdDe714fd979de3EdF6A…"
                predictedprice="Greater than or equal $30"
                amountofbet="500 TRX"
                specifieddate="2019/05/12  |  12:00 UTC"
                value="Delete"
              />
              <Form
                formnumber="276736719919836672"
                requseter="WTEA674fdDe714fd979de3EdF6A…"
                predictedprice="Greater than or equal $30"
                amountofbet="500 TRX"
                specifieddate="2019/05/12  |  12:00 UTC"
                value="Delete"
              />
            </div>
          </section>
        </div>
        <button type="button" onClick={this.show}>asdsdfasdf</button>
        <Modal width={479} height={225} visible={visible}>
          <Modals />
        </Modal>
      </div>
    );
  }
}

export default MyRequsets;
