import Rodal from 'rodal';
import React, { Component } from 'react';

import 'rodal/lib/rodal.css';
import styles from './styles.less';

class App extends Component {
  state = {
    visibleState: false,
  }

  hide = () => {
    this.setState({
      visibleState: false,
    });
  }

  render() {
    const { visibleState } = this.state;
    const {
      width,
      height,
      visible,
      children,
    } = this.props;

    return (
      <div>
        <Rodal
          className={styles.rodal}
          width={width}
          height={height}
          visible={visible || visibleState}
          onClose={this.hide}
          animation="slideDown"
        >
          {children}
        </Rodal>
      </div>
    );
  }
}

export default App;
