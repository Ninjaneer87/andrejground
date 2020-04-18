import '../css/style.css';
import '@fortawesome/fontawesome-free/js/all';

import {popup, createPopup} from './popup';
import {projectView, portfolioView} from './templates';
import {projects} from './projects';

document.querySelector('.portfolio').innerHTML = portfolioView(projects);
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
    ...projects.map(item => item.containerClass),
    'contactInfo',
];

// hide elements on load
const elementPositions = elementsToFadein.reduce((acc,el) => {
    const element = document.querySelector(`.${el}`)
    element.classList.add('fade-animate');
    element.classList.add('transition');
    acc[el] = element.getBoundingClientRect().top - ((window.innerWidth < 768)? 400 : 500);
    return acc;
}, {});

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
        if(key !== 'skillsFamiliar') {
            if(event.target.scrollTop > value)
            document.querySelector(`.${key}`).classList.remove('fade-animate');
        } else {
            if(event.target.scrollTop > value-150)
            document.querySelector(`.${key}`).classList.remove('fade-animate');
        }
    }
    //body bg
    if(event.target.scrollTop > (sectionPositions.about)) {
        document.querySelector('body').classList.add('body-bg1');
    } else {
        document.querySelector('body').classList.remove('body-bg1');
    }
    if(event.target.scrollTop > (sectionPositions.portfolio + 200)) {
        document.querySelector('body').classList.add('body-bg2');
    } else {
        document.querySelector('body').classList.remove('body-bg2');
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
    document.querySelector('.menu-navbar').classList.toggle('show-menu');
})

//portfolio popups
document.querySelector('.portfolio').addEventListener('click', () => {
    projects.forEach(project => {
        if(event.target.matches(`.${project.linkClass}`)) createPopup(projectView(project));
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