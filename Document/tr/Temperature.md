#Sıcaklık ifade çevirimi

**Kullanım:**
```javascript
convert.Temperature(veri, kaynak, hedef)
```
----------


**Parametreler:**
> Veri => Çevrilmesini istediğimiz değer

> Kaynak => Değerin şu anki sıcaklık birimi

> Hedef => Çıktı olarak almak istediğimiz sıcaklık birimi


----------


**Kaynak ve hedef türleri:**

 - c => Celsius
 - f => Fahrenhayt
 - k => Kelvin
 - n => Newton

 
  
----------

**Örnek kullanımlar:**

```javascript
convert.Temperature(1, "c", "k");
=>  274.15

convert.Temperature(1, "f", "n");
=> -5,6832

convert.Temperature(1, "n", "c");
=>  3,0303
```

