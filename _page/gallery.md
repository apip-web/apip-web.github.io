---
layout: default
title: In Memorial
---
<h2>File dan Folder di Root Proyek</h2>

update 1

<ul>
  {% assign root_items = "" | split: "" %}

  {% for file in site.static_files %}
    {% assign path = file.path | remove_first: '/' %} {% comment %} Hilangkan leading slash {% endcomment %}
    {% assign path_parts = path | split: '/' %}

    {% if path_parts.size == 1 %}
      {% comment %} File langsung di root, misalnya: README.md {% endcomment %}
      {% assign item_name = path_parts[0] %}
      {% assign item_type = "file" %}
      {% assign item_path = '/' | append: item_name %}
    {% elsif path_parts.size > 1 %}
      {% comment %} Ambil hanya folder level pertama {% endcomment %}
      {% assign folder_name = path_parts[0] %}
      {% assign item_name = folder_name %}
      {% assign item_type = "folder" %}
      {% assign item_path = '/' | append: folder_name | append: '/' %}
    {% endif %}

    {% if item_name %}
      {% assign full_item = item_type | append: ':' | append: item_path %}
      {% unless root_items contains full_item %}
        {% assign root_items = root_items | push: full_item %}
      {% endunless %}
    {% endif %}
  {% endfor %}

  {% comment %} Urutkan berdasarkan nama {% endcomment %}
  {% assign sorted_root_items = root_items | sort %}

  {% for item in sorted_root_items %}
    {% assign parts = item | split: ':' %}
    {% assign type = parts[0] %}
    {% assign path = parts[1] %}
    {% assign name = path | split: '/' | last | remove: '/' %}

    {% if type == "file" %}
      <li>📄 {{ name }} <em>(file)</em></li>
    {% else %}
      <li>📁 {{ name }}/<em>(folder)</em></li>
    {% endif %}
  {% endfor %}
</ul>
