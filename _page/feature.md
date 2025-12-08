---
layout: default
---
# Site Feature

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](/page/another-page).

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

<!-- CSS (taruh di stylesheet utama) -->
<style>
/* wrapper */
.pre-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  background: #1e1e1e;
  border: 1px solid #444;
  border-radius: 8px;
  overflow: auto;
  font-size: 14px;
  line-height: 1.5;         /* PENTING: pakai angka tetap */
  margin: 20px 0;
}

/* line numbers column */
.pre-wrapper .line-numbers {
  background: #252526;
  color: #858585;
  text-align: right;
  padding: 12px 10px 12px 12px;
  user-select: none;
  border-right: 1px solid #444;
  position: sticky;
  left: 0;
  z-index: 10;
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;         /* HARUS SAMA dengan .pre-wrapper */
}

/* each number */
.pre-wrapper .line-numbers span {
  display: block;
  line-height: 1.5;         /* HARUS SAMA */
}

/* code area: keep highlighter markup intact */
.pre-wrapper pre {
  margin: 0;
  padding: 12px;
  overflow: auto;
}

/* Ensure code preserves whitespace, no wrapping */
.pre-wrapper pre code {
  display: block;           /* important so code is block-level inside pre */
  white-space: pre;         /* prevent wrapping and preserve line breaks */
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;         /* MATCH semua line-height di atas */
}

/* If highlight engine inserted spans, do not change display of those */
.pre-wrapper pre code * {
  white-space: pre;         /* keep tokens from collapsing */
}

/* optional hover highlight for corresponding line (visual only) */
.pre-wrapper pre code span:hover { background: rgba(255,255,255,0.03); }
</style>

<!-- JS (taruh sebelum </body>) -->
<script>
document.addEventListener("DOMContentLoaded", () => {
  // Select only top-level code inside pre (the standard Markdown output)
  document.querySelectorAll("pre > code").forEach(code => {
    const pre = code.parentElement;

    // safety: skip if already wrapped
    if (pre.parentElement && pre.parentElement.classList.contains('pre-wrapper')) return;

    // Get raw text lines (use textContent to preserve highlight spans in innerHTML)
    const raw = code.textContent.replace(/\r/g,'').replace(/\n$/, ""); // remove trailing newline only
    const lines = raw === "" ? [] : raw.split("\n");

    // Build wrapper and numbers column
    const wrapper = document.createElement("div");
    wrapper.className = "pre-wrapper";

    const nums = document.createElement("div");
    nums.className = "line-numbers";
    // create one <span> per visual line
    nums.innerHTML = lines.map((_, i) => `<span>${i+1}</span>`).join("");

    // Insert wrapper in DOM and move pre inside it (do NOT change code.innerHTML)
    pre.replaceWith(wrapper);
    wrapper.appendChild(nums);
    wrapper.appendChild(pre);

    // Note: we intentionally do NOT modify code.innerHTML so any server-side
    // syntax highlighting (Rouge) remains intact.
  });
});
</script>

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

### A button

<button id="btn">Klik saya</button>

<script>
document.getElementById("btn").addEventListener("click", () => {
  alert("Halo dari JS!");
});
</script>

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://i.postimg.cc/VvnwvXZ9/premium-photo-1700752853984-d3d1574aabd2.jpg)

### Definition lists can be used with HTML syntax.

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
