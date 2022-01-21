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
for (section of sections) {
  list = document.createElement('li'); //creating li list
  sectionlink = section.getAttribute('id');
  sectionName = section.getAttribute('data-nav');

  //linking list with sections id and name
  list.innerHTML=  `<a class="menu__link" href="#${sectionlink}"> ${sectionName} </a>` ;

  ul.appendChild(list);
}



//determining sections viewport
window.onscroll = function () {

    for ( i = 0 ; i < sections.length ; i += 1 ) {

      if ( sections[i].getBoundingClientRect().top >= -400 && sections[i].getBoundingClientRect().top <= 150 ) {

            li[i].classList.add("active-link")
            sections[i].classList.add("your-active-class");

         } else {

            li[i].classList.remove("active-link")
            sections[i].classList.remove("your-active-class");

        }

    }

}
