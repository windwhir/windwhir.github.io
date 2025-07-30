function _js(jsname=["topper"]){
  for(i=0;i<jsname.length;i++)document.write(`<script src="/_js/${jsname[i]}.js"></script>`);
}
function _css(cssname=["main"]){
  for(i=0;i<cssname.length;i++)document.write(`<link rel="stylesheet" href="/_css/${cssname[i]}.css" />`);
}