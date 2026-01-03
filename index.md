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

function updatePostDisplay(p, isTarget, mode) {
  const excerpt = p.querySelector('.post-excerpt');
  const content = p.querySelector('.post-content');
  const titleLink = p.querySelector('.post-title a');

  if (mode === 'post') {           // tampil satu post
    if (isTarget) {
      p.style.display = '';
      if (excerpt) excerpt.style.display = 'none';
      if (content) content.style.display = '';
      if (titleLink) titleLink.style.display = 'none';
    } else {
      p.style.display = 'none';    // sembunyikan semua selain target
    }
  } else if (mode === 'list') {    // tampil list
    p.style.display = '';
    if (excerpt) excerpt.style.display = '';
    if (content) content.style.display = 'none';
    if (titleLink) titleLink.style.display = '';
  } else {                        // home
    p.style.display = '';
    if (excerpt) excerpt.style.display = '';
    if (content) content.style.display = 'none';
    if (titleLink) titleLink.style.display = '';
  }
}

function showHome() {
  btn.style.display = '';
  postsWrap.style.display = 'none';
  posts.forEach(p => updatePostDisplay(p, false, 'home'));
}

function showList() {
  btn.style.display = 'none';
  postsWrap.style.display = '';
  posts.forEach(p => updatePostDisplay(p, false, 'list'));
}

function showPost(url) {
  btn.style.display = 'none';
  postsWrap.style.display = '';
  posts.forEach(p => updatePostDisplay(p, p.dataset.url === url, 'post'));
}

  // tombol lihat blog
  btn.addEventListener('click', () => {
    location.hash = '#blog';
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

  // router
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
