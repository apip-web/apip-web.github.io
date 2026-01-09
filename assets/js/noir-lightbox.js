const loadedImages = new Map(); // src → Image object

/* helper untuk fake progress jika fetch gagal/CORS */
function startFakeProgress(fill, text) {
  let p = 0;
  return setInterval(() => {
    p += Math.random() * 7;
    if (p >= 90) p = 90;
    fill.style.width = p + "%";
    text.textContent = Math.floor(p) + "%";
  }, 180);
}

document.addEventListener("DOMContentLoaded", function () {

  document.body.addEventListener("click", function (event) {

    const el = event.target.closest('img[data="pop"], a[data="pop"]');
    if (!el) return;
    event.preventDefault();

    const src = el.tagName === "A" ? el.getAttribute("href") : el.getAttribute("src");
    if (!src) return;

    /* 1. Buat overlay dulu */
    const overlay = document.createElement("div");
    overlay.className = "app-lightbox-overlay";
    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    /* 2. Ambil data posisi untuk animasi */
    const rect = el.getBoundingClientRect();
    const elemCenterX = rect.left + rect.width / 2;
    const elemCenterY = rect.top + rect.height / 2;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    let img;
    let progress = null, fill = null, text = null, fakeTimer = null;

    /* 3. Logika Cache & Progress Bar */
    if (loadedImages.has(src)) {
      img = loadedImages.get(src);
    } else {
      img = new Image();
      // Kita set src original sebentar untuk memancing status 'complete' dari browser
      img.src = src; 
      loadedImages.set(src, img);
    }

    // JIKA SUDAH ADA DI CACHE (img.complete)
    if (img.complete && img.naturalWidth > 0) {
      // Langsung tampilkan tanpa membuat elemen progress bar
      showImage(img, rect, elemCenterX, elemCenterY, centerX, centerY, overlay);
    } 
    // JIKA BELUM ADA (Harus Download)
    else {
      /* Buat elemen progress popup hanya jika diperlukan */
      progress = document.createElement("div");
      progress.className = "app-lightbox-progress";
      progress.innerHTML = `
        <div class="app-progress-box">
          <div class="app-progress-bar">
            <div class="app-progress-fill"></div>
          </div>
          <div class="app-progress-text">0%</div>
        </div>`;
      document.body.appendChild(progress);

      fill = progress.querySelector(".app-progress-fill");
      text = progress.querySelector(".app-progress-text");

      /* Mulai Fetch untuk progress asli */
      fetch(src)
        .then(res => {
          const total = +res.headers.get("Content-Length");
          const contentType = res.headers.get("Content-Type"); 

          if (!res.ok || !res.body || !total) throw 0;

          const reader = res.body.getReader();
          let loaded = 0;
          const chunks = [];

          function read() {
            return reader.read().then(({ done, value }) => {
              if (done) {
                // Konversi ke Blob dengan Type agar tidak jadi teks
                const blob = new Blob(chunks, { type: contentType || 'image/jpeg' });
                const url = URL.createObjectURL(blob);
                
                img.onload = () => showImage(img, rect, elemCenterX, elemCenterY, centerX, centerY, overlay);
                img.src = url;
                return;
              }
              loaded += value.length;
              chunks.push(value);
              const p = (loaded / total) * 100;
              fill.style.width = p + "%";
              text.textContent = Math.floor(p) + "%";
              return read();
            });
          }
          return read();
        })
        .catch(() => {
          /* Fallback jika fetch gagal (misal masalah CORS) */
          fakeTimer = startFakeProgress(fill, text);
          img.onload = () => {
            if (fakeTimer) clearInterval(fakeTimer);
            if (fill && text) {
              fill.style.width = "100%";
              text.textContent = "100%";
            }
            showImage(img, rect, elemCenterX, elemCenterY, centerX, centerY, overlay);
          };
          img.src = src;
        });
    }

    /* Fungsi tutup */
    overlay.onclick = () => {
      overlay.classList.remove("visible");
      if (img) img.style.transform = "translate(0,0) scale(1)";
      document.body.style.overflow = "";
      setTimeout(() => {
        overlay.remove();
        if (img) img.remove();
      }, 300);
    };
  });

});

/* Fungsi tampilkan image dengan animasi (mekar) */
function showImage(img, rect, elemCenterX, elemCenterY, centerX, centerY, overlay) {
  // Hapus progress bar jika ada
  const progress = document.querySelector(".app-lightbox-progress");
  if (progress) progress.remove();

  document.body.appendChild(img);

  // Set posisi awal (menempel di thumbnail)
  img.style.position = "fixed";
  img.style.top = rect.top + "px";
  img.style.left = rect.left + "px";
  img.style.width = rect.width + "px";
  img.style.height = rect.height + "px";
  img.style.transform = "translate(0,0) scale(1)";
  img.style.transition = "none"; // Matikan transisi untuk posisi awal
  img.classList.add("app-lightbox-img");

  // Paksa browser menghitung posisi (reflow)
  img.offsetHeight;

  // Hitung ukuran akhir (mekar)
  let finalW = innerWidth;
  let finalH = finalW / (img.naturalWidth / img.naturalHeight);
  if (finalH > innerHeight * 0.9) {
    finalH = innerHeight * 0.9;
    finalW = finalH * (img.naturalWidth / img.naturalHeight);
  }

  const scaleX = finalW / rect.width;
  const scaleY = finalH / rect.height;
  const tx = centerX - elemCenterX;
  const ty = centerY - elemCenterY;

  // Jalankan animasi
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    img.style.transition = "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${scaleX}, ${scaleY})`;
  });

  // Klik pada gambar juga menutup lightbox
  img.onclick = () => {
    overlay.classList.remove("visible");
    img.style.transform = "translate(0,0) scale(1)";
    document.body.style.overflow = "";
    setTimeout(() => {
      overlay.remove();
      img.remove();
    }, 300);
  };
}
