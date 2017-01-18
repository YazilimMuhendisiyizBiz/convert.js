#Metric Conversion

**Usage:**
```javascript
convert.Metric(data, source, target)
```
----------


**Parameters:**
> Data => Value to be converted

> Source => Current unit

> Target => Output unit


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
