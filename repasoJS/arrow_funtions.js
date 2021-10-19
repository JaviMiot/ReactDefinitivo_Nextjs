//* funciones que se declaran con las palabra reservada
//? funtion

function Fn() {
  /* con la palabra reservada de new 
  se crea un objeto y da las propiedades.
    {prop: 'propiedad}
    this
 */
  this.prop = 'propiedad';
  return 'chanchito feliz';
}

Fn.prototype.lala = function funcionPrototipo() {};

const r = new Fn();

console.log(r.__proto__);

console.log(this);

const fatFn = () => {
  //* no tienen contesto de this
  const obj = {};
  this.prop = 'propiedad1';
};

const r1 = fatFn();
console.log(this);

/*  ARROW FUNCTIONS
1. No tiene un contesto de this
2. Tienen un return implicito
 */

const fnR = () => 2; //? Sin las llaves da un return implicito

console.log(fnR());
