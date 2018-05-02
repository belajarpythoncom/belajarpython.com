---
layout: tutorial
title:  "Kondisi If Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/kondisi-if-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/kondisi-python) untuk membaca versi terbaru tutorial ini.

### Kondisi If

Pengambilan keputusan (kondisi if) digunakan untuk mengantisipasi kondisi yang terjadi saat jalanya program dan menentukan tindakan apa yang akan diambil sesuai dengan kondisi.

Pada python ada beberapa statement/kondisi diantaranya adalah `if`, `else` dan `elif` Kondisi `if` digunakan untuk mengeksekusi kode jika kondisi bernilai benar `True`.

Jika kondisi bernilai salah `False` maka statement/kondisi `if` tidak akan di-eksekusi.

Dibawah ini adalah contoh penggunaan kondisi if pada Python

{% highlight python %}
#Kondisi if adalah kondisi yang akan dieksekusi oleh program jika bernilai benar atau TRUE

nilai = 9

#jika kondisi benar/TRUE maka program akan mengeksekusi perintah dibawahnya
if(nilai > 7):
    print("Selamat Anda Lulus")

#jika kondisi salah/FALSE maka program tidak akan mengeksekusi perintah dibawahnya
if(nilai > 10):
    print("Selamat Anda Lulus")
{% endhighlight %}

Dari contoh diatas, jika program dijalankan maka akan mencetak string `"Selamat Anda Lulus Ujian"` sebanyak 1 kali yaitu pada if pertama. Di if kedua statement bernilai salah, jadi perintah `print("Selamat Anda Lulus")` tidak akan dieksekusi.

---
> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/tutorials/kondisi-if-else-python.md)

<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/operator-python"><i class="fas fa-arrow-circle-left"></i>Operator Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/loop-python" class="hoverable">Loop Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
