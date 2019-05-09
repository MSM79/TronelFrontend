import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';

function Button(props) {
  const {
    color,
    value,
  } = props;
  return (
    <button className={classnames(styles.button, styles[color])} type="button" onClick={this.onClick}>{value}</button>
  );
}

export default Button;
