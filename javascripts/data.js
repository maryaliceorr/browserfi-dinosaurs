const monkeyButt = require('./dinosaurs');

let dinoArray = [];

const whenDinosLoad = function () {
  dinoArray = JSON.parse(this.responseText).dinosaurs;
  console.log('dinoArray', dinoArray);
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
