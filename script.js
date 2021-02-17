const home = document.querySelector(".home");
const about = document.querySelector(".about");
const skills = document.querySelector(".skills");


const htmlIcon = document.querySelector(".html");
const cssIcon = document.querySelector(".css");
const gitIcon = document.querySelector(".git");
const sassIcon = document.querySelector(".sass");



let windowHeight = window.innerHeight;




function animationStart() {
 let scrollFromTop = window.pageYOffset;
 console.log(scrollFromTop)  

 if(scrollFromTop > 1100) {
  htmlIcon.style.animation = "html .5s linear 1s 1 alternate forwards";
  cssIcon.style.animation = "css .5s linear 1s 1 alternate forwards";
 }

 if(scrollFromTop > 1700) {
  gitIcon.style.animation = "git .5s linear 1s 1 alternate forwards";
  sassIcon.style.animation = "sass .5s linear 1s 1 alternate forwards";
 }
}




window.addEventListener("scroll", animationStart)

home.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

about.addEventListener("click", () => {
  window.scrollTo({
    top: windowHeight,
    behavior: "smooth",
  });
});

skills.addEventListener("click", () => {
  window.scrollTo({
    top: windowHeight * 2,
    behavior: "smooth",
  });
});

 
