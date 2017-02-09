#Convert Multiple Lines to Javascript Array

**Usage:**
```javascript
convert.ObjectToArray(Data, Divider)
```
----------


**Parameters:**
> Data => Data to be converted

> Divider => Divider character


----------


**Description**

 Multiple lines will be entered in first argument(Data) and converted to a Javascript array format. 
If you specify a divider in second argument(Divider), it will be formatted according to the divider.
convert.ObjectToArray(Data, Divider)

----------

**Examples:**

```javascript
convert.ObjectToArray("hello\nworld", "\n");
=> ["hello", "world"] 

convert.ObjectToArray("hello, world", ",");
=> ["hello", "world"] 

convert.ObjectToArray("hello", "");
=> ["h", "e", "l", "l", "o"] 
```
