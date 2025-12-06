---
layout: default
---
## Selamat Datang di Situs Saya

Ini adalah blog pribadi saya tentang teknologi dan coding.

### Tentang Saya

Saya seorang pengembang web yang suka eksperimen dengan Jekyll dan HTML/CSS.

### Daftar Postingan

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date: "%d %b %Y" }}
  </li>
{% endfor %}
</ul>

### Pages

- [Link to another page](./another-page.html).
- [Link to About Minimal Jekyll Theme](./about-minimal-theme-jekyll.html).
