---
layout: default
title: In Memorial
---
<h2>File dan Folder di Root Proyek</h2>

<ul>
  {% comment %} Kumpulkan semua path unik di root {% endcomment %}
  {% assign root_items = "" | split: "" %}

  {% for file in site.static_files %}
    {% assign path_parts = file.path | split: '/' %}
    {% if path_parts.size == 2 %} {% comment %} File langsung di root (misal /README.md) {% endcomment %}
      {% assign root_items = root_items | push: file.path %}
    {% elsif path_parts.size > 2 %}
      {% assign folder_name = path_parts[1] %} {% comment %} Ambil nama folder pertama setelah root {% endcomment %}
      {% assign folder_path = '/' | append: folder_name %}
      {% unless root_items contains folder_path %}
        {% assign root_items = root_items | push: folder_path %}
      {% endunless %}
    {% endif %}
  {% endfor %}

  {% comment %} Urutkan secara alfabetis {% endcomment %}
  {% assign sorted_root_items = root_items | sort %}

  {% for item in sorted_root_items %}
    {% assign path_parts = item | split: '/' %}
    {% assign name = path_parts[last] %}

    {% if item contains '.' %}
      {% comment %} Ini file {% endcomment %}
      <li>📄 {{ name }} <em>(file)</em></li>
    {% else %}
      {% comment %} Ini folder {% endcomment %}
      <li>📁 {{ name }}/ <em>(folder)</em></li>
    {% endif %}
  {% endfor %}
</ul>
