import React from 'react';

import styles from './styles.less';

function RadioButton() {
  return (
    <label className={styles.container}>
      <input type="radio" checked="checked" name="radio" />
      <span className={styles.checkmark}></span>
    </label>
  );
}

export default RadioButton;
