---
layout: tutorial
title: File I/O Python
order: 19
---

Disini kita akan belajar semua fungsi dasar I/O yang tersedia pada Python 3. Jika Anda ingin mempelajari lebih detail, lihat dokumentasi standar Python.

### Print

Cara termudah untuk menghasilkan output adalah dengan menggunakan pernyataan cetak di mana Anda bisa melewati nol atau lebih banyak ekspresi yang dipisahkan dengan koma. Fungsi ini mengubah ekspresi yang Anda berikan ke string dan menulis hasilnya ke output standar sebagai berikut :

```python
print ("Python adalah bahasa pemrograman yang hebat")
```

### Membaca Input Keyboard

Python 2 memiliki dua fungsi built-in untuk membaca data dari input standar, yang secara default berasal dari keyboard. Fungsi ini adalah input() dan raw_input()

Dengan Python 3, fungsi raw_input() tidak digunakan lagi. Selain itu, input() berfungsi membaca data dari keyboard sebagai string, terlepas dari apakah itu tertutup dengan tanda kutip ('' atau '") atau tidak.

### Fungsi Input Python

Fungsi input([prompt]) setara dengan raw_input, kecuali mengasumsikan bahwa input adalah ekspresi Python yang valid dan mengembalikan hasil yang dievaluasi ke Anda.

```python
>>> x = input("something:")
>>> something:10

>>> x
>>> '10'

>>> x = input("something:")
>>> something:'10' #entered data treated as string with or without ''

>>> x
>>> "'10'"
```

---
> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/_tutorial/file-io-python.md)

<div class="mt-8 inline justify-between gap-x-4 md:flex">
  <div class="flex justify-center mb-4 md:mb-0">
    <a href="/tutorial/modul-python" class="text-primary-300 hover:text-primary-300 order-2 flex h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-8 text-base hover:no-underline md:order-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Modul Python</span>
    </a>
  </div>
  <div class="order-1 flex justify-center">
    <a href="/tutorial/exception-python" class="order-1 flex h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-8 text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:order-2">
      <span class="-mt-0.5">Exception Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
