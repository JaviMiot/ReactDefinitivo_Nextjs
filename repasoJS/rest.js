//! REST OPERATOR

const rest = (a, ...argumentos) => {
  console.log(argumentos);
};

rest(1, 2, 3);

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const { a, b, ...restObj } = obj;
console.log(a, b, restObj);

const arr = [1, 2, 3, 4, 5];

const [a1, b1, ...arrDemas] = arr;
console.log(a1, b1, arrDemas);

const useState = () => ['valor', () => {}];

const [valor, setValor] = useState();
console.log(valor, setValor);
