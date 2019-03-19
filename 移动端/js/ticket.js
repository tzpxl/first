window.onload=function(){
    var s=["机票"]
    var p=["出发日期："]
    var img=["images/关东.png"]
    var a=["确定"]
    var h=["热门"]
    var picture=["images/北京.jpg","images/九州.jpg","images/关东.png","images/樱花.jpg"]
    var span1=["上海","上海","上海","上海"]
    var span2=["北京","九州","关东","富士山"]
    var time=["03月09日","03月09日","03月09日","03月09日"]
    var icon=["3.1折","5.5折","8.8折","7.5折"]
    var money=["810","998","1400","2359"]
    var header=document.getElementById("header");
    var span=header.getElementsByTagName("span");
    var hot=document.getElementsByClassName("hot");
    var t1=document.getElementsByClassName("ticket");
    var trip=document.getElementsByClassName("trip");
    // console.log(t1);
    span[1].innerHTML=s[0];
    hot[0].innerHTML=h[0];
    for(var x=0;x<t1.length;x++){
        t1[x].innerHTML+="<!-- 图片 -->"+"<div class='picture'>"+" <img"+"/"+"src="+picture[x]+">"+"</div>"+
           "<!-- 信息 -->"+"<div class='information'>"+"<div class='information_top'>"+"<span>"+span1[x]+"</span>"+"<span class='iconfont iconshuangxiangjiantou'>"+"</span>"+"<span>"+span2[x]+"</span>"+"</div>"+
            "<!-- 日期 -->"+"<div class='information_cen'>"+"<span>"+time[x]+"</span>"+"</div>"+
            "<!-- 价格折扣 -->"+"<div class='information_fot'>"+"<span>"+icon[x]+"</span>"+"<span class='iconfont iconrenminbi'>"+"</span>"+"<span>"+money[x]+"</span>"+"</div>"
    }
    
    for(var i=0;i<img.length;i++){
        trip[i].innerHTML+="<!-- 出发 -->"+"<div class='travel'>"+"<input type='text'  placeholder='请输入出发地'/>"+"<span class='Departure_date'>"+p[i]+"<input type='date'/>"+"</span>"+"</div>"+"<!-- 中间 -->"+"<div class='center'>"+"<span class='iconfont icon-zhuanhuan'>"+"</span>"+"</div>"+"<!--目的地 -->"
        +"<div class='destination'>"+"<!-- 目的地图片 -->"+"<div class='group'>"+"<img"+"/"+"src="+img[i]+">"+"</div>"
        +"<!-- 目的城市 -->"+"<div class='city'>"+"<input type='text' placeholder='请输入目的地'/>"+"<div class='queding'>"+"<div class='aaa'>"+a[i]+"</div>"+"</div> "+"</div>"+"</div>"
    }

}