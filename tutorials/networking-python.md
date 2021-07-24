---
layout: tutorial
title: Networking Python
permalink: /tutorial/networking-python
---

---

Python menyediakan dua tingkat akses ke layanan jaringan. Pada tingkat rendah, Anda dapat mengakses dukungan soket dasar dalam sistem operasi yang mendasarinya, yang memungkinkan Anda untuk mengimplementasikan klien dan server untuk kedua protokol berorientasi koneksi dan tanpa sambungan.

Python juga memiliki pustaka yang menyediakan akses tingkat lebih tinggi ke protokol jaringan tingkat aplikasi tertentu, seperti FTP, HTTP, dan seterusnya.

Bab ini memberi Anda pemahaman tentang konsep paling terkenal dalam Networking - Socket Programming.

### Apa itu Socket?

Soket adalah titik akhir dari saluran komunikasi dua arah. Soket dapat berkomunikasi dalam suatu proses, antara proses pada mesin yang sama, atau antara proses di berbagai benua.

Soket dapat diimplementasikan melalui sejumlah jenis saluran yang berbeda: soket domain Unix, TCP, UDP, dan sebagainya. Pustaka socket menyediakan kelas khusus untuk menangani transportasi umum serta antarmuka umum untuk menangani sisanya.

### Modul Socket

Untuk membuat soket, Anda harus menggunakan fungsi socket.socket () yang tersedia dalam modul soket, yang memiliki sintaks umum

`s = socket.socket (socket_family, socket_type, protocol=0)`

### Server Socket Method

 | Method  | Penjelasan |
 | --- | --- |
 | s.bind() |   This method binds address (hostname, port number pair) to socket. | 
 | s.listen()  | This method sets up and start TCP listener. | 
 | s.accept()  | This passively accept TCP client connection, waiting until connection arrives (blocking). | 

### Client Socket Method

 | Method  | Penjelasan |
 | --- | --- |
 |s.connect() | This method actively initiates TCP server connection.|
 
## General Method Socket 

 | Method  | Penjelasan |
 | --- | --- |
| s.recv() |  This method receives TCP message | 
| s.send() |  This method transmits TCP message | 
| s.recvfrom()  | This method receives UDP message | 
| s.sendto()  | This method transmits UDP message | 
| s.close()  | This method closes socket | 
| socket.gethostname()  | Returns the hostname. | 

{% highlight python %}
#!/usr/bin/python           # This is server.py file

import socket               # Import socket module

s = socket.socket()         # Create a socket object
host = socket.gethostname() # Get local machine name
port = 12345                # Reserve a port for your service.
s.bind((host, port))        # Bind to the port

s.listen(5)                 # Now wait for client connection.
while True:
   c, addr = s.accept()     # Establish connection with client.
   print 'Got connection from', addr
   c.send('Thank you for connecting')
   c.close()                # Close the connection
{% endhighlight %}
   
   
### Server Sederhana

Untuk menulis server Internet, kami menggunakan fungsi soket yang tersedia di modul soket untuk membuat objek soket. Objek soket kemudian digunakan untuk memanggil fungsi lain untuk menyiapkan server soket.

Sekarang sebut `bind(hostname,port)` berfungsi untuk menentukan port untuk layanan Anda pada host yang diberikan.

Selanjutnya, panggil metode penerimaan objek yang dikembalikan. Metode ini menunggu sampai klien terhubung ke port yang Anda tentukan, dan kemudian mengembalikan objek koneksi yang mewakili koneksi ke klien itu.

### Client Sederhana

Mari kita menulis program klien yang sangat sederhana yang membuka koneksi ke port yang diberikan 12345 dan host yang diberikan. Ini sangat sederhana untuk membuat klien soket menggunakan fungsi modul soket Python.

Socket.connect (hosname, port) membuka koneksi TCP ke hostname pada port. Setelah Anda memiliki soket terbuka, Anda dapat membaca darinya seperti objek IO apa pun. Setelah selesai, jangan lupa untuk menutupnya, karena Anda akan menutup file.

Kode berikut adalah klien yang sangat sederhana yang terhubung ke host dan port yang diberikan, membaca data yang tersedia dari soket, dan kemudian keluar

{% highlight python %}
#!/usr/bin/python           # This is client.py file

import socket               # Import socket module

s = socket.socket()         # Create a socket object
host = socket.gethostname() # Get local machine name
port = 12345                # Reserve a port for your service.

s.connect((host, port))
print s.recv(1024)
s.close                     # Close the socket when done
{% endhighlight %}

Sekarang jalankan server.py ini di latar belakang dan kemudian jalankan di atas client.py untuk melihat hasilnya.

##### Jalankan server.
`python server.py &`

Setelah server berjalan lanjutkan

##### Jalankan client:
`python client.py`

Hasilnya akan seperti ini :
`Got connection from ('127.0.0.1', 48437)`
`Thank you for connecting`

### Modul Internet pada Python

Berikut tabel daftar beberapa modul penting dalam pemrograman Jaringan / Internet Python.

 | Protocol	 | Common function | 	Port No	 | Python module | 
 | --- | --- | --- | --- |
 | HTTP | 	Web pages | 	80 | 	httplib, urllib, xmlrpclib | 
 | NNTP	 | Usenet news	 | 119 | 	nntplib | 
 | FTP	 | Transfer file | 	20 | 	ftplib, urllib | 
 | SMTP	 | Mengirim email | 	25 | 	smtplib | 
 | POP3	 | Fetching email | 	110 | 	poplib | 
 | IMAP4 | 	Fetching email | 	143	 | imaplib | 
 | Telnet | 	Command lines | 	23 | 	telnetlib | 
 | Gopher | 	Document transfers | 	70	 | gopherlib, urllib | 

> [Edit tutorial ini](https://github.com/belajarpythoncom/belajarpythoncom.github.io/edit/master/tutorials/networking-python.md)

<div class="row navigation-tutorial">
    <div class="col-md-6 prev-tutorial">
        <a href="/tutorial/akses-database-python"><i class="fas fa-arrow-circle-left"></i>Akses Database Python</a>
    </div>
    <div class="col-md-6 next-tutorial">
        <a href="/tutorial/pengembangan-web-python" class="hoverable">Pengembangan Web Python<i class="fas fa-arrow-circle-right"></i></a>
    </div>
</div>
