let darkPdfContainerCss = `
  pointer-events: none;
  width: 100vw;
  height: calc(100vh - 32px);
  padding-top: 32px;
  margin: 0 auto;
`;

let darkPdfCss = `
  pointer-events: none;
  width: 1019px;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  mix-blend-mode: difference;
  z-index: 1; 
`;

darkPdfContainer = document.createElement('div');
darkPdf = document.createElement('div');

darkPdfContainer.setAttribute("style", darkPdfContainerCss);
darkPdf.setAttribute("style", darkPdfCss);

document.body.appendChild(darkPdfContainer)
darkPdfContainer.appendChild(darkPdf)