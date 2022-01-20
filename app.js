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
// sections global
const sections = document.querySelectorAll('section');
//navlist global
const navbar_list = document.getElementById('navbar__list');

//end define Global Variables
//helping function

// building the nav

//looping over sections
for (section of sections) {
  list = document.createElement('li'); //creating li list
  sectionlink = section.getAttribute('id');
  sectionName = section.getAttribute('data-nav');

  //linking list with sections id and name
  list.innerHTML=  `<a class="menu__link" href="#${sectionlink}"> ${sectionName} </a>` ;

  //appending list(li) to the navlist
  navbar_list.append(list);
}


//determining sections viewport
window.onscroll = function () {

    for ( i = 0 ; i < sections.length ; i = i + 1 ) {

        if ( window.scrollY > sections[i].offsetTop && window.scrollY < sections[i].offsetTop + sections[i].offsetHeight ) {


            sections[i].classList.add("your-active-class");

        } else {
            sections[i].classList.remove("your-active-class");

        }

    }

}
