const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle-menu'),
closeMenu = document.getElementById('close-menu')

toggleMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () =>{
    navMenu.classList.remove('show')
})


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

 