---
layout: tutorial
title: Pengembangan Web Python
permalink: /tutorial/pengembangan-web-python
---

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

{% highlight python %}
from flask import Flask
app = Flask(__name__)
 
@app.route("/")
def hello():
    return "Hello World!"
 
if __name__ == "__main__":
    app.run()
{% endhighlight %}

Jalankan server dengan perintah: 
`python hello.py`

Buka [http://localhost:5000/](http://localhost:5000/) dibrowser anda dan akan muncul `Hello World!`



#### Django
Django adalah kerangka kerja Python Web tingkat tinggi yang menangani banyak kerumitan pengembangan Web, sehingga Anda dapat fokus untuk menulis aplikasi tanpa perlu menemukan kembali roda.

Kelebihan Framework Django dibanding yang lain adalah pada segi skalabilitas. Framework ini cocok untuk pengembangan aplikasi besar.

Untuk menginstal Django jalankan perintah dibawah ini :
`pip install Django==1.7.1`

Setelah terinstal, buat direktori /django-hello/ untuk aplikasi Anda. Dalam direktori ini buat file hello.py dengan code dibawah ini:

{% highlight python %}
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
 
if __name__ == "__main__":
    execute_from_command_line(sys.argv)
{% endhighlight %}

Jalankan server dengan perintah :
`python hello.py runserver`

Server HTTP Django akan mulai dan jika Anda membuka [http://127.0.0.1:8000/hello/](http://127.0.0.1:8000/hello/)



> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/tutorials/pengembangan-web-python.md)

<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/networking-python"><i class="fas fa-arrow-circle-left"></i>Networking Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        
    </div>
</div>
