---
layout: tutorial
title: List Python
permalink: /tutorial/list-python
---

---

Dalam bahasa pemrograman Python, struktur data yang paling dasar adalah urutan atau lists. Setiap elemen-elemen berurutan akan diberi nomor posisi atau indeksnya. Indeks pertama dalam list adalah nol, indeks kedua adalah satu dan seterusnya.

Python memiliki enam jenis urutan built-in, namun yang paling umum adalah list dan tuple. Ada beberapa hal yang dapat Anda lakukan dengan semua jenis list. Operasi ini meliputi pengindeksan, pengiris, penambahan, perbanyak, dan pengecekan keanggotaan. Selain itu, Python memiliki fungsi built-in untuk menemukan panjang list dan untuk menemukan elemen terbesar dan terkecilnya.

### Membuat List Python

List adalah tipe data yang paling serbaguna yang tersedia dalam bahasa Python, yang dapat ditulis sebagai daftar nilai yang dipisahkan koma (item) antara tanda kurung siku. Hal penting tentang daftar adalah item dalam list tidak boleh sama jenisnya.

Membuat list sangat sederhana, tinggal memasukkan berbagai nilai yang dipisahkan koma di antara tanda kurung siku. Dibawah ini adalah contoh sederhana pembuatan list dalam bahasa Python.

{% highlight python %}
#Contoh sederhana pembuatan list pada bahasa pemrograman python
list1 = ['kimia', 'fisika', 1993, 2017]
list2 = [1, 2, 3, 4, 5 ]
list3 = ["a", "b", "c", "d"]
{% endhighlight %}

### Akses Nilai Dalam List Python

Untuk mengakses nilai dalam list python, gunakan tanda kurung siku untuk mengiris beserta indeks atau indeks untuk mendapatkan nilai yang tersedia pada indeks tersebut.

Berikut adalah contoh cara mengakses nilai di dalam list python :


{% highlight python %}
#Cara mengakses nilai di dalam list Python

list1 = ['fisika', 'kimia', 1993, 2017]
list2 = [1, 2, 3, 4, 5, 6, 7 ]

print ("list1[0]: ", list1[0])
print ("list2[1:5]: ", list2[1:5])
{% endhighlight %}

Setelah Anda mengeksekusi kode diatas, hasilnya akan seperti dibawah ini :

`list1[0]: fisika`
`list2[1:5]: [2, 3, 4, 5]`

### Update Nilai Dalam List Python

Anda dapat memperbarui satu atau beberapa nilai di dalam list dengan memberikan potongan di sisi kiri operator penugasan, dan Anda dapat menambahkan nilai ke dalam list dengan metode append (). Sebagai contoh :


{% highlight python %}
list = ['fisika', 'kimia', 1993, 2017]
print ("Nilai ada pada index 2 : ", list[2])

list[2] = 2001
print ("Nilai baru ada pada index 2 : ", list[2])
{% endhighlight %}

### Hapus Nilai Dalam List Python

Untuk menghapus nilai di dalam list python, Anda dapat menggunakan salah satu pernyataan del jika Anda tahu persis elemen yang Anda hapus. Anda dapat menggunakan metode remove() jika Anda tidak tahu persis item mana yang akan dihapus. Sebagai contoh :

{% highlight python %}
#Contoh cara menghapus nilai pada list python

list = ['fisika', 'kimia', 1993, 2017]

print (list)
del list[2]
print ("Setelah dihapus nilai pada index 2 : ", list)
{% endhighlight %}

### Operasi Dasar Pada List Python

List Python merespons operator + dan * seperti string; Itu artinya penggabungan dan pengulangan di sini juga berlaku, kecuali hasilnya adalah list baru, bukan sebuah String.

Sebenarnya, list merespons semua operasi urutan umum yang kami gunakan pada String di bab sebelumnya. Dibawah ini adalah tabel daftar operasi dasar pada list python.

| Python Expression	| Hasil		| Penjelasan	| 
| --- | --- | --- |
| `len([1, 2, 3, 4])`		| `4`	| Length	| 
| `[1, 2, 3] + [4, 5, 6]`	| 	`[1, 2, 3, 4, 5, 6]`	| 	Concatenation	| 
| `['Halo!'] * 4`		| `['Halo!', 'Halo!', 'Halo!', 'Halo!']`	| 	Repetition	| 
| `2 in [1, 2, 3]`	| `	True`	| 	Membership	| 
| `for x in [1,2,3] : print (x,end = ' ')`	| 	`1 2 3`		| Iteration	| 

### Indexing, Slicing dan Matrix Pada List Python

Karena list adalah urutan, pengindeksan dan pengiris bekerja dengan cara yang sama untuk list seperti yang mereka lakukan untuk String.

Dengan asumsi input berikut :

`L = ['C++'', 'Java', 'Python']`

 | Python Expression | 	Hasil | 	Penjelasan | 
 | --- | --- | --- | 
 | `L[2]`	 | `'Python'` | 	Offset mulai dari nol | 
 | `L[-2]` | 	`'Java'` | 	Negatif: hitung dari kanan | 
 | `[1:]`	 | `['Java', 'Python']` | 	Slicing mengambil bagian | 
 
### Method dan Fungsi Build-in Pada List Python

Python menyertakan fungsi built-in sebagai berikut :

| Python Function | 	Penjelasan | 
| --- | --- |
| cmp(list1, list2)	# |  Tidak lagi tersedia dengan Python 3 | 
| len(list)	 | Memberikan total panjang list. | 
| max(list)	 | Mengembalikan item dari list dengan nilai maks. | 
| min(list)	 | Mengembalikan item dari list dengan nilai min. | 
| list(seq)	 | Mengubah tuple menjadi list. | 

Python menyertakan methods built-in sebagai berikut

 | Python Methods | 	Penjelasan | 
 | --- | --- | 
 | list.append(obj)	 | Menambahkan objek obj ke list | 
 | list.count(obj) | 	Jumlah pengembalian berapa kali obj terjadi dalam list | 
 | list.extend(seq) | 	Tambahkan isi seq ke list | 
 | list.index(obj) | 	Mengembalikan indeks terendah dalam list yang muncul obj | 
 | list.insert(index, obj)	 | Sisipkan objek obj ke dalam list di indeks offset | 
 | list.pop(obj = list[-1])	 | Menghapus dan mengembalikan objek atau obj terakhir dari list | 
 | list.remove(obj) | 	Removes object obj from list | 
 | list.reverse() | 	Membalik list objek di tempat | 
 | list.sort([func])	 | Urutkan objek list, gunakan compare func jika diberikan | 




> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/tutorials/list-python.md)

<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/string-python"><i class="fas fa-arrow-circle-left"></i>String Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/tuple-python" class="hoverable">Tuple Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
