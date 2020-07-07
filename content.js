 function modifyDOM() {  
	document.evaluate("//li[.='Text']/a", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click();
	document.getElementById("description").innerHTML =  "*Dane wejściowe:*\n\n"+
														"*Kroki reprodukcyjne:*\n \# \n\n"+
														"*Aktualny wynik:*\n\n"+
														"*Oczekiwany wynik:*\n";
    return document.getElementById("description").setAttribute("value", "No powinno działać :/");
}
	
chrome.browserAction.onClicked.addListener(function (tab) {

chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();'
    });
})
