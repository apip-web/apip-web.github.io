const loadedImages = new Map(); // src → Image object

/* fake progress (fallback CORS) */
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

    /* overlay */
    const overlay = document.createElement("div");
    overlay.className = "app-lightbox-overlay";
    document.body.appendChild(overlay);

    document.body.style.overflow = "hidden";

    /* posisi awal */
    const rect = el.getBoundingClientRect();
    const elemCenterX = rect.left + rect.width / 2;
    const elemCenterY = rect.top + rect.height / 2;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    /* buat image / ambil dari cache */
    let img, progress = null, fill = null, text = null, fakeTimer = null;

    if (loadedImages.has(src)) {
      img = loadedImages.get(src);
      if (img.complete) {
        showImage(img, rect, elemCenterX, elemCenterY, centerX, centerY, overlay);
      } else {
        img.onload = () => showImage(img, rect, elemCenterX, elemCenterY, centerX, centerY, overlay);
      }
    } else {
      img = new Image();
      loadedImages.set(src, img); // <-- catat segera agar klik berikutnya tidak download ulang

      /* progress popup */
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

      /* coba fetch untuk progress asli */
      fetch(src)
        .then(res => {
          const total = +res.headers.get("Content-Length");
          if (!res.ok || !res.body || !total) throw 0;

          const reader = res.body.getReader();
          let loaded = 0;
          const chunks = [];

          function read() {
            return reader.read().then(({ done, value }) => {
              if (done) {
                const blob = new Blob(chunks);
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
          /* fallback fake progress */
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

    /* tutup lightbox */
    const close = () => {
      overlay.classList.remove("visible");
      if (img) img.style.transform = "translate(0,0) scale(1)";
      document.body.style.overflow = "";
      setTimeout(() => {
        overlay.remove();
        if (img) img.remove();
      }, 300);
    };

    overlay.onclick = close;
  });

});

/* fungsi tampilkan image dengan animasi */
function showImage(img, rect, elemCenterX, elemCenterY, centerX, centerY, overlay) {

  const progress = document.querySelector(".app-lightbox-progress");
  if (progress) progress.remove();

  document.body.appendChild(img);

  img.style.position = "fixed";
  img.style.top = rect.top + "px";
  img.style.left = rect.left + "px";
  img.style.width = rect.width + "px";
  img.style.height = rect.height + "px";
  img.style.transform = "translate(0,0) scale(1)";
  img.classList.add("app-lightbox-img");

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

  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    img.style.transform = `translate(${tx}px, ${ty}px) scale(${scaleX}, ${scaleY})`;
  });

  /* klik gambar juga menutup */
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
