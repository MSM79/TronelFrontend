import React from 'react';

import Header from 'Root/components/Tools/Header';

import FormBets from 'Root/components/Tools/FormBets';

import bitcoinIcon from 'Root/images/bitcoin.png';
import ethereumIcon from 'Root/images/ethereum.png';

import styles from './styles.less';

function MyBets() {
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <h1 className={styles.h1Title}> My Bets</h1>
          <section>
            <div className={styles.row1}>
              <article className={styles.form}>
                <p>Form number</p>
                <div>
                  <input type="text" placeholder="Enter your form number" />
                  <input type="submit" value="Search" />
                </div>
              </article>
            </div>
            <div className={styles.row2}>
              <FormBets
                formnumber="WTEA674fdDe714fd979de3EdF6A…"
                acceptor="WTEA674fdDe714fd979de3EdF6A…"
                requseter="WTEA674fdDe714fd979de3EdF6A…"
                predictedprice="Greater than or equal $30"
                amountofbet="500 TRX"
                specifieddate="2019/05/12  |  12:00 UTC"
                win
                src={bitcoinIcon}
              />
              <FormBets
                formnumber="WTEA674fdDe714fd979de3EdF6A…"
                acceptor="WTEA674fdDe714fd979de3EdF6A…"
                requseter="WTEA674fdDe714fd979de3EdF6A…"
                predictedprice="Greater than or equal $30"
                amountofbet="500 TRX"
                specifieddate="2019/05/12  |  12:00 UTC"
                lose
                src={ethereumIcon}
              />
            </div>
          </section>
        </div>
      </div>
    );
}

export default MyBets;
