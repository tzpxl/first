window.onload=function(){
    //获取ID
    var btn=document.getElementById("name");
    var add=document.getElementById("yzm");
    var crr=document.getElementById("acc");
    var den=document.getElementById("ount");

    //选项卡功能
    btn.onclick=function(){
        crr.style.display="block";
        den.style.display="none";
        btn.className="name";
        add.className="";
        btn.style.border="";
    }
    add.onclick=function(){
        den.style.display="block";
        crr.style.display="none";
        btn.style.border="0";
        btn.className=""
        add.className="name";
    }

    //登录验证  获取ID
    var int=document.getElementById("int");
    var zh=document.getElementById("zh");
    var mm=document.getElementById("mm");

    int.onclick=function(){
        if(zh.value=="admin" && mm.value=="admin"){
            console.log(zh.value,mm.value);
            self.location.href ="index.html";
        }else{
            alert("账号或密码错误!");
            zh.value="";
            mm.value="";
        }
        
    }
}