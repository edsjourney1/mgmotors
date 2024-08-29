// add delayed functionality here


// setTimeout(function() {loadfooterForm()}, 4000);
// function  loadfooterForm(){
//     const newsletterForm = document.querySelector('.newsletter-form');
//     console.log(newsletterForm);
//     const newsletterDiv = document.querySelector('.columns.columns-8-cols > div > div:first-child h3');
//     newsletterDiv.append(newsletterForm);
// }

var list = document.querySelectorAll('.two-colcarousel li img');
for (var i=0; i<list.length; i++) {
    list[i].addEventListener('click', carouselClick(list[i]), false);
}
function carouselClick(e)
{
    var expandImg = document.querySelector('.main-image img');
   
    expandImg.src = e.src;
   
    expandImg.style.display = "block";

  };