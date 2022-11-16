const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    console.log("Amit Kumar");

    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        console.log("Amit Kumar");
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = 'navLinkFade 0.5s ease forwards 0.5s ';
            }
        });

        burger.classList.toggle('toggle');
    });

}

navSlide();