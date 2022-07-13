# PDF Dark Theme

A fork of [DarkPDF](https://chrome.google.com/webstore/detail/darkpdf/cfemcmeknmapecneeeaajnbhhgfgkfhp?hl=en) with a few exceptions...

1. It's always enabled 
2. It's less complicated (no background/serviceWorker, or chromeAPI stuff)
4. It only requires file:// permissions 

## How it works 

It creates a white colored div that covers the entire viewport and then uses CSS to give the div a "mix-blend-mode: difference;".

### Why I made this extension

I originally made it because I liked Arsh's DarkPDF extension (see above), but I didn't like how it inverted the colors for the PDF viewer as well. You can see this in the [DarkPDF demo video](https://youtu.be/Z7oZTJ41cxg?t=5), where the PDF viewer surrounding the PDF document is quite bright and harsh on the eyes imo. I thought maybe I could limit the dark theme to just the pages of the PDF document. That way both my pdf viewer and my pdf documents could be dark.

I later found out that I could've just used the light theme that came with my [PDF Viewer (for Vimium C)](https://chrome.google.com/webstore/detail/pdf-viewer-for-vimium-c/nacjakoppgmdcpemlfnfegmlhipddanj?hl=en). And then DarkPDF would invert the colors in the PDF viewer back into dark theme (fixing the whole issue). But I decided to fork the DarkPDF extension anyways once I saw that it was using an older version of the chrome extension manifest and how it requested permissions for the user's browser history.

Update: Arsh has recently upgraded the DarkPDF extension to the latest version of the chrome extension manifest and I prefer his extension over mine now. Mine is annoying whenever you have to open PDFs on the internet because it's basically a flashbang until you download the pdf. So it is worth the extra permissions.

### How I went about creating this extension

I thought I could manipulate the HTML elements that came with the [PDF viewer for Vimium C](https://chrome.google.com/webstore/detail/pdf-viewer-for-vimium-c/nacjakoppgmdcpemlfnfegmlhipddanj?hl=en), or at least find out where the "page" element was so I can append a new div element to it with the same height and width. Unfortunately, this didn't work because the generated HTML is actually placed in a shadow DOM. I tried things like document.querySelect('.shadowElement'), DOMContentLoaded and MutationObserver to no avail.

It was at this point that I then realized I could just use a light theme pdf viewer and do the same thing as before. I stripped the extension down to a very minimal version and left it at that.

### What I learned 

I learned how to use different chrome APIs (storage, tabs, scripting) and different extension related stuff (permissions, popup menu stuff, events).

How mix-blend-mode works on a rudimentary level

### Further learning

It'd be cool to dive deeper into PDF.js

It'd be cool to look at the spec for mix-blend-mode. 
  - [Ana Tudor's article](https://css-tricks.com/taming-blend-modes-difference-and-exclusion) also looks good.

#### Development Notes

- https://stackoverflow.com/questions/43233115/

onActivated() is when the active tab changes (tab URL may not be set at this point) and onUpdated is when any tab is updated

```js
chrome.action.onClicked.addListener(() => {})    // refers to the extension being clicked in the toolbar
chrome.runtime.onInstalled.addListener(() => {}) 
```

#### Attribution

Big thanks to [Arshpreet Buttar](https://github.com/ArshSB) for his [DarkPDF Extension (Github Link)](https://github.com/ArshSB/DarkPDF). My eyes are saved.
