const leftBar = document.querySelector('.left-bar');
const headerContainer = document.querySelector('.header-container');
const mainContent = document.querySelector('.main-content');
const SignUpBtn = document.querySelector('.btn');

const width = leftBar.clientWidth;

document.querySelector('.icon').addEventListener('click', function () {

    ////moving the side bar

    leftBar.classList.toggle('side-bar')

   // leftBar.style.transform = 'translateX(' + -width + 'px)'
   // leftBar.style.transition = 'transform 2s'

    ///changing the view port to 100

    headerContainer.classList.toggle('view-port');
    mainContent.classList.toggle('view-port');

    /*headerContainer.style.left = '0px'
    headerContainer.style.width = '100vw'

    mainContent.style.left = '0px'
    mainContent.style.width = '100vw'*/

})


//////on clicking sign up button

SignUpBtn.addEventListener('click',function(){
    document.querySelector('.back-drop').classList.add('show')
    document.querySelector('.container').classList.add('show')
})


///on submit the back drop

document.querySelector('#btn').addEventListener('click',function(){
    document.querySelector('.back-drop').classList.remove('show')
    document.querySelector('.container').classList.remove('show')
})