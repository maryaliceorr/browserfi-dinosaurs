const loadDinos = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '../db/dinosaurs.json');
  myRequest.send();
};

module.exports = loadDinos;
