document.querySelectorAll(".two-colcarousel li").each(function(item){
    item.addEventListener("click", carouselClick);
 });

 function carouselClick(imgs) {
    // var expandImg = document.getElementById("expandedImg");
    // var imgText = document.getElementById("imgtext");
    // expandImg.src = imgs.src;
    // imgText.innerHTML = imgs.alt;
    // expandImg.parentElement.style.display = "block";
    var expandImg = document.querySelector('.main-image');
  expandImg.src = imgs.src;
  expandImg.parentElement.style.display = "block";
  }