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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables */

// Get all sections in a variable
const sections = document.querySelectorAll("section");
// Get ul in a variable for appending the li
const navBarList = document.querySelector("ul");

//  * End Global Variables

// build the nav
/*
 * Creat the li in Dinamiclly
 * Down here I used ES6 for concating insted of declaring (elements, innerHTML) and  lots of appendChild;
 * I could used createTextNode insted of 'dataset.nav' but I've preferred the lastOne to make the code simple as I can <- "don't know which way more professional"
 */
// Create li
sections.forEach((section) => {
  liNav = document.createElement("li");
  //using ES6 to concatenate
  liNav.innerHTML = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a>`;

  navBarList.appendChild(liNav);
});

// Smooth Scroll
/*
 * Clicking on the nav's Section will go 'Smoothly' to the target section
 * I get the Idea from stackOverFlow
 * References: https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
 */
navBarList.addEventListener("click", (scrl) => {
  scrl.preventDefault();
  // Target the section by the 'data-nav'
  if (scrl.target.dataset.nav) {
    document
      .getElementById(`${scrl.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});

// Set sections as active
// Using getBoundingClientRect()

// Declaire allLinks to use them in activating link
let allLinks = document.querySelectorAll("a");

// Using getBoundingClientRect() to declair from where the Section start and to where it end to adding or removeing the active class to the section and the -active_link- on the nav_menu using forEach()
window.onscroll = () => {
  sections.forEach((activeSec) => {
    if (
      activeSec.getBoundingClientRect().top > 0 &&
      activeSec.getBoundingClientRect().top < 300
    ) {
      activeSec.classList.add("your-active-class");
      allLinks.forEach((link) => {
        if (link.getAttribute("data-nav") == activeSec.getAttribute("id")) {
          link.classList.add("active_link");
        } else {
          link.classList.remove("active_link");
        }
      });
    } else {
      activeSec.classList.remove("your-active-class");
    }
  });
};
