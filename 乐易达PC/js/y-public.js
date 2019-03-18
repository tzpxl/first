$(window).bind("load", function() {
    var footerHeight = 0;
    var footerTop = 0;
    positionFooter();
    function positionFooter() {
        // 获取页脚的高度
        footerHeight = $(".footer").height();
        // 获取页脚的高度
        /*
            scrollTop() 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 
        */
        footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
        //如果页面内容高度小于屏幕高度，div#footer将绝对定位到屏幕底部，否则div#footer保留它的正常静态定位
        if(($(document.body).height()+footerHeight) < $(window).height()) {
            $(".footer").css({ position: "absolute",left:"0" }).stop().css({top:footerTop});
        }
    }
    $(window).scroll(positionFooter).resize(positionFooter);
});