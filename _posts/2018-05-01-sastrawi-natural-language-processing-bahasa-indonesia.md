---
layout: article
comments: true
title: Sastrawi, Natural Language Processing Mudah Dengan Python
---

---
![Sastrawi NLP Bahasa Indonesia](/images/sastrawi.jpg "NLP Bahasa Indonesia")

Sastrawi adalah perpustakaan PHP sederhana yang memungkinkan Anda untuk mengurangi kata-kata yang terinfleksi dalam Bahasa Indonesia (Bahasa Indonesia) ke bentuk dasarnya (batang)

Stemming adalah proses mengubah kata berimbuhan menjadi kata dasar. Contoh:

`menahan => tahan`
`berbalas-balasan => balas`

##### Contoh kasus

Misalnya sebuah blog post berisi:

`Rakyat memenuhi halaman gedung untuk menyuarakan isi hatinya.`

Pencarian dengan `query` di bawah ini tidak akan menemukan post di atas

`SELECT * FROM posts WHERE content LIKE '%suara%'`

Proses stemming dapat membantu menemukan dokumen yang sedang dicari yaitu dengan menanggalkan imbuhan-imbuhan hingga hanya menyisakan kata dasar seperti berikut:

`rakyat penuh halaman gedung suara isi hati`

Lalu kata kunci pencarian juga dijadikan kata dasar:

`Bersuara => suara`

#### Penggunaan

{% highlight python %}
# import StemmerFactory class
from Sastrawi.Stemmer.StemmerFactory import StemmerFactory

# create stemmer
factory = StemmerFactory()
stemmer = factory.create_stemmer()

# stemming process
sentence = 'Perekonomian Indonesia sedang dalam pertumbuhan yang membanggakan'
output   = stemmer.stem(sentence)

print(output)
# ekonomi indonesia sedang dalam tumbuh yang bangga

print(stemmer.stem('Mereka meniru-nirukannya'))
# mereka tiru
{% endhighlight %}

Untuk lebih lengkapnya silahkan lihat di [Github](https://github.com/har07/PySastrawi)
