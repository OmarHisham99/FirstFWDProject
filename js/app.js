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
 * Great to have cosmments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/ 
let secNumber =4 ; 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// Add section to the page
function addSection(){
    clearLinks(); 
    let main = document.querySelector('main'); 
    let sec = document.createElement('section'); 
    let div = document.createElement('div'); 
    let header = document.createElement('h2'); 
    let para = document.createElement('p');
    let para2 = document.createElement('p');  
    header.textContent = "Section "+secNumber;
    para.textContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."; 
    para2.textContent = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
    sec.setAttribute('id','section'+secNumber); 
    sec.setAttribute('data-nav','Section '+secNumber); 
    secNumber++;  
    div.classList.add('landing__container'); 
    div.appendChild(header); 
    div.appendChild(para); 
    div.appendChild(para2); 
    sec.appendChild(div); 
    main.appendChild(sec);
    buildNav();  
    activateClass(); 
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Scroll to anchor ID using scrollTO event
// build the nav and create anchors to scroll down to it 
function buildNav(){
    let sections = document.querySelectorAll('section');
    let navList = document.querySelector('#navbar__list'); 
    for(let section of sections){
        let listItem = document.createElement('li'); 
        let anc = document.createElement('a'); 
        anc.classList.add('menu__link');
        anc.textContent = section.id;  
        anc.href = '#'+section.id; 
        listItem.appendChild(anc); 
        navList.appendChild(listItem);
    }
 
}
//remove links from nav bar when add new link 
function clearLinks(){
    let navList = document.querySelector('#navbar__list'); 
    while(navList.firstChild){
        navList.removeChild(navList.lastChild); 
    }
}

// Add class 'active' to section when near top of viewport
function activateClass(){
    let sections = document.querySelectorAll('section'); 
    window.addEventListener('scroll',function(event){
       for(let Elem of sections){
           if(isVisible(Elem)){
               Elem.classList.add('your-active-class');
       }
       else {
           Elem.classList.remove('your-active-class'); 
       }
   }
   },false); 
}
//check if the element is in the ViewPort
function isVisible(Elem){
    let bounding = Elem.getBoundingClientRect(); 

    if(bounding.top >= 0 && bounding.left >=0 && 
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)&&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        )
        {
        return true ;
        }
    else {
       
        return false; 
    }
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

document.addEventListener('DOMContentLoaded',addSection); 
