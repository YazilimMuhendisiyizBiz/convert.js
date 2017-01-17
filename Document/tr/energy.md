#Enerji ifade çevirimi

**Kullanım:**
```javascript
convert.Energy(veri, kaynak, hedef)
```
----------


**Parametreler:**
> Veri => Çevrilmesini istediğimiz değer

> Kaynak => Değerin şu anki enerji birimi

> Hedef => Çıktı olarak almak istediğimiz enerji birimi


----------

**Kaynak ve hedef türleri:**

 - kj   => Kilojoule
 - j    => Joule
 - mj   => Megajoule
 - cal  => Kalori
 - kcal => Kilokalori
 
  
----------

**Örnek kullanımlar:**

```javascript
convert.Energy(1, "j", "kj");
=> 0.001

convert.Energy(1, "kcal", "cal");
=> 1000

convert.Energy(1, "j", "cal");
=> 0.2388458966275
```

