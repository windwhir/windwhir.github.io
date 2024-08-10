var thehref=window.location.href
var ua=navigator.userAgent
//head和debug
//应对钉钉
if(ua.indexOf("DingTalk") > -1){document.getElementById("debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>钉钉对超链接有限制建议用浏览器打开↑↑↑</p>");}
//应对qq
if(ua.indexOf("MQQ") > -1){document.getElementById("debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>QQ屏蔽了输入框脚本建议用浏览器打开↑↑↑</p>");}
//应对微信
if(ua.indexOf("WeChat") > -1){document.getElementById("debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>微信有诸多限制建议用浏览器打开↑↑↑</p>");}
//首尾，样式，图标
document.getElementById("topper").innerHTML=('<a href="/"><img src="/windwhir.ico" />风吹呼呼WindWhir</a>')
document.getElementById("footer").innerHTML=('copyright 风吹呼呼WindWhir | +x '+document.getElementById("footer").innerHTML)
document.querySelector("head").innerHTML+=('<title>'+document.querySelector("#most").innerHTML+'</title><link rel="stylesheet" href="/ahu.css" />')
//music大文件夹
if(thehref.indexOf("music")>0){
document.querySelector("title").innerHTML+=" - 琴&风"
document.getElementById("topper").innerHTML+=' &gt; <a href="/music">琴&风Music</a>'
document.getElementById("footer").innerHTML+='- music大文件内，蓝奏云密码均为whir'
}
//2409大文件夹
if(thehref.indexOf("2409")>0){
document.querySelector("title").innerHTML+=" - 2409"
document.getElementById("topper").innerHTML+=' &gt; <a href="/2409">2409篇章</a>'
document.getElementById("footer").innerHTML+=' - 2409大文件内，蓝奏云密码均为2409'
}
//dq大文件夹
if(thehref.indexOf("dq")>0){
document.querySelector("title").innerHTML+=" - 电气101"
document.getElementById("topper").innerHTML+=' &gt; <a href="/dq">电气101</a>'
document.getElementById("footer").innerHTML+=' - 电气101大文件内，蓝奏云密码均为0101'
}
//最终
document.querySelector("title").innerHTML+=" - WindWhir"
function urlrel(release){let params=new URLSearchParams(window.location.href.split('?')[1]);return params.get(release);}
