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
