#Time

**Usage:**
```javascript
convert.Time(data, source, target)
```
----------


**Parameters:**
> Data => Value to be converted

> Source => Current unit

> Target => Output unit


----------


**Source / Target Units:**

 - century => Century
 - minute => Minute
 - day => Day
 - week => Week
 - millisecond => Milliseconds
 - hour => Hour
 - second  => Second
 - year => Year

----------

**Examples:**

```javascript
convert.Time(1, "second", "millisecond");
=> 1000

convert.Time(1, "hour", "minute");
=> 60

convert.Time(1, "week", "year");
=> 0.019164955509925
```
