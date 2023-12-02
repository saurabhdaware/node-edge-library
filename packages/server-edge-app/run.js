import { getData } from 'server-edge-library';

// Same code outputs 2 different things 
// when called with `node --conditions=server run.js` and `node --conditions=edge run.js`
console.log(getData());