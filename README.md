# PDF Dark Theme

A fork of [DarkPDF](https://chrome.google.com/webstore/detail/darkpdf/cfemcmeknmapecneeeaajnbhhgfgkfhp?hl=en) with a few exceptions...

1. It's always enabled 
2. It's one file only (no service workers, no chromeAPI's)
3. It only requires file:// permissions 

## How it works 

It creates a white colored div that covers the entire viewport and then uses CSS to give the div a "mix-blend-mode: difference;".

## Development Notes

https://stackoverflow.com/questions/43233115/

onActivated() runs when the active tab changes (tab URL may not be set at this point). 
onUpdated() is when any tab is updated.

```js
chrome.action.onClicked.addListener(() => {})    // refers to the extension being clicked in the toolbar
chrome.runtime.onInstalled.addListener(() => {}) 
```

## Attribution

- Big thanks to [Arshpreet Buttar](https://github.com/ArshSB) for his [DarkPDF Extension (Github Link)](https://github.com/ArshSB/DarkPDF).
