convert.js
=====
![version badge](https://img.shields.io/badge/version-0.0.2-green.svg) [![GitHub issues](https://img.shields.io/github/issues/YazilimMuhendisiyizBiz/convert.js.svg)](https://github.com/YazilimMuhendisiyizBiz/convert.js/issues) [![GitHub forks](https://img.shields.io/github/forks/YazilimMuhendisiyizBiz/convert.js.svg)](https://github.com/YazilimMuhendisiyizBiz/convert.js/network) [![GitHub stars](https://img.shields.io/github/stars/YazilimMuhendisiyizBiz/convert.js.svg)](https://github.com/YazilimMuhendisiyizBiz/convert.js/stargazers) 

This is a simple conversion library

convert.Metric(data, source, target)
-----------------------

```javascript
convert.Metric(1, "cm", "m");
=> 0.01

convert.Metric(1, "hm", "inch");
=> 3937.0078740157

convert.Metric(1, "km", "mm");
=> 1000000

convert.Metric("string", "dam", "yard");
=> false
```

convert.DataUnits(data, source, target)
-----------------------

```javascript
convert.DataUnits(1, "mb", "kb");
=> 1024

convert.DataUnits(1, "byte", "tb");
=> 9.0949470177293e-13

convert.DataUnits("string", "gb", "pb");
=> false
```

convert.Temperature(data, source, target)
-----------------------

```javascript
convert.Temperature(1, "c", "k");
=> 274.15

convert.Temperature(1, "n", "c");
=> 3.0303030303030303

convert.Temperature(1, "f", "n");
=> -5.68323

convert.Temperature("string", "k", "f");
=> false
```

convert.Angle(data, source, target)
-----------------------

```javascript
convert.Angle(100,"rad","second");
=> 20626480.624709636

convert.Angle(1009,"deg","rad");
=> 0.000017297613993997318 

convert.Angle(1009,"grad","rad");
=> 4.804892776110367e-9

convert.Angle("string", "second", "grad");
=> false
```

convert.Time(data, source, target)
-----------------------

```javascript
convert.Time(1, "second", "millisecond");
=> 1000

convert.Time(1, "hour", "minute");
=> 60

convert.Time(1, "week", "year");
=> 0.019164955509925

convert.Time("string", "day", "century");
=> false
```

convert.Energy(data, source, target)
-----------------------

```javascript
convert.Energy(1, "j", "kj");
=> 0.001

convert.Energy(1, "kcal", "cal");
=> 1000

convert.Energy(1, "j", "cal");
=> 0.2388458966275

convert.Energy("string", "mj", "j");
=> false
```

convert.Astronomical(data, source, target)
-----------------------

```javascript
convert.Astronomical(1, "lightSecond", "mile");
=> 186282.39705

convert.Astronomical(1, "au96", "lightYear_julian");
=> 0.000015812507409

convert.Astronomical(1, "km", "lightDay");
=> 3.8606955463e-11

convert.Astronomical("string", "lightYear_traditional", "m");
=> false
```

convert.Speed(data, source, target)
-----------------------

```javascript
convert.Speed(19, "m/s", "km/s");
=> 0.019

convert.Speed(19, "s/light", "km/s");
=> 5696056.702

convert.Speed(19, "ft/s", "km/s");
=> 30.00057912

convert.Speed(19, "ma", "kn");
=> 12567.946004319654

convert.Speed("string", "ft/s", "km/s");
=> false
```

convert.Periodic(data)
-----------------------

```javascript
convert.Periodic(18);
=> "Ar"

convert.Periodic(10);
=> "Ne"

convert.Periodic(120);
=> "Ubn"

convert.Periodic(0);
=> "Please enter a value between 1 and 120!"

convert.Periodic("convertdotjs");
=> false

convert.Periodic(convertdotjs)
=> "ReferenceError: Can't find variable: convertdotjs"
```
