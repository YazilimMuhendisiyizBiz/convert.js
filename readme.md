convert.js
=====
[![ReviewNinja](https://app.review.ninja/78055117/badge)](https://app.review.ninja/YazilimMuhendisiyizBiz/convert.js)

This is a simple conversion library

convert.metric(data, source, target)
-----------------------

```javascript
convert.metric(1, "cm", "m");
=> 0.01

convert.metric(1, "hm", "inch");
=> 3937.0078740157

convert.metric(1, "km", "mm");
=> 1000000

convert.metric("string", "dam", "yard");
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

<<<<<<< HEAD
convert.Angle(data, source, target)
-----------------------

```javascript
convert.Angle(100,"rad","second");
=> 20626480.624709636

convert.Angle(1009,"deg","rad");
=> 0.000017297613993997318 

convert.Angle(1009,"grad","rad");
=> 4.804892776110367e-9

convert.Temperature("string", "k", "f");
=> false
```

=======
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
>>>>>>> 0d924b6075c519749aaa5a836f0de0dcac9d40c8
