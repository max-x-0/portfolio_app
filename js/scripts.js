//Hero section

let modal = document.getElementById('hero_modal');

let btnOpen = document.getElementById('btn_contact');

let btnClose = document.getElementsByClassName('form btn_form_close')[0];

btnOpen.onclick = function() {
    modal.style.display = "block";
}

btnClose.onclick = function() {
    modal.style.display = "none";
}

//My work section

let myWorkmodal = document.getElementById('my_work_modal_win');

let myWorkbtnOpen = document.getElementById('btn_open_modal_my_work');

myWorkbtnOpen.onclick = function() {
    my_work_modal_win.style.display = "block";
}

window.onclick = function(event) {
    if (event.target ==  my_work_modal_win) {
        my_work_modal_win.style.display = "none";
    };
}

//Reviews section

const slides = document.querySelectorAll('.slide');
        dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

setInterval(nextSlide, 2500);



