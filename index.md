---
layout: default
---
<div class="homepage">
  <h2>Selamat Datang di Situs Saya</h2>

  <p>Ini adalah blog pribadi saya tentang teknologi dan coding.</p>

<div id="lcd-countdown" style="text-align:center; font-family:monospace; margin:40px 0;">
  <h2 style="font-size:28px; color:#222; margin-bottom:20px;">Countdown to New Year</h2>
  <div class="lcd-container">
    <div class="lcd-box"><span class="number">0</span><div class="label">DAYS</div></div>
    <div class="lcd-box"><span class="number">0</span><div class="label">HOURS</div></div>
    <div class="lcd-box"><span class="number">0</span><div class="label">MINUTES</div></div>
    <div class="lcd-box"><span class="number">0</span><div class="label">SECONDS</div></div>
  </div>
</div>

  <h3>Posts</h3>
  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date: "%d %b %Y" }}
      </li>
    {% endfor %}
  </ul>

</div>

<style>
.lcd-container {
  display:flex;
  justify-content:center;
  gap:15px;
  flex-wrap:wrap;
}

.lcd-box {
  background:#111;
  border-radius:8px;
  padding:15px 20px;
  min-width:80px;
  text-align:center;
  box-shadow: inset 0 0 5px #000, 0 0 5px #555;
}

.lcd-box .number {
  font-size:36px;
  font-weight:bold;
  color:#0f0;
  background:#030;
  padding:5px 10px;
  border-radius:4px;
  box-shadow: inset 0 0 10px #0f0;
}

.lcd-box .label {
  font-size:12px;
  color:#0f0;
  margin-top:5px;
}

</style>

<script>
const lcdBoxes = document.querySelectorAll('.lcd-box .number');

function updateLCDCountdown() {
  const now = new Date();
  const nextYear = new Date(now.getFullYear()+1,0,1);
  const diff = nextYear - now;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff/(1000*60*60)) % 24);
  const minutes = Math.floor((diff/(1000*60)) % 60);
  const seconds = Math.floor((diff/1000) % 60);

  const values = [days,hours,minutes,seconds];
  lcdBoxes.forEach((el,i)=> el.textContent = values[i]);
}

updateLCDCountdown();
setInterval(updateLCDCountdown,1000);
</script>
