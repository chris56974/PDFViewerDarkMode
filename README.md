# PDF Dark Theme

This google chrome extension is basically the same as [DarkPDF](https://chrome.google.com/webstore/detail/darkpdf/cfemcmeknmapecneeeaajnbhhgfgkfhp?hl=en) with a few exceptions...

1. It's always enabled 
2. It's only one file
3. It doesn't need any background/serviceWorker, chromeAPI, event stuff
4. It only requires file:// permissions 

## What I've Learned

This extension (as well as DarkPDF) works by creating a white colored div that covers the entire viewport. It then uses CSS to give that div a "mix-blend-mode" of "different". This means everything underneath the div will only show up if it has a different color. Since white is not a different color than white, the result is black and hence we have our dark theme.

I originally made this extension because DarkPDF inverted the colors for the entire PDF viewer, and I only wanted it to invert the colors for each ***page*** in the PDF viewer. If you watch the [preview video for DarkPDF](https://www.youtube.com/watch?v=Z7oZTJ41cxg), you can see how the light grey surrounding each page is too bright (for me at least). It's inverting the PDF viewer's dark theme back into light theme.

So I thought I could fix this by looking at the HTML generated by my PDF viewer and finding out where each page was situated in the viewport so I could then restrict the white div to only match the dimensions for each page. Unfortunately, this was too difficult. The PDF viewer I use is [PDF Viewer for Vimium C](https://chrome.google.com/webstore/detail/pdf-viewer-for-vimium-c/nacjakoppgmdcpemlfnfegmlhipddanj?hl=en), and it works by generating all the HTML for a PDF inside a shadow DOM. I couldn't find any way to grab the elements inside the shadow DOM, which might seem obvious, but for some reason I thought I could after I ran document.querySelect('.shadowElement') in the dev tools. I tried grabbing dimensions by listening to DOMContentLoaded and by observing the root document via a MutationObserver to no avail.

I later figured out that this was all overkill, and I could've just set a light theme for my pdf viewer. The white div would then invert everything into dark mode and I would have exactly what I was looking for. I decided to use the extension I created over DarkPDF anyways for the same reasons I listed earlier. I learned a great deal about how to test chrome extensions, how to use some of the most important chrome APIs (storage & tabs) and when not to use them (like in this extension), how v2 extensions work differently to v3 (new scripting api, service workers, etc) and learned all kinds of stuff about the browser that I never would have had I just kept building SPA frontends. 

## Development Notes

- https://stackoverflow.com/questions/43233115/

onActivated() is when the active tab changes (tab URL may not be set at this point) and onUpdated is when any tab is updated

```js
chrome.action.onClicked.addListener(() => {})    // refers to the extension being clicked in the toolbar
chrome.runtime.onInstalled.addListener(() => {}) 
```

## Attribution

- [Arshpreet Buttar](https://github.com/ArshSB) for his [DarkPDF Extension (Github Link)](https://github.com/ArshSB/DarkPDF)
