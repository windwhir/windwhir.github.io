var thehref=window.location.href;
var footdone=0;

//head和debug
//应对钉钉
if(navigator.userAgent.indexOf("DingTalk") > -1){document.getElementById("debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>钉钉对超链接有限制建议用浏览器打开↑↑↑</p>");}
//应对qq
if(navigator.userAgent.indexOf("MQQ") > -1){document.getElementById("debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>QQ屏蔽了输入框脚本建议用浏览器打开↑↑↑</p>");}
//应对微信
if(navigator.userAgent.indexOf("WeChat") > -1){document.getElementById("debug").innerHTML=("<p style='font-size:300%;color:#ff0000;text-align:right;'>微信有诸多限制建议用浏览器打开↑↑↑</p>");}
//应对本地下载
if(thehref.indexOf("windwhir")<0)
{document.getElementById("debug").innerHTML=(document.getElementById("debug").innerHTML+' 建议通过网络访问:<a href="https://windwhir.neocities.org">点击此处</a>')}

//首尾，样式，图标
document.getElementById("topper").innerHTML=('<a href="https://windwhir.neocities.org"><img src="/windwhir.ico" />风吹呼呼WindWhir的neocities空间</a>');
//music大文件夹
if(thehref.indexOf("music")>0){
footdone=1;
document.getElementById("head").innerHTML=(document.getElementById("head").innerHTML+'<link rel="icon" href="/music/music.ico" /><title>'+document.getElementById("most").innerHTML+' - 琴&风 - 风吹呼呼</title>');
document.getElementById("topper").innerHTML=(document.getElementById("topper").innerHTML+' &gt; <a href="/music"><img src="/music/music.ico">琴&风Music</a>');
document.getElementById("footer").innerHTML=(document.getElementById("footer").innerHTML+'<a href="https://space.bilibili.com/347752142"><img src="/windwhir.ico" />风吹呼呼WindWhir的Bilibili主页</a> - 鄙人作词作曲编曲 - music大文件内，蓝奏云密码均为whir - 歌曲及其附属所有权利保留，未经允许不得使用 - html/script by WindWhir , hosted by neocities');
}
//2409大文件夹
if(thehref.indexOf("2409")>0){
footdone=1;
document.getElementById("head").innerHTML=(document.getElementById("head").innerHTML+'<link rel="icon" href="/2409/a2409.ico" /><title>'+document.getElementById("most").innerHTML+' - 2409 - 风吹呼呼</title>');
document.getElementById("head").innerHTML=('<link rel="icon" href="/2409.a2409.ico" />'+document.getElementById("head").innerHTML);
document.getElementById("topper").innerHTML=(document.getElementById("topper").innerHTML+' &gt; <a href="/2409"><img src="/2409/a2409.ico">2409篇章</a>');
document.getElementById("footer").innerHTML=(document.getElementById("footer").innerHTML+'<a href="https://space.bilibili.com/347752142"><img src="/windwhir.ico" />风吹呼呼WindWhir的Bilibili主页</a> - 郑州一中2409+x - 2409大文件内，蓝奏云密码均为2409 - 所有权利保留，仅供学习交流使用 - html/script by WindWhir , hosted by neocities');
}
//否则
if(footdone==0){
document.getElementById("head").innerHTML=(document.getElementById("head").innerHTML+'<link rel="icon" href="/windwhir.ico" /><title>'+document.getElementById("most").innerHTML+' - 风吹呼呼</title>');
document.getElementById("footer").innerHTML=(document.getElementById("footer").innerHTML+'<a href="https://space.bilibili.com/347752142"><img src="/windwhir.ico" />风吹呼呼WindWhir的Bilibili主页</a> - html/script by WindWhir , hosted by neocities')
}