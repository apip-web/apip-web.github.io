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
  
<button id="open-blog">Lihat blog</button>  
  
<div id="posts" style="display:none;">  
{% for post in site.posts %}
  <article class="post" data-url="{{ post.url | relative_url }}">

    <h2 class="post-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>

    <!-- META POST (SAMA DENGAN HALAMAN ASLI) -->
    {% include post-meta.html post=post %}

    <div class="post-excerpt">
      {{ post.excerpt }}
    </div>

    <div class="post-content" style="display:none;">
      {{ post.content }}
    </div>

  </article>
{% endfor %}
</div>  
  
<script>  
document.addEventListener('DOMContentLoaded', () => {  
  const btn = document.getElementById('open-blog');  
  const postsWrap = document.getElementById('posts');  
  const posts = document.querySelectorAll('.post');  
  
  function showHome() {  
    btn.style.display = '';  
    postsWrap.style.display = 'none';  
  
    posts.forEach(p => {  
      p.style.display = '';  
      p.querySelector('.post-content').style.display = 'none';  
      p.querySelector('.post-excerpt').style.display = '';  
    });  
  }  
  
  function showList() {  
    btn.style.display = 'none';  
    postsWrap.style.display = '';  
  
    posts.forEach(p => {  
      p.style.display = '';  
      p.querySelector('.post-content').style.display = 'none';  
      p.querySelector('.post-excerpt').style.display = '';  
    });  
  }  
  
  function showPost(url) {  
    showList();  
  
    posts.forEach(p => {  
      const isTarget = p.dataset.url === url;  
      p.style.display = isTarget ? '' : 'none';  
      p.querySelector('.post-content').style.display = isTarget ? '' : 'none';  
      p.querySelector('.post-excerpt').style.display = isTarget ? 'none' : '';  
    });  
  }  
  
  // tombol lihat blog  
btn.addEventListener('click', () => {
  history.pushState({ view: 'list' }, '', '#blog');
  showList();
});  
  
  // klik judul post  
  posts.forEach(post => {  
    const link = post.querySelector('.post-title a');  
    link.addEventListener('click', e => {  
      e.preventDefault();  
      history.pushState(null, '', post.dataset.url);  
      showPost(post.dataset.url);  
    });  
  });  
  
  // router ringan  
function router() {
  const state = history.state;
  const path = location.pathname;
  const hash = location.hash;

  if (state?.view === 'post') {
    showPost(state.url);
    return;
  }

  if (state?.view === 'list' || hash === '#blog') {
    showList();
    return;
  }

  const post = [...posts].find(p => p.dataset.url === path);
  if (post) {
    showPost(path);
    return;
  }

  showHome();
}  
  
  window.addEventListener('popstate', router);  
  window.addEventListener('hashchange', router);  
  
  router(); // initial load  
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
