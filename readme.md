convert.js
=====
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