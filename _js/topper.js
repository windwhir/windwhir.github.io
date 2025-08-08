var thehref=window.location.href;
var ua=navigator.userAgent;

document.addEventListener('DOMContentLoaded', ()=> {
  let pageId=document.querySelector("header").innerHTML;
  //head和debug
  //应对钉钉
  if(ua.indexOf("DingTalk") > -1){document.querySelector("nav-debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>钉钉对超链接有限制建议用浏览器打开↑↑↑</p>");}
  //应对qq
  if(ua.indexOf("MQQ") > -1){document.querySelector("nav-debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>QQ屏蔽了输入框脚本建议用浏览器打开↑↑↑</p>");}
  //应对微信
  if(ua.indexOf("WeChat") > -1){document.querySelector("nav-debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>微信有诸多限制建议用浏览器打开↑↑↑</p>");}
  //首尾，样式，图标
  document.querySelector("header").innerHTML=('<a href="/"><img src="/_img/windwhir.ico" />风吹呼呼WindWhir</a>')
  document.querySelector("footer").innerHTML=('<img src="/_img/windwhir.ico" />风吹呼呼WindWhir | +x '+document.querySelector("footer").innerHTML)
  if(!document.querySelector("title")){document.querySelector("head").innerHTML+=('<meta charset="UTF-8" /><meta name="color-scheme" content="light"><title>'+document.querySelector("h1").innerHTML+'</title><link rel="icon" href="/_img/windwhir.ico" />')}
  //music大文件夹
  if(thehref.indexOf("music")>0){
  document.querySelector("title").innerHTML+=" - music"
  document.querySelector("header").innerHTML+=' &gt; <a href="/music">琴&风[music]</a>'
  }
  //2409大文件夹
  if(thehref.indexOf("2409")>0){
  document.querySelector("title").innerHTML+=" - 2409"
  document.querySelector("header").innerHTML+=' &gt; <a href="/2409">高中篇[2409]</a>'
  }
  //dq大文件夹
  if(thehref.indexOf("dq")>0){
  document.querySelector("title").innerHTML+=" - dq"
  document.querySelector("header").innerHTML+=' &gt; <a href="/dq">大学篇[dq]</a>'
  }
  //tech大文件夹
  if(thehref.indexOf("tech")>0){
  document.querySelector("title").innerHTML+=" - tech"
  document.querySelector("header").innerHTML+=' &gt; <a href="/tech">前端呼呼[tech]</a>'
  }
  //最终
  if(pageId)document.querySelector("header").innerHTML+=` - [<a href="javascript:topperJs_pageId(${pageId})">${pageId}</a>] <a style="font-size:70%" href="/_res/pageid.html">?</a>`;
  document.querySelector("footer").innerHTML+=' - 蓝奏云密码均为whir'
  document.querySelector("title").innerHTML+=" - windwhir.top"

})

function topperJs_pageId(neihan){navigator.clipboard.writeText("http://windwhir.top/"+neihan)}

