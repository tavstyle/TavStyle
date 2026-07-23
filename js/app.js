console.log("TavStyle Iniciado 🚀");

const menuBtn = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-menu");
const sideMenu = document.querySelector(".side-menu");


menuBtn.addEventListener("click", ()=>{

    sideMenu.classList.add("active");

});


closeMenu.addEventListener("click", ()=>{

    sideMenu.classList.remove("active");

});