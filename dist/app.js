(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./dinosaurs":2}],2:[function(require,module,exports){
const loadDinos = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/dinosaurs.json');
  myRequest.send();
};

module.exports = loadDinos;

},{}],3:[function(require,module,exports){
const data = require('./data');

data.initializer();

},{"./data":1}]},{},[3]);
