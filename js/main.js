let slides = document.querySelectorAll('.slide-item');
let counter = 0;


var interval = setInterval(function () {
    console.log(counter)
    if (counter < slides.length - 1) {
        slides[counter].classList.remove('active');
        slides[counter + 1].classList.add('active');
        counter++;
    }
    else {
        slides[counter].classList.remove('active');        
        counter = 0;
        slides[counter].classList.add('active');

    }
},3000);


