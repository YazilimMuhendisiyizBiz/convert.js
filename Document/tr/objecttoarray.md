#Birden çok satırı Javascript Array'a Dönüştür

**Kullanım:**
```javascript
convert.ObjectToArray(Veri, Ayırıcı)
```
----------


**Parametreler:**
> Veri => Çevrilecek veri

> Divider => Ayırıcı karakter


----------


**Açıklama**

 Birden fazla satır, ilk bağımsız değişkene (Data) girilir ve bir Javascript dizi biçimine dönüştürülür.
İkinci bağımsız değişkende (Bölme) bir bölücü belirtirseniz bölücüye göre biçimlendirilir.
convert.ObjectToArray(Veri, Ayırıcı)

----------

**Örnekler:**

```javascript
convert.ObjectToArray("merhaba\ndünya", "\n");
=> ["merhaba", "dünya"] 

convert.ObjectToArray("merhaba, dünya", ",");
=> ["merhaba", "dünya"] 

convert.ObjectToArray("merhaba", "");
=> ["m", "e", "r", "h", "a", "b", "a"] 
```
