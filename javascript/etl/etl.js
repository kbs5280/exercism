function Etl() {

};

Etl.prototype.transform = function(old) {
  newObj = {}
  Object.keys(old).forEach(function(key) {
    old[key].forEach(function(letter) {
      newObj[letter.toLowerCase()] = parseInt(key);
    })
  })
  return newObj
};

module.exports = Etl;
