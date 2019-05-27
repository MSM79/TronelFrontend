import React from 'react';

import shorter from 'Root/helpers/shorter';
import CopyText from 'Root/components/Tools/CopyText';

import copyIcon from 'Root/images/icons-8-copy.png';

import styles from './styles.less';

function PrivateKey() {
  var key = "TJWzn8rjLYbfS3hcAVVscLeERUs6rfMoA5";
  return (
    <section className={styles.all}>
      <h1>Showing private key</h1>
      <div className={styles.container}>
        <p>Your private key:</p>
        <div>
          <p>{shorter(key)}</p>
          <CopyText text={key} />
        </div>
        <input type="submit" value="Confirm" />
      </div>
    </section>
  );
}

export default PrivateKey;
