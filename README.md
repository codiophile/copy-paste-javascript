# copy-paste-javascript

A small snippet to add your own copy method, in case the original one has been tampered with.

```
var frames = document.getElementsByTagName("iframe");
let copyFunction = function(e) {
    if (e.ctrlKey && e.which == 67) {
        var text = this.window.getSelection().toString()
        navigator.clipboard.writeText(text)
    }
}
document.onkeyup = copyFunction
for (let i = 0; i < frames.length; ++i) {
    if (frames[i].id == 'mcas-presence-frame-do-not-remove') {
        frames[i].parentNode.removeChild(frames[i])
    } else {
        frames[i].contentWindow.onkeyup = copyFunction
    }
}
```

1. Copy the above snippet.
2. Open developer tools on the website you want to copy things from.
3. Paste the snippet into the console and press enter.
4. Select the text you want to copy and press `Ctrl+C`.
