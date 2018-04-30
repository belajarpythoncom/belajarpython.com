---
layout: tutorial
title:  "Komentar Python"
date:   2015-05-01 11:23:30 +0000
categories:
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/instalasi-python) untuk membaca versi terbaru tutorial ini.

Komentar (comment) adalah kode di dalam script Python yang tidak dieksekusi atau tidak dijalankan mesin. Komentar hanya digunakan untuk menandai atau memberikan keterangan tertulis pada script.

Komentar biasa digunakan untuk membiarkan orang lain memahami apa yang dilakukan script. atau untuk mengingatkan kepada programmer sendiri jika suatu saat kembali mengedit script tersebut.

Untuk menggunakan komentar anda cukup menulis tanda pagar `#`, diikuti dengan komentar Anda.

Dibawah ini adalah contoh penggunaan komentar pada Python

{% highlight python %}
#Ini adalah komentar
# Tulisan ini tidak akan dieksekusi

#komentar dengan tanda pagar hanya bisa digunakan
#untuk
#satu
#baris

print("Hello World") #ini juga komentar

#print("Welcome")

# komentar bisa berisi spesial karakter !@#$%^&*(),./;'[]\

#mencetak nama
print("Budi")

#mencetak angka/integer
print(123)
{% endhighlight %}

Saat anda menjalankan script diatas, Anda akan melihat output berupa `Hello World`, `Budi` dan `123`, karena tulisan/komentar yang ditulis tidak dieksekusi.



<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/2015/05/hello-world.html"><i class="fas fa-arrow-circle-left"></i>Hello World Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/2015/05/tipe-data-python.html" class="hoverable">Tipe Data Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
