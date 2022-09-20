const exitBg = document.querySelector('.exit_bg')

const hamMenu = document.querySelector('header menu')

const hamBt = document.querySelector('.hambt')

const hambDot = document.querySelector('.hambt div')

let showingMenu = false;


function hamburguer() {
    if(showingMenu == false) {

        exitBg.style.opacity = 1;
        exitBg.style.visibility = 'visible';

        hamMenu.style.transform = 'translateX(0)';

        hambDot.style.transform = 'scale(5)'

        showingMenu = true;
    } else {

        exitBg.style.opacity = 0;
        exitBg.style.visibility = 'hidden';

        hamMenu.style.transform = 'translateX(-100%)';

        hambDot.style.transform = 'scale(1)'

        showingMenu = false;
    }
}

hamBt.addEventListener('click', hamburguer)
exitBg.addEventListener('click', hamburguer)


document.body.onscroll = function() {
    if (window.pageYOffset > 50) {
        hamBt.style.transform = 'translateY(3rem)';
    } else {
        hamBt.style.transform = 'translateY(0rem)';
    }

    if(showingMenu == true) {
        hamburguer()
    }
}