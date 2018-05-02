---
layout: tutorial
title:  "Exception Python"
date:   2015-05-01 11:23:30 +0000
permalink: /2015/05/exception-python.html
---

---
> Anda sedang membaca tutorial versi lama, klik [disini](/tutorial/exception-python) untuk membaca versi terbaru tutorial ini.



Python menyediakan dua fitur yang sangat penting untuk menangani kesalahan tak terduga dalam program Python Anda dan menambahkan kemampuan debugging di dalamnya.

- Exception Handling
- Assertions
Exception adalah sebuah peristiwa, yang terjadi selama pelaksanaan program yang mengganggu aliran normal instruksi program. Secara umum, ketika skrip Python menemukan situasi yang tidak dapat diatasi, hal itu menimbulkan pengecualian. Exception adalah objek Python yang mewakili kesalahan.

Ketika skrip Python menimbulkan Exception, ia harus menangani Exception begitu saja sehingga berhenti dan berhenti.

### Standard Exceptions

| Nama	| Penjelasan	| 
| --- | --- |
| Exception		| Kelas dasar untuk semua pengecualian / exception	| 
| StopIteration		| Dibesarkan ketika metode (iterator) berikutnya dari iterator tidak mengarah ke objek apa pun.	| 
| SystemExit	| 	Dibesarkan oleh fungsi sys.exit ().	| 
| StandardError		| Kelas dasar untuk semua pengecualian built-in kecuali StopIteration dan SystemExit.	| 
| ArithmeticError	| 	Kelas dasar untuk semua kesalahan yang terjadi untuk perhitungan numerik.	| 
| OverflowError		| Dibesarkan saat perhitungan melebihi batas maksimum untuk tipe numerik.	| 
| FloatingPointError	| 	Dibesarkan saat perhitungan floating point gagal.	| 
| ZeroDivisonError	| 	Dibesarkan saat pembagian atau modulo nol dilakukan untuk semua tipe numerik.	| 
| AssertionError	| 	Dibesarkan jika terjadi kegagalan pernyataan Assert.	| 
| AttributeError	| 	Dibesarkan jika terjadi kegagalan referensi atribut atau penugasan.	| 
| EOFError		| Dibesarkan bila tidak ada input dari fungsi raw_input () atau input () dan akhir file tercapai.	| 
| ImportError		| Dibesarkan saat sebuah pernyataan impor gagal.	| 
| KeyboardInterrupt	| 	Dibesarkan saat pengguna menyela eksekusi program, biasanya dengan menekan Ctrl + c.	| 
| LookupError	| 	Kelas dasar untuk semua kesalahan pencarian.	| 
| IndexError	| 	Dibesarkan saat sebuah indeks tidak ditemukan secara berurutan.	| 
| KeyError		| Dibesarkan saat kunci yang ditentukan tidak ditemukan dalam kamus.	| 
| NameError		| Dibesarkan saat pengenal tidak ditemukan di namespace lokal atau global.	| 
| UnboundLocalError	| 	Dibesarkan saat mencoba mengakses variabel lokal dalam suatu fungsi atau metode namun tidak ada nilai yang ditugaskan padanya.	| 
| EnvironmentError	| 	Kelas dasar untuk semua pengecualian yang terjadi di luar lingkungan Python.	| 
| IOError	| 	Dibesarkan saat operasi input / output gagal, seperti pernyataan cetak atau fungsi open () saat mencoba membuka file yang tidak ada.	| 
| OSError	| 	Dibangkitkan untuk kesalahan terkait sistem operasi.	| 
| SyntaxError	| 	Dibesarkan saat ada kesalahan dengan sintaks Python.	| 
| IndentationError	| 	Dibesarkan saat indentasi tidak ditentukan dengan benar.	| 
| SystemError	| 	Dibesarkan saat penafsir menemukan masalah internal, namun bila kesalahan ini ditemui juru bahasa Python tidak keluar.	| 
| SystemExit	| 	Dibesarkan saat juru bahasa Python berhenti dengan menggunakan fungsi sys.exit (). Jika tidak ditangani dalam kode, menyebabkan penafsir untuk keluar.	| 
| TypeError		| Dibesarkan saat operasi atau fungsi dicoba yang tidak valid untuk tipe data yang ditentukan.	| 
| ValueError	| 	Dibesarkan ketika fungsi bawaan untuk tipe data memiliki jenis argumen yang valid, namun argumen tersebut memiliki nilai yang tidak valid yang ditentukan.	| 
| RuntimeError	| 	Dibesarkan saat kesalahan yang dihasilkan tidak termasuk dalam kategori apa pun.	| 
| NotImplementedError		| Dibesarkan ketika metode abstrak yang perlu diimplementasikan di kelas warisan sebenarnya tidak dilaksanakan.	| 


<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/file-io-python"><i class="fas fa-arrow-circle-left"></i>File I/O Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/object-class-python" class="hoverable">Object & Class Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
