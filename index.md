---
layout: default
---
<div class="homepage">
  <h2>Selamat Datang di Situs Saya</h2>

  <p>Ini adalah blog pribadi saya tentang teknologi dan coding.</p>

  <h3>Tentang Saya</h3>
  <p>Saya seorang pengembang web yang suka eksperimen dengan Jekyll dan HTML/CSS.</p>

  <h3>Daftar Postingan</h3>
  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date: "%d %b %Y" }}
      </li>
    {% endfor %}
  </ul>

  <h3>Pages</h3>
  <ul>
    <li><a href="./another-page.html">Link to another page</a></li>
    <li><a href="./about-minimal-theme-jekyll.html">Link to About Minimal Jekyll Theme</a></li>
  </ul>
</div>
