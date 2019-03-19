window.onload=function(){
    var s=["普吉岛"]
    var picture=["images/普吉岛.jpg"]
    var text=["从蓝色的泻湖到粉色的落日再到穿着橙色长袍的僧侣，普吉岛 (Phuket) 为游客提供彩虹般缤纷的壮观度假美景。 三轮摩托车、出租车、巴士和长尾船载着游客在这些美景间穿行。普吉岛南部海岸有最受欢迎的沙滩， 北部则更为安静。 皮皮岛(Koh Phi Phi)、攀牙湾 (Phang Nga Bay) 和帕通海(Patong Beach)都是热门景点。 潜水、浮潜、帆板和帆船等运动项目任您选择。 您还可以前往内陆地区探索树木丛生的小山、巍峨的高山和陡峭的悬崖。"]
    var biaoti=["酒店","景点玩乐","特色","美食","普吉岛旅游指南"]
    var header=document.getElementById("header");
    var span=header.getElementsByTagName("span");
    var pi=document.getElementsByClassName("picture");
    var img=pi[0].getElementsByTagName("img");
    var intro=document.getElementsByClassName("introduce");
    var options=document.getElementsByClassName("options");
    span[1].innerHTML=s[0];
    img[0].src=picture[0];
    intro[0].innerHTML=text[0];
    for(var i=0;i<biaoti.length;i++){
        options[0].innerHTML+="<div class='listpic'>"+"<span>"+biaoti[i]+"</span>"+"<span class='iconfont iconqianjin'>"+"</span>"+"</div>"
    }

}