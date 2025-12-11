---
layout: post
title: "Tentang import font dari Google Font"
author: Apip
tags: tutorial
---

## Tentang import font dari Google Font

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
    <h3>Font Arial</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
      culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. 
      Nullam varius, turpis et commodo pharetra, est eros bibendum elit, 
      nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh 
      euismod gravida. Duis ac tellus et risus vulputate vehicula.
    </p>
  </div>

  <div class="font-secondary">
    <h3>Font Roboto Flex</h3>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
      quae ab illo inventore veritatis et quasi architecto beatae vitae 
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
      sit aspernatur aut odit aut fugit.
    </p>
    <p>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui 
      blanditiis praesentium voluptatum deleniti atque corrupti quos 
      dolores et quas molestias excepturi sint occaecati cupiditate 
      non provident, similique sunt in culpa qui officia deserunt mollitia 
      animi, id est laborum et dolorum fuga.
    </p>
  </div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght,XOPQ,XTRA,YOPQ,YTDE,YTFI,YTLC,YTUC@8..144,100..1000,96,468,79,-203,738,514,712&display=swap');

.font-primary {
  font-family: Arial;
}

.font-secondary {
  font-family: Roboto Flex;
}
</style>
