// ol li
function updateOLBadges() {
  document.querySelectorAll("ol > li").forEach(li => {
    // hapus badge lama
    const old = li.querySelector(".noir-badge");
    if (old) old.remove();

    // cari text node pertama
    const textNode = [...li.childNodes].find(n => n.nodeType === Node.TEXT_NODE);
    if (!textNode || !textNode.textContent.trim()) return;

    // ambil bounding huruf pertama
    const range = document.createRange();
    range.setStart(textNode, 0);
    range.setEnd(textNode, 1);

    const rects = range.getClientRects();
    if (!rects.length) return;
    const rectText = rects[0];
    const rectLi = li.getBoundingClientRect();

    const top = rectText.top - rectLi.top + (rectText.height / 2) - 14;
    const left = rectText.left - rectLi.left - 38;

    // hitung nomor actual (support start="x")
    const parent = li.parentNode;
    const start = parseInt(parent.getAttribute("start") || 1);
    const index = [...parent.children].indexOf(li);
    const numValue = start + index;

    // buat badge
    const badge = document.createElement("span");
    badge.className = "noir-badge";
    badge.textContent = numValue;
    badge.style.top = top + "px";
    badge.style.left = left + "px";

    li.appendChild(badge);
  });
}

window.addEventListener("load", updateOLBadges);
window.addEventListener("resize", updateOLBadges);

// ul li
function updateULBullets() {
  document.querySelectorAll("ul > li").forEach(li => {
    // hapus bullet lama
    const old = li.querySelector(".noir-bullet");
    if (old) old.remove();

    // cari text node pertama
    const textNode = [...li.childNodes].find(n => n.nodeType === Node.TEXT_NODE);
    if (!textNode || !textNode.textContent.trim()) return;

    // ambil rect huruf pertama
    const range = document.createRange();
    range.setStart(textNode, 0);
    range.setEnd(textNode, 1);

    const rects = range.getClientRects();
    if (!rects.length) return;

    const rectText = rects[0];
    const rectLi = li.getBoundingClientRect();

    // hitung posisi bullet agar sejajar
    const top = rectText.top - rectLi.top + rectText.height/2 - 5;
    const left = rectText.left - rectLi.left - 22;

    // buat bullet
    const bullet = document.createElement("span");
    bullet.className = "noir-bullet";
    bullet.style.top = top + "px";
    bullet.style.left = left + "px";

    li.appendChild(bullet);
  });
}

window.addEventListener("load", updateULBullets);
window.addEventListener("resize", updateULBullets);
