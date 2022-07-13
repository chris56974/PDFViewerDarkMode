# PDF Dark Theme

A fork of [DarkPDF](https://chrome.google.com/webstore/detail/darkpdf/cfemcmeknmapecneeeaajnbhhgfgkfhp?hl=en) with a few exceptions...

1. It's always enabled 
2. It's less complicated (no background/serviceWorker, or chromeAPI stuff)
4. It only requires file:// permissions 

## How it works 

It creates a white colored div that covers the entire viewport and then uses CSS to give the div a "mix-blend-mode: difference;".

## Why I made this extension

I originally made it because I liked Arsh's DarkPDF extension (see above), but I didn't like how it inverted the colors for the PDF viewer as well. You can see this in the [DarkPDF demo video](https://youtu.be/Z7oZTJ41cxg?t=5), where the PDF viewer surrounding the PDF document is quite bright and harsh on the eyes imo. I later rediscovered that the [PDF Viewer for Vimium C](https://chrome.google.com/webstore/detail/pdf-viewer-for-vimium-c/nacjakoppgmdcpemlfnfegmlhipddanj?hl=en) has a light theme that I never used (for obvious reasons). And I could've just used that and have the DarkPDF extension invert the colors back into dark theme (fixing the whole issue). But I decided to fork the extension anyways once I saw that it was using an older version of the chrome extension manifest and how it requested permissions for browser history and stuff. 

Update: Arsh has recently upgraded the DarkPDF extension to the latest version of the chrome extension manifest and I think I prefer his extension over mine. Mine is annoying whenever you have to open PDFs on the internet because it's basically a flashbang until you download the pdf. 

## How I went about creating this extension

The [PDF viewer for Vimium C](https://chrome.google.com/webstore/detail/pdf-viewer-for-vimium-c/nacjakoppgmdcpemlfnfegmlhipddanj?hl=en) creates HTML elements on top of the PDF document, and I thought I could maybe manipulate them to my liking. And if I couldn't, I thought maybe I could just find out where the "page" element was, so I can append a div to it with the same width and height. Unfortunately, this didn't work because it turned out the generated HTML was actually placed in a shadow DOM. I tried things like document.querySelect('.shadowElement'), DOMContentLoaded and MutationObserver to no avail. 

I then realized I could just use a light theme pdf viewer instead and keep the div at the viewport size. So I stripped the extension down to a very minimal version and left it at that.

## What I learned 

I learned how to use different chrome APIs (storage, tabs, scripting) and different extension related stuff (permissions, popup menu things, events).

How mix-blend mode interacts with a white pdf document

## What would be cool to learn

It'd be cool to look at PDF.js to see how it works and see if it has any interoperability with other chrome extensions and stuff.

It'd be cool to look at the spec for mix-blend-mode, because [Ana Tudor's article](https://css-tricks.com/taming-blend-modes-difference-and-exclusion) is an eye opener and definitely worth looking at if I use mix-blend-mode again in the future.

### Development Notes

- https://stackoverflow.com/questions/43233115/

onActivated() is when the active tab changes (tab URL may not be set at this point) and onUpdated is when any tab is updated

```js
chrome.action.onClicked.addListener(() => {})    // refers to the extension being clicked in the toolbar
chrome.runtime.onInstalled.addListener(() => {}) 
```

## Attribution

Big thanks to [Arshpreet Buttar](https://github.com/ArshSB) for his [DarkPDF Extension (Github Link)](https://github.com/ArshSB/DarkPDF). My eyes are saved.
