window.onload=function(){
    var jdxx=[
        {name:"常州环球恐龙城恐龙主题度假酒店",img:"img/旅游行程/酒店1.jpeg",
        jianjie:"这里是恐龙的世界、孩子的乐园。酒店奇幻的艺术氛围和独特的温情服务，为你带来全新的旅行度假体验，只为亲子而来。",jiage:"288元/天"},

        {name:"巴厘岛棕榈度假村 (Bali Palms Resort)",img:"img/旅游行程/酒店2.jpeg",
        jianjie:"酒店电话：62-363-42191 开业时间：2010年 最近装修时间：2012年",jiage:"388元/天"},

        {name:"香港迪士尼乐园酒店 (Disneyland Hotel)",img:"img/旅游行程/酒店3.jpeg",
        jianjie:"一家以华丽的维多利亚风格为设计的酒店，拥有别致小亭，供婚礼使用的花园及宽敞的展览和会议场地。",jiage:"488元/天"},

        {name:"普吉岛芭东度假酒店 (Patong Resort)",img:"img/旅游行程/酒店4.jpeg",
        jianjie:"您可以享受芭东核心区的便利，步行即可到达邦拉夜街和君斯龙购物中心。 该度假村紧邻皇家天堂夜市及芭东海滩",jiage:"588元/天"},

        {name:"巴厘岛金巴兰RIMBA酒店 (RIMBA Jimbaran Bali By AYANA) ",img:"img/旅游行程/酒店5.jpeg",
        jianjie:"毗邻高尔夫球场，住客可方便地前往新库塔高尔夫球场和新库塔绿地公园。 该 度假村紧邻巴拉根海滩及新库塔海滩。",jiage:"688元/天"},

        {name:"上野维拉喷泉酒店 (Hotel Villa Fontaine UENO) ",img:"img/旅游行程/酒店6.jpeg",
        jianjie:"身处东京的中心区，距离佐竹商店街和台东区设计师村仅几步之遥。 该酒店靠近浅草寺和东京晴空塔",jiage:"788元/天"},

        {name:"新宿燦路都廣場大酒店 (Hotel Sunroute Plaza Shinjuku)",img:"img/旅游行程/酒店7.jpeg",
        jianjie:"只需几分钟便能到达高岛屋时代广场和文化学园服饰博物馆。 该酒店靠近明治神宫和皇居。",jiage:"888元/天"}];

        for(var i=0;i<jdxx.length;i++){
            document.getElementById("main").innerHTML+=
            "<div class='box'><div class='box-img'><img src="+
            jdxx[i].img+"></div><div class='box-nr'><h1>"+jdxx[i].name+"</h1><p class='jieshao'>"+jdxx[i].jianjie+
                "</p><p class='jiage'>"+jdxx[i].jiage+"</p><div class='goumai'>预 约</div></div></div>  "
        }


}