import React from 'react';

import acceptIcon from 'Root/images/icons-8-checked.png';
import coinIcon from 'Root/images/binance-coin-logo-png-transparent-copy.png';

import styles from './styles.less';


function Form(props) {
  const {
    formnumber,
    requseter,
    predictedprice,
    amountofbet,
    specifieddate,
  } = props;
  return (
    <div className={styles.form}>
      <div className={styles.rows}>
        <ul className={styles.title}>
          <li>Form Number :</li>
          <li>Requester :</li>
          <li>Cryptocurrency :</li>
          <li>predicted price:‌</li>
          <li>Amount of bet :</li>
          <li>Specified Date :</li>
        </ul>
        <ul className={styles.info}>
          <li>{formnumber}</li>
          <li>{requseter}</li>
          <li><img src={coinIcon} alt="coin" /></li>
          <li>{predictedprice}</li>
          <li>{amountofbet}</li>
          <li>{specifieddate}</li>
        </ul>
      </div>
      <div className={styles.desceription}>
        <p>At the 2019/05/12|12:00 UTC  if the  BNB price is greater than or equal 30$, the requester user is the winner and gets 500 TRX, otherwise the acceptor user in the bet gets 500 TRX and  is the winner.</p>
      </div>
      <button type="button" className={styles.acceptButton}>
        <img src={acceptIcon} alt="acceptIcon" />
      Accept
      </button>
    </div>
  );
}

export default Form;
