function SpaceAge(seconds) {
  this.seconds = seconds;
};

SpaceAge.prototype.onEarth = function() {
  return truncateFloat(3.169e-8 * this.seconds);
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

function truncateFloat(result) {
  return Math.round((result) * 100) / 100;
};

module.exports = SpaceAge;
