---
layout: tutorial
title:  "Modul Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/modul-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/modul-python) untuk membaca versi terbaru tutorial ini.


Modul memungkinkan Anda mengatur kode Python secara logis. Mengelompokkan kode terkait ke dalam modul membuat kode lebih mudah dipahami dan digunakan. Modul adalah objek Python dengan atribut yang diberi nama yang bisa Anda bind dan dijadikan referensi.

Secara sederhana modul adalah file yang terdiri dari kode Python. Modul dapat mendefinisikan fungsi, kelas dan variabel. Modul juga bisa menyertakan kode yang bisa dijalankan "runable".

Berikut adalah contoh modul sederhana pada Python :


{% highlight python %}
def print_func( par ):
   print "Halo : ", par
   return
{% endhighlight %}

### Import Statement

Anda dapat menggunakan file sumber Python apapun sebagai modul dengan mengeksekusi pernyataan impor di file sumber Python lainnya. Impornya memiliki sintaks berikut.

Ketika interpreter menemukan sebuah pernyataan import, ia mengimpor modul jika modul tersebut ada di jalur pencarian. Jalur pencarian adalah daftar direktori yang ditafsirkan juru bahasa sebelum mengimpor modul. Misalnya, untuk mengimpor modul hello.py, Anda perlu meletakkan perintah berikut di bagian atas script.

{% highlight python %}
# Import module support
import support

# Anda bisa memanggil fungsi defined sebagai berikut
support.print_func("Andy")
{% endhighlight %}


<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/fungsi-python"><i class="fas fa-arrow-circle-left"></i>Fungsi Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/file-io-python" class="hoverable">File I/O Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
