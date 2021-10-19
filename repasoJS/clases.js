//* Expresion de clase cuando asignamos
//* una clase a una variable

//! Clases declaradas con CLASS
//! NO TIENEN HOISTING
const Rectangulo = class R {};

//* Clases anonimas
const RectanguloAnonima = class {};

//* Declarar clases
class RectanguloDeclarada {}

//? hoisting
//* Y esto es cuando tomamos variables definidas
//* con var y funciones definidas con funtion
//* y las lleva al comienzo del archivo
//*

//console.log(Cuadrado);

function Cuadrado() {}

//console.log(RectanguloDeclarada, Cuadrado);

const r = new Rectangulo();

class Chancho {
  propiedad = 'mi propiedad';

  #hambre;

  static estatico = 'valor estatico'

  constructor(estado = 'feliz', hambre = false) {
    this.estado = estado;
    this.#hambre = hambre;
  }

  hablar() {
    console.log(
      `Soy un chancho ${this.estado} ${
        this.#hambre ? 'y tengo hambre' : 'y ya comi'
      }`
    );
  }

  static comer() {
    console.log(`estoy comiendo - ${this.estatico}`);
  }
}

Chancho.comer()
const feliz = new Chancho('feliz', true);
feliz.hablar();
feliz.estado = 'triste';
//feliz.hablar();

//console.log(feliz.__proto__.hablar);
