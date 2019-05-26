import React from 'react';

import styles from './styles.less';

function RadioButton(props) {
  const {
    handleCheck,
  } = props;

  return (
    <label className={styles.container}>
      <input type="radio" defaultChecked="checked" name="radio" onClick={handleCheck} />
      <span className={styles.checkmark}></span>
    </label>
  );
}

export default RadioButton;
