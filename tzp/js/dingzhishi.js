window.onload=function(){
    var dzs=[
        {name:"定制师 大海",img:"img/定制师/dz0.jpg",
        jianjie:"每年夏天我都要忙着采摘葡萄，还要制作浓烈的Raki酒，花园每天也要去整理，还要拉着那头蠢蠢的驴子去买蓝色油漆，橄榄也是要摘的，到了晚上，还要去那家约好的餐厅弹奏钢琴，餐厅的味道嘛，我可从来都不推荐给谁。",jiage:"1888元/次"},

        {name:"定制师 马雯",img:"img/定制师/dz1.jpg",
        jianjie:"从中国到印度，唐三藏领小弟走了十四年。从西欧到北欧，我同好友一年走遍。飞机、火车、直升机、降落伞、海船, 地上的机械筋骨，天边的优雅弧线, 都是我的足迹。",jiage:"2888元/次"},

        {name:"定制师 肖锐",img:"img/定制师/dz2.jpg",
        jianjie:"我为自己建了一座农场，早晨我要牧马喂羊，中午我要让兔子和大狗晒太阳，下午还有好几筐的花朵要处理，晚上嘛，还要给好多人算命。",jiage:"3888元/次"},

        {name:"定制师 曹灿",img:"img/定制师/dz3.png",
        jianjie:"曾经在北岛北开着最烂的房车露营，却感叹到这是生命中最美好的时光；也在汤加里罗的狂风暴雪里徒步10小时，将魔戒送回末日火山；还去到南岛南的布拉夫，吃过世界上的顶级生蚝。如果可以，我想做一只kiwi鸟，全身只装得下一个蛋，走走走，吃吃吃。",jiage:"4888元/次"},

        {name:"定制师 王优",img:"img/定制师/dz4.jpg",
        jianjie:"万卷书很惭愧没有读下来，这千里路我倒是想坚持走下去。大冰说过“有意思比有意义更有意义”，跋山涉水去见形形色色的人，翻山越岭去触碰意向不到的景，又是谁来自山川湖海，却囿于昼夜的爱。而我，想在世界的角落，祝你早安、午安、晚安。",jiage:"5888元/次"},

        {name:"定制师 刘淼",img:"img/定制师/dz5.jpg",
        jianjie:"大二的那年在黄石公园种下了自己的美国梦，两年后怀揣着行走世界的梦想在美利坚到处留下自己的足迹。穿行在新年夜五光十色的纽约街头，陶醉在夕阳西下的圣地亚哥，从东海岸到西海岸，旅行的意义在于路上的点点滴滴。",jiage:"6888元/次"},

        {name:"定制师 李晨旸",img:"img/定制师/dz6.jpeg",
        jianjie:"人生除了吃和睡，就是在路上浪。在外面浪的日子每天都很特别，但自己记性不好，于是多拍点照片吧，让这些照片支撑起我美好的回忆。Always dream big, live bravely.",jiage:"7888元/次"}];

        for(var i=0;i<dzs.length;i++){
            document.getElementById("main").innerHTML+=
            "<div class='box'><div class='box-img'><img src="+
            dzs[i].img+"></div><div class='box-nr'><h1>"+dzs[i].name+"</h1><p class='jieshao'>"+dzs[i].jianjie+
                "</p><p class='jiage'>"+dzs[i].jiage+"</p><div class='goumai'>定 制</div></div></div>  "
        }


}