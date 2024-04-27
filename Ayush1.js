var div = document.getElementsByClassName("contents");
for(var i = 0; i < div.length; i++){
  div[i].addEventListener("mouseenter", function(){
    this.style.paddingTop = "0px";
  });
}