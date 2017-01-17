#Astronomik ifade çevirimi

**Kullanım:**
```javascript
convert.Astronomical(veri, kaynak, hedef)
```
----------


**Parametreler:**
> Veri => Çevrilmesini istediğimiz değer

> Kaynak => Değerin şu anki astronomik birim

> Hedef => Çıktı olarak almak istediğimiz astronomik birim


----------

**Kaynak ve hedef türleri:**

 - au96 => Astronomik birim (1996)
 - km => Kilometre
 - lightsecond => Işık saniyesi
 - lightminute => Işık dakikası
 - lighthour => Işık saati
 - lightday => Işık günü
 - lightyear_julian => Işık yılı (julian)
 - lightyear_tropical => Işık yılı (tropical)
 - parsec => Parsek
 - m => Metre
 - mile => Mil
 
  
----------

**Örnek kullanımlar:**

```javascript
convert.Astronomical(1, "lightSecond", "mile");
=> 186282.39705

convert.Astronomical(1, "au96", "lightYear_julian");
=> 0.000015812507409

convert.Astronomical(1, "km", "lightDay");
=> 3.8606955463e-11
```

