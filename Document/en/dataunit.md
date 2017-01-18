#Data Units

**Usage:**
```javascript
convert.DataUnits(data, source, target)
```
----------


**Parameters:**
> Data => Value to be converted

> Source => Current unit

> Target => Output unit


----------


**Source / Target Units:**

 - byte => Bytes
 - kb => Kilobytes
 - mb => Megabytes
 - gb => Gigabytes
 - pb => Petabytes


----------

**Examples:**

```javascript
convert.DataUnits(1, "gb", "mb");
=> 1024

convert.DataUnits(1, "mb", "kb");
=> 1024

convert.DataUnits(1, "pb", "gb");
=> 1048576
```
