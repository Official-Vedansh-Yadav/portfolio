// slider
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    appendDots: '.slider-dots',
    dotsClass: 'dots',
});

let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let mobileNavLinks = document.querySelectorAll('.mobile-nav-links');


hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open');
})

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
})

// Function to close mobile nav when user click on any link

for (let i = 0; i < 4; i++) {
    const element = mobileNavLinks[i];
    element.addEventListener('click', ()=>{
        mobileNav.classList.remove('open');
    })
}
