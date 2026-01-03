---
layout: default
---
<div class="homepage">
  <h2>Selamat Datang di Situs Saya</h2>    

  <p>Ini adalah blog pribadi saya tentang teknologi dan coding.</p>

</div>

<hr>    
    
<button id="open-blog">Lihat blog</button>    
    
<div id="posts" style="display:none;">    
{% for post in site.posts %}
  <article class="post" data-url="{{ post.url | relative_url }}">

    <h2 class="post-title">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h2>

    <div class="post-excerpt">
      {{ post.excerpt }}
    </div>

    <!-- FULL POST -->
    <div class="post-content" style="display:none;">
      {% include post-meta.html post=post %}
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
    location.hash = 'blog';    
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
    const path = location.pathname;    
    const hash = location.hash;    
    
    if (hash === '#blog') {    
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
