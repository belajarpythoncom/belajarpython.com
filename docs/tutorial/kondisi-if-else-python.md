---
layout: tutorial
title: Kondisi Python
order: 9
---

### Kondisi If

Pengambilan keputusan (kondisi if) digunakan untuk mengantisipasi kondisi yang terjadi saat jalanya program dan menentukan tindakan apa yang akan diambil sesuai dengan kondisi.

Pada python ada beberapa statement/kondisi diantaranya adalah `if`, `else` dan `elif` Kondisi `if` digunakan untuk mengeksekusi kode jika kondisi bernilai benar `True`.

Jika kondisi bernilai salah `False` maka statement/kondisi `if` tidak akan di-eksekusi.

Dibawah ini adalah contoh penggunaan kondisi if pada Python

```python
#Kondisi if adalah kondisi yang akan dieksekusi oleh program jika bernilai benar atau TRUE

nilai = 9

#jika kondisi benar/TRUE maka program akan mengeksekusi perintah dibawahnya
if(nilai > 7):
    print("Sembilan Lebih Besar Dari Angka Tujuh") # Kondisi Benar, Dieksekusi

#jika kondisi salah/FALSE maka program tidak akan mengeksekusi perintah dibawahnya
if(nilai > 10):
    print("Sembilan Lebih Besar Dari Angka Sepuluh") # Kondisi Salah, Maka tidak tereksekusi
```

Dari contoh diatas, jika program dijalankan maka akan mencetak string `"Sembilan Lebih Besar Dari Angka Tujuh"` sebanyak 1 kali yaitu pada if pertama. Di if kedua statement bernilai salah, jadi perintah `print("Sembilan Lebih Besar Dari Angka Sepuluh")` tidak akan dieksekusi.


### Kondisi If Else
Pengambilan keputusan (kondisi if else) tidak hanya digunakan untuk menentukan tindakan apa yang akan diambil sesuai dengan kondisi, tetapi juga digunakan untuk menentukan tindakan apa yang akan diambil/dijalankan jika kondisi tidak sesuai.

Pada python ada beberapa statement/kondisi diantaranya adalah if, else dan elif Kondisi if digunakan untuk mengeksekusi kode jika kondisi bernilai benar.

Kondisi if else adalah kondisi dimana jika pernyataan benar `True` maka kode dalam if akan dieksekusi, tetapi jika bernilai salah `False` maka akan mengeksekusi kode di dalam else.

Dibawah ini adalah contoh penggunaan kondisi if else pada Python

```python
#Kondisi if else adalah jika kondisi bernilai TRUE maka akan dieksekusi pada if, tetapi jika bernilai FALSE maka akan dieksekusi kode pada else

nilai = 3
#Jika pernyataan pada if bernilai TRUE maka if akan dieksekusi, tetapi jika FALSE kode pada else yang akan dieksekusi.
if(nilai > 7):
    print("Selamat Anda Lulus")
else:
    print("Maaf Anda Tidak Lulus")
```

Pada contoh diatas, jika program dijalankan maka akan mencetak string `"Maaf Anda Tidak Lulus"` karena pernyataan pada if bernilai `False`

### Kondisi Elif

Pengambilan keputusan (kondisi if elif) merupakan lanjutan/percabangan logika dari "kondisi if". Dengan elif kita bisa membuat kode program yang akan menyeleksi beberapa kemungkinan yang bisa terjadi. Hampir sama dengan kondisi "else", bedanya kondisi "elif" bisa banyak dan tidak hanya satu. 

Dibawah ini adalah contoh penggunaan kondisi elif pada Python

```python
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
```

Pada contoh diatas, jika program dijalankan maka akan mencetak string `"Saya akan libur"`.

---

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/_tutorial/kondisi-if-else-python.md)

<div class="mt-8 inline justify-between gap-x-4 md:flex">
  <div class="flex justify-center mb-4 md:mb-0">
    <a href="/tutorial/operator-python" class="text-primary-300 hover:text-primary-300 order-2 flex h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-8 text-base hover:no-underline md:order-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Operator Python</span>
    </a>
  </div>
  <div class="order-1 flex justify-center">
    <a href="/tutorial/loop-python" class="order-1 flex h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-8 text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:order-2">
      <span class="-mt-0.5">Loop Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
