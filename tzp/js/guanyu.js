window.onload=function(){
    var ass=
        ["此时此刻，谁和你共同关注同一个旅行目的地？",
        "世界那么大，我们的下一个目的地在哪里，为什么要去那里？",
        "一直以来我们都非常感慨蚂蚁、蜜蜂社会的团结无私、相互协作与共同分享。",
        "当我们离开了现实环境，这种本能其实我们人类也一样具有。",
        "这种现象经常发生在旅途中，或是在乐易达里。",
        "这也是乐易达名字的来历。"]
    
    var aDiv=document.getElementById("t_nav_a");
    var aP=aDiv.getElementsByTagName("p");
    for(var i=0;i<aP.length;i++){
        aP[i].index=i;
        // console.log(aP[i].index)
        aP[i].innerHTML=(ass[i]);
    }
    var bss=
        ["在乐易达你可以交换资讯，分享旅行。",
        "帮助这里的友邦，或者是获得帮助。",
        "也可以交流攻略、美食、音乐、摄影日记，以及与旅行有关的零零种种",
        "在乐易达你可以:祝福他（她），或，一同旅行..."
        ]
    
    var bDiv=document.getElementById("t_nav_b");
    var bP=bDiv.getElementsByTagName("p");
    for(var i=0;i<bP.length;i++){
        bP[i].index=i;
        // console.log(aP[i].index)
        bP[i].innerHTML=(bss[i]);
    }
    var css=
        ["只要你爱旅行，只要你有爱。",
        "这里的一切都是都由你和其他成员产生和决定。 ",
        "由你管理着自己的小组，创建着属于自己的目的地。",
        "你的每一条话题都出现在我的乐易达里，同时这些内容又由和你一样的成员分享着。",
        "这种现象经常发生在旅途中，或是在乐易达里。",
        "这也是乐易达名字的来历。"]
    
    var cDiv=document.getElementById("t_nav_c");
    var cP=cDiv.getElementsByTagName("p");
    for(var i=0;i<cP.length;i++){
        cP[i].index=i;
        // console.log(aP[i].index)
        cP[i].innerHTML=(css[i]);
    }
    var dss=
        ["乐易达 自2006年上线运营以来，乐易达注册用户量持续攀高，其中大部分用户来自北京、上海、广州、深圳、香",
        "港等一线大城市，也不乏海外旅居人士。乐易达的用户热爱户外旅行，钟情于自驾游，拥有专业的摄影技术，因",
        "此，乐易达凝聚的是一个高质量的旅游爱好者群体。凭借自身的优势，马蜂窝正吸引着更多的网友源源不断地加入",
        "乐易达旅游社区。截至目前，乐易达已经收录了国内外众多旅游目的地。依靠注册用户提供的大量一手信息，乐易",
        "达已先后制作推出了各类目的地旅游攻略路书，路书设计精致、新颖，路书内容涵盖当地吃住行游购娱等各方面丰",
        "富详实的旅游信息，给无数自助游爱好者提供了方便快捷的旅行指南，受到了用户的普遍欢迎。"
        ]
    
    var dDiv=document.getElementById("t_nav_d");
    var dP=dDiv.getElementsByTagName("p");
    for(var i=0;i<dP.length;i++){
        dP[i].index=i;
        // console.log(aP[i].index)
        dP[i].innerHTML=(dss[i]);
    }
    
}