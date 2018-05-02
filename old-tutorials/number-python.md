---
layout: tutorial
title:  "Number Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/number-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/number-python) untuk membaca versi terbaru tutorial ini.

Number adalah tipe data Python yang menyimpan nilai numerik. Number adalah tipe data yang tidak berubah. Ini berarti, mengubah nilai dari sejumlah tipe data akan menghasilkan objek yang baru dialokasikan.

Objek Number dibuat saat Anda memberikan nilai pada-nya. Sebagai contoh : `angkaPertama = 1`
`angkaKedua = 33 `

Python mendukung beberapa tipe data Number diantaranya :
- Int
- Float
- Complex

Berikut ini adalah beberapa contoh dari Tipe data Number pada Python :

| Int |	Float |	Complex |
| --- | --- | --- |
| 20 |	0.1 |	3.14j |
| 300 |	1.20 |	35.j |
| -13 |	-41.2 |	3.12e-12j |
| 020 |	32.23+e123 |	.873j |
| -0103 |	-92. |	-.123+0J |
| -0x212 |	-32.52e10 |	3e+123J |
| 0x56 |	60.2-E13 |	4.31e-4j |


### Konversi Tipe Data Number Python
Pada Python Anda bisa mengkonversi tipe data dengan menggunakan fungsi. Dibawah ini adalah beberapa fungsi untuk mengkonversi tipe data number Python. 
- `int(x)`
untuk meng-konversi x menjadi plain integer.
- `long(x)`
untuk meng-konversi x menjadi long integer.
- `float(x)`
untuk meng-konversi x menjadi floating point number.
- `complex(x)`
untuk meng-konversi x menjadi complex number dengna real part x dan imaginary part zero.
- `complex(x, y)`
untuk meng-konversi x dan y menjadi complex number dengan real part x dan imaginary part y. x dan numeric expressions y. 


### Fungsi Matematika Python
Pada bahasa pemrograman Python terdapat fungsi untuk melakukan perhitungan matematis, berikut adalah daftarnya :

| Nama |	Penggunaan |	Penjelasan |
| --- | --- | --- |
| Absolute |	`abs(x)` |	Nilai absolut dari x:(positive) jarak antara x and 0. |
| Ceiling |	`ceil(x)` |	Ceiling dari x: integer terkecil yang kurang dari x. |
| Cmp |	`cmp(x, y)` |	-1 if x < y, 0 if x == y, or 1 if x > y. Tidak berlaku lagi dengan Python 3. Sebaliknya gunakan return (x>y)-(x |
| Eksponen |	`exp(x)` |	Nilai eksponen dari x: ex |
| Fabs |	`fabs(x)` |	Nilai absolut dari x. |
| Floor |	`floor(x)` |	The floor of x: the largest integer not greater than x. |
| Floor |	`floor(x)` |	Nilai dasar dari x: internet terbesar tidak lebih besar dari x. |
| Log |	`log(x)` |	Logaritma dari x, untuk x > 0. |
| Log 10 |	`log10(x)` |	Basis 10 logaritma dari x, untuk x > 0. |
| Max |	`max(x1, x2,...)`	 | Argumen terbesar: Nilai terdekat dengan tak terhingga positif |
| Min |	`min(x1, x2,...)` |	Argumen terkecil: nilai yang paling mendekati tak berhingga negatif. |
| Modf |	`modf(x)` |	Bagian pecahan dan bilangan bulat dari x dalam tupel dua item. Kedua bagian memiliki tanda yang sama dengan x. Bagian integer dikembalikan sebagai float. |
| Pow |	`pow(x, y)` |	Nilai x ** y. |
| Round |	`round(x [,n])` |	X dibulatkan menjadi n digit dari titik desimal. Putaran Python jauh dari nol sebagai tie-breaker: round (0.5) adalah 1.0 dan round (-0.5) adalah -1.0. |
| Akar Kuadrat |	`sqrt(x)` |	Akar kuadrat x untuk x> 0. |


### Fungsi Nomor Acak Python
Nomor acak digunakan untuk aplikasi permainan, simulasi, pengujian, keamanan, dan privasi. Python mencakup fungsi berikut yang umum digunakan. Berikut adalah daftarnya :

| Nama | 	Penggunaan | 	Penjelasan | 
| --- | --- | --- |
| Choice | 	`choice(seq)` | 	Item acak dari list, tuple, atau string. | 
| RandRange | 	`randrange ([start,] stop [,step])` | 	Elemen yang dipilih secara acak dari jangkauan (start, stop, step). | 
| Random | 	`random()` | 	A random float r, sehingga 0 kurang dari atau sama dengan r dan r kurang dari 1 | 
| Seed | 	`seed([x])` | 	Menetapkan nilai awal integer yang digunakan dalam menghasilkan bilangan acak. Panggil fungsi ini sebelum memanggil fungsi modul acak lainnya. Tidak ada pengembalian | 
| Shuffle | 	`shuffle(lst)` | 	Mengacak daftar dari daftar di tempat. Tidak ada pengembalian | 
| Floor	| `floor(x)`	 | The floor of x: the largest integer not greater than x. | 
| Uniform| 	`uniform(x, y)` | 	Sebuah float acak r, sedemikian rupa sehingga x kurang dari atau sama dengan r dan r kurang dari y. | 


### Fungsi Trigonometri Python
Python mencakup fungsi berikut yang melakukan perhitungan trigonometri. Berikut adalah daftarnya :

| Nama |	Penggunaan	Penjelasan |
| --- | --- | --- |
| Acos |	`acos(x)` |	Kembalikan kosinus x, di radian. |
| Asin |	`asin(x)` |	Kembalikan busur sinus x, dalam radian. |
| Atan |	`atan(x)` |	Kembalikan busur singgung x, di radian. |
| Atan 2 |	`atan2(y, x)`	 | Kembali atan (y / x), di radian. |
| Kosinus |	`cos(x)` |	Kembalikan kosinus x radian. |
| Hypot	 | `hypot(x, y)` |	Kembalikan norma Euclidean, sqrt (x * x + y * y). |
| Sin |	`sin(x)` |	Kembalikan sinus dari x radian. |
| Tan |	`tan(x)` |	Kembalikan tangen x radian. |
| Derajat |	`degrees(x)` |	Mengonversi sudut x dari radian ke derajat. |
| Radian |	`radians(x)` |	Mengonversi sudut x dari derajat ke radian. |

### Konstanta Matematika Python
Modul ini juga mendefinisikan dua konstanta matematika. Berikut adalah daftarnya :

| Nama |	Penggunaan	| Penjelasan| 
| --- | --- | --- |
| Pi	| `pi`	| Konstanta Pi matematika| 
| e	| `e`	| Konstanta e matematika| 




<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/loop-python"><i class="fas fa-arrow-circle-left"></i>Loop Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/string-python" class="hoverable">String Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
