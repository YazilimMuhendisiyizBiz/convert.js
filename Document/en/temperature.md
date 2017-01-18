#Temperature

**Usage:**
```javascript
convert.Temperature(data, source, target)
```
----------


**Parameters:**
> Data => Value to be converted

> Source => Current unit

> Target => Output unit


----------


**Target / Source:**

 - c => Celsius
 - f => Fahrenheit
 - k => Kelvin
 - n => Newton



----------

**Examples:**

```javascript
convert.Temperature(1, "c", "k");
=>  274.15

convert.Temperature(1, "f", "n");
=> -5,6832

convert.Temperature(1, "n", "c");
=>  3,0303
```
