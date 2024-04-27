var open = true;
var Clicked1 = document.getElementById("Last-Item-1");
var Clicked2 = document.getElementById("Last-Item-2");
var AfterClick = document.getElementById("Menu-Btn-");
var Cross = document.getElementById("Crosses");
var Cardealers = document.getElementById("Cardealer");
var Web = document.getElementById("Web1");
var Caardealer = document.getElementById("Cardealer1");
var Second = document.getElementById("Second1");
Caardealer.addEventListener('mouseover',function(){
    Caardealer.style.backgroundColor = "aqua";
    Second.style.color = "aqua";
});
Caardealer.addEventListener('mouseout',function(){
    Caardealer.style.backgroundColor = "#fff";
    Second.style.color = "#fff";
});
Second.addEventListener('mouseover',function(){
    Caardealer.style.backgroundColor = "aqua";
    Second.style.color = "aqua";
});
Second.addEventListener('mouseout',function(){
    Caardealer.style.backgroundColor = "#fff";
    Second.style.color = "#fff";
});
Web.addEventListener('mouseover',function(){
    Cardealers.style.backgroundColor = "aqua";
    Web.style.color = "aqua";
})
Web.addEventListener('mouseout',function(){
    Cardealers.style.backgroundColor = "#fff";
    Web.style.color = "#fff";
})
Cardealers.addEventListener('mouseover',function(){
    Cardealers.style.backgroundColor = "aqua";
    Web.style.color = "aqua";
});
Cardealers.addEventListener('mouseout',function(){
    Cardealers.style.backgroundColor = "#fff";
    Web.style.color = "#fff";
})
Cross.addEventListener('click',function(){
AfterClick.style.zIndex = "-1";
open = true;
})
Clicked2.addEventListener('click',function(){
AfterClick.style.zIndex = "2";
open = false;
})
Clicked1.addEventListener('click',function(){
    AfterClick.style.zIndex = "2";
    open = false;
})
window.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY || window.pageYOffset;
    var scrollThreshold = 740;
    var divtoChange = document.getElementsByClassName("Menu");
    if(scrollPosition >= scrollThreshold && open){
        for(var i = 0; i < divtoChange.length; i++){
            divtoChange[i].style.top = "0px";
        }
    }   else{
        for(var i = 0; i < divtoChange.length; i++){
            divtoChange[i].style.top = "-1000px"
    }}
})