window.onload = function() {
  var btn = [
    {
      name: "绍兴护城河",
      img: "image/门票/门票1.jpg",
      jianjie:
        "为自己建了一座农场，早晨我要牧马喂羊，中午我要晒太阳，下午还有好几筐的花朵要处理，晚上嘛，还要给好多人算命。",
      jiage: "188元/人"
    },
    {
      name: "绍兴护城河",
      img: "image/门票/门票2.jpg",
      jianjie: "为自己建了一座农场，早晨我要牧马喂羊，中午我要晒太阳，下午还有好几筐的花朵要处理，晚上嘛，还要给好多人算命。",
      jiage: "288元/人"
    },
    {
      name: "绍兴护城河",
      img: "image/门票/门票3.jpg",
      jianjie: "为自己建了一座农场，早晨我要牧马喂羊，中午我要晒太阳，下午还有好几筐的花朵要处理，晚上嘛，还要给好多人算命。",
      jiage: "388元/人"
    },
    {
      name: "绍兴护城河",
      img: "image/门票/门票4.jpg",
      jianjie: "为自己建了一座农场，早晨我要牧马喂羊，中午我要晒太阳，下午还有好几筐的花朵要处理，晚上嘛，还要给好多人算命。",
      jiage: "488元/人"
    },
    {
      name: "绍兴护城河",
      img: "image/门票/门票5.jpg",
      jianjie:
        "为自己建了一座农场，早晨我要牧马喂羊，中午我要晒太阳，下午还有好几筐的花朵要处理，晚上嘛，还要给好多人算命。",
      jiage: "588元/人"
    }
  ];

  for (var i = 0; i < btn.length; i++) {
    document.getElementById("main").innerHTML +=
      "<div class='box'><div class='box-img'><img src=" +
      btn[i].img +
      "></div><div class='box-nr'><h1>" +
      btn[i].name +
      "</h1><p class='jieshao'>" +
      btn[i].jianjie +
      "</p><p class='jiage'>" +
      btn[i].jiage +
      "</p><div class='goumai'>购买</div></div></div>  ";
  }
};