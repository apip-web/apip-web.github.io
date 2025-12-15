---
layout: default
title: About Me
---

<style>
body {
  background: #0d0d0d;
  color: #e8e8e8;
}

.container {
  max-width: 850px;
  margin: auto;
  background: #111;
  border-radius: 14px;
  padding: 25px 15px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.6);
}

.header {
  display: flex;
  align-items: center;
  gap: 25px;
}

.header img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border:3px solid rgba(255,255,255,0.08);
  margin-top: 20px;
}

.header h1 {
  margin: 0 0 6px 0;
  font-size: 28px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 20px;
  font-variation-settings: "wght" 700, "opsz" 96;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.header li {
  font-size: 14px;
  color: #bcbcbc;
  margin-bottom: 5px;
  line-height: 1;
}

.noir-bullet {
  display: none;
}

.section-title {
  margin-top: 35px;
  font-size: 20px;
  color: #FF3366;
  font-weight: 700;
}

p {
  color: #d0d0d0;
}

.badges {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.badges span {
  background: #FF3366;
  color: #fff;
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 15px;
  box-shadow: 0 0 10px rgba(255,51,102,0.3);
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  background: rgba(0,0,0,0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
}

.lightbox-overlay.visible {
  opacity: 1;
}

.lightbox-img {
  position: fixed;
  z-index: 1001;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 3px;
  transition: transform 300ms ease-in-out, opacity 300ms ease-in-out;
  will-change: transform;
  opacity: 1;
  /* Penting: override max-width default */
  max-width: 100%;
}
</style>

<div class="container">
  
  <div class="header">
    <a href="/assets/img/33422003.jpg" target="_blank" rel="noopener" data="pop">
  <img src="/assets/img/33422003.webp" alt="Profile Picture" loading="lazy">
</a>
    <div>
      <h1>Apip</h1>
      <ul>
  <li>Web tinkerer</li>
  <li>Android modder</li>
  <li>Loves clean UI</li>
</ul>
    </div>
  </div>

<h2 class="section-title">About Me</h2>
<p>
  I love experimenting with HTML, CSS, and JavaScript, as well as modifying Android apps directly from my phone.  
  I also build small systems like tooltips, popups, RSS readers, static blogs on GitHub Pages, and various other UI components. Game modding, etc.
</p>

<h2 class="section-title">Skills</h2>
<div class="badges">
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
  <span>Android Modding</span>
  <span>APK Editor</span>
  <span>UI Design</span>
  <span>App Theming</span>
  <span>Game Modding</span>
  <span>AutoIt</span>
  <span>Blogger</span>
</div>

<h2 class="section-title">Hobbies</h2>
<p>
  I enjoy tinkering, creating clean and minimal UI elements, and tweaking Android layouts.  
  I do all of this simply for fun and to pass the time.
</p>

</div>

<script>
// <![CDATA[
// Lightbox
   
document.addEventListener("DOMContentLoaded", function() {
  
  // Pasang 1 event listener di document.body
  document.body.addEventListener("click", function(event) {
console.log("Klik terdeteksi pada:", event.target);

    // Cari elemen <img> atau <a> yang punya data="pop"
    const el = event.target.closest('img[data="pop"], a[data="pop"]');
    if (!el) return;  // Kalau klik bukan di elemen yang kita inginkan, stop.

    event.preventDefault();

    // Sumber gambar
    const src = (el.tagName === "A") ? el.getAttribute("href") : el.getAttribute("src");

    // Buat overlay
    let overlay = document.createElement("div");
    overlay.classList.add("lightbox-overlay");
    document.body.appendChild(overlay);

    // Buat cloned image
    let clonedImg = new Image();
    clonedImg.src = src;
    clonedImg.classList.add("lightbox-img");
    document.body.appendChild(clonedImg);

    // **Cegah scroll**
    document.body.style.overflow = "hidden";

    // Hitung bounding rect elemen (posisi & ukuran awal)
    const rect = el.getBoundingClientRect();

    // Atur posisi & ukuran awal agar sama dengan bounding box elemen
    clonedImg.style.position = "fixed";
    clonedImg.style.top = rect.top + "px";
    clonedImg.style.left = rect.left + "px";
    clonedImg.style.width = rect.width + "px";
    clonedImg.style.height = rect.height + "px";
    clonedImg.style.transform = "translate(0,0) scale(1)";
    clonedImg.style.opacity = "1";

    // Hitung titik tengah elemen & titik tengah viewport
    const elemCenterX = rect.left + rect.width / 2;
    const elemCenterY = rect.top + rect.height / 2;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;

    // Fungsi menampilkan lightbox (setelah gambar loaded agar rasio diketahui)
    clonedImg.onload = function() {
      // Ukuran asli gambar
      const naturalWidth = clonedImg.naturalWidth;
      const naturalHeight = clonedImg.naturalHeight;

      // Ukuran akhir: Full width (100vw) dengan rasio asli
      let finalWidth = viewportWidth; // Selalu penuh
      let finalHeight = finalWidth / (naturalWidth / naturalHeight);

      // Jika tinggi melebihi layar, batasi dengan max 90vh
      if (finalHeight > viewportHeight * 0.9) {
        finalHeight = viewportHeight * 0.9;
        finalWidth = finalHeight * (naturalWidth / naturalHeight);
      }

      // Perhitungan skala untuk mempertahankan rasio gambar asli
      let finalScaleX = finalWidth / rect.width;
      let finalScaleY = finalHeight / rect.height;

      // Hitung perpindahan agar center boundingRect pindah ke center layar
      const translateX = centerX - elemCenterX;
      const translateY = centerY - elemCenterY;

      // Animasi buka (requestAnimationFrame agar posisi awal dirender dulu)
      requestAnimationFrame(() => {
        overlay.classList.add("visible");
        // transform akhir => geser ke tengah + scale
        clonedImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${finalScaleX}, ${finalScaleY})`;
      });
    };

    // Fungsi tutup
    const closeLightbox = () => {
      overlay.classList.remove("visible");
      // Kembalikan transform ke awal => boundingRect
      clonedImg.style.transform = "translate(0,0) scale(1)";
      
      // **Aktifkan kembali scroll setelah lightbox ditutup**
      document.body.style.overflow = "";

      setTimeout(() => {
        overlay.remove();
        clonedImg.remove();
      }, 300);
    };

    // Klik overlay / gambar menutup
    overlay.addEventListener("click", closeLightbox);
    clonedImg.addEventListener("click", closeLightbox);
  });

});

// ]]>
</script>
