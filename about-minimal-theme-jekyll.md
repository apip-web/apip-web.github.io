---
layout: default
---
<header>
        <h1><a href="{{ "/" | absolute_url }}">{{ site.title | default: site.github.repository_name }}</a></h1>

        {% if site.logo %}
          <img src="{{site.logo | relative_url}}" alt="Logo" />
        {% endif %}

        <p>{{ site.description | default: site.github.project_tagline }}</p>

        {% if site.github.is_project_page %}
        <p class="view"><a href="{{ site.github.repository_url }}">View the Project on GitHub <small>{{ site.github.repository_nwo }}</small></a></p>
        {% endif %}

        {% if site.github.is_user_page %}
        <p class="view"><a href="{{ site.github.owner_url }}">View My GitHub Profile</a></p>
        {% endif %}

        {% if site.show_downloads %}
        <ul class="downloads">
          <li><a href="{{ site.github.zip_url }}">Download <strong>ZIP File</strong></a></li>
          <li><a href="{{ site.github.tar_url }}">Download <strong>TAR Ball</strong></a></li>
          <li><a href="{{ site.github.repository_url }}">View On <strong>GitHub</strong></a></li>
        </ul>
        {% endif %}
</header>

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three | head1        | head two          | three |
|:-------------|:------------------|:------|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  | ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  | out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   | ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  | ok           | good `zoute` drop | yumm  |

<div class="table_component">
  <table>
    <thead>
      <tr>
        <th>head1</th>
        <th>head two</th>
        <th>three</th>
        <th>head1</th>
        <th>head two</th>
        <th>three</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>ok</td>
        <td>good swedish fish</td>
        <td>nice</td>
        <td>ok</td>
        <td>good swedish fish</td>
        <td>nice</td>
      </tr>
      <tr>
        <td>out of stock</td>
        <td>good and plenty</td>
        <td>nice</td>
        <td>out of stock</td>
        <td>good and plenty</td>
        <td>nice</td>
      </tr>
      <tr>
        <td>ok</td>
        <td>good <code>oreos</code></td>
        <td>hmm</td>
        <td>ok</td>
        <td>good <code>oreos</code></td>
        <td>hmm</td>
      </tr>
      <tr>
        <td>ok</td>
        <td>good <code>zoute</code> drop</td>
        <td>yumm</td>
        <td>ok</td>
        <td>good <code>zoute</code> drop</td>
        <td>yumm</td>
      </tr>
    </tbody>
  </table>
</div>

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
