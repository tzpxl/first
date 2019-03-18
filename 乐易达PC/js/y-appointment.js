window.onload = function() {
  var indexs = JSON.parse(localStorage.getItem("user"));
  // localStorage.removeItem("user");
  // console.log(indexs);
  //   var bot=document.getElementById("Qk");
  var details = document.getElementById("details");
  //   bot.onclick=function(){
  //     details.
  //   }

  if (indexs != null) {
    for (var i = 0; i < indexs.length; i++) {
      document.getElementById("details").innerHTML +=
        "<div class='dta'><div class='details1'><span>" +
        indexs[i].information +
        "</span></div><div class='details2'><span>" +
        indexs[i].quantity +
        "</span></div><div class='details2'><span>" +
        indexs[i].date +
        "</span></div><div class='details2'><span>" +
        indexs[i].amount +
        "</span></div><div class='details2'><span class='qx'>" +
        "取消";
      ("</span></div></div>");
    }
    details.scrollTop = details.scrollHeight;
  } else {
    return false;
  }

  var qx = document.getElementsByClassName("qx");
  var dta = document.getElementsByClassName("dta");

  for (var i = 0; i < dta.length; i++) {
    var a = dta[i];
    a.index = i;

    for (var i = 0; i < qx.length; i++) {
      qx[i].index=i;
      qx[i].onclick = function() {
        alert("数据已删除，请刷新");
        indexs.splice(this.index, 1);
        localStorage.setItem("user", JSON.stringify(indexs));
      };
    }
  }
};
