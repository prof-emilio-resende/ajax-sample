function render(text) {
    document.querySelector("div.content").innerHTML = text;
}

function createRequest() {
    return new XMLHttpRequest();
}

function configureRequest(request, callback) {
    request.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                callback(this.responseText);
            }
        }
    };
    request.open("GET", "http://localhost:3000");
    request.setRequestHeader("Content-Type", "text/html");
    request.send();
}

window.onload = function() {
    const r = createRequest();
    configureRequest(r, function(txt) {
        render(txt);
    });
}