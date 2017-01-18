#Astronomical Expression Conversion

**Usage:**
```javascript
convert.Astronomical(data, source, target)
```
----------


**Parameters:**
> Data => Value to be converted

> Source => Current unit

> Target => Output unit


----------

**Source / Target Units:**

 - au96 => Astronomical unit (1996)
 - km => Kilometers
 - lightsecond => Light seconds
 - lightminute => Light minutes
 - lighthour => Light hours
 - lightday => Light days
 - lightyear_julian => Light years (julian)
 - lightyear_tropical => Light years (tropical)
 - parsec => Parsec
 - m => Meters
 - mile => Miles


----------

**Examples:**

```javascript
convert.Astronomical(1, "lightSecond", "mile");
=> 186282.39705

convert.Astronomical(1, "au96", "lightYear_julian");
=> 0.000015812507409

convert.Astronomical(1, "km", "lightDay");
=> 3.8606955463e-11
```
