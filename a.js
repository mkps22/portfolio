let ab=document.getElementById("helloworld")
ab.style.transition="1s"
let limg=document.getElementsByClassName("limg")[0]
let dimg=document.getElementsByClassName("dimg")[0]
let box=document.getElementsByClassName("bx")[0]
let iconx=document.querySelectorAll(".home__social-icon");
let html=document.getElementsByClassName("skills__html")[0]
let css=document.getElementsByClassName("skills__css")[0]
let js=document.getElementsByClassName("skills__js")[0]
let ux=document.getElementsByClassName("skills__ux")[0]
let react=document.getElementsByClassName("skills__react")[0]
let pic=document.getElementsByClassName("home__blob")[0]
let atag=document.querySelectorAll("p1")
let tect=document.querySelectorAll(".section-title")
let down=document.getElementsByClassName("download")[0]
let edu=document.querySelectorAll(".edu")
let ions=document.querySelectorAll(".skills__icon")



d=0
function fun(){
    if(d==0){
       ab.style.backgroundColor="black"
      
       ab.style.color="white"
    limg.style.display="block"
    dimg.style.display="none"
    for (let i = 0; i < iconx.length; i++) {
        iconx[i].style.color = "red";
      }
   html.style.backgroundColor="green"
   css.style.backgroundColor="green"
   js.style.backgroundColor="green"
   ux.style.backgroundColor="green"
   react.style.backgroundColor="green"
   pic.style.fill= "var(--second-color)"
    }

   for (let i = 0; i < edu.length; i++) {
    edu[i].style.color = "orange";


   for (let i = 0; i < atag.length; i++) {
    atag[i].style.color = "orange";

    for (let i = 0; i < tect.length; i++) {
        tect[i].style.color = "yellow";
    }
    down.style.color="red"

    for (let i = 0; i < ions.length; i++) {
        ions[i].style.color = "#EA07A5";
    }
  }
d=1
    }
    // else{
        
    //     ab.style.backgroundColor=""
    //     ab.style.color="black"
    //     limg.style.display="none"
    //     d=0
    // }
}


function fun2(){
    if(d==0){
       ab.style.backgroundColor="black"
    ab.style.color="white"
    limg.style.display="none"
   
    
    d=1
    }
    else{
    
        ab.style.backgroundColor=""
        ab.style.color="black"
        dimg.style.display="block"
        limg.style.display="none"
        for (let i = 0; i < iconx.length; i++) {
            iconx[i].style.color = "#3F6EF3";
          }
       html.style.backgroundColor="#3F6EF3"
       css.style.backgroundColor="#3F6EF3"
       js.style.backgroundColor="#3F6EF3"
       ux.style.backgroundColor="#3F6EF3"
       react.style.backgroundColor="#3F6EF3"
       pic.style.fill= "var(--first-color)"
       down.style.color="black"

       for (let i = 0; i < atag.length; i++) {
        atag[i].style.color = "black";
      }


      for (let i = 0; i < tect.length; i++) {
        tect[i].style.color = "";
    }

    for (let i = 0; i < edu.length; i++) {
        edu[i].style.color = "black";
    }

    for (let i = 0; i < ions.length; i++) {
        ions[i].style.color = "#3F6EF3";
    }

        d=0
    }
}


/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

