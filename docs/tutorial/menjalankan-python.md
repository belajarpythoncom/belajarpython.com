---
layout: tutorial
title: Menjalankan Python
order: 3
---

Untuk menjalankan Python ada banyak cara yang bisa dilakukan. Anda bisa menggunakan _shell_, terminal atau menggunakan [IDE (Integrated Development Environment)](http://www.belajarpython.com/2015/05/integrated-development-environment-ide.html). Di bawah ini adalah langkah-langkah menjalankan Python dengan cara yang paling mudah.

### Linux

1. Buka terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>
2. Ketik python maka Anda akan masuk ke Python shell.
3. Tuliskan script Python Anda, contoh: `print("Selamat datang di Python")`. jika sudah tekan tombol <kbd>ENTER</kbd>, dan script Python akan dijalankan/eksekusi.
4. Untuk keluar dari Python shell ketik `exit()`

_atau_

1. Gunakan teks editor, misalnya gedit.
2. Buat file baru, dan ketikan script python Anda, contoh: `print("Selamat datang di Python")`.
3. Save As dengan ekstensi `.py` (contoh: `cetak.py`).
4. Jalankan file dengan menggunakan Terminal.
5. Buka terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>.
6. Masuk ke direktori dimana file Python Anda disimpan (contoh: `cd /Users/admin/Desktop/`).
7. Jalankan script Python dengan menggunakan python diikuti dengan nama file (contoh: `python cetak.py`).
8. Script Python Anda akan dieksekusi/dijalankan.

### Windows

#### Menggunakan Shell

1. Buka IDLE (python shell di windows), Anda bisa mencarinya di tombol <kbd>START</kbd>.
2. Tuliskan script Python Anda, contoh: `print("Selamat datang di Python")`. jika sudah tekan tombol <kbd>ENTER</kbd>, dan script Python akan dijalankan/eksekusi.

![Python Shell Windows](/img/menjalankan-python-windows.png 'Python Shell Windows')

3. Untuk keluar dari Python shell ketik `exit()`

#### Menggunakan Script Editor

1. Untuk menjalankan script yang disimpan dalam file, buka IDLE (python shell di windows), Anda bisa mencarinya di tombol <kbd>START</kbd>.
2. Klik menu `File - New File`
3. Tulis script Python pada window yang muncul, contoh:

```python
print("Belajar Python")
print("di belajarpython.com")
```

4. Simpan script lewat menu `File - Save`
5. Jalankan program dengan klik menu `Run - Run Module`

![Python Editor Windows](/img/menjalankan-python-windows-editor.png 'Python Editor Windows')

### Mac OS

1. Buka terminal.
2. Ketik python maka Anda akan masuk ke Python shell.
3. Tuliskan script Python Anda, contoh: `print("Selamat datang di Python")`. jika sudah tekan tombol <kbd>ENTER</kbd>, dan script Python akan dijalankan/eksekusi.
4. Untuk keluar dari Python shell ketik `exit()`

_atau_

1. Gunakan teks editor.
2. Buat file baru, dan ketikan script python Anda, contoh: `print("Selamat datang di Python")`.
3. Save As dengan ekstensi `.py` (contoh: `cetak.py`).
4. Jalankan file dengan menggunakan Terminal.
5. Buka terminal <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>T</kbd>
6. Masuk ke direktori dimana file Python Anda disimpan (contoh: `cd /Users/admin/Desktop/`).
7. Jalankan script Python dengan menggunakan python diikuti dengan nama file (contoh: `python cetak.py`).
8. Script Python Anda akan dieksekusi/dijalankan.

---

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/_tutorial/menjalankan-python.md)


<div class="mt-8 inline justify-between gap-x-4 md:flex">
  <div class="flex justify-center mb-4 md:mb-0">
    <a href="/tutorial/instalasi-python" class="text-primary-300 hover:text-primary-300 order-2 flex h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-8 text-base hover:no-underline md:order-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Instalasi Python</span>
    </a>
  </div>
  <div class="order-1 flex justify-center">
    <a href="/tutorial/hello-world-python" class="order-1 flex h-12 items-center rounded-full bg-gradient-to-l from-yellow-500 to-yellow-400 px-8 text-base text-black shadow-xl hover:text-black hover:no-underline hover:shadow md:order-2">
      <span class="-mt-0.5">Hello World Python</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
