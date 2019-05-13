import React from 'react';

import copyIcon from 'Root/images/icons-8-copy.png';

import styles from './styles.less';

function PrivateKey() {
  return (
    <section className={styles.all}>
      <h1>Showing private key</h1>
      <div className={styles.container}>
        <p>Your private key:</p>
        <div>
          <p>TJWzn8rjLYbfS3hcAVVscLeERUs6rfMoA5</p>
          <img src={copyIcon} alt="copyIcon" />
        </div>
        <input type="submit" value="Confirm" />
      </div>
    </section>
  );
}

export default PrivateKey;
