---
layout: tutorial
title:  "File I/O Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/input-output-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/file-io-python) untuk membaca versi terbaru tutorial ini.



Disini kita akan belajar semua fungsi dasar I/O yang tersedia pada Python 3. Jika Anda ingin mempelajari lebih detail, lihat dokumentasi standar Python.

### Print

Cara termudah untuk menghasilkan output adalah dengan menggunakan pernyataan cetak di mana Anda bisa melewati nol atau lebih banyak ekspresi yang dipisahkan dengan koma. Fungsi ini mengubah ekspresi yang Anda berikan ke string dan menulis hasilnya ke output standar sebagai berikut :

{% highlight python %}
print ("Python adalah bahasa pemrograman yang hebat")
{% endhighlight %}

### Membaca Input Keyboard

Python 2 memiliki dua fungsi built-in untuk membaca data dari input standar, yang secara default berasal dari keyboard. Fungsi ini adalah input() dan raw_input()

Dengan Python 3, fungsi raw_input() tidak digunakan lagi. Selain itu, input() berfungsi membaca data dari keyboard sebagai string, terlepas dari apakah itu tertutup dengan tanda kutip ('' atau '") atau tidak.

### Fungsi Input Python

Fungsi input([prompt]) setara dengan raw_input, kecuali mengasumsikan bahwa input adalah ekspresi Python yang valid dan mengembalikan hasil yang dievaluasi ke Anda.


{% highlight python %}
>>> x = input("something:")
something:10

>>> x
'10'

>>> x = input("something:")
something:'10' #entered data treated as string with or without ''

>>> x
"'10'"
{% endhighlight %}




<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/modul-python"><i class="fas fa-arrow-circle-left"></i>Modul Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/exception-python" class="hoverable">Exception Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
