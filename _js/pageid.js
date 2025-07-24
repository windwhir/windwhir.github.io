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
  var pgid_music=[]
  
  //2409 3
  var pgid_2409=[]
  
  //dq 4
  var pgid_dq=[]
  
//总页
var pgid_menu=["https://windwhir.github.io",pgid_tech,pgid_music,pgid_2409,pgid_dq]

function pgid(id /* x_xx_xx，Number类型 */ ){
  try{
    if(id/10000>=2){alert("目前pageid还在试验阶段，\n仅tech大文件夹开放。");return false;}
    let finalURL=pgid_menu[0];
    let s1=id/10000-id%10000/10000;
    let s3=id%100;
    let s2=(id-s1*10000-s3)/100;
    console.log(""+s1+s2+s3)
    if(s1==0){return finalURL}else{finalURL+="/"+pgid_menu[s1][0];}
    if(s2==0){return finalURL}else{finalURL+="/"+pgid_menu[s1][s2][0];}
    if(s3==0){return finalURL}else{finalURL+="/"+pgid_menu[s1][s2][s3];}
    return finalURL;
  }catch(e){
    console.log("PageId转网址失败，请检查是否为标准五位数字")
    return false;
  }
}

function pgid_inURL(){
  let url=location.href;
  let urlin=[0,0];
  let url2="";
  if(url.indexOf('#')>0){urlin[0]=0;url2="#"+url.split('#')[1];url=url.split('#')[0];}
  if(url.indexOf('?')>0){urlin[0]=0;url2="?"+url.split('?')[1]+url2;url=url.split('?')[0];}
  url=url.endsWith('/') ? url.slice(0, -1) : url ;
  if(pgid(url.slice(-5))){
    url2=pgid(url.slice(-5))+url2
    return url2;
  }else{
    return false;
  }
}