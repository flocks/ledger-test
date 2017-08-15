// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Table.css';
import TabRow from './TabRow.js';
import _ from 'lodash';
import moment from 'moment';
import Spinner from './Spinner';

class Table extends Component {

  props: {
      bitcoins: object,
      searchBitcoin: (str: string) => void
  };

  componentWillMount() {
      this.props.searchBitcoin(this.props.idParam);
  }

  render() {
    const { bitcoins, idParam } = this.props;
    const table = bitcoins.bitcoins[idParam]


    if (bitcoins.loading) {
        return (
            <Spinner isLoading />
        );
    }

    if (!table || table.length === 0) {
        return (
            <div className={style.noresult}>
                <p>No transactions found</p>
                <Link to="/">Change my address</Link>
            </div>
        )
    }

    let balance = _.reduce(table, (sum, t) => {
        return sum + t.movement;
    }, 0);

    return (
      <div className={style.container}>
        <div className={style.header}>
          <span className={style.balance}>BTC {balance}</span>
          <span className={style.balanceLabel}>Your balance</span>

          <Link className={style.goback} to="/">Change my address</Link>
        </div>

        <table className={style.table}>
            <thead>
                <tr className={style.thead}>
                    <td>date</td>
                    <td>hash</td>
                    <td>amount</td>
                </tr>
            </thead>
            <tbody>
                {(_.map(table, (row) => {
                    return <TabRow
                        date={moment(row.date).format('dddd') + ', ' + moment(row.date).format('LT')}
                        hash={row.hash}
                        key={row.hash}
                        amount={row.movement}
                    />
                }))}
            </tbody>

        </table>
      </div>
    );
  }
}

export default Table;
