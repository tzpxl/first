window.onload=function(){
    var s=["动车"]
    var p=["出发日期：","出发日期："]
    var img=["images/九州.jpg","images/关东.png"]
    var a=["确定"]
    var header=document.getElementById("header");
    var span=header.getElementsByTagName("span");
    var trip=document.getElementsByClassName("trip");
    span[1].innerHTML=s[0];
    for(var i=0;i<img.length;i++){
        trip[i].innerHTML+="<!-- 出发 -->"+"<div class='travel'>"+"<input type='text'  placeholder='请输入出发地'/>"+"<span class='Departure_date'>"+p[i]+"<input type='date'/>"+"</span>"+"</div>"+"<!-- 中间 -->"+"<div class='center'>"+"<span class='iconfont icon-zhuanhuan'>"+"</span>"+"</div>"+"<!--目的地 -->"
        +"<div class='destination'>"+"<!-- 目的地图片 -->"+"<div class='group'>"+"<img"+"/"+"src="+img[i]+">"+"</div>"
        +"<!-- 目的城市 -->"+"<div class='city'>"+"<input type='text' placeholder='请输入目的地'/>"+"<div class='queding'>"+"<div class='aaa'>"+a[i]+"</div>"+"</div> "+"</div>"+"</div>"
    }

}