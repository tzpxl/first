window.onload = function () {
    //目的地
    var mdd = document.getElementById("mdd");
    mdd.onblur = function () {
        var input1 = mdd.value;
        console.log(mdd.value)
        input1.toString();
        if (input1 == "") {
            div1_2.style.display = "block";
        } else {
            if (input1.length > 2 && input1.length < 14) {
                div1_1.style.display = "none";
            } else {
                div1_1.style.display = "block";
            }
        }
    }
    //手机号码
    var sjhm = document.getElementById("sjhm");
    sjhm.onblur = function () {
        var input1 = sjhm.value;
        input1.toString();
        if (input1 == "") {
            div2_2.style.display = "block";
        } else {
            if (input1.length > 10 && input1.length < 14) {
                div2_1.style.display = "none";
            } else {
                div2_1.style.display = "block";
            }
        }
    }
    // //重置
    // var btn2 = document.getElementById("btn2");
    // btn2.onclick = function () {
    //     zh.value = "";
    //     mm.value = "";
    //     mm2.value = "";
    //     yzm.value = "";
    // }
}