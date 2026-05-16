const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_bar");
const closeBtn = document.querySelector(".close");

const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", function(){
    sideMenu.style.display = "block";
    sideMenu.style.transition = "all .3s ease";
})
closeBtn.addEventListener("click", function(){
    sideMenu.style.display = "none";
})

themeToggler.addEventListener('click', function(){
    
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
})