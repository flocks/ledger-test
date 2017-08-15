// @flow
import type { counterStateType } from '../reducers/counter';
import axios from 'axios';
import { getBitcoinAddressApi } from '../utils/api';

type actionType = {
  +type: string
};

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_STOP = 'SEARCH_STOP';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: (action: actionType) => void, getState: () => counterStateType) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: (action: actionType) => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

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

export function searchBitcoin(address: string) {
    return (dispath: (action: actionType) => void) => {
        dispatch(searchStart());
        axios.get(getBitcoinAddressApi(address));
        setTimeout(() => {
          dispatch(increment());
        }, delay);

    };
}
