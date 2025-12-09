---
layout: default
title: HTML ESCAPER — NOIR
---
<style>
body {
  background: #0f0f0f;
  color: #e6e6e6;
  font-family: sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.anchorjs-link {
  display: none;
}

h1 {
  font-size: 28px;
  font-family: sans-serif;
  letter-spacing: 2px;
  color: #ff3366;
  text-shadow: 0 0 12px #ff3366;
  margin-bottom: 25px;
}

textarea {
  width: 100%;
  height: 180px;
  background: #1a1a1a;
  color: #f8f8f8;
  border: 1px solid #333;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1.5;
  resize: vertical;
}

textarea:focus {
  outline: none;
  border: 1px solid #ff3366;
  box-shadow: 0 0 8px #ff3366;
}

.output {
  margin-top: 20px;
}

.output textarea {
  height: 180px;
  background: #151515;
  border: 1px solid #444;
}

button {
  margin-top: 15px;
  background: #ff3366;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  transition: background .15s, box-shadow .15s;
}

button:hover {
  background: #ff4d80;
  box-shadow: 0 0 20px #ff3366;
}

.copy-btn, .unescapeHTML-btn {
  margin-left: 10px;
  background: #222;
  box-shadow: none;
}

.copy-btn:hover, .unescapeHTML-btn:hover {
  border-color: #ff3366;
}
</style>

<div class="container">
  <h1>HTML ESCAPER — NOIR</h1>

  <textarea id="input" placeholder="Paste HTML here..."></textarea>

  <div class="output">
    <textarea id="output" readonly placeholder="Output..."></textarea>
  </div>

  <button onclick="escapeHTML()">Escape</button>
  <button class="unescapeHTML-btn" onclick="unescapeHTML()">UnEscape</button>
  <button class="copy-btn" onclick="copyOutput(this)">Copy</button>
</div>

<script>
function escapeHTML() {
  const text = document.getElementById("input").value;
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  document.getElementById("output").value = escaped;
}

function unescapeHTML() {
  let text = document.getElementById("input").value;

  // urutan penting! decode yang paling spesifik dulu
  const unescaped = text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

  document.getElementById("output").value = unescaped;
}

function copyOutput(btn) {
  const text = document.getElementById("output").value;

  navigator.clipboard.writeText(text).then(() => {

    const originalHTML = btn.innerHTML;

    btn.innerHTML = "Copied";

    // kembalikan setelah 2 detik
    setTimeout(() => {
      btn.innerHTML = originalHTML;
    }, 2000);

  }).catch(() => {
    const out = document.getElementById("output");
    out.select();
    document.execCommand("copy");
  });
}
</script>
