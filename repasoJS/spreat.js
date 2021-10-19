const fn = (a, b, c) => console.log(a + b + c);

const arr = [1, 2, 5];

fn(...arr);

const arr1 = [6, 7];

console.log([...arr, ...arr1, 1, 5]);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 'chanchito feliz' };

const obj3 = { ...obj1 };
console.log(obj3);
obj1.a = 4;
console.log(obj3);

const obj4 = { ...obj1, ...obj2}

console.log(obj4);

const obj5 = {
    ...obj1,
    loading: true,
    data:{
        name:'valor'
    }
}

console.log(obj5)
