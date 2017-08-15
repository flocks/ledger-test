// @flow
import React, { Component } from 'react';
import { longString } from '../utils/string.js';
import style from './TabRow.css';
import classNames from 'classnames';


class TabRow extends Component {
  props: {
    date: string,
    hash: string,
    amount: number
  };

  render() {
    const { date, hash, amount } = this.props;
    const devise = (amount) => {
        let dev = '-BTC ';
        if (amount >= 0) {
            dev =  '+BTC ' 
        }
        return dev + Math.abs(amount);
    }
    return (
      <tr className={style.row}>
        <td className={style.date}>{date}</td>
        <td className={style.hash}>{longString(hash, 30)}</td>
        <td className={classNames({[style.amount]: true, [style.positiveMovement]: (amount >= 0)})}>{devise(amount)}</td>
      </tr>
    );
  }
}

export default TabRow;
