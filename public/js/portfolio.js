const navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle'),
      navMenu = document.getElementById('nav-menu');

      if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu');
        });
      }
      if(navClose){
        navClose.addEventListener('click', ()=>{
            navMenu.classList.remove('show-menu');
        });
      }
      
      const navLinks = document.querySelectorAll('.nav__link');

      navLinks.forEach((n)=>{
         n.addEventListener('click', ()=>{
             navMenu.classList.remove('show-menu');
         });
      });

/*email label animate form */

const inputField = document.querySelectorAll('.contact__form input');
const labelField = document.querySelectorAll('.contact__form label');

const  labelAnim = ()=>{
  
}

inputField.forEach(n=>{
   n.addEventListener('focus', function labelAnim(){
    n.previousElementSibling.classList.add('active');
   });
});


inputField.forEach(n=>{
  n.addEventListener('blur', function labelAnim(){
   n.previousElementSibling.classList.remove('active');
  });
});

/*darkmode theme*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

/*get the stored theme by the user*/ 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

/*get the theme from the interface*/

const getcurrentTheme = ()=> document.body.classList.contains(darkTheme)?'dark':'light';
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme)?'ri-moon-line':'ri-sun-line';
/*if the user has previously visited the site and setted a theme apply it to the interface*/
if(selectedTheme){
  document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line'?'add':'remove'](iconTheme);
}
/*set the theme by click*/
themeButton.addEventListener('click', ()=>{
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getcurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*====scrollreveal =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration:2500,
  delay:400,
  reset:true //animation repeat
});
sr.reveal(`.home__blob, .about__profil, .article1, .article3, .contact__content`,{origin:'right'});
sr.reveal(`.home__description, .section__title-1`,{origin:'top'});
sr.reveal(`.home__title, .about__description, .article2, .contact__social-container`,{origin:'left'});


