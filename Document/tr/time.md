#Zaman ifade çevirimi

**Kullanım:**
```javascript
convert.Time(veri, kaynak, hedef)
```
----------


**Parametreler:**
> Veri => Çevrilmesini istediğimiz değer

> Kaynak => Değerin şu anki zaman birimi

> Hedef => Çıktı olarak almak istediğimiz zaman birimi


----------


**Kaynak ve hedef türleri:**

 - century => yüzyıl
 - minute => dakika
 - day => gün
 - week => hafta
 - millisecond => milisaniye
 - hour => saat
 - second  => saniye
 - year => yıl
  
----------

**Örnek kullanımlar:**

```javascript
convert.Time(1, "second", "millisecond");
=> 1000

convert.Time(1, "hour", "minute");
=> 60

convert.Time(1, "week", "year");
=> 0.019164955509925
```

