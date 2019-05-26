import React, { Component } from 'react';
import classnames from 'classnames';

import Modal from 'Root/components/Tools/Modal';

import styles from './styles.less';

class Modals extends Component {
  state = {
    theme: this.props.button === 'Accept' ? 'blue' : 'red',
  }

  render() {
    const {
      text,
      title,
      button,
      icon,
    } = this.props;

    return (
      <div className={styles.container}>
        <article>
          <section className={styles.circle}><img src={icon} alt="icon" /></section>
          <b>{title}</b>
        </article>
        <p>{text}</p>
        <div className={styles.bottom}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={this.props.handleClose}>
            Cancel
          </button>
          <button
            type="button"
            className={this.state.theme === 'blue' ? styles.acceptButton : styles.deleteButton}>
            {button}
          </button>
        </div>
      </div>
    );
  }
}

export default Modals;
