window.onload=function(){
    var s=["旅行社"]
    var top=["旅行社推荐","旅行社排行"]
    var img=["images/52147.png","images/盈科美辰.png","images/天翼.png"]
    var p1=["山西新华国际旅行社","盈科美辰国际旅行社","杭州天翼旅行社"]
    var p2=["新华国旅为您提供山西当地旅游，周边旅游国内游","杭州出发国内旅游、出境旅游、周边旅游等欢迎","杭州出发一日游 杭州出发二日游 杭州出发短途游"]
    var p3=["电话：400-0351-767","电话：0571-86820685","电话：400-0629-888"]
    var li=["经营最佳","人气最佳"]
    var s1=["盈科美辰国际旅行社","山西新华国际旅行社","杭州天翼旅行社"]
    var shuzi=["1","2","3"]
    var header=document.getElementById("header");
    var span1=header.getElementsByTagName("span");
    var recom1=document.getElementsByClassName("recom_top");
    var span2=recom1[0].getElementsByTagName("span");
    var span3=recom1[1].getElementsByTagName("span");
    var recom2=document.getElementsByClassName("recom_con");
    var con=recom2[0].getElementsByClassName("content");
    var nav=document.getElementsByClassName("recom_nav");
    var list=nav[0].getElementsByClassName("nav_list");
    var rank=document.getElementsByClassName("ranking");
    span1[1].innerHTML=s[0];
    span2[0].innerHTML=top[0];
    span3[0].innerHTML=top[1];
    //旅行社
    for(var i=0;i<con.length;i++){
        con[i].innerHTML+="<!-- 旅行社图片 -->"+"<div class='club'>"+
            "<div class='group'>"+"<img"+"/"+"src="+img[i]+">"+"</div> "+"</div>"+"<!-- 信息 -->"
             +"<div class='information'>"+"<p>"+p1[i]+"</p>"+"<p>"+p2[i]+"</p>"+"<p>"+p3[i]+"</p>"+"</div>"
    }
    //排行导航
    for(var x=0;x<list.length;x++){
        list[x].innerHTML=li[x];
    }
    
    //排行榜
   for(var a=0;a<s1.length;a++){
        rank[0].innerHTML+="<!-- 排行 -->"+"<div class='list_of'>"+"<span>"+shuzi[a]+"</span>"+"<span>"+s1[a]+"</span>"+"</div>"
    }

}