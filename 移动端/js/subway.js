window.onload=function(){
    var s=["地铁"]
    var c=["已开通地铁的城市","即将开通地铁的城市"]
    var list=["北京","香港","天津","上海","台北","广州","长春","大连","武汉","深圳","南京","高雄","成都","沈阳","佛山","重庆","西安","苏州","昆明","杭州","合肥","郑州","长沙","宁波","南昌"]
    var list2=["南通","嘉兴","包头","洛阳","邯郸","扬州","株洲","绍兴","湖州","九江","徐州","常州","柳州","厦门","长春"]
    var header=document.getElementById("header");
    var span=header.getElementsByTagName("span");
    var span1=document.getElementsByClassName("sub");
    var aaa=document.getElementsByClassName("aaa");
    var move=document.getElementsByClassName("move");
    span[1].innerHTML=s[0];
for(var a=0;a<span1.length;a++){
    span1[a].innerHTML=c[a];
}
// 已开通
for(var i=0;i<aaa.length;i++){
     aaa[i].innerHTML=list[i];
}
// 即将开通
for(var x=0;x<move.length;x++){
    move[x].innerHTML=list2[x];
   }
    
}