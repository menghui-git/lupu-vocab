const api_enabled = false;
const api_host = 'http://localhost';  // call Workbook API (https://github.com/menghui-git/Workbook)

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({"id": "lookUp", "title": "Look Up '%s'", "contexts": ["all"]})
    if (api_enabled) {
        chrome.contextMenus.create({"id": "saveWord", "title": "Save '%s'", "contexts": ["all"]})
    }
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
    let url = "https://dictionary.cambridge.org/dictionary/english/" + word;
    chrome.tabs.create({'url': url}, (tab) => {});
}

function openWordSavingTab(word) {
    let url = api_host + '?w=' + word;
    chrome.tabs.create({'url': url}, (tab) => {});
}
