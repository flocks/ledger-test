import axios from 'axios';

export const API_URL = 'https://api.ledgerwallet.com/blockchain/v2/btc';

export function getBitcoin(address: string) {
    const url = API_URL + '/addresses/' + address + '/transactions?noToken=true';
    return axios.get(url);

}
