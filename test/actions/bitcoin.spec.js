import * as actions from '../../app/actions/bitcoin';
import nock from 'nock';
import { API_URL } from '../../app/utils/api';
import thunk from 'redux-thunk';


describe('actions', () => {
   afterEach(() => {
    nock.cleanAll()
  })

  it('searchStop should return SEARCH_START', () => {
      expect(actions.searchStart()).toEqual({
          type: actions.SEARCH_START
      });
  });

  it('searchStop should return SEARCH_STOP', () => {
      expect(actions.searchStop()).toEqual({
          type: actions.SEARCH_STOP
      });
  });

  it('changeSearch should return CHANGE_SEARCH', () => {
      expect(actions.changeSearch("value")).toEqual({
          type: actions.CHANGE_SEARCH,
          value: "value"
      });
  });

  it('transactionReceved should return TRANSACTION_RECEIVED', () => {
      expect(actions.transactionsReceived("hash", [{}])).toEqual({
          type: actions.TRANSACTIONS_RECEIVED,
          txs: [{}],
          addr: "hash"
      });
  });

  it('should searchBitcoin return dispatch and dispatch searchStart, transactionReceived and searchStop', () => {
    nock(API_URL)
      .get('/addresses/hash/transactions?noToken=true')
      .reply(200, { body: { data: {txs: []} } })

    const dispatch = jest.fn();
    const thunk = actions.searchBitcoin("hash");
    thunk(dispatch);

    setTimeout(() => {
        expect(dispatch.mock.calls[0][0]).toEqual({type: actions.SEARCH_START});
        expect(dispatch.mock.calls[1][0]).toEqual({type: actions.TRANSACTION_RECEIVED, txs: []});
        expect(dispatch.mock.calls[2][0]).toEqual({type: actions.SEARCH_STOP});
    })

  });
});
