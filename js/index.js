const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navBar = document.querySelector('nav');
const navLinks = navBar.querySelectorAll('a');
navLinks[0].textContent= 'Services';
navLinks[1].textContent= 'Product';
navLinks[2].textContent = 'Vision';
navLinks[3].textContent = 'Features';
navLinks[4].textContent = 'About';
navLinks[5].textContent = 'Contact';

// navBar.style.linkColor = 'green';
// navBar.setAttribute('color','green');

navLinks[0].style.color = 'green';
navLinks[1].style.color = 'green';
navLinks[2].style.color = 'green';
navLinks[3].style.color = 'green';
navLinks[4].style.color = 'green';
navLinks[5].style.color = 'green';

// navBar.appendChild('Confusing');
// navBar.prependChild('Colors');

const newLinkOne = document.createElement('a');
newLinkOne.textContent = 'Confusing';
navBar.appendChild(newLinkOne);

const newLinkTwo = document.createElement('a');
newLinkTwo.textContent = 'Colors';
navBar.prepend(newLinkTwo);

newLinkTwo.style.color = 'green';
newLinkOne.style.color = 'green';



let headerOne = document.querySelector('h1');
headerOne.textContent = 'DOM is Awesome!';

let buttonOne = document.querySelector('button');
buttonOne.textContent = 'Get Started';

let headerFour = document.querySelectorAll('h4');
headerFour[0].textContent = 'Features';
headerFour[1].textContent = 'About';
headerFour[2].textContent = 'Services';
headerFour[3].textContent = 'Product';
headerFour[4].textContent = 'Vision';
headerFour[5].textContent = 'Contact';

 const ctaImg = document.getElementById('cta-img')
 console.log(ctaImg);
//  ctaImg.src  = 'img/header-img.png';
ctaImg.setAttribute('src','img/header-img.png');

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

const midText = document.querySelectorAll('p');
midText[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
midText[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
midText[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
midText[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
midText[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
midText[5].textContent = '123 Way 456 Street Somewhere, USA';
midText[6].textContent = '1 (888) 888-8888';
midText[7].textContent = 'sales@greatidea.io';

const footerText = document.querySelector('footer');
footerText.textContent = 'Copyright Great Idea! 2018';
