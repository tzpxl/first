//$(".slider_list")

//左按钮$(".slider_control_prev")
//右按钮$(".slider_control_next")
$(function(){
    var index=0;
    $(".slider_control_prev").click(jieliu(function(){
        if(index<=0){
            $(".slider_wrapper").animate({"left":-5600},0)
            index=6;
        }else{
            index--;
        }
        console.log(index);
        
        $(".slider_wrapper").animate({left:index*-800},500);
    },500));
    $(".slider_control_next").click(jieliu(function(){
        if(index>=7){
            $(".slider_wrapper").animate({"left":0},0)
            index=1;
        }else{
            index++;
        }
        console.log(index);
        
        $(".slider_wrapper").animate({left:index*-800},500); 
    },500));
    function jieliu(fn,time){
        var a=0;
        return function(){
            var b=this;
            var c=arguments;
            var d=+ new Date();
            if(d-a>=time){
                fn.apply(b,c);
                a=d;
            }
        }
    }
})

