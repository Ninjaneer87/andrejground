import {popup, createPopup} from './popup';
import {coinlandHTML, shareItHTML} from './templates';

const sections = ['about', 'skills', 'portfolio', 'contact'];
const sectionPositions = sections.reduce((acc, section) => {
    acc[section] = document.querySelector(`.${section}`).getBoundingClientRect().top - 200;
    return acc;
}, {});
const allAfterElements = document.querySelectorAll('.after-link');
const elementsToFadein = [
    'about1',
    'about2',
    'about3',
    'skillsImage',
    'skillsContent',
    'skillsFamiliar',
    'portfolio1',
    'portfolio2',
    'contactInfo',
];
// hide elements on load
const elementPositions = elementsToFadein.reduce((acc,el) => {
    const element = document.querySelector(`.${el}`)
    element.classList.add('fade-animate');
    element.classList.add('transition');
    acc[el] = element.getBoundingClientRect().top - ((window.innerWidth < 800)? 400 : 550);
    return acc;
}, {});
console.log(elementPositions);

//scroll
document.querySelector('body').addEventListener('scroll', () => {
    if(event.target.scrollTop > 0) {
        document.querySelector('header').classList.add('background');
        allAfterElements.forEach(element => element.classList.remove('after-scale'));
    } else {
        document.querySelector('header').classList.remove('background');
    }
    for(const [key, value] of Object.entries(sectionPositions)) {
        if(event.target.scrollTop > value) {
            allAfterElements.forEach(element => element.classList.remove('after-scale'));
            const afterElements = document.querySelectorAll(`.${key}-link .after-link ,  .menu-${key}-link .after-link`);
            afterElements.forEach(element => element.classList.add(`after-scale`));
        }
    }
    for(const [key, value] of Object.entries(elementPositions)) {
        if(event.target.scrollTop > value)
        document.querySelector(`.${key}`).classList.remove('fade-animate');
    }
});

//navigation
document.querySelector('.logo').addEventListener('click', () => document.querySelector('body').scrollTop = 0);
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