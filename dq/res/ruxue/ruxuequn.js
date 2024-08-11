var ban
function wr(wtf){document.write(wtf)}
function qr(){document.write("<img src='res/ruxue/"+ban+".png' />")}
function qun(){
 ban=Number(prompt("请输入您的三位数字班级号。弹出数字则为qq群号。"))
 switch(ban){
   case 101:wr(1001954320);break;
   case 102:wr(985150607);break;
   case 104:wr(824714474);qr();break;
   case 105:qr();break;
   case 106:qr();break;
   case 107:qr();break;
   case 109:qr();break;
   case 111:qr();break;
   case 112:wr(793845897);break;
   case 113:wr(812027664);break;
   case 114:wr(991267195);break;
   case 115:wr(1001898484);qr();
 }
 wr("<hr/>二维码为微信群，数字为qq群。<br/><a onclick='location.reload()'>点此返回</a>")
}