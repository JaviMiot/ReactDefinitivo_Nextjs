const chanchosFelices = ['chancho1', 'chancho2', 'chancho3'];
const chanchosTristes = ['chanchoTriste1', 'chanchoTriste2', 'chanchoTriste3'];
const otrosChanchos = ['Otros'];
/* module.exports = {
  chanchosFelices,
  chanchosTristes,
};
 */

const miFun = () => {
  console.log('es una funcion');
};

function miFun2() {
  console.log('soy la funcion 2');
}

export { otrosChanchos, miFun, miFun2 };
export default { chanchosFelices, chanchosTristes };
