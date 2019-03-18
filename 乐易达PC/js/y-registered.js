window.onload = function() {
  //获取id
  var cell = document.getElementById("cellphone");
  var hone = document.getElementById("cellphone1");
  var acc = document.getElementById("account");
  var ount = document.getElementById("account1");
  var pass = document.getElementById("password");
  var word = document.getElementById("password1");
  var bet = document.getElementById("password2");
  var con = document.getElementById("confirm");
  var firm = document.getElementById("confirm1");
  var user = document.getElementById("username");
  var name = document.getElementById("username1");
  var add = document.getElementById("add");
  var arr = document.getElementById("buttom");

  //判断是否是正确的格式

  //判断手机号
  cell.onblur = function() {
    if (cell.value.length != 11) {
      hone.style.display = "block";
    } else {
      hone.style.display = "none";
    }
  };

  //判断账号
  acc.onblur = function() {
    if (acc.value.length < 6 || acc.value.length > 14) {
      ount.style.display = "block";
    } else {
      ount.style.display = "none";
    }
  };

  //判断密码
  pass.onblur = function() {
    if (pass.value.length != "") {
      word.style.display = "none";
      if (pass.value.length < 6 || pass.value.length > 14) {
        bet.style.display = "block";
      } else {
        bet.style.display = "none";
      }
    } else {
      word.style.display = "block";
    }
  };

  //再次判断密码
  con.onblur = function() {
    if (pass.value != con.value) {
      firm.style.display = "block";
    } else {
      firm.style.display = "none";
    }
  };

  //判断用户名  判断特殊字符

  var regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
    regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
  user.onblur = function() {
    if (user.value.length < 2 || user.value.length > 8) {
      name.style.display = "block";
      add.style.display = "none";
    } else {
      name.style.display = "none";
      // console.log(user.value);
      if (regEn.test(user.value) || regCn.test(user.value)) {
        add.style.display = "block";
      } else {
        add.style.display = "none";
      }
    }
  };

  //注册按钮判断
  arr.onclick = function() {
    if (
      cell.value.length != 11 ||
      acc.value.length < 6 ||
      acc.value.length > 14 ||
      pass.value.length < 6 ||
      pass.value.length > 14 ||
      pass.value.length == "" ||
      pass.value != con.value ||
      user.value.length < 2 ||
      user.value.length > 8 ||
      (regEn.test(user.value) || regCn.test(user.value))
    ) {
      alert("你还有未完成的信息！");
    } else {
      self.location.href = "y-login.html";
    }
  };
};
