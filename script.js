const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector(".nav-links");


menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});
const slides=document.querySelectorAll(".slide");

const dots=document.querySelectorAll(".dot");

let current=0;


function showSlide(index){

slides.forEach(slide=>
slide.classList.remove("active"));

dots.forEach(dot=>
dot.classList.remove("active"));

slides[index].classList.add("active");

dots[index].classList.add("active");

}


function nextSlide(){

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

}


setInterval(nextSlide,5000);


dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

current=index;

showSlide(current);

});

});
