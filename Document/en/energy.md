#Energy Expressions

**Usage:**
```javascript
convert.Energy(data, source, target)
```
----------


**Parameters:**
> Data => Value to be converted

> Source => Current unit

> Target => Output unit


----------

**Source / Target Units:**

 - kj   => Kilojoules
 - j    => Joules
 - mj   => Megajoules
 - cal  => Calories
 - kcal => Kilocalories


----------

**Examples:**

```javascript
convert.Energy(1, "j", "kj");
=> 0.001

convert.Energy(1, "kcal", "cal");
=> 1000

convert.Energy(1, "j", "cal");
=> 0.2388458966275
```
