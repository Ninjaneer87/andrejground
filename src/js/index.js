import {popup, createPopup} from './popup';
import {coinlandHTML, shareItHTML} from './templates';

const aboutPosition = document.querySelector('.about').getBoundingClientRect().top - 200;
const skillsPosition = document.querySelector('.skills').getBoundingClientRect().top - 200;
const portfolioPosition = document.querySelector('.portfolio').getBoundingClientRect().top - 200;
const contactPosition = document.querySelector('.contact').getBoundingClientRect().top - 200;
const sectionPositionsAndClasses = [
    [aboutPosition, 'about'], 
    [skillsPosition, 'skills'], 
    [portfolioPosition, 'portfolio'], 
    [contactPosition, 'contact']
];
const allAfterElements = document.querySelectorAll('.after-link');

// scroll
document.querySelector('body').addEventListener('scroll', () => {
    if(event.target.scrollTop > 0) {
        document.querySelector('header').classList.add('background');
        allAfterElements.forEach(element => element.classList.remove('after-scale'));
    } else {
        document.querySelector('header').classList.remove('background');
    }
    sectionPositionsAndClasses.forEach(section => {
        if(event.target.scrollTop > section[0]) {
            allAfterElements.forEach(element => element.classList.remove('after-scale'));
            const afterElements = document.querySelectorAll(`.${section[1]}-link .after-link ,  .menu-${section[1]}-link .after-link`);
            afterElements.forEach(element => element.classList.add(`after-scale`));
        }
    });
});

//navigation
document.querySelector('.logo').addEventListener('click', () => document.querySelector('body').scrollTop = 0);
const sections = ['about', 'skills', 'portfolio', 'contact'];
sections.forEach(section => {
    document.querySelector(`.${section}-link`).addEventListener('click', () => document.querySelector(`.${section}`).scrollIntoView());
    document.querySelector(`.menu-${section}-link`).addEventListener('click', () => {
        document.querySelector(`.${section}-link`).click();
        document.querySelector('.menu-link').click();
    });
});
//hamburger menu
document.querySelector('.menu-link').addEventListener('click',() => {
    document.querySelector('.menu-navbar-container').classList.toggle('show-menu');
})

//portfolio popups
document.querySelector('.portfolio').addEventListener('click', () => {
    if(event.target.matches('.coinland-image')) {
        createPopup(coinlandHTML);
    }
    if(event.target.matches('.share-it-image')) {
        createPopup(shareItHTML);
    }
});
//close popup
document.querySelector('.popup-overlay').addEventListener('click', () => {
    if(event.target.matches('.popup-overlay, .close-popup'))
    popup('remove');
});
//close popup on escape key
document.addEventListener('keydown' , () => {
    if(event.keyCode === 27) popup('remove');
    console.log(event.keyCode);
});