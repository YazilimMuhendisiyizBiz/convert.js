#Metrik ifade çevirimi

**Kullanım:**
```javascript
convert.Metric(veri, kaynak, hedef)
```
----------


**Parametreler:**
> Veri => Çevrilmesini istediğimiz değer
> Kaynak => Hangi uzunluk birimini çevireceğiz
> Hedef => Çıktı olarak hangi uzunluk birimine çevireceğiz


----------


**Kaynak ve hedef türleri: **

 - cm => Santimetre
 - km => Kilometre
 - hm => Hektometre
 - m => Metre
 - mm => Milimetre
 - inch => İnç
 - feet  => fit
 - yard => yarda
  
----------

**Örnek kullanımlar:**

```javascript
convert.Metric(1, "cm", "m");
=> 0.01

convert.Metric(1, "hm", "inch");
=> 3937.0078740157

convert.Metric(1, "km", "mm");
=> 1000000
```


