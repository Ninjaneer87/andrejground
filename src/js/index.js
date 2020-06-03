import '../css/style.css';
import '@fortawesome/fontawesome-free/js/all';

import {popup, createPopup} from './popup';
import {projectPopupView, portfolioView} from './templates';
import {projects} from './projects';

document.querySelector('.portfolio').innerHTML = portfolioView(projects);
const sections = ['portfolio', 'skills', 'about', 'contact'];
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
    ...projects.map(item => item.containerClass),
    'contactInfo',
];

// hide elements on load
const elementPositions = elementsToFadein.reduce((acc,el) => {
    const element = document.querySelector(`.${el}`)
    element.classList.add('hide-elements');
    element.classList.add('transition');
    acc[el] = element.getBoundingClientRect().top - ((window.innerWidth < 768)? 400 : 500);
    return acc;
}, {});

//scroll
document.querySelector('body').addEventListener('scroll', () => {
    if(event.target.scrollTop > 0) {
        document.querySelector('header').classList.add('background');
        allAfterElements.forEach(element => element.classList.remove('show-underline'));
    } else {
        document.querySelector('header').classList.remove('background');
    }
    //underline the nav item on scroll
    for(const [key, value] of Object.entries(sectionPositions)) {
        if(event.target.scrollTop > value) {
            allAfterElements.forEach(element => element.classList.remove('show-underline'));
            const selectedAfterElements = document.querySelectorAll(`.${key}-link .after-link ,  .menu-${key}-link .after-link`);
            selectedAfterElements.forEach(element => element.classList.add(`show-underline`));
        }
    }
    //fade in elements on scroll
    for(const [key, value] of Object.entries(elementPositions)) {
        if(key !== 'skillsFamiliar') {
            if(event.target.scrollTop > value)
            document.querySelector(`.${key}`).classList.remove('hide-elements');
        } else {
            if(event.target.scrollTop > value-150)
            document.querySelector(`.${key}`).classList.remove('hide-elements');
        }
    }
});

//navigation
document.querySelector('.logo').addEventListener('click', () => document.querySelector('body').scrollTop = 0);
sections.forEach(section => {
    document.querySelector(`.${section}-link`).addEventListener('click', () => 
        document.querySelector(`.${section}`).scrollIntoView()
    );

    document.querySelector(`.menu-${section}-link`).addEventListener('click', () => {
        document.querySelector(`.${section}-link`).click();
        document.querySelector('.menu-link').click();
    });
});
//hamburger menu
document.querySelector('.menu-link').addEventListener('click',() => {
    document.querySelector('.menu-navbar').classList.toggle('show-menu');
})

//portfolio popups
document.querySelector('.portfolio').addEventListener('click', () => {
    projects.forEach(project => {
        if(event.target.matches(`.${project.linkClass}`)) 
        createPopup(projectPopupView(project));
    });
});
//close popup
document.querySelector('.popup-overlay').addEventListener('click', () => {
    if(event.target.matches('.popup-overlay, .close-popup'))
    popup('remove');
});
//close popup on escape key
document.addEventListener('keydown' , () => {
    if(event.keyCode === 27) popup('remove');
});