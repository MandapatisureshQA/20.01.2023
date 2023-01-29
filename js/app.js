const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".mobile-sidebar-container");


const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
}

const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar");
}


hamburger.addEventListener("click", openSidebar );
closeButton.addEventListener("click", closeSidebar);

const manualHamburger = document.querySelector(".hero-manual-hamburger");
const manualCloseButton = document.querySelector(".hero-sidebar-close-button");
const manualSidebarContainer = document.querySelector(".hero-sidebar-manual-container");


const manualOpenSidebar = () => {
    manualSidebarContainer.classList.add("manual-show-sidebar");
}

const manualCloseSidebar = () => {
    manualSidebarContainer.classList.remove("manual-show-sidebar");
}


manualHamburger.addEventListener("click", manualOpenSidebar );
manualCloseButton.addEventListener("click", manualCloseSidebar);

//nav bar sticky

const navbarContainer = document.querySelector(".navbar-container");
window.addEventListener("scroll", function()
{
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth  >= 992 ? 70 : 50 ;
    if(scrollNumber >= targetNumber)
    {
        navbarContainer.classList.add("sticky-nav");
    }
    else
    {
        navbarContainer.classList.remove("sticky-nav");
    }
});


//mibile sidebar sticky

const navbarContainer1 = document.querySelector(".hero-manual-header");
window.addEventListener("scroll", function()
{
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth  >= 992 ? 70 : 50 ;
    if(scrollNumber >= targetNumber)
    {
        navbarContainer1.classList.add("sticky-nav");
    }
    else
    {
        navbarContainer1.classList.remove("sticky-nav");
    }
});


