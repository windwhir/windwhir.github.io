/*目录
*style变换
*朗读
*获取?后内容
*ua
*退出提示
*/

/*style变换
*/
function ww_innerHTML(query,innerHTML){
  document.querySelector(query).innerHTML=innerHTML
}
function ww_innerHTML_add(query,add_innerHTML){
  document.querySelector(query).innerHTML+=add_innerHTML
}
function ww_innerHTML_add_atbeginning(query,add_innerHTML){
  document.querySelector(query).innerHTML=add_innerHTML+document.querySelector(query).innerHTML
}
function ww_display(query,display_kind){
  document.querySelector(query).style.display=display_kind
}
function ww_display_unset(query){
  document.querySelector(query).style.display="unset"
}
function ww_display_none(query){
  document.querySelector(query).style.display="none"
}
function ww_opacity(query,opacity_num){
  document.querySelector(query).style.opacity=Number(ospacity_num)
}
function ww_scale(query,scale_num){
  document.querySelector(query).style.transform=Number(scale_num)
}
function ww_top(query,top_distance){
  document.querySelector(query).style.bottom="";
  document.querySelector(query).style.top=top_distance
}
function ww_bottom(query,bottom_distance){
  document.querySelector(query).style.top="";
  document.querySelector(query).style.bottom=bottom_distance
}
function ww_translate(query,x_distance,y_distance){
  document.querySelector(query).style.transform="translate("+x_distance+","+y_distance+")"
}
function ww_trans(query,transform_property){
  document.querySelector(query).style.transform=transform_property;
}
function ww_transsform(query,transform_property){
  document.querySelector(query).style.transform=transform_property;
}
function ww_width(query,width){
  document.querySelector(query).style.width=width;
}
function ww_height(query,height){
  document.querySelector(query).style.height=height;
}
/*朗读*/
var ww_speak_alert_variate=0
function ww_speak(utter_text){
  try{
    speechSynthesis.cancel()
    let speech_text = new SpeechSynthesisUtterance(utter_text)
    speechSynthesis.speak(speech_text)
  }catch(err){
    if(ww_speak_alert_variate==0){
      if(confirm("如果您想要正常使用朗读功能，请下载firefox浏览器。点击确认以前往下载。")){alert("确认后请允许浏览器弹出窗口！");window.open("https://www.32r.com/app/132224.html")}
      ww_speak_alert_variate=1
    }
  }
}
/*获取?后内容*/
function ww_urlrel(release){let params=new URLSearchParams(window.location.href.split('?')[1]);return params.get(release);}
/*ua*/
function ww_ua(search_string){navigator.userAgent.indexOf(search_string)}
/*退出提示*/
function ww_beforeunload(string){window.onbeforeunload=()=>{return string}}