const navEl = document.querySelector(".navbar");
const bottomConEl = document.querySelector(".bottom-container");

window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomConEl.offsetTop - navEl.offsetHeight - 50){
        navEl.classList.add("active");
    }else{
        navEl.classList.remove("active");
    }
})