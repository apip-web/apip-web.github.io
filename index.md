---
layout: default
---
<div class="homepage">
  <h2>Selamat Datang di Situs Saya</h2>    

  <p>Ini adalah blog pribadi saya tentang teknologi dan coding.</p>

<hr>

</div>

<button id="open-blog">Lihat blog</button>

<h1><a href="/archive/">LINK 404</a>
</h1>

<div id="pages" style="display:block;">  
{% for post in site.page %}  
  <article class="page" data-url="{{ post.url | relative_url }}">  
    <h2 class="post-title">  
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>  
    </h2>

    <div class="post-content" style="display:block;">  
      {% include post-meta.html post=post %}  
    </div>  
  </article>  
{% endfor %}  
</div>  

## Pages
<ul>
  {% for p in site.page %}
    <li>
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </li>
  {% endfor %}
</ul>
