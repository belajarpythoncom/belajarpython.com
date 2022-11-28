---
layout: tutorial
title: Pengembangan Web Python
order: 24
---

Pengembangan web adalah istilah umum untuk membuat konsep, membuat, menyebarkan, dan mengoperasikan aplikasi website dan antarmuka pemrograman aplikasi untuk Website.

### Penggunaan Python dalam Pengembangan Web

Python dapat digunakan untuk membangun aplikasi web sisi server. Sementara kerangka web tidak diperlukan untuk membangun aplikasi web, jarang sekali pengembang tidak akan menggunakan pustaka sumber terbuka yang ada untuk mempercepat kemajuan mereka dalam membuat aplikasi mereka berfungsi.

Python tidak digunakan di browser web. Bahasa yang dijalankan di browser seperti Chrome, Firefox, dan Internet Explorer adalah JavaScript. Proyek seperti pyjs dapat dikompilasi dari Python ke JavaScript. Namun, sebagian besar pengembang Python menulis aplikasi web mereka menggunakan kombinasi Python dan JavaScript. Python dieksekusi di sisi server sementara JavaScript diunduh ke klien dan dijalankan oleh browser web.

Untuk membuat website dengan menggunakan Python sebagai bahasa pemrogramanya, caranya sangat mudah. Tetapi perlu diingat bahwa sebelumnya Anda sudah harus menguasai HTML, CSS dan Javascript.

### Web Framework Python

Framework pengembangan web pada python yang paling populer dan mudah dipelajari ada Django dan Flask

#### Flask

Flask adalah sebuah microframework web python yang mudah untuk dipelajari, mudah diinstal dan pengembangan yang sangat simpel.

Berikut adalah beberapa kelebihanya :

- mudah digunakan.
- dibangun di server pengembangan dan debugger
- dukungan pengujian unit terpadu
- Kirim permintaan yang tenang
- menggunakan tempering Jinja2
- dukungan untuk cookie aman (sesi sisi klien)
- 100% WSGI 1.0 compliant
- Berbasis Unicode
- didokumentasikan secara ekstensif

Instalasi Flask
`pip install Flask`

Hello World Web App dengan Flask

```python
from flask import Flask
app = Flask(**name**)

@app.route("/")
def hello():
return "Hello World!"

if **name** == "**main**":
app.run()
```

Jalankan server dengan perintah:
`python hello.py`

Buka [http://localhost:5000/](http://localhost:5000/) dibrowser anda dan akan muncul `Hello World!`

#### Django

Django adalah kerangka kerja Python Web tingkat tinggi yang menangani banyak kerumitan pengembangan Web, sehingga Anda dapat fokus untuk menulis aplikasi tanpa perlu menemukan kembali roda.

Kelebihan Framework Django dibanding yang lain adalah pada segi skalabilitas. Framework ini cocok untuk pengembangan aplikasi besar.

Untuk menginstal Django jalankan perintah dibawah ini :
`pip install Django==1.7.1`

Setelah terinstal, buat direktori /django-hello/ untuk aplikasi Anda. Dalam direktori ini buat file hello.py dengan code dibawah ini:

```python
#!/usr/bin/env python
import sys
from django.conf import settings
from django.conf.urls import patterns
from django.http import HttpResponse
from django.core.management import execute_from_command_line

settings.configure(
DEBUG=True,
SECRET_KEY='asecretkey',
ROOT_URLCONF=sys.modules[__name__],
)

def index(request):
return HttpResponse('Hello, World')

urlpatterns = patterns('',
(r'^hello/$', index),
)

if **name** == "**main**":
execute_from_command_line(sys.argv)
```

Jalankan server dengan perintah :
`python hello.py runserver`

Server HTTP Django akan mulai dan jika Anda membuka [http://127.0.0.1:8000/hello/](http://127.0.0.1:8000/hello/)

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/_tutorial/pengembangan-web-python.md)


<div class="mt-8 inline justify-between gap-x-4 md:flex">
  <div class="flex justify-center mb-4 md:mb-0">
    <a href="/tutorial/networking-python" class="text-primary-300 hover:text-primary-300 order-2 flex h-12 items-center rounded-full bg-blue-500 bg-opacity-20 px-8 text-base hover:no-underline md:order-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
      </svg>
      <span class="-mt-0.5">Networking Python</span>
    </a>
  </div>
</div>
