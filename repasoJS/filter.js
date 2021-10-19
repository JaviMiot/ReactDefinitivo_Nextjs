const arr = [1, 2, 3, 4];

r = arr.filter((element, index) => {
  console.log(index);
  return element % 2 === 0;
});

console.log(r);
