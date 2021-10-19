const mapped = [1, 2, 3, 4, 5];

const r = mapped.map((element) => `<h1>${element}</h1>`);

console.log(r);

const users = [
  { id: 1, name: 'Javi' },
  { id: 2, name: 'Jose' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Oscar' },
];

const usersMaps = users.map((user) => `<h1>${user.name}</h1>`);
console.log(usersMaps);
