---
layout: tutorial
title: Operator Python
permalink: /tutorial/operator-python
---

---

Operator adalah konstruksi yang dapat memanipulasi nilai dari operan. 

Sebagai contoh operasi 3 + 2 = 5. Disini `3` dan `2` adalah operan dan `+` adalah operator.

Bahasa pemrograman Python mendukung berbagai macam operator, diantaranya :
- [Operator Aritmatika (Arithmetic Operators)](#operator-aritmatika)
- [Operator Perbandingan (Comparison (Relational) Operators)](#operator-perbandingan)
- [Operator Penugasan (Assignment Operators)](#operator-penugasan)
- [Operator Logika (Logical Operators)](#operator-logika)
- [Operator Bitwise (Bitwise Operators)](#operator-bitwise)
- [Operator Keanggotaan (Membership Operators)](#operator-keanggotaan)
- [Operator Identitas (Identity Operators)](#operator-identitas)
 
### Operator Aritmatika <a name="operator-aritmatika"></a>

| Operator| 	Contoh	 | Penjelasan |
| --- | --- | --- |
| Penjumlahan `+`| 	`1 + 3 = 4` | 	Menjumlahkan nilai dari masing-masing operan atau bilangan |
| Pengurangan `-`| 	`4 - 1 = 3`	 | Mengurangi nilai operan di sebelah kiri menggunakan operan di sebelah kanan |
| Perkalian `*`| 	`2 * 4 = 8`	 | Mengalikan operan/bilangan |
| Pembagian `/`| 	`10 / 5 = 2`	 | Untuk membagi operan di sebelah kiri menggunakan operan di sebelah kanan |
| Sisa Bagi `%`| 	`11 % 2 = 1`	 | Mendapatkan sisa pembagian dari operan di sebelah kiri operator ketika dibagi oleh operan di sebelah kanan |
| Pangkat `**`| 	`8 ** 2 = 64`	 | Memangkatkan operan disebelah kiri operator dengan operan di sebelah kanan operator |
| Pembagian Bulat `//`| 	`10 // 3 = 3` |	Sama seperti pembagian. Hanya saja angka dibelakang koma dihilangkan |

Dibawah ini adalah contoh penggunaan Operator Aritmatika dalam bahasa pemrograman Python

{% highlight python %}
#OPERATOR ARITMATIKA

#Penjumlahan
print(13 + 2)
apel = 7
jeruk = 9
buah = apel + jeruk #
print(buah)

#Pengurangan
hutang = 10000
bayar = 5000
sisaHutang = hutang - bayar
print("Sisa hutang Anda adalah ", sisaHutang)

#Perkalian
panjang = 15
lebar = 8
luas = panjang * lebar
print(luas)

#Pembagian
kue = 16
anak = 4
kuePerAnak = kue / anak
print("Setiap anak akan mendapatkan bagian kue sebanyak ", kuePerAnak)

#Sisa Bagi / Modulus
bilangan1 = 14
bilangan2 = 5
hasil = bilangan1 % bilangan2
print("Sisa bagi dari bilangan ", bilangan1, " dan ", bilangan2, " adalah ", hasil)

#Pangkat
bilangan3 = 8
bilangan4 = 2
hasilPangkat = bilangan3 ** bilangan4
print(hasilPangkat)

#Pembagian Bulat
print(10//3) 
#10 dibagi 3 adalah 3.3333. Karena dibulatkan maka akan menghasilkan nilai 3
{% endhighlight %}

### Operator Perbandingan <a name="operator-perbandingan"></a>

Operator perbandingan (comparison operators) digunakan untuk membandingkan suatu nilai dari masing-masing operan.

| Operator	| Contoh	| Penjelasan| 
| --- | --- | --- |
| Sama dengan `==` | 	`1 == 1`  | bernilai True	Jika masing-masing operan memiliki nilai yang sama, maka kondisi bernilai benar atau True. | 
| Tidak sama dengan `!=` |	`2 != 2`  | bernilai False	Akan menghasilkan nilai kebalikan dari kondisi sebenarnya. | 
| Tidak sama dengan `<>` |	`2 <> 2`  | bernilai False	Akan menghasilkan nilai kebalikan dari kondisi sebenarnya. | 
| Lebih besar dari `>` |	`5 > 3`  | bernilai True	Jika nilai operan kiri lebih besar dari nilai operan kanan, maka kondisi menjadi benar. | 
| Lebih kecil dari `<` |	`5 < 3`  | bernilai True	Jika nilai operan kiri lebih kecil dari nilai operan kanan, maka kondisi menjadi benar. | 
| Lebih besar atau sama dengan `>=` |	`5 >= 3`  | bernilai True	Jika nilai operan kiri lebih besar dari nilai operan kanan, atau sama, maka kondisi menjadi benar. | 
| Lebih kecil atau sama dengan `<=` |	`5 <= 3`  | bernilai True	Jika nilai operan kiri lebih kecil dari nilai operan kanan, atau sama, maka kondisi menjadi benar. | 


### Operator Penugasan <a name="operator-penugasan"></a>

Operator penugasan digunakan untuk memberikan atau memodifikasi nilai ke dalam sebuah variabel.

| Operator	| Contoh	| Penjelasan | 
| --- | --- | --- |
| Sama dengan `=`	 | `a = 1` | 	Memberikan nilai di kanan ke dalam variabel yang berada di sebelah kiri. | 
| Tambah sama dengan `+=` | 	`a += 2` | 	Memberikan nilai variabel dengan nilai variabel itu sendiri ditambah dengan nilai di sebelah kanan. | 
| Kurang sama dengan `-=`	 | `a -= 2` | 	Memberikan nilai variabel dengan nilai variabel itu sendiri dikurangi dengan nilai di sebelah kanan. | 
| Kali sama dengan `*=` | 	`a *= 2` | 	Memberikan nilai variabel dengan nilai variabel itu sendiri dikali dengan nilai di sebelah kanan. | 
| Bagi sama dengan `/=` | 	`a /= 4` | 	Memberikan nilai variabel dengan nilai variabel itu sendiri dibagi dengan nilai di sebelah kanan. | 
| Sisa bagi sama dengan `%=`	 | `a %= 3` | 	Memberikan nilai variabel dengan nilai variabel itu sendiri dibagi dengan nilai di sebelah kanan. Yang diambil nantinya adalah sisa baginya. | 
| Pangkat sama dengan `**=` | 	`a **= 3`	 | Memberikan nilai variabel dengan nilai variabel itu sendiri dipangkatkan dengan nilai di sebelah kanan. | 
| Pembagian bulat sama dengan `//=` | 	`a //= 3`	 | Membagi bulat operan sebelah kiri operator dengan operan sebelah kanan operator kemudian hasilnya diisikan ke operan sebelah kiri. | 


### Prioritas Eksekusi Operator di Python
Dari semua operator diatas, masing-masing mempunyai urutan prioritas yang nantinya prioritas pertama akan dilakukan paling pertama, begitu seterusnya sampai dengan prioritas terakhir. 

| Operator |	Keterangan | 
| --- | --- | --- |
| `**` |	Aritmatika | 
| `~, +, -` |	Bitwise | 
| `*, /, %, //` |	Aritmatika |
| `+, -`	 |Aritmatika |
| `>>, <<` |	Bitwise |
| `&`	 |Bitwise |
| `^, |`  |	Bitwise |
| `<=, <, >, >=` |	Perbandingan |
| `<> , ==, !=` |	Perbandingan |
| `=, %=, /=, //=, -=, +=, *=, **=` |	Penugasan |
| `is, is not` |	Identitas |
| `in, not in` |	Membership (Keanggotaan) |
| `not, or, and` |	Logika |


---
> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/tutorials/operator-python.md)

<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/variabel-python"><i class="fas fa-arrow-circle-left"></i>Variabel Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/kondisi-if-else-python" class="hoverable">Kondisi Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
