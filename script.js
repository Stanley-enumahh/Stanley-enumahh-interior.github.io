const toggle = document.getElementById("togglebtn");
const topNavigation = document.querySelector(".top-navigation");
const toggleBox = document.querySelector(".toggle");



toggle.addEventListener("click", function(){
topNavigation.classList.toggle("active")
toggle.classList.toggle("active")
toggleBox.classList.toggle("active")
});

const scrollLinks = document.querySelectorAll(".links");

scrollLinks.forEach(function(links){
  links.addEventListener("click", function(){
    topNavigation.classList.remove("active")
    toggle.classList.remove("active")
  })
});




const projects = [ 
  {
    img : "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    text : "Sitting Room Design ",  
  },
  {
    img : "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Sitting Room Design",
  },
  {
    img : "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text : "Furnitures installation", 
  },
  {
    img : "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text : "Modern kitchen setup"
  },
  {
    img : "https://images.unsplash.com/photo-1574911461554-90448c1b6443?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text : "Dinning room Design"
  } 
];



/*projects slide*/
let currentProject = 0;

const projectIcon = document.querySelectorAll(".project-icon i");
let img = document.getElementById("project-img");
let info = document.getElementById("project-single-title");
const prevbtn = document.querySelectorAll(".project-icon i");

window.addEventListener("DOMContentLoaded", function () {
  showProject();
});

function showProject(){
  let item = projects[currentProject]
  img.src = item.img;
  info.textContent = item.text;
}

prevbtn.forEach(function(icons){
  icons.addEventListener("click", function(){
    if(icons.id === "left"){
     currentProject++;
    }
    if(currentProject > projects.length - 1){
      currentProject = 0
    }
    showProject();

    if(icons.id === "right"){
      currentProject--;
     }
     if(currentProject < 0){
      currentProject = projects.length - 1 
     }
     showProject();
  })
})

// footer date

  const date =document.getElementById("date")

  date.innerHTML = new Date().getFullYear();

  const links = document.querySelectorAll(".links");
  const topBar = document.querySelector(".top-bar");

  links.forEach(function(links){
  links.addEventListener("click", function(e){
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const topBarHeight = topBar.getBoundingClientRect().height
    const position = element.offsetTop;
    
    window.scrollTo(
      left = 0,
      Top = position - topBarHeight
    )
  })
  });

  //scroll up//
  const scrollBtn = document.querySelector(".scroll-up");

  window.addEventListener("scroll", function(){

  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 300){
scrollBtn.classList.add("scroll-up-active")
  }
  else{
    scrollBtn.classList.remove("scroll-up-active")
  } 
  })


  /*slide-ins homepage*/

  window.addEventListener("load",function(){
    const logo = document.querySelector(".logo");
    const navigation = document.querySelector(".navigation");
    const bannerHheading = document.querySelector(".banner-heading");
    const bannerBtnBox = document.querySelector(".banner-btn-box");

    logo.classList.add("logo-appear");
    navigation.classList.add("navigation-appear");
    bannerHheading.classList.add("banner-heading-appear");
    bannerBtnBox.classList.add("banner-btn-box-appear");
  })

    /*slide-ins*/

    window.addEventListener("scroll", function(){
      const scrollHeight = window.pageYOffset;

          /*slide-ins-services*/
      const services = document.getElementById("Services");
      const servicesContent = document.querySelector(".services-content");
      const servicesContentAppearPosition = services.offsetTop;
      const servicesHeading = document.querySelector(".heading");
      const viewallServices = document.querySelector(".view-all");



      if(scrollHeight > 270)
      servicesContent.classList.add("services-content-appear");
      servicesHeading.classList.add("heading-appear");
      viewallServices.classList.add("view-all-appear")

       /*slide-ins-projects*/

       const projectImage = document.querySelector(".project-img");
       const projectTitle = document.querySelector(".project-title");
       const projectText = document.querySelector(".project-text");
       const projectBtn = document.querySelector(".project-btn");


       if(scrollHeight > 900){
        projectTitle.classList.add("project-title-appear")
        projectText.classList.add("project-text-appear")
        projectBtn.classList.add("project-btn-appear")
        projectImage.classList.add("project-img-appear");
       }
      
    })








