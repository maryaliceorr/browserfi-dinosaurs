const monkeyButt = require('./dinosaurs');
const printToDom = require('./dom');

let dinoArray = [];

const whenDinosLoad = function () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  printToDom(dinoArray);
};

const badDinos = function () {
  console.error('shit broke');
};

const initializer = () => {
  monkeyButt(whenDinosLoad, badDinos);
};

const getDinos = () => {
  return dinoArray;
};

module.exports = {
  initializer,
  getDinos,
};
