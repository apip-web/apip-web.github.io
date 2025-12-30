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
