// add delayed functionality here


// setTimeout(function() {loadfooterForm()}, 4000);
// function  loadfooterForm(){
//     const newsletterForm = document.querySelector('.newsletter-form');
//     console.log(newsletterForm);
//     const newsletterDiv = document.querySelector('.columns.columns-8-cols > div > div:first-child h3');
//     newsletterDiv.append(newsletterForm);
// }

// var list = document.querySelectorAll('.two-colcarousel li img');
// for (var i=0; i<list.length; i++) {
//     list[i].addEventListener('click', carouselClick);
// }
// function carouselClick(e)
// {
//     var expandImg = document.querySelector('.main-image img');
//    var imgSrc = document.querySelector('.main-image source ');
//    imgSrc.srcset = e.target.src;
//     expandImg.src = e.target.src;
//     expandImg.style.display = "block";

//   };

var divs = document.querySelectorAll('.main-image .columns-2-cols > div');
divs.forEach(function(div, index) {
    if (index !== 0) {
        div.classList.add('hidden');
    }
});

document.querySelectorAll('.main-image li img').forEach(function(image, index) {
    
    image.addEventListener('click', function() {
        var divs = document.querySelectorAll('.main-image .columns-2-cols > div');
       divs.forEach(function(div, i) {
        if (i === index) {
            div.classList.remove('hidden');
        } else {
            div.classList.add('hidden');
        }
    });
    });
});