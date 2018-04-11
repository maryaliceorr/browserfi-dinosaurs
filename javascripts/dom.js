const domEvents = require('./events');

const outputDiv = document.getElementById('dinos');

const domString = (dinos) => {
  let strang = '';
  dinos.forEach((dino) => {
    strang += `<h2>${dino.type}</h2>`;
  });
  return strang;
};

const printToDom = (dinoArray) => {
  outputDiv.innerHTML = domString(dinoArray);
  domEvents();
};

module.exports = printToDom;
