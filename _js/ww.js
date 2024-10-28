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