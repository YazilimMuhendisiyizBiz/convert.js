#Veri birimi ifade çevirimi

**Kullanım:**
```javascript
convert.DataUnits(veri, kaynak, hedef)
```
----------


**Parametreler:**
> Veri => Çevrilmesini istediğimiz değer

> Kaynak => Değerin şu anki veri birimi

> Hedef => Çıktı olarak almak istediğimiz veri birimi


----------


**Kaynak ve hedef türleri:**

 - byte => Bayt
 - kb => Kilobayt
 - mb => Megabayt
 - gb => Gigabayt
 - pb => Petabayt
 
  
----------

**Örnek kullanımlar:**

```javascript
convert.DataUnits(1, "gb", "mb");
=> 1024

convert.DataUnits(1, "mb", "kb");
=> 1024

convert.Time(1, "pb", "gb");
=> 1048576
```

