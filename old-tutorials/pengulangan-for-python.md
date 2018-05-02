---
layout: tutorial
title:  "Pengulangan (Loop) Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/pengulangan-for-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/loop-python) untuk membaca versi terbaru tutorial ini.

Secara umum, pernyataan pada bahasa pemrograman akan dieksekusi secara berurutan. Pernyataan pertama dalam sebuah fungsi dijalankan pertama, diikuti oleh yang kedua, dan seterusnya. Tetapi akan ada situasi dimana Anda harus menulis banyak kode, dimana kode tersebut sangat banyak. Jika dilakukan secara manual maka Anda hanya akan membuang-buang tenaga dengan menulis beratus-ratus bahkan beribu-ribu kode. Untuk itu Anda perlu menggunakan pengulangan di dalam bahasa pemrograman Python.

Di dalam bahasa pemrograman Python pengulangan dibagi menjadi 3 bagian, yaitu :
- While Loop
- For Loop
- Nested Loop

### While Loop
Pengulangan While Loop di dalam bahasa pemrograman Python dieksesusi statement berkali-kali selama kondisi bernilai benar atau `True`.

Dibawah ini adalah contoh penggunaan pengulangan While Loop.


{% highlight python %}
#Contoh penggunaan While Loop

count = 0
while (count < 9):
    print ('The count is:', count)
    count = count + 1

print ("Good bye!")
{% endhighlight %}

### For Loop
Pengulangan `for` pada Python memiliki kemampuan untuk mengulangi item dari urutan apapun, seperti `list` atau `string`.

Dibawah ini adalah contoh penggunaan pengulangan While Loop.

{% highlight python %}
#Contoh pengulangan for sederhana
angka = [1,2,3,4,5]
for x in angka:
    print(x)

#Contoh pengulangan for
buah = ["nanas", "apel", "jeruk"]
for makanan in buah:
    print("Saya suka makan", makanan)
{% endhighlight %}
    
### Nested Loop
Bahasa pemrograman Python memungkinkan penggunaan satu lingkaran di dalam loop lain. Bagian berikut menunjukkan beberapa contoh untuk menggambarkan konsep tersebut. 

Dibawah ini adalah contoh penggunaan Nested Loop.

{% highlight python %}
#Contoh penggunaan Nested Loop

i = 2
while(i < 100):
    j = 2
    while(j <= (i/j)):
        if not(i%j): break
        j = j + 1
    if (j > i/j) : print(i, " is prime")
    i = i + 1

print "Good bye!"
{% endhighlight %}


<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/kondisi-if-else-python"><i class="fas fa-arrow-circle-left"></i>Kondisi Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/number-python" class="hoverable">Number Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
