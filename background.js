chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({"id": "lookUp", "title": "Look Up '%s'", "contexts": ["all"]})
    chrome.contextMenus.create({"id": "saveWord", "title": "Save '%s'", "contexts": ["all"]})
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
    var selection = info.selectionText;

    if (info.menuItemId === "lookUp") {
        openDictionaryTab(selection);
    } else if (info.menuItemId === "saveWord") {
        openWordSavingTab(selection);
    }
})

function openDictionaryTab(word) {
    var url = "https://dictionary.cambridge.org/dictionary/english/" + word;
    chrome.tabs.create({'url': url}, (tab) => {});
}

function openWordSavingTab(word) {
    chrome.tabs.create({url: chrome.extension.getURL('popup.html?w=' + word)}, (tab) => {});
}
