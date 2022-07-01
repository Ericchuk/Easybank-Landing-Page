let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let nav = document.querySelector(".page");

function openContent(){
    if(nav.style.display === "block"){
        nav.style.display = "none";
        hamburger.style.display = "block";
        close.style.display = "none";
        // console.log("ddd")
    }else{
        nav.style.display = "block";
        close.style.display = "block";
        hamburger.style.display = "none";
        // console.log("999")
    }
}

hamburger.addEventListener("click", openContent);
close.addEventListener("click", openContent);