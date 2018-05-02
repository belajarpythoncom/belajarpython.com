---
layout: tutorial
title:  "Kondisi Elif Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/kondisi-elif-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/kondisi-python) untuk membaca versi terbaru tutorial ini.

### Kondisi Elif

Pengambilan keputusan (kondisi if elif) merupakan lanjutan/percabangan logika dari "kondisi if". Dengan elif kita bisa membuat kode program yang akan menyeleksi beberapa kemungkinan yang bisa terjadi. Hampir sama dengan kondisi "else", bedanya kondisi "elif" bisa banyak dan tidak hanya satu. 

Dibawah ini adalah contoh penggunaan kondisi elif pada Python

{% highlight python %}
#Contoh penggunaan kondisi elif

hari_ini = "Minggu"

if(hari_ini == "Senin"):
    print("Saya akan kuliah")
elif(hari_ini == "Selasa"):
    print("Saya akan kuliah")
elif(hari_ini == "Rabu"):
    print("Saya akan kuliah")
elif(hari_ini == "Kamis"):
    print("Saya akan kuliah")
elif(hari_ini == "Jumat"):
    print("Saya akan kuliah")
elif(hari_ini == "Sabtu"):
    print("Saya akan kuliah")
elif(hari_ini == "Minggu"):
    print("Saya akan libur")
{% endhighlight %}

Pada contoh diatas, jika program dijalankan maka akan mencetak string `"Saya akan libur"`.


<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/operator-python"><i class="fas fa-arrow-circle-left"></i>Operator Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/loop-python" class="hoverable">Loop Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
