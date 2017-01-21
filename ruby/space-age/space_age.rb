class SpaceAge
  attr_reader :seconds

  def initialize(seconds)
    @seconds = seconds
  end

  def on_earth
    seconds * 3.168666666666667e-08
  end

  def on_mercury
    seconds * 1.3156984473270618e-07
  end

  def on_venus
    seconds * 5.151711150867197e-08
  end

  def on_mars
    seconds * 1.6846424533248636e-08
  end

  def on_jupiter
    seconds * 2.6722065774198312e-09
  end

  def on_saturn
    seconds * 1.0766666666666667e-09
  end

  def on_uranus
    seconds * 3.769325437432647e-10
  end

  def on_neptune
    seconds * 1.9244534000829524e-10
  end
end
