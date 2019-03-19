window.onload=function(){
    var zc=[
        {name:"雪佛兰科鲁兹",img:"img/租车/雪佛兰.png",
        jianjie:"自动挡 / 掀背 / 1.6L / 5座",jiage:"28元/天"},

        {name:"大众捷达",img:"img/租车/大众.jpg",
        jianjie:"手动挡 / 三厢 / 1.4L / 5座",jiage:"38元/天"},

        {name:"丰田",img:"img/租车/丰田.jpg",
        jianjie:"自动挡 / 三厢 / 1.4L / 5座",jiage:"48元/天"},

        {name:"别克",img:"img/租车/别克.jpg",
        jianjie:"自动挡 / 三厢 / 1.6L / 5座",jiage:"58元/天"},

        {name:"大众斯柯达明锐",img:"img/租车/大众.jpg",
        jianjie:"自动挡 / 三厢 / 1.5L / 5座",jiage:"68元/天"},

        {name:"雪铁龙",img:"img/租车/雪铁龙.jpg",
        jianjie:"自动挡 / 三厢 / 1.6L / 5座",jiage:"78元/天"},

        {name:"福特福睿斯",img:"img/租车/福特.jpg",
        jianjie:"自动挡 / 三厢 / 1.6L / 5座",jiage:"88元/天"}];

        for(var i=0;i<zc.length;i++){
            document.getElementById("main").innerHTML+=
            "<div class='box'><div class='box-img'><img src="+
            zc[i].img+"></div><div class='box-nr'><h1>"+zc[i].name+"</h1><p class='jieshao'>"+zc[i].jianjie+
                "</p><p class='jiage'>"+zc[i].jiage+"</p><div class='goumai'>租 借</div></div></div>  "
        }


}