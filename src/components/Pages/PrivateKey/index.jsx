import React from 'react';

import styles from './styles.less';

function PrivateKey() {
  return (
    <section className={styles.all}>
      <h1>Private key</h1>
      <div className={styles.container}>
        <p>Private key</p>
        <input type="text" placeholder="Enter your private key" />
        <input type="submit" value="Login" />
        <div>
          <p>Not have a private key?</p>
          <a>Create Wallet</a>
        </div>
      </div>
    </section>
  );
}

export default PrivateKey;
