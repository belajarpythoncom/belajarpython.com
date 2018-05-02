---
layout: tutorial
title:  "Tuple Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/tuples-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/tuple-python) untuk membaca versi terbaru tutorial ini.




Sebuah tupel adalah urutan objek Python yang tidak berubah. Tupel adalah urutan, seperti daftar. Perbedaan utama antara tupel dan daftarnya adalah bahwa tupel tidak dapat diubah tidak seperti List Python. Tupel menggunakan tanda kurung, sedangkan List Python menggunakan tanda kurung siku.

Membuat tuple semudah memasukkan nilai-nilai yang dipisahkan koma. Secara opsional, Anda dapat memasukkan nilai-nilai yang dipisahkan koma ini di antara tanda kurung juga. Sebagai contoh : 



{% highlight python %}
#Contoh sederhana pembuatan tuple pada bahasa pemrograman python

tup1 = ('fisika', 'kimia', 1993, 2017)
tup2 = (1, 2, 3, 4, 5 )
tup3 = "a", "b", "c", "d"
{% endhighlight %}

Tupel kosong ditulis sebagai dua tanda kurung yang tidak berisi apa-apa, contohnya : tup1 = ();
Untuk menulis tupel yang berisi satu nilai, Anda harus memasukkan koma, meskipun hanya ada satu nilai, contohnya : tup1 = (50,)
Seperti indeks String, indeks tuple mulai dari 0, dan mereka dapat diiris, digabungkan, dan seterusnya

### Akses Nilai Dalam Tuple Python

Untuk mengakses nilai dalam tupel, gunakan tanda kurung siku untuk mengiris beserta indeks atau indeks untuk mendapatkan nilai yang tersedia pada indeks tersebut. Sebagai contoh :


{% highlight python %}
#Cara mengakses nilai tuple

tup1 = ('fisika', 'kimia', 1993, 2017)
tup2 = (1, 2, 3, 4, 5, 6, 7 )

print ("tup1[0]: ", tup1[0])
print ("tup2[1:5]: ", tup2[1:5])
{% endhighlight %}

Setelah Anda mengeksekusi kode diatas, hasilnya akan seperti dibawah ini :

`tup1[0]: fisika`
`tup2[1:5]: (2, 3, 4, 5)`

### Update Nilai Dalam Tuple Python

Tuple tidak berubah, yang berarti Anda tidak dapat memperbarui atau mengubah nilai elemen tupel. Anda dapat mengambil bagian dari tupel yang ada untuk membuat tupel baru seperti ditunjukkan oleh contoh berikut.


{% highlight python %}
tup1 = (12, 34.56)
tup2 = ('abc', 'xyz')

# Aksi seperti dibawah ini tidak bisa dilakukan pada tuple python
# Karena memang nilai pada tuple python tidak bisa diubah
# tup1[0] = 100;

# Jadi, buatlah tuple baru sebagai berikut
tup3 = tup1 + tup2
print (tup3)
{% endhighlight %}

### Hapus Nilai Dalam Tuple Python

Menghapus elemen tuple individual tidak mungkin dilakukan. Tentu saja, tidak ada yang salah dengan menggabungkan tupel lain dengan unsur-unsur yang tidak diinginkan dibuang.

Untuk secara eksplisit menghapus keseluruhan tuple, cukup gunakan del statement. Sebagai contoh


{% highlight python %}
tup = ('fisika', 'kimia', 1993, 2017);

print (tup)
del tup;
print "Setelah menghapus tuple : "
print tup
{% endhighlight %}


### Operasi Dasar Pada Tuple Python

Tupel merespons operator + dan * sama seperti String; Mereka berarti penggabungan dan pengulangan di sini juga berlaku, kecuali hasilnya adalah tupel baru, bukan string.

Sebenarnya, Tuple merespons semua operasi urutan umum yang kami gunakan pada String di bab sebelumnya. Dibawah ini adalah tabel daftar operasi dasar pada Tuple python


| Python Expression	 | Hasil | 	Penjelasan | 
| --- | --- | --- | 
| len((1, 2, 3)) | 	3 | 	Length | 
| (1, 2, 3) + (4, 5, 6) | 	(1, 2, 3, 4, 5, 6) | 	Concatenation | 
| ('Halo!',) * 4 | 	('Halo!', 'Halo!', 'Halo!', 'Halo!') | 	Repetition | 
| 3 in (1, 2, 3) | 	True | 	Membership | 
| for x in (1,2,3) : print (x, end = ' ') | 	1 2 3 | 	Iteration | 

### Indexing, Slicing dan Matrix Pada Tuple Python

Karena tupel adalah urutan, pengindeksan dan pengiris bekerja dengan cara yang sama untuk tupel seperti pada String, dengan asumsi masukan berikut

Dengan asumsi input berikut : `T = ('C++', 'Java', 'Python')`

 | Python Expression | 	Hasil | 	Penjelasan |
 | --- | --- | --- |
 | `T[2]` | 	`'Python'` | 	Offset mulai dari nol | 
 | `T[-2]` | 	`'Java'`	 | Negatif: hitung dari kanan | 
 | `T[1:]` | 	`('Java', 'Python')` | 	Slicing mengambil bagian | 

### Fungsi Build-in Pada Tuple Python

Python menyertakan fungsi built-in sebagai berikut

| Python Function |	Penjelasan |	
| --- | --- |
| `cmp(tuple1, tuple2)` |		# Tidak lagi tersedia dengan Python 3 |	
| `len(tuple)` |		Memberikan total panjang tuple. |	
| `max(tuple)` |		Mengembalikan item dari tuple dengan nilai maks. |	
| `min(tuple)` |		Mengembalikan item dari tuple dengan nilai min. |	
| `tuple(seq)` |		Mengubah tuple menjadi tuple. |	

<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/list-python"><i class="fas fa-arrow-circle-left"></i>List Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/dictionary-python" class="hoverable">Dictionary Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
