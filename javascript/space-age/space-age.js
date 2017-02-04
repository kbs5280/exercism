function SpaceAge(seconds) {
  this.seconds = seconds;
};

SpaceAge.prototype.onEarth = function() {
  return truncateFloat(3.16877086433912e-8 * this.seconds);
};

SpaceAge.prototype.onMercury = function() {
  return (1.3156984473270618e-7 * this.seconds);
};

SpaceAge.prototype.onVenus = function() {
  return (5.151711150867197e-8 * this.seconds);
};

SpaceAge.prototype.onMars = function() {
  return truncateFloat(1.6846424533248636e-8  * this.seconds);
};

SpaceAge.prototype.onJupiter = function() {
  return (2.6722065774198312e-9 * this.seconds);
};

SpaceAge.prototype.onSaturn = function() {
  return (1.0766666666666667e-9 * this.seconds);
};

SpaceAge.prototype.onUranus = function() {
  return (3.769325437432647e-10 * this.seconds);
};

SpaceAge.prototype.onNeptune = function() {
  return(1.9244534000829524e-10 * this.seconds);
};

function truncateFloat(result) {
  return Math.round((result) * 100) / 100;
};

module.exports = SpaceAge;
