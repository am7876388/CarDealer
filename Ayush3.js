var Close = document.getElementById("Crosses");
var MenuBtn = document.getElementById("Menu-Btn-");
var CarDealers = document.getElementById("Cardealer1");
var Second = document.getElementById("Second1");
var Menu = document.getElementById("Last-Item-1");
var H21 = document.getElementById("h21");
var H22 = document.getElementById("h22");
var H23 = document.getElementById("h23");
var H24 = document.getElementById("h24");
var H25 = document.getElementById("h25");
var H26 = document.getElementById("h27");
var H27 = document.getElementById("h27");
var H28 = document.getElementById("h28");
var H29 = document.getElementById("h29");
var H210 = document.getElementById("h210");
Close.addEventListener('click',function(){
MenuBtn.style.zIndex = "-1";
});
CarDealers.addEventListener('mouseover',function(){
    CarDealers.style.backgroundColor = "aqua";
    Second.style.color = "aqua";
});
CarDealers.addEventListener('mouseout',function(){
    CarDealers.style.backgroundColor = "#fff";
    Second.style.color = "#fff";
});
Second.addEventListener('mouseover',function(){
    CarDealers.style.backgroundColor = "aqua";
    Second.style.color = "aqua";
});
Second.addEventListener('mouseout',function(){
    CarDealers.style.backgroundColor = "#fff";
    Second.style.color = "#fff";
});
Menu.addEventListener('click',function(){
MenuBtn.style.zIndex = "2";
});
H21.addEventListener('click',function(){
const url = 'divya.html';
window.location.href = url;
});
H22.addEventListener('click',function(){
    const url = 'Cars.html';
    window.location.href = url;
    });
    H24.addEventListener('click',function(){
        const url = 'Blog.html';
        window.location.href = url;
        });
        H25.addEventListener('click',function(){
            const url = 'Contact.html';
            window.location.href = url;
            });
            H27.addEventListener('click',function(){
                const url = 'Team.html';
                window.location.href = url;
                });
                H28.addEventListener('click',function(){
                    const url = 'Testimonals.html';
                    window.location.href = url;
                    });
                    H29.addEventListener('click',function(){
                        const url = 'FAQ.html';
                        window.location.href = url;
                        });
                        H210.addEventListener('click',function(){
                            const url = 'Terms.html';
                            window.location.href = url;
                            });
                            H23.addEventListener('click',function(){
                                const url = 'About-Us.html';
                                window.location.href = url;
                                });
                                