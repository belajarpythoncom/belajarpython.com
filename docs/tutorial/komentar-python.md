---
layout: tutorial
title: Komentar Python
order: 5
---

Komentar (comment) adalah kode di dalam script Python yang tidak dieksekusi atau tidak dijalankan mesin. Komentar hanya digunakan untuk menandai atau memberikan keterangan tertulis pada script.

Komentar biasa digunakan untuk membiarkan orang lain memahami apa yang dilakukan script. atau untuk mengingatkan kepada programmer sendiri jika suatu saat kembali mengedit script tersebut.

Untuk menggunakan komentar anda cukup menulis tanda pagar `#`, diikuti dengan komentar Anda.

Dibawah ini adalah contoh penggunaan komentar pada Python

```python
#Ini adalah komentar

# Tulisan ini tidak akan dieksekusi

#komentar dengan tanda pagar hanya bisa digunakan
#untuk
#satu
#baris

"""
Penulisan Komentar lebih dari satu baris yaitu
dengan menggunakan kutip dua 3 kali dan
ditutup dengan kutip dua 3 kali juga
"""

print("Hello World") #ini juga komentar

#print("Welcome")

# komentar bisa berisi spesial karakter !@#$%^&\*(),./;'[]\

#mencetak nama
print("Budi")

#mencetak angka/integer
print(123)
```

Saat anda menjalankan script diatas, Anda akan melihat output berupa `Hello World`, `Budi` dan `123`, karena tulisan/komentar yang ditulis tidak dieksekusi.

---

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/_tutorial/komentar-python.md)

<div class="mt-8 inline justify-between gap-x-4 md:flex">
  <div class="flex justify-center mb-4 md:mb-0">
    <a href="/tutorial/hello-world-python" class="text-primary-300 hover:text-primary-300 order-2 flex h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-8 text-base hover:no-underline md:order-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Hello World Python</span>
    </a>
  </div>
  <div class="order-1 flex justify-center">
    <a href="/tutorial/tipe-data-python" class="order-1 flex h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-8 text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:order-2">
      <span class="-mt-0.5">Tipe Data Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
