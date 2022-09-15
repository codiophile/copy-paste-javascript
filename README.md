# copy-paste-javascript

A small snippet to add your own copy method, in case the original one has been tampered with.

```
document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 67) {
        var text = window.getSelection().toString()
        navigator.clipboard.writeText(text)
    }
}
```

1. Copy the above snippet.
2. Open developer tools on the website you want to copy things from.
3. Paste the snippet into the console and press enter.
4. Select the text you want to copy and press `Ctrl+C`.
