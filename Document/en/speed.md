#Speed

**Usage:**
```javascript
convert.Speed(data, source, target)
```
----------


**Parameters:**
> Data => Value to be converted

> Source => Current unit

> Target => Output unit


----------


**Source / Target Units**

 - cm/s    => Centimeter/Second
 - ft/s      => Feet / Second
 - inch/s  => Inch / Second
 - km/h   => Kilometer / Hour
 - km/s   => Kilometer / Second
 - ma   => Mach Number
 - kn   =>  Knot
 - m/s   => Meter / Second
 - mph   => Mile per Hour
 - mile/s   => Mile / Second
 - mm/s  => Millimeter / Second
 - s/light   => Second / Light Speed
 - s/sound  => Second / Sound Speed



----------

**Examples:**

```javascript
convert.Speed(1, "cm/s", "km/s");
=> 0,00001

convert.Speed(1, "ft/s", "cm/s");
=> 3,048

convert.Speed(1, "inch_s", "cm/s");
=>  2,54
```
