document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 67) {
        var text = window.getSelection().toString()
        navigator.clipboard.writeText(text)
    }
}
