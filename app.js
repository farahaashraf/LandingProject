/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll('section');

const ul = document.getElementById('navbar__list');

const li = document.getElementsByClassName("menu__link");
//end define Global Variables


// building the nav
function nav (){
let i = 1;
//looping
while (i <= sections.length){
    name = 'section ' +i; //setting list names
    list = document.createElement('li'); //creating li
    //linking the sections with li items
    list.innerHTML = `<a class="menu__link" id="l${sections[i-1].id}" href="#${sections[i-1].id}"> ${name} </a>`;
    ul.appendChild(list); //appending list to the navbar
    i++;
  }
}
nav();



// getting the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

//the function of activation for sections
const sectionActivate = () => {
     for ( i = 0 ; i < sections.length ; i += 1 ) {  //looping over sections
        const elementOffset = offset(sections[i]);
       //Seting view condition
      if( elementOffset < 135 && elementOffset >= -135 ){

            li[i].classList.add("active-link");//removing active class for li
            sections[i].classList.add("your-active-class"); //adding active class for sections
        }
     else{
            li[i].classList.remove("active-link"); //removing active class for li
            sections[i].classList.remove("your-active-class"); //removing active class for sections
    }
  }
};
window.addEventListener('scroll' ,sectionActivate);  //adding scrolling listener
