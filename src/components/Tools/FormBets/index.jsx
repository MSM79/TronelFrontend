import React from 'react';

import iconcopy from 'Root/images/icons-8-copy.png';

import Modals from 'Root/components/Pages/Modal';
import Modal from 'Root/components/Tools/Modal';

import shorter from 'Root/helpers/shorter';
import CopyText from 'Root/components/Tools/CopyText';

import styles from './styles.less';

function FormBets(props) {
  const {
    formnumber,
    acceptor,
    requseter,
    predictedprice,
    amountofbet,
    specifieddate,
    win,
    lose,
    src,
  } = props;
  return (
    <div className={styles.form}>
      <div className={styles.rows}>
        <ul className={styles.title}>
          <li>Form Number :</li>
          <li>Requester : </li>
          <li>Acceptor :</li>
          <li>Cryptocurrency :</li>
          <li>predicted price:‌</li>
          <li>Amount of bet :</li>
          <li>Specified Date :</li>
        </ul>
        <ul className={styles.info}>
        <li>
          {shorter(formnumber)}
          <CopyText text={formnumber} />
        </li>
        <li>
          {shorter(requseter)}
          <CopyText text={requseter} />
        </li>
          <li>
            {shorter(acceptor)}
            <CopyText text={acceptor} />
          </li>
          <li><img src={src} alt="coin" className={styles.currencyIcon} /></li>
          <li>{predictedprice}</li>
          <li>{amountofbet}</li>
          <li>{specifieddate}</li>
        </ul>
      </div>
      <div className={styles.desceription}>
        <p>At the 2019/05/12|12:00 UTC  if the  BNB price is greater than or equal 30$, the requester user is the winner and gets 500 TRX, otherwise the acceptor user in the bet gets 500 TRX and  is the winner.</p>
      </div>
      <button className={styles.Button} type="button">
      {props.win && <p className={styles.win}>You win</p> }
      {props.lose && <p className={styles.lose}>You lose</p> }
      </button>
    </div>
  );
}

export default FormBets;
