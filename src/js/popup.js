export const createPopup = (htmlContent) => {
    document.querySelector('.popup-div-content').innerHTML = htmlContent;
    console.log(htmlContent)
    popup('add');
};

export const popup = (action) => {
    document.querySelector('.popup-overlay').classList[action]('show-popup');
    document.querySelector('body').classList[action]('no-scroll');
    if(action === 'add') {
        document.querySelector('body').classList[action]('perspective');
    } else {
        setTimeout(() => {
            document.querySelector('body').classList[action]('perspective');
        }, 150);
    }
}
