import React, { Component } from 'react';

import Modal from 'Root/components/Tools/Modal';

import styles from './styles.less';

class Modals extends Component {
  render() {
    return (
      <div className={styles.container}>
        <article>
          <section className={styles.circle}>!</section>
          <b>Delete Requset</b>
        </article>
        <p>Are you sure you want to delete this request?</p>
        <div className={styles.bottom}>
          <button type="button" className={styles.cancelButton} onClick={this.props.handleClose}>Cancel</button>
          <button type="button" className={styles.buttonDel}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Modals;
