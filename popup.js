var url = new URL(window.location.href);
var word = url.searchParams.get("w");
document.getElementById("word").innerHTML = word;
lookUpCambridgeDictionary(word);

function lookUpCambridgeDictionary(word) {
    var desc = ""
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'document';
    var url = "https://dictionary.cambridge.org/dictionary/english/" + word;
    xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            // TODO: handle no search result condition
            desc = xhr.response.querySelector('meta[name="description"]').content;
            document.getElementById("desc").innerHTML = desc;
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}