// header toogle
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn .addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')

})
//typing effect
let typed = new Typed('.auto-input',{
    strings: ['Student!', 'Front-End Developer!','Web Developer!'],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

})
//active link state on scroll
//get all links
let navlinks = document.querySelectorAll('nav ul li a')
// console.log(navlinks)
// get all sections
let sections = document.querySelectorAll('section')
console.log(sections)
window.addEventListener('scroll',function(){
    const scrollpos=window.scrollY
    sections.forEach(section=>{
        if(scrollpos>section.offsetTop && scrollpos<(section.offsetTop +section.offsetHeight)){
            navlinks.forEach(link=>{
                link.classList.remove('active');
                if(section.getAttribute('id')==link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
})
