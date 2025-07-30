//导航
  //tech 1
    //辩论赛 101
    var pgid_tech01=["bianlun","chuangjian","jiaoxue"]
    //数学 102
    var pgid_tech02=["math","determinant"]
    //点名宝盒 103
    var pgid_tech03=["dianming","dianming","changpiao"]
  //tech
  var pgid_tech=["tech",pgid_tech01,pgid_tech02,pgid_tech03,"xxks",/*5*/]
  
  //music 2
  var pgid_music=["music"]
  
  //2409 3
  var pgid_2409=["2409"]
  
  //dq 4
  var pgid_dq=["dq"]
  
//总页
var pgid_menu=["http://windwhir.top",pgid_tech,pgid_music,pgid_2409,pgid_dq]
if(location.hostname.split(".")[1]=="github")pgid_menu[0]="https://windwhir.github.io";
if(location.hostname.split(".")[1]=="pages")pgid_menu[0]="https://windwhir.pages.dev";

function pgid(id /* x_xx_xx，Number类型 */ ){
  try{
    let finalURL=pgid_menu[0];
    let s1=id/10000-id%10000/10000;
    let s3=id%100;
    let s2=(id-s1*10000-s3)/100;
    if(s1==0){return finalURL}else{finalURL+="/"+pgid_menu[s1][0];}
    if(s2==0){return finalURL}else{if(typeof pgid_menu[s1][s2] === 'string'){return finalURL+'/'+pgid_menu[s1][s2]};finalURL+="/"+pgid_menu[s1][s2][0];}
    if(s3==0){return finalURL}else{finalURL+="/"+pgid_menu[s1][s2][s3];}
    return finalURL;
  }catch(e){
    console.log("PageId转网址失败，请检查是否为标准五位数字")
    return false;
  }
}