// @flow
import type { counterStateType } from '../reducers/counter';
import { getBitcoin } from '../utils/api';

type actionType = {
  +type: string
};

export const SEARCH_START = 'SEARCH_START';
export const SEARCH_STOP = 'SEARCH_STOP';
export const CHANGE_SEARCH = 'CHANGE_SEARCH';
export const TRANSACTIONS_RECEIVED = 'TRANSACTIONS_RECEIVED';

export function searchStart() {
    return {
      type: SEARCH_START
    }
}

export function searchStop() {
    return {
      type: SEARCH_STOP
    }
}

export function transactionsReceived(addr: string, txs: array) {
    return {
      type: TRANSACTIONS_RECEIVED,
      txs: txs,
      addr: addr
    }
}

export function changeSearch(value) {
    return {
        type: CHANGE_SEARCH,
        value: value
    }
}

export function searchBitcoin(address: string) {
    return (dispatch: (action: actionType) => void) => {
        dispatch(searchStart());
        getBitcoin(address).then((result) => {
            dispatch(transactionsReceived(address, result.data.txs))
            dispatch(searchStop());
        })
        .catch((err) => {
            dispatch(searchStop());
        })
    };
}
