let backdrop = document.querySelector('.backdrop');
let planButtons = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal');
let modalCloseButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for (let index = 0; index < planButtons.length; index++) {
    const element = planButtons[index];
    element.addEventListener('click',()=>{
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener('click',()=>{
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
});

if(modalCloseButton){
    modalCloseButton.addEventListener('click',closeModal);
}

toggleButton.addEventListener('click', ()=>{
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

function closeModal(){
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}