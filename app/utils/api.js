export const API_URL = 'https://api.ledgerwallet.com/blockchain/v2/btc';
import axios from 'axios';

export function getBitcoin(address: string) {
    const url = API_URL + '/addresses/' + address + '/transactions?noToken=true';
    return axios.get(url);

}
