---
layout: tutorial
title:  "Kondisi If Else Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/kondisi-if-else-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/kondisi-python) untuk membaca versi terbaru tutorial ini.


### Kondisi If Else
Pengambilan keputusan (kondisi if else) tidak hanya digunakan untuk menentukan tindakan apa yang akan diambil sesuai dengan kondisi, tetapi juga digunakan untuk menentukan tindakan apa yang akan diambil/dijalankan jika kondisi tidak sesuai.

Pada python ada beberapa statement/kondisi diantaranya adalah if, else dan elif Kondisi if digunakan untuk mengeksekusi kode jika kondisi bernilai benar.

Kondisi if else adalah kondisi dimana jika pernyataan benar `True` maka kode dalam if akan dieksekusi, tetapi jika bernilai salah `False` maka akan mengeksekusi kode di dalam else.

Dibawah ini adalah contoh penggunaan kondisi if else pada Python

{% highlight python %}
#Kondisi if else adalah jika kondisi bernilai TRUE maka akan dieksekusi pada if, tetapi jika bernilai FALSE maka akan dieksekusi kode pada else

nilai = 3
#Jika pernyataan pada if bernilai TRUE maka if akan dieksekusi, tetapi jika FALSE kode pada else yang akan dieksekusi.
if(nilai > 7):
    print("Selamat Anda Lulus")
else:
    print("Maaf Anda Tidak Lulus")
{% endhighlight %}

Pada contoh diatas, jika program dijalankan maka akan mencetak string `"Maaf Anda Tidak Lulus"` karena pernyataan pada if bernilai `False`

<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/operator-python"><i class="fas fa-arrow-circle-left"></i>Operator Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/loop-python" class="hoverable">Loop Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
