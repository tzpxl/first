window.onload = function() {
  var quantity = document.getElementById("quantity");
  var amount = document.getElementById("amount");
  var confirm = document.getElementById("confirm");
  var left1 = document.getElementById("left-1");
  var name = document.getElementById("name");
  var car = document.getElementById("car");
  var data = document.getElementById("data");

  //买票
  quantity.oninput = function() {
    if (quantity.value < 6) {
      left1.style.display = "none";
      amount.value = quantity.value * 188;
    } else {
      //   quantity.value="";
      left1.style.display = "block";
    }
  };

  //获取值
  confirm.onclick = function() {
    if (quantity.value != "" && quantity.value < 6 && quantity.value > 0) {
      var fle = [
        {
          information: name.innerHTML,
          date: data.innerHTML,
          quantity: quantity.value,
          amount: amount.value
        }
      ];
        //  JSON.parse(localStorage.getItem("user"));
      // fle = fle.concat(JSON.parse(localStorage.getItem("user")));
      // console.log(fle);
      if(JSON.parse(localStorage.getItem("user"))==null){
        localStorage.setItem("user", JSON.stringify(fle));
      }else{
        fle =(JSON.parse(localStorage.getItem("user"))).concat(fle);
        localStorage.setItem("user", JSON.stringify(fle));
      }
     
      self.location.href = "y-appointment.html";
      car.style.display = "none";
    } else {
      car.style.display = "block";
    }
  };
  quantity.onclick = function() {
    car.style.display = "none";
  };
  NowTime();
};
function NowTime() {
  //获取年月日
  var time = new Date();
  var year = time.getFullYear();
  var month = time.getMonth();
  var day = time.getDate();

  document.getElementById("data").innerHTML =
    year + "年" + month + "月" + day + "日  ";
}
