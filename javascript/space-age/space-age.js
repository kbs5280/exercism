function SpaceAge(seconds) {
  this.seconds = seconds;
};

SpaceAge.prototype.onEarth = function() {
  return Math.round((3.169e-8 * this.seconds) * 100) / 100;
};

SpaceAge.prototype.onMercury = function() {
  return (1.3156984473270618e-7 * this.seconds);
};

SpaceAge.prototype.onVenus = function() {
  return (5.151711150867197e-8 * this.seconds);
};

module.exports = SpaceAge;
