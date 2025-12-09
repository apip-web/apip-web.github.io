---
layout: default
title: Collections
---

# Collections

## This page shows all posts and pages in this site

## Pages
<ul>
  {% for p in site.page %}
    <li>
      <a href="{{ p.url | relative_url }}">{{ p.title }}</a>
    </li>
  {% endfor %}
</ul>

## Posts
<h3>Posts</h3>
  <ul>
    {% for post in site.posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date: "%d %b %Y" }}
      </li>
    {% endfor %}
  </ul>
