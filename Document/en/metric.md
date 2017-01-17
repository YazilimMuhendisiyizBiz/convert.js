#Metric Conversion

**Usage:**
```javascript
convert.Metric(data, source, target)
```
----------



**Parameters:**
> Data => The Value that will converte

> Source => The actual unit of value

> Target => The unit that will be converted


----------



**The Types of Source and Target:**

 - cm => cantimeters
 - km => kilometers
 - hm => hectometers
 - m => meters
 - mm => milimeters
 - inch => inch
 - feet  => feet
 - yard => yard
  
----------


**The Sample of Usage:**

```javascript
convert.Metric(1, "cm", "m");
=> 0.01

convert.Metric(1, "hm", "inch");
=> 3937.0078740157

convert.Metric(1, "km", "mm");
=> 1000000
```


