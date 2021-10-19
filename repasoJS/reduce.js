const arr = [1, 2, 13, 4, 5];

const getMax = (a, b) => {
  return Math.max(a, b);
};
const r = arr.reduce((acumulador, element) => acumulador + element);
const max = arr.reduce(getMax);

console.log(r);
console.log(max);

const users = [
  { id: 1, name: 'Javi' },
  { id: 2, name: 'Jose' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Oscar' },
];

const r1 = users.reduce((acc, el) => {
  if (el.id < 2) {
    return acc;
  }
  return acc.concat(el);
}, []);

console.log(r1);