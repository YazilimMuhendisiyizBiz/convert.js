#Hız ifade çevirimi

**Kullanım:**
```javascript
convert.Speed(veri, kaynak, hedef)
```
----------


**Parametreler:**
> Veri => Çevrilmesini istediğimiz değer

> Kaynak => Değerin şu anki hız birimi

> Hedef => Çıktı olarak almak istediğimiz hız birimi


----------


**Kaynak ve hedef türleri:**

 - cm/s    => Santimetre / Saniye
 - ft/s      => Feet / Saniye
 - inch/s  => Inç / Saniye
 - km/h   => Kilometre / Saat
 - km/s   => Kilometre / Saniye
 - ma   => Mach Sayısı
 - kn   =>  Knot
 - m/s   => Metre / Saniye
 - mph   => Saatteki mil
 - mile/s   => Mil / Saniye
 - mm/s  => Milimetre / Saniye
 - s/light   => Saniye / Işık
 - s/sound  => Saniye / Ses

 
  
----------

**Örnek kullanımlar:**

```javascript
convert.Speed(1, "cm/s", "km/s");
=> 0.00001

convert.Speed(1, "ft/s", "cm/s");
=> 3.048

convert.Speed(1, "inch_s", "cm/s");
=>  2.54
```

