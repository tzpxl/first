window.onload = function () {
    /* 轮播图 */
    var uls = document.getElementsByClassName("uls")[0]; //包着图片的ul 
    var lbt_btn = document.getElementsByClassName("lbt_btn")[0].getElementsByTagName("a"); //ul 
    var index = 0;
    lbt_btn[index].className = "xuanzhong"; // 小点被选中的class样式
    var lis_width;

    function llqgaibian() {
        //   console.log( getStyle(uls,"height"));
        lis_width = parseInt(getStyle(uls, "width")) / 5;
        //   console.log(lis_width);
        document.getElementsByClassName("navlbt")[0].style.height = getStyle(uls, "height");
    }
    llqgaibian();
    window.onresize = function () {
        clearInterval(lbtsetInterval);
        llqgaibian();
        index = 0;
        move(uls, "left", -(lis_width * index), 15, function () {
            abtnfun();
            lbtfun();
        });
    }
    for (var i = 0; i < lbt_btn.length; i++) {
        lbt_btn[i].num = i;

        lbt_btn[i].onclick = function () {
            clearInterval(lbtsetInterval);
            index = this.num;

            move(uls, "left", -(lis_width * this.num), 15, function () {
                abtnfun();
                lbtfun();
            });
        }
    }

    function getStyle(obj, name) {
        //window区别：
        //没有加window，是一个变量，需要去作用域找，找不到报错
        //加了window，是一个属性，找不到返回undefined
        // window.
        if (window.getComputedStyle) {
            //正常浏览器的方式,具有getComputedStyle()方法
            return getComputedStyle(obj, null)[name];
        } else {
            //IE8的方式
            return obj.currentStyle[name];
        }
    }

    function abtnfun() {
        for (var i = 0; i < lbt_btn.length; i++) {
            lbt_btn[i].className = "";
        }
        if (index == lbt_btn.length) {
            lbt_btn[0].className = "xuanzhong";
        } else {
            lbt_btn[index].className = "xuanzhong";
        }

    }
    //设置轮播方法
    var lbtsetInterval;

    function lbtfun() {
        lbtsetInterval = setInterval(function () {
            // console.log(index);
            index++;
            if (index > lbt_btn.length) {
                index = 0;
                uls.style.left = 0;
            };
            move(uls, "left", -lis_width * index, 15, function () {
                abtnfun();
            });
        }, 3500);
    }
    lbtfun();
    /* 旅游目的地推荐选项卡 */
    var jd = {
        "wbss": [{
                "kind": "推荐",
                "imge": [
                    "img/产品1.jpg",
                    "img/产品1.jpg",
                    "img/产品1.jpg",
                    "img/产品1.jpg",
                    "img/产品1.jpg",
                    "img/产品1.jpg",
                    "img/产品1.jpg",
                    "img/产品1.jpg",
                    "img/产品1.jpg",
                    "img/产品1.jpg"
                ]
            },
            {
                "kind": "亚洲",
                "imge": [
                    "img/产品2.jpg",
                    "img/产品2.jpg",
                    "img/产品2.jpg",
                    "img/产品2.jpg",
                    "img/产品2.jpg",
                    "img/产品2.jpg",
                    "img/产品2.jpg",
                    "img/产品2.jpg",
                    "img/产品2.jpg",
                    "img/产品2.jpg"
                ]
            },
            {
                "kind": "非洲",
                "imge": [
                    "img/产品3.jpg",
                    "img/产品3.jpg",
                    "img/产品3.jpg",
                    "img/产品3.jpg",
                    "img/产品3.jpg",
                    "img/产品3.jpg",
                    "img/产品3.jpg",
                    "img/产品3.jpg",
                    "img/产品3.jpg",
                    "img/产品3.jpg"
                ]
            },
            {
                "kind": "欧洲",
                "imge": [
                    "img/产品4.jpg",
                    "img/产品4.jpg",
                    "img/产品4.jpg",
                    "img/产品4.jpg",
                    "img/产品4.jpg",
                    "img/产品4.jpg",
                    "img/产品4.jpg",
                    "img/产品4.jpg",
                    "img/产品4.jpg",
                    "img/产品4.jpg"
                ]
            },
            {
                "kind": "大洋洲",
                "imge": [
                    "img/产品8.jpg",
                    "img/产品8.jpg",
                    "img/产品8.jpg",
                    "img/产品8.jpg",
                    "img/产品8.jpg",
                    "img/产品8.jpg",
                    "img/产品8.jpg",
                    "img/产品8.jpg",
                    "img/产品8.jpg",
                    "img/产品8.jpg"
                ]
            },
            {
                "kind": "北美洲",
                "imge": [
                    "img/产品6.png",
                    "img/产品6.png",
                    "img/产品6.png",
                    "img/产品6.png",
                    "img/产品6.png",
                    "img/产品6.png",
                    "img/产品6.png",
                    "img/产品6.png",
                    "img/产品6.png",
                    "img/产品6.png"
                ]
            },
            {
                "kind": "南美洲",
                "imge": [
                    "img/产品7.jpg",
                    "img/产品7.jpg",
                    "img/产品7.jpg",
                    "img/产品7.jpg",
                    "img/产品7.jpg",
                    "img/产品7.jpg",
                    "img/产品7.jpg",
                    "img/产品7.jpg",
                    "img/产品7.jpg",
                    "img/产品7.jpg"
                ]
            }
        ]
    }
    var Box = document.getElementById("nav_title");
    var aBox = document.getElementById("nav_title_1");
    var aDiv = aBox.getElementsByTagName("div");
    var bBox = document.getElementById("nav_title_2");
    var bDiv = bBox.getElementsByTagName("div");
    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].index = i;
        aDiv[i].innerHTML = jd.wbss[i].kind;
        //添加默认
        bDiv[0].innerHTML += "<img src=" + jd.wbss[0].imge[1] + ">";
        aDiv[i].onclick = function () {
            for (var i = 0; i < aDiv.length; i++) {
                aDiv[i].className = "";
                // aDiv.style.color="";
            }
            this.className = "active";
            // console.log(jd.wbss[this.index].imge)
            bDiv[0].innerHTML = "";
            for (var j = 0; j < jd.wbss[this.index].imge.length; j++) {
                bDiv[0].innerHTML += "<img src=" + jd.wbss[this.index].imge[j] + ">";
            }

        }
        aDiv[0].onclick();
    }
    /* 追寻 */
    var ass = [
        "不但要说走就走，还要去世界上最奇妙的地方，看最奇妙的北极光！",
        "我们终偿所愿，亲手接过圣诞老人的礼物，并依偎在他的身边；",
        "我们体验着雪地摩托的超快感，一览萨利瑟尔地区特色地貌；",
        "我们驾驭着西伯利亚雪橇犬，肆意驰骋在茫茫林海雪原上",
        "我们为了追寻欧若拉的裙摆，在北欧亲眼见到醉美极光。",
        "我们一行人继续参观赫尔辛基又一特色的岩石教堂，其建造在掏空的岩石中，芬兰人的奇思妙",
        "想可见一斑。步入其中，自然光芒下的岩石教堂与光芒的相互辉映，尽显神圣。",
        "我们来北极还有一件一定要做的事情，就是驾驭着西伯利亚雪橇犬拉的雪橇，感受在茫茫林海",
        "雪原上快速行进的。"
    ]
    var aDiv = document.getElementById("t_lyd_zx_1");
    var aP = aDiv.getElementsByTagName("p");
    for (var i = 0; i < aP.length; i++) {
        aP[i].index = i;
        // console.log(aP[i].index)
        aP[i].innerHTML = (ass[i]);
    }
    /* 鼠标滚轮事件 */
    windowAddMouseWheel();
        function windowAddMouseWheel() {
            var scrollFunc = function (e) {
                e = e || window.event;
                if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
                    if (e.wheelDelta > 120) { //当滑轮向上滚动时
                        // alert("滑轮向上滚动");
                        t_title2.style.display="none";
                        t_title1.style.display="block";

                    }
                    if (e.wheelDelta < 0) { //当滑轮向下滚动时
                        // alert("滑轮向下滚动");
                        t_title1.style.display="none";
                        t_title2.style.display="block";
                    }
                // } else if (e.detail) { //Firefox滑轮事件
                //     if (e.detail > 0) { //当滑轮向上滚动时
                //         alert("滑轮向上滚动");
                //     }
                //     if (e.detail < 0) { //当滑轮向下滚动时
                //         alert("滑轮向下滚动");
                //     }
                }
            };
            //给页面绑定滑轮滚动事件
            if (document.addEventListener) {
                document.addEventListener('DOMMouseScroll', scrollFunc, false);
            }
            //滚动滑轮触发scrollFunc方法
            window.onmousewheel = document.onmousewheel = scrollFunc;
        }
}