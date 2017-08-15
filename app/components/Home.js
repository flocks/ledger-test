// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  props: {
    searchBitcoin: (address: string) => void,
    search: string,
    history: object
  };

  render() {
    const { searchBitcoin, history, changeSearch, search } = this.props;

    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Ledger Test App</h2>
          <h3>Enter a bitcoin address to compute balance</h3>

          <label>Bitcoin Address</label>
          <input 
            className={styles.field}
            type="text" 
            value={search} 
            placeholder="Enter bitcoin address here"
            onChange={(e) => changeSearch(e.target.value)} 
           />

          <button 
            className={styles.submit}
            onClick={(addr) => history.push("/table/" + search)}
          >
            Show me my balance
          </button>
        </div>
      </div>
    );
  }
}
