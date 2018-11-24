import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);
// window.web3 is the copy of web3 coming from meta mask library,
// currentProvider -> the provider that is installed or given to that web3.
export default web3;
