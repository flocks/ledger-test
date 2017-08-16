import bitcoins from '../../app/reducers/bitcoins';
import * as actions from '../../app/actions/bitcoin';

describe('reducers', () => {
  describe('bitcoins', () => {
    it('should set loading to true', () => {
      expect(bitcoins(undefined, {type: actions.SEARCH_START})).toEqual({
          bitcoins: {},
          search: '',
          loading: true
      })
    });

    it('should set loading to false', () => {
      const state = {
          bitcoins: {},
          search: 'search',
          loading: true
      }
      expect(bitcoins(state, {type: actions.SEARCH_STOP})).toEqual({
          bitcoins: {},
          search: 'search',
          loading: false
      })
    });

    it('should set the search field', () => {
      const state = {
          bitcoins: {},
          search: '',
          loading: false
      }

      expect(bitcoins(state, {type: actions.CHANGE_SEARCH, value: 'test'})).toEqual({
          bitcoins: {},
          search: 'test',
          loading: false
      })
    });

    it('should update the transactions when received', () => {
      const state = {
          bitcoins: {},
          search: 'hash',
          loading: true
      }

      const action = {
          type: actions.TRANSACTIONS_RECEIVED,
          addr: 'hash',
          txs: [{'hash': 'test', received_at: 'date', outputs: [], inputs: []}]
      }

      expect(bitcoins(state, action)).toEqual({
          bitcoins: {
            'hash': [{hash: 'test', date: 'date', movement: 0}]
          },
          search: 'hash',
          loading: true
      })
    });

  });
});
