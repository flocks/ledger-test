// @flow
import _ from 'lodash';
import { SEARCH_START, CHANGE_SEARCH, SEARCH_STOP, TRANSACTIONS_RECEIVED } from '../actions/bitcoin';

export type bitcoinsStateType = {
  +bitcoins: object,
  +search: string,
  +loading: bool
};

type actionType = {
  +type: string,
  +txs: array
};

const defaultState = {
    bitcoins: {},
    loading: false,
    search: ''
};

function computeAmount(addr: string, outputs: array, inputs: array) {
    let sumOutputs = _.reduce(outputs, (sum, o) => {
        if (o.address === addr) {
            return sum + o.value;
        }

        return sum + 0;
    }, 0);

    let sumInputs = _.reduce(inputs, (sum, o) => {
        if (o.address === addr) {
            return sum + o.value;
        }

        return sum + 0;
    }, 0);

    let result = (sumOutputs - sumInputs) / 100000000;
    
    return result;
}

export default function bitcoins(state: bitcoinsStateType = defaultState, action: actionType) {
  switch (action.type) {
    case SEARCH_START:
      return {...state, loading:true};
    case SEARCH_STOP:
      return {...state, loading:false};
    case TRANSACTIONS_RECEIVED:
      var transactions = [];
      _.each(action.txs, (transaction) => {
          let line = {
              hash: transaction.hash,
              date: transaction.received_at,
              movement: computeAmount(action.addr, transaction.outputs, transaction.inputs)
          };

          transactions.push(line);
      });

      var copy = _.cloneDeep(state.bitcoins);
      copy[action.addr] = transactions;

      return {...state, bitcoins: copy };
    case CHANGE_SEARCH:
      return {...state, search: action.value};
    default:
      return state;
  }
}
