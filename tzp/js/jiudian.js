window.onload=function(){
    var jd={
        "wbss":[
            {"kind":"朝拜历史",
            "imge":[
                "img/旅游行程/酒店1.jpeg",
                "img/旅游行程/酒店1.jpeg",
                "img/旅游行程/酒店1.jpeg",
                "img/旅游行程/酒店1.jpeg",
                "img/旅游行程/酒店1.jpeg",
                "img/旅游行程/酒店1.jpeg"
            ]},
            {"kind":"潜水胜地",
            "imge":[
                "img/旅游行程/酒店2.jpeg",
                "img/旅游行程/酒店2.jpeg",
                "img/旅游行程/酒店2.jpeg",
                "img/旅游行程/酒店2.jpeg",
                "img/旅游行程/酒店2.jpeg",
                "img/旅游行程/酒店2.jpeg"
            ]},
            {"kind":"超值酒店",
            "imge":[
                "img/旅游行程/酒店3.jpeg",
                "img/旅游行程/酒店3.jpeg",
                "img/旅游行程/酒店3.jpeg",
                "img/旅游行程/酒店3.jpeg",
                "img/旅游行程/酒店3.jpeg",
                "img/旅游行程/酒店3.jpeg"
            ]},
            {"kind":"吃货根据地",
            "imge":[
                "img/旅游行程/酒店4.jpeg",
                "img/旅游行程/酒店4.jpeg",
                "img/旅游行程/酒店4.jpeg",
                "img/旅游行程/酒店4.jpeg",
                "img/旅游行程/酒店4.jpeg",
                "img/旅游行程/酒店4.jpeg"
            ]},
            {"kind":"亲子之选",
            "imge":[
                "img/旅游行程/酒店5.jpeg",
                "img/旅游行程/酒店5.jpeg",
                "img/旅游行程/酒店5.jpeg",
                "img/旅游行程/酒店5.jpeg",
                "img/旅游行程/酒店5.jpeg",
                "img/旅游行程/酒店5.jpeg"
            ]},
            {"kind":"设计酒店",
            "imge":[
                "img/旅游行程/酒店6.jpeg",
                "img/旅游行程/酒店6.jpeg",
                "img/旅游行程/酒店6.jpeg",
                "img/旅游行程/酒店6.jpeg",
                "img/旅游行程/酒店6.jpeg",
                "img/旅游行程/酒店6.jpeg"
            ]}
    ]
    }
    var Box=document.getElementById("nav_title");
    var aBox=document.getElementById("nav_title_1");
    var aDiv=aBox.getElementsByTagName("div");
    var bBox=document.getElementById("nav_title_2");
    var bDiv=bBox.getElementsByTagName("div");
    for(var i=0;i<aDiv.length;i++){
        aDiv[i].index=i;
        aDiv[i].innerHTML=jd.wbss[i].kind;
        //添加默认
        bDiv[0].innerHTML+= "<img src="+jd.wbss[0].imge[1]+">";
        aDiv[i].onclick=function(){
            for(var i=0;i<aDiv.length;i++){
                aDiv[i].className="";
                // aDiv.style.color="";
            }
            this.className="active";
            // console.log(jd.wbss[this.index].imge)
            bDiv[0].innerHTML="";
            for(var j=0;j<jd.wbss[this.index].imge.length;j++){
                bDiv[0].innerHTML+= "<img src="+jd.wbss[this.index].imge[j]+">";
            }
            
        }
        aDiv[0].onclick();
    }
    var jd1={
        "wbss":[
            {"kind":"曼谷",
            "imge":[
                "img/旅游行程/酒店7.jpeg",
                "img/旅游行程/酒店7.jpeg",
                "img/旅游行程/酒店7.jpeg",
                "img/旅游行程/酒店7.jpeg",
                "img/旅游行程/酒店7.jpeg",
                "img/旅游行程/酒店7.jpeg",
                "img/旅游行程/酒店7.jpeg",
                "img/旅游行程/酒店7.jpeg"
            ]},
            {"kind":"台北",
            "imge":[
                "img/旅游行程/酒店8.jpeg",
                "img/旅游行程/酒店8.jpeg",
                "img/旅游行程/酒店8.jpeg",
                "img/旅游行程/酒店8.jpeg",
                "img/旅游行程/酒店8.jpeg",
                "img/旅游行程/酒店8.jpeg",
                "img/旅游行程/酒店8.jpeg",
                "img/旅游行程/酒店8.jpeg"
            ]},
            {"kind":"东京",
            "imge":[
                "img/旅游行程/酒店9.jpeg",
                "img/旅游行程/酒店9.jpeg",
                "img/旅游行程/酒店9.jpeg",
                "img/旅游行程/酒店9.jpeg",
                "img/旅游行程/酒店9.jpeg",
                "img/旅游行程/酒店9.jpeg",
                "img/旅游行程/酒店9.jpeg",
                "img/旅游行程/酒店9.jpeg"
            ]},
            {"kind":"香港",
            "imge":[
                "img/旅游行程/酒店10.jpeg",
                "img/旅游行程/酒店10.jpeg",
                "img/旅游行程/酒店10.jpeg",
                "img/旅游行程/酒店10.jpeg",
                "img/旅游行程/酒店10.jpeg",
                "img/旅游行程/酒店10.jpeg",
                "img/旅游行程/酒店10.jpeg",
                "img/旅游行程/酒店10.jpeg"
            ]},
            {"kind":"首尔",
            "imge":[
                "img/旅游行程/酒店11.jpeg",
                "img/旅游行程/酒店11.jpeg",
                "img/旅游行程/酒店11.jpeg",
                "img/旅游行程/酒店11.jpeg",
                "img/旅游行程/酒店11.jpeg",
                "img/旅游行程/酒店11.jpeg",
                "img/旅游行程/酒店11.jpeg",
                "img/旅游行程/酒店11.jpeg"
            ]},
            {"kind":"新加坡",
            "imge":[
                "img/旅游行程/酒店12.jpeg",
                "img/旅游行程/酒店12.jpeg",
                "img/旅游行程/酒店12.jpeg",
                "img/旅游行程/酒店12.jpeg",
                "img/旅游行程/酒店12.jpeg",
                "img/旅游行程/酒店12.jpeg",
                "img/旅游行程/酒店12.jpeg",
                "img/旅游行程/酒店12.jpeg"
            ]}
    ]
    }
    var Box1=document.getElementById("t_2nav_title");
    var aBox1=document.getElementById("t_2nav_title_1");
    var aDiv1=aBox1.getElementsByTagName("div");
    var bBox1=document.getElementById("t_2nav_title_2");
    var bDiv1=bBox1.getElementsByTagName("div");
    for(var i=0;i<aDiv1.length;i++){
        aDiv1[i].index=i;
        aDiv1[i].innerHTML=jd1.wbss[i].kind;
        //添加默认
        bDiv1[0].innerHTML+= "<img src="+jd1.wbss[0].imge[1]+">";
        aDiv1[i].onclick=function(){
            for(var i=0;i<aDiv1.length;i++){
                aDiv1[i].className="";
                // aDiv.style.color="";
            }
            this.className="active";
            // console.log(jd.wbss[this.index].imge)
            bDiv1[0].innerHTML="";
            for(var j=0;j<jd1.wbss[this.index].imge.length;j++){
                bDiv1[0].innerHTML+= "<img src="+jd1.wbss[this.index].imge[j]+">";
            }
            
        }
        aDiv1[0].onclick();
    }
}