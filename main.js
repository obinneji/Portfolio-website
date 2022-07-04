const navMenu = document.querySelector(".nav-items")
const hamburger = document.querySelector(".menu-hamburger")
hamburger.addEventListener("click", ()=>{
    if(navMenu.style.display === "none"){
        navMenu.style.display = "flex"
    } else{
        navMenu.style.display = "none"
    }
})