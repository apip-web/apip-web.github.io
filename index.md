---
layout: default
---
<div class="homepage">
  <h2>Selamat Datang di Situs Saya</h2>

  <p>Ini adalah blog pribadi saya tentang teknologi dan coding.</p>

<hr>

<div id="lcd-countdown" style="text-align:center; margin:40px 0;">
  <h4>Countdown to New Year</h4>
  <div class="lcd-container">
    <div class="lcd-box"><span class="number">0</span><div class="label">DAYS</div></div>
    <div class="lcd-box"><span class="number">0</span><div class="label">HOURS</div></div>
    <div class="lcd-box"><span class="number">0</span><div class="label">MINUTES</div></div>
    <div class="lcd-box"><span class="number">0</span><div class="label">SECONDS</div></div>
  </div>
</div>

<hr>

# Blog:

<div id="posts">
  {% for post in site.posts %}
    <article class="post" data-url="{{ post.url | relative_url }}" data-tags="{{ post.tags | join: ',' }}">
      <!-- Judul -->
      <h2 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>

      <!-- Excerpt -->
      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>

      <!-- Konten penuh (disembunyikan) -->
      <div class="post-content" style="display:none;">
        {{ post.content }}
      </div>
    </article>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const link = post.querySelector('.post-title a');
    const content = post.querySelector('.post-content');
    const excerpt = post.querySelector('.post-excerpt');

    // pastikan awalnya hanya excerpt yang tampil
    content.style.display = 'none';
    excerpt.style.display = '';

    link.addEventListener('click', (e) => {
      e.preventDefault(); // cegah reload
      const url = link.getAttribute('href');

      posts.forEach(p => {
        const c = p.querySelector('.post-content');
        const ex = p.querySelector('.post-excerpt');

        if (p === post) {
          c.style.display = '';
          ex.style.display = 'none';
        } else {
          c.style.display = 'none';
          ex.style.display = '';
        }
      });

      // update URL tapi tanpa reload
      history.pushState(null, '', url);
    });
  });

  // Tangani tombol back / forward
  window.addEventListener('popstate', () => {
    const path = location.pathname;
    posts.forEach(post => {
      const url = post.querySelector('.post-title a').getAttribute('href');
      const content = post.querySelector('.post-content');
      const excerpt = post.querySelector('.post-excerpt');

      if (url === path) {
        content.style.display = '';
        excerpt.style.display = 'none';
      } else {
        content.style.display = 'none';
        excerpt.style.display = '';
      }
    });
  });
});
</script>

<style>
.post-title a {
  cursor: pointer;
  color: #ff3366;
  text-decoration: none;
}

.post-excerpt {
  color: #555;
  margin-bottom: 1em;
}

.post-content {
  margin-bottom: 1em;
}
</style>

</div>

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
