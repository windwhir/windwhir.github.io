/*内容 neirong(元素id,变成啥)
*显示 xainshi(元素id)
*不显示 buxianshi(元素id)
*0-display；1-透明度；2-缩放；
*/
function neirong(aidi,neirong){
  document.querySelector(aidi).innerHTML=neirong
}
function xianshi0(aidi){
  document.querySelector(aidi).style.display="unset"
}
function buxianshi0(aidi){
  document.querySelector(aidi).style.display="none"
}
function xianshi1(aidi){
  document.querySelector(aidi).style.opacity="1"
}
function buxianshi1(aidi){
  document.querySelector(aidi).style.opacity='0';
}
function xianshi2(aidi){
  document.querySelector(aidi).style.transform="scale(1)"
}
function buxianshi2(aidi){
  document.querySelector(aidi).style.transform="scale(0)"
}
function buxianshi3(aidi,tm){
  buxianshi1(aidi)
  setTimeout(()=>{buxianshi0(aidi)},tm)
}
/*顶部均为potop(元素id,距离顶部的距离)
*渐变位置 potran(元素id,x距离,y距离)
*其他变化 potrans(元素id,x距离,y距离)
*宽度 pow(元素id,宽度)
*高度 poh(元素id,高度)
*/
function potop(aidi,juli){
  document.querySelector(aidi).style.bottom="";
  document.querySelector(aidi).style.top=juli
}
function pobottom(aidi,juli){
  document.querySelector(aidi).style.top="";
  document.querySelector(aidi).style.bottom=juli
}
function potran(aidi,tranx,trany){
  document.querySelector(aidi).style.transform="translate("+tranx+","+trany+")"
}
function potrans(aidi,transformproperty){
  document.querySelector(aidi).style.transform=transformproperty;
}
function pow(aidi,juli){
  document.querySelector(aidi).style.width=juli;
}
function poh(aidi,juli){
  document.querySelector(aidi).style.height=juli;
}