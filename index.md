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

</div>

<hr>

<button id="show-blog">Lihat blog</button>

<div id="blog" hidden>
  {% for post in site.posts %}
    <article class="post" data-url="{{ post.url | relative_url }}">
      <h2 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h2>

      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>

      <div class="post-content" hidden>
        {{ post.content }}
      </div>
    </article>
  {% endfor %}
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('show-blog');
  const blog = document.getElementById('blog');
  const posts = document.querySelectorAll('.post');

  function showHome() {
    btn.hidden = false;
    blog.hidden = true;
    posts.forEach(p => {
      p.hidden = false;
      p.querySelector('.post-content').hidden = true;
      p.querySelector('.post-excerpt').hidden = false;
    });
  }

  function showList() {
    btn.hidden = true;
    blog.hidden = false;
    posts.forEach(p => {
      p.hidden = false;
      p.querySelector('.post-content').hidden = true;
      p.querySelector('.post-excerpt').hidden = false;
    });
  }

  function showPost(url) {
    btn.hidden = true;
    blog.hidden = false;

    posts.forEach(p => {
      const isTarget = p.dataset.url === url;
      p.hidden = !isTarget;
      p.querySelector('.post-content').hidden = !isTarget;
      p.querySelector('.post-excerpt').hidden = isTarget;
    });
  }

  // Klik tombol
  btn.addEventListener('click', () => {
    history.pushState({ page: 'list' }, '', '#blog');
    showList();
  });

  // Klik judul post
  posts.forEach(post => {
    const link = post.querySelector('.post-title a');
    link.addEventListener('click', e => {
      e.preventDefault();
      history.pushState(
        { page: 'post', url: post.dataset.url },
        '',
        post.dataset.url
      );
      showPost(post.dataset.url);
    });
  });

  // BACK / FORWARD
  window.addEventListener('popstate', e => {
    if (!e.state) return showHome();
    if (e.state.page === 'list') return showList();
    if (e.state.page === 'post') return showPost(e.state.url);
  });

  // INITIAL STATE
  history.replaceState({ page: 'home' }, '', location.pathname);
  showHome();
});
</script>

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
