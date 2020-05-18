export const createPopup = (htmlContent) => {
    document.querySelector('.popup-div-content').innerHTML = htmlContent;
    popup('add');
};

export const popup = (action) => {
    document.querySelector('.popup-overlay').classList[action]('show-popup');
    document.querySelector('body').classList[action]('no-scroll');
}
