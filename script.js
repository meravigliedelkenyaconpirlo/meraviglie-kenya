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
const reviews=document.querySelectorAll(".review");

const reviewDots=document.querySelectorAll(".review-dot");

let reviewIndex=0;


function showReview(index){

reviews.forEach(card=>
card.classList.remove("active"));

reviewDots.forEach(dot=>
dot.classList.remove("active"));

reviews[index].classList.add("active");

reviewDots[index].classList.add("active");

}


setInterval(()=>{

reviewIndex++;

if(reviewIndex>=reviews.length){

reviewIndex=0;

}

showReview(reviewIndex);

},5000);



reviewDots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

reviewIndex=index;

showReview(index);

})

})
const safariDropdown = document.getElementById("safariDropdown");

if(safariDropdown){

    safariDropdown.addEventListener("click", function(e){

        if(window.innerWidth <= 768){

            e.stopPropagation();

            safariDropdown.classList.toggle("active");

        }

    });

    document.addEventListener("click", function(){

        safariDropdown.classList.remove("active");

    });

}
