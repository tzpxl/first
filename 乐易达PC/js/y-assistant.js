window.onload = function() {
  var die = {
    ben: [
      {
        imags: "imags/图片/租车/别克.jpg",
        name: "别克",
        dang: "自动挡",
        period: "30元/天"
      },
      {
        imags: "imags/图片/租车/大众.jpg",
        name: "大众",
        dang: "自动挡",
        period: "30元/天"
      },
      {
        imags: "imags/图片/租车/丰田.jpg",
        name: "丰田",
        dang: "自动挡",
        period: "30元/天"
      },
      {
        imags: "imags/图片/租车/福特.jpg",
        name: "福特",
        dang: "自动挡",
        period: "30元/天"
      },
      {
        imags: "imags/图片/租车/雪佛兰.png",
        name: "雪佛兰",
        dang: "自动挡",
        period: "30元/天"
      }
    ],
    ben1: [
        {
          imags: "imags/图片/门票/门票1.jpg",
          name: "门票1",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/门票/门票2.jpg",
          name: "门票2",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/门票/门票3.jpg",
          name: "门票3",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/门票/门票4.jpg",
          name: "门票4",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/门票/门票4.png",
          name: "门票5",
          dang: "8:00-18:00",
          period: "30元/天"
        }
      ],
      ben2: [
        {
          imags: "imags/图片/旅游行程/美食1.jpeg",
          name: "农家乐1",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/旅游行程/美食2.jpeg",
          name: "农家乐2",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/旅游行程/美食7.jpeg",
          name: "农家乐3",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/旅游行程/美食5.jpeg",
          name: "农家乐4",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/旅游行程/美食6.jpeg",
          name: "农家乐5",
          dang: "8:00-18:00",
          period: "30元/天"
        }
      ],
      ben3: [
        {
          imags: "imags/图片/租车/导游1.png",
          name: "导游1",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/租车/导游2.png",
          name: "导游2",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/租车/导游3.png",
          name: "导游3",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/租车/导游5.png",
          name: "导游4",
          dang: "8:00-18:00",
          period: "30元/天"
        },
        {
          imags: "imags/图片/租车/dy4.png",
          name: "导游5",
          dang: "8:00-18:00",
          period: "30元/天"
        }
      ]
  };

  var far = document.getElementsByClassName("frame1");
  var far2 = document.getElementsByClassName("frame2");
  var far3 = document.getElementsByClassName("frame3");
  var far4 = document.getElementsByClassName("frame4");


  for (var i = 0; i < far.length; i++) {
    far[i].innerHTML +=
      "<img src=" +
      die.ben[i].imags +
      ">" +
      "<p>" +
      die.ben[i].name +
      "</p>" +
      "<p>" +
      die.ben[i].dang +
      "</p>" +
      "<p>" +
      die.ben[i].period +
      "</p>";
  }

  for (var i = 0; i < far2.length; i++) {
    far2[i].innerHTML +=
      "<img src=" +
      die.ben1[i].imags +
      ">" +
      "<p>" +
      die.ben1[i].name +
      "</p>" +
      "<p>" +
      die.ben1[i].dang +
      "</p>" +
      "<p>" +
      die.ben1[i].period +
      "</p>";
  }

  for (var i = 0; i < far3.length; i++) {
    far3[i].innerHTML +=
      "<img src=" +
      die.ben2[i].imags +
      ">" +
      "<p>" +
      die.ben2[i].name +
      "</p>" +
      "<p>" +
      die.ben2[i].dang +
      "</p>" +
      "<p>" +
      die.ben2[i].period +
      "</p>";
  }

  for (var i = 0; i < far4.length; i++) {
    far4[i].innerHTML +=
      "<img src=" +
      die.ben3[i].imags +
      ">" +
      "<p>" +
      die.ben3[i].name +
      "</p>" +
      "<p>" +
      die.ben3[i].dang +
      "</p>" +
      "<p>" +
      die.ben3[i].period +
      "</p>";
  }
};
