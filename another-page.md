---
layout: default
---

## Welcome to another page

_yay_

[back](./)

## Contoh Button

Klik tombol ini:

<button id="btn">Klik saya</button>

<script>
document.getElementById("btn").addEventListener("click", () => {
  alert("Halo dari JS!");
});
</script>

### Tes ol li start

<ol start="5">
  <li>Item pertama</li>
  <li>Item kedua</li>
  <li>Item ketiga</li>
</ol>

5. Item pertama
6. Item kedua

---
layout: default
---

### Tes CSS di Markdown

<style>
  .highlight {
    background: yellow;
    font-weight: bold;
    padding: 2px 4px;
  }
</style>

Ini teks biasa, dan <span class="highlight">ini teks yang di-highlight</span>.
