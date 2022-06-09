# PDF Viewer - Dark Mode 

This google chrome extension works basically the same way as [Arshpreet Buttar's DarkPDF extension](https://github.com/ArshSB/DarkPDF), except it tries to invert the colors for each *page* in a PDF file (rather than invert the colors for the entire PDF viewer). I later figured out that I can just declare a light theme for the pdf viewer, and it will invert that light theme into a dark theme along with the PDF document (which is what I do now). So effectively, this extension is no longer needed but thankfully I learned enough to where I can help improve the original [DarkPDF extension](https://chrome.google.com/webstore/detail/darkpdf/cfemcmeknmapecneeeaajnbhhgfgkfhp?hl=en) which is cool.

## Helpful

- https://stackoverflow.com/questions/43233115/

onActivated() is when the active tab changes (tab URL may not be set at this point) and onUpdated is when any tab is updated

```js
chrome.action.onClicked.addListener(() => {})    // refers to the extension being clicked in the toolbar
chrome.runtime.onInstalled.addListener(() => {}) 
```