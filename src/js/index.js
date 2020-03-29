import {popup, createPopup} from './popup';
import {coinlandHTML, shareItHTML} from './templates';

document.querySelector('body').addEventListener('scroll', () => {
    if(event.target.scrollTop > 0) {
        document.querySelector('header').classList.add('background');
    } else {
        document.querySelector('header').classList.remove('background');
    }
});

document.querySelector('.logo').addEventListener('click', () => document.querySelector('body').scrollTop = 0);
const sections = ['about', 'skills', 'portfolio', 'contact'];
sections.forEach(section =>
        document.querySelector(`.${section}-link`).addEventListener('click', () => document.querySelector(`.${section}`).scrollIntoView())
);

document.querySelector('.portfolio').addEventListener('click', () => {
    if(event.target.matches('.coinland-image')) {
        createPopup(coinlandHTML);
    }
    if(event.target.matches('.share-it-image')) {
        createPopup(shareItHTML);
    }
});
document.querySelector('.popup-overlay').addEventListener('click', () => {
    if(event.target.matches('.popup-overlay, .close-popup'))
    popup('remove');
});

// document.querySelector('.resume-link').addEventListener('click', () => {
//     console.log('successful: ', coinlandHTML)
//     createPopup(coinlandHTML);
// })

// let element = document.querySelector('.paralax');
// let rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

// window.addEventListener('scroll', () => {
//     console.log(window.scrollY)
// })
// let element = document.querySelector('.third');
// let rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

// window.addEventListener('scroll', () => {
//     if(window.scrollY > rect.top-element.offsetHeight) {
//         console.log('bem ti mater');
//         element.style.background = 'white';
//     }
// })