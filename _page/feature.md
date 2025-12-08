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

<!-- CSS: letakkan di head / stylesheet utama -->
<style>
/* container (kotak kode lengkap dengan header) */
.code-box {
  background: #1e1e1e;
  border: 1px solid #444;
  border-radius: 8px;
  overflow: hidden;
  margin: 24px 0;
  font-size: 14px;
  line-height: 1.5;
}

/* header sticky */
.code-box .code-header {
  position: sticky;
  top: 0;
  background: #202020;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;
  z-index: 5;
  gap: 12px;
}

/* language label */
.code-box .code-header .lang {
  font-size: 12px;
  color: #87c1ff;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* copy button */
.code-box .copy-btn {
  padding: 5px 10px;
  font-size: 12px;
  border: 1px solid #333;
  background: #2a2a2a;
  color: #ccc;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.code-box .copy-btn:hover { background:#2f2f2f; color:#fff; }
.code-box .copy-btn.copied { background:#3a3a3a; color:#e6e6e6; }

/* inner grid: line numbers + code */
.code-box .code-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  background: #1e1e1e;
}

/* line numbers */
.code-box .line-numbers {
  background: #252526;
  color: #858585;
  text-align: right;
  padding: 12px 10px 12px 12px;
  user-select: none;
  border-right: 1px solid #444;
  position: sticky;
  left: 0;
  z-index: 4;
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}
.code-box .line-numbers span { display:block; line-height:1.5; }

/* code area */
.code-box pre {
  margin: 0;
  padding: 12px;
  overflow: auto;
  background: transparent;
}
.code-box pre code {
  display: block;
  white-space: pre;
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.5;
}
/* keep tokens intact */
.code-box pre code * { white-space: pre; }

/* optional hover highlight */
.code-box pre code span:hover { background: rgba(255,255,255,0.02); }
</style>

<!-- JS: taruh sebelum </body> -->
<script>
(function() {
  // helper: detect language from code class or data-lang
  function detectLang(codeEl) {
    if (!codeEl) return 'code';
    const m = (codeEl.className || '').match(/language-([a-z0-9_+-]+)/i);
    if (m) return m[1].toLowerCase();
    // fallback: data-lang on pre or code
    if (codeEl.dataset && codeEl.dataset.lang) return codeEl.dataset.lang;
    const pre = codeEl.parentElement;
    if (pre && pre.dataset && pre.dataset.lang) return pre.dataset.lang;
    return 'code';
  }

  function createHeader(lang) {
    const header = document.createElement('div');
    header.className = 'code-header';

    const left = document.createElement('div');
    left.className = 'lang';
    left.textContent = lang;

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2"></rect><rect x="3" y="3" width="12" height="12" rx="2"></rect></svg><span>Copy</span>';

    // copy handler
    copyBtn.addEventListener('click', function() {
      const box = this.closest('.code-box');
      const codeEl = box && box.querySelector('pre');
      if (!codeEl) return;
      const text = codeEl.innerText.replace(/\r/g,'');
      navigator.clipboard.writeText(text).then(() => {
        const old = this.innerHTML;
        this.classList.add('copied');
        this.innerHTML = '✓ Copied';
        setTimeout(() => {
          this.classList.remove('copied');
          this.innerHTML = old;
        }, 1600);
      }).catch(()=> {
        // fallback: select & alert
        try {
          const range = document.createRange();
          range.selectNodeContents(codeEl);
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        } catch(e){}
        alert('Copy failed — select and copy manually');
      });
    });

    header.appendChild(left);
    header.appendChild(copyBtn);
    return header;
  }

  // wrap a single pre element into code-box with header + numbers
  function wrapPre(pre) {
    if (!pre || !pre.parentNode) return false;
    // if already wrapped, skip
    if (pre.closest('.code-box')) return false;
    // skip empty
    const rawText = (pre.textContent || '').replace(/\r/g,'').replace(/\n$/,'');
    if (!rawText) return false;

    const lines = rawText.split('\n');

    // Build DOM
    const box = document.createElement('div');
    box.className = 'code-box';

    // header
    const codeEl = pre.querySelector('code') || pre;
    const lang = detectLang(codeEl);
    const header = createHeader(lang);

    // inner (line numbers + pre)
    const inner = document.createElement('div');
    inner.className = 'code-inner';

    const nums = document.createElement('div');
    nums.className = 'line-numbers';
    nums.innerHTML = lines.map((_, i) => '<span>' + (i+1) + '</span>').join('');

    // insert box in place of pre
    pre.parentNode.insertBefore(box, pre);
    box.appendChild(header);
    box.appendChild(inner);
    inner.appendChild(nums);
    inner.appendChild(pre);

    return true;
  }

  // process existing pres
  function processAll() {
    const pres = Array.from(document.querySelectorAll('pre'));
    let wrapped = 0;
    pres.forEach(pre => {
      if (wrapPre(pre)) wrapped++;
    });
    if (wrapped) console.log('code-box: wrapped', wrapped, 'blocks');
    return wrapped;
  }

  // initial runs
  document.addEventListener('DOMContentLoaded', () => {
    try { processAll(); } catch(e){ console.error(e); }
  });
  window.addEventListener('load', () => {
    try { processAll(); } catch(e){ console.error(e); }
  });

  // observe future additions (Prism / lazy content)
  const mo = new MutationObserver(muts => {
    let any = false;
    muts.forEach(m => {
      m.addedNodes.forEach(node => {
        if (!(node instanceof Element)) return;
        if (node.matches && node.matches('pre')) {
          if (wrapPre(node)) any = true;
        } else {
          const pres = node.querySelectorAll && node.querySelectorAll('pre');
          pres && pres.forEach(p => { if (wrapPre(p)) any = true; });
        }
      });
    });
    if (any) console.log('code-box: mutation wrapped new blocks');
  });
  mo.observe(document.documentElement || document.body, { childList: true, subtree: true });

  // expose functions for debugging
  window.__codeBoxProcessAll = processAll;
  window.__codeBoxWrapPre = wrapPre;
})();
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
