const headerEl = document.querySelector('header');
const closeBtn= document.getElementById('up-arrow');
const menu = document.getElementById('menu-block');
const links = document.getElementsByClassName('a-element');

//********header when scrolling********//
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        headerEl.classList.add('scroll-header');
    }else if(window.scrollY <= 50){
        headerEl.classList.remove('scroll-header');
    }
});


//********Navbar********//


function displayMenu(){
    if (menu.style.display === "none") {
        menu.style.display = "block";  // Show the element
      } else {
        menu.style.display = "none";  // Hide the element
      }
}

function closeMenu(){
    headerEl.classList.remove('scroll-header');
    menu.style.display = "none";
}

for (let i = 0; i < links.length; i++) {

  links[i].addEventListener('click', function() {

    headerEl.classList.remove('scroll-header');
    menu.style.display = "none";

  });
}



//*******navigation*******//

function goUp(){
    window.scroll(0,0);
}

//**project part**//

function goToSite1(){
    window.location.assign("https://alix144.github.io/Responsive-Site/") ;
}

function goToLeb(){
    window.location.assign("https://alix144.github.io/Lebanon/");
}

function goToSite2(){
    window.location.assign("https://alix144.github.io/Perfume-card/");
}

function goToPetSite(){
    window.location.assign("https://alix144.github.io/pet-project/");
}

function goToNewYearSite(){
    window.location.assign("https://alix144.github.io/new-year-countdown/");
}

function goToCreditSite(){
    window.location.assign("https://alix144.github.io/Payment-page/");
}

function goToDrumSite(){
    window.location.assign("https://alix144.github.io/Drum-kit/");
}

function goToPass(){
    window.location.assign("https://alix144.github.io/Password-Generator/");
}

function goToMyGym(){
    window.location.assign("https://mern-my-gym.onrender.com/");
}

function goToEx(){
    window.location.assign("https://alix144.github.io/site-project/");
}


//**contact-me part**//

function goToGithub(){
    window.location.assign("https://github.com/Alix144");
}

function goToLinkedin(){
    window.location.assign("https://www.linkedin.com/in/ali-youssef-19aa33207/");
}
