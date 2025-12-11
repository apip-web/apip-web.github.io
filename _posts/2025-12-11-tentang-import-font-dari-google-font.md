---
layout: post
title: "Tentang import font dari Google Font"
author: Apip
tags: tutorial
---

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght,XOPQ,XTRA,YOPQ,YTDE,YTFI,YTLC,YTUC@8..144,100..1000,96,468,79,-203,738,514,712&display=swap');
```

## Keterangan

| Bagian | Artinya |
|--------|------------------------------------------------------------|
| `@import url(...)` | Cara lama untuk memasukkan Google Fonts (bisa juga pakai <link> di <head>) |
| `family=Roboto+Flex` | Nama fontnya: Roboto Flex (spasi diganti +) |
| `opsz,wght,XOPQ,...` | Ini semua adalah “variable axes” (sumbu variabel) dari Roboto Flex. Font ini termasuk variable font paling canggih saat ini. |
| `8..144` | Optical Size (opsz): dari 8 sampai 144 pt |
| `100..1000` | Weight (wght): dari tipis banget (100) sampai tebal banget (1000) |
| Sisanya (XOPQ, XTRA, dst) | Sumbu-sumbu eksperimental lain untuk mengatur bentuk huruf secara halus |
| `display=swap` | Font langsung muncul pakai fallback dulu, baru ganti ke Roboto Flex setelah selesai download (biar web tidak blank lama) |

## Perbedaan

  <div class="font-primary">
    <h3>Font Arial 15px</h3>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
      quae ab illo inventore veritatis et quasi architecto beatae vitae 
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
      sit aspernatur aut odit aut fugit.
    </p>

  </div>

  <div class="font-secondary">
    <h3>Font Roboto Flex 16px</h3>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
      quae ab illo inventore veritatis et quasi architecto beatae vitae 
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
      sit aspernatur aut odit aut fugit.
    </p>

  </div>

  <div class="font-third">
    <h3>Font Google Sans Code 14px</h3>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
      quae ab illo inventore veritatis et quasi architecto beatae vitae 
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
      sit aspernatur aut odit aut fugit.
    </p>

  </div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex');

@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code');

.font-primary {
  font-family: Arial, Courier;
  color: #888;
  font-size: 15px;
  line-height: 1.4;
}

.font-secondary {
  font-family: Roboto Flex, Courier;
  color: #888;
  font-size: 16px;
  line-height: 1.4;
}

.font-third {
  font-family: Google Sans Code, Courier;
  color: #888;
  font-size: 14px;
  line-height: 1.4;
}
</style>
