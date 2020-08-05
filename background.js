chrome.runtime.onInstalled.addListener(() =>
  chrome.contextMenus.create({"id": "noteMaker", "title": "Look Up '%s'", "contexts": ["all"]})
)

chrome.contextMenus.onClicked.addListener((info, tab) => {
  var selection = info.selectionText;
  lookUpDictionary(selection);
})

function lookUpDictionary(word) {
    const url = "https://dictionary.cambridge.org/dictionary/english/" + word;

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'document';

    xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            // TODO: handle not result
            desc = xhr.response.querySelector('meta[name="description"]').content;
            alert(desc);
            return desc;
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
}
