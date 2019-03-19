window.onload=function(){
    var njl=[
        {name:"浙西-大明山三日游",img:"img/旅游行程/美食1.jpeg",
        jianjie:"春季踏青好时节，大龙湾，风之谷主题山谷乐园，大明山，再加芝樱花海，游昌化大自然风光。",jiage:"288元/天"},

        {name:"桐庐-大奇山三日游",img:"img/旅游行程/美食2.jpeg",
        jianjie:"包含【大奇山国家森林公园】+【富春江小三峡严子陵钓台】+【桐君山】+【瑶琳仙境】",jiage:"388元/天"},

        {name:"天台山三日游",img:"img/旅游行程/美食3.jpeg",
        jianjie:"游王牌后岸村，蛇蟠胜景，台州第一奇洞岛",jiage:"488元/天"},

        {name:"安吉两日游",img:"img/旅游行程/美食4.jpeg",
        jianjie:"中国大竹海、高家堂-云上草原七星谷、青山绿水乌托邦小村余村",jiage:"588元/天"},

        {name:"宁波-象山-石浦古城3日游",img:"img/旅游行程/美食5.jpeg",
        jianjie:"象山地处宁波市东南沿海的象山县，历史悠久、底蕴深厚的塔山文化和渔家文化赋予了象山独具魅力的地方民俗",jiage:"688元/天"},

        {name:"磐安3日游",img:"img/旅游行程/美食6.jpeg",
        jianjie:"磐安位于“国家生态县”--浙江省磐安县东北部尖山镇，景区内汇集了潭、瀑、湖、石、山、林等丰富的自然资源。",jiage:"788元/天"},

        {name:"北京-天津双动6日自由行",img:"img/旅游行程/美食7.jpeg",
        jianjie:"北京天津两地连游，行程超值精选高性价比酒店，随心搭配，小资出游首选",jiage:"888元/天"}];

        for(var i=0;i<njl.length;i++){
            document.getElementById("main").innerHTML+=
            "<div class='box'><div class='box-img'><img src="+
            njl[i].img+"></div><div class='box-nr'><h1>"+njl[i].name+"</h1><p class='jieshao'>"+njl[i].jianjie+
                "</p><p class='jiage'>"+njl[i].jiage+"</p><div class='goumai'>预 约</div></div></div>  "
        }


}