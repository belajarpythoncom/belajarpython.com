---
layout: tutorial
title:  "Fungsi Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/fungsi-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/fungsi-python) untuk membaca versi terbaru tutorial ini.



Fungsi adalah blok kode terorganisir dan dapat digunakan kembali yang digunakan untuk melakukan sebuah tindakan/action. Fungsi memberikan modularitas yang lebih baik untuk aplikasi Anda dan tingkat penggunaan kode yang tinggi.

### Mendefinisikan Fungsi Python

Anda dapat menentukan fungsi untuk menyediakan fungsionalitas yang dibutuhkan. Berikut adalah aturan sederhana untuk mendefinisikan fungsi dengan Python.

- Fungsi blok dimulai dengan def kata kunci diikuti oleh nama fungsi dan tanda kurung (()).
- Setiap parameter masukan atau argumen harus ditempatkan di dalam tanda kurung ini. Anda juga dapat menentukan parameter di dalam tanda kurung ini.
- Pernyataan pertama dari sebuah fungsi dapat berupa pernyataan opsional - string dokumentasi fungsi atau docstring.
- Blok kode dalam setiap fungsi dimulai dengan titik dua (:) dan indentasi.
- Pernyataan kembali [ekspresi] keluar dari sebuah fungsi, secara opsional menyampaikan kembali ekspresi ke pemanggil. Pernyataan pengembalian tanpa argumen sama dengan return None.

Contoh fungsi

{% highlight python %}
def printme( str ):
   "This prints a passed string into this function"
   print (str)
   return
{% endhighlight %}


<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/tanggal-waktu-python"><i class="fas fa-arrow-circle-left"></i>Tanggal & Waktu Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/modul-python" class="hoverable">Modul Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
