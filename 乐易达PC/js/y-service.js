window.onload = function() {
  var bet = document.getElementById("tet");
  var add = document.getElementById("buttom-1");
  var arr = document.getElementById("buttom-2");
  var cen = document.getElementById("chat");

  //点击输入
  arr.onclick = function() {
    if (bet.value.length != 0) {
      cen.innerHTML +=
        "<div class='chat-right'><span class='wy'></span><p class='chat-text-right'>" +
        bet.value +
        "</p></div>";
      bet.value = "";
    } else {
      return false;
    }

    cen.scrollTop = cen.scrollHeight;
  };

  //重置
  add.onclick = function() {
    bet.value = "";
  };
};
