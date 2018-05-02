---
layout: tutorial
title:  "Variabel Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/variabel-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/variabel-python) untuk membaca versi terbaru tutorial ini.

Variabel adalah lokasi memori yang dicadangkan untuk menyimpan nilai-nilai. Ini berarti bahwa ketika Anda membuat sebuah variabel Anda memesan beberapa ruang di memori. Variabel menyimpan data yang dilakukan selama program dieksekusi, yang natinya isi dari variabel tersebut dapat diubah oleh operasi - operasi tertentu pada program yang menggunakan variabel.

Variabel dapat menyimpan berbagai macam tipe data. Di dalam pemrograman Python, variabel mempunyai sifat yang dinamis, artinya variabel Python tidak perlu didekralasikan tipe data tertentu dan variabel Python dapat diubah saat program dijalankan.


Penulisan variabel Python sendiri juga memiliki aturan tertentu, yaitu :
1. Karakter pertama harus berupa huruf atau garis bawah/underscore `_`
2. Karakter selanjutnya dapat berupa huruf, garis bawah/underscore `_` atau angka
3. Karakter pada nama variabel bersifat sensitif (case-sensitif). Artinya huruf kecil dan huruf besar dibedakan. Sebagai contoh, variabel `namaDepan` dan `namadepan` adalah variabel yang berbeda.

Untuk mulai membuat variabel di Python caranya sangat mudah, Anda cukup menuliskan variabel lalu mengisinya dengan suatu nilai dengan cara menambahkan tanda sama dengan `=` diikuti dengan nilai yang ingin dimasukan.

Dibawah ini adalah contoh penggunaan variabel dalam bahasa pemrograman Python



{% highlight python %}
#proses memasukan data ke dalam variabel
nama = "John Doe"
#proses mencetak variabel
print(nama)

#nilai dan tipe data dalam variabel  dapat diubah
umur = 20               #nilai awal
print(umur)             #mencetak nilai umur
type(umur)              #mengecek tipe data umur
umur = "dua puluh satu" #nilai setelah diubah
print(umur)             #mencetak nilai umur
type(umur)              #mengecek tipe data umur

namaDepan = "Budi"
namaBelakang = "Susanto"
nama = namaDepan + " " + namaBelakang
umur = 22
hobi = "Berenang"
print("Biodata\n", nama, "\n", umur, "\n", hobi)

#contoh variabel lainya
inivariabel = "Halo"
ini_juga_variabel = "Hai"
_inivariabeljuga = "Hi"
inivariabel222 = "Bye" 

panjang = 10
lebar = 5
luas = panjang * lebar
print(luas)
{% endhighlight %}


<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/tipe-data-python"><i class="fas fa-arrow-circle-left"></i>Tipe Data Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/operator-python" class="hoverable">Operator Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
