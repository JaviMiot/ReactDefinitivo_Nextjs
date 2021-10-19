/* const chanchos = require('./importExport');
 */

import chanchos, { otrosChanchos, miFun, miFun2 } from './importExport.mjs';

chanchos.chanchosFelices.forEach((chancho) => {
  console.log(chancho);
});

chanchos.chanchosTristes.forEach((chancho) => {
  console.log(chancho);
});

miFun();
miFun2();
