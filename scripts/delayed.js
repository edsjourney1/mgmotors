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

var divs = document.querySelectorAll('.main-image.has-it-all-cont .columns-2-cols > div');
divs.forEach(function(div, index) {
    if (index !== 0) {
        div.classList.add('hidden');
    }
});
var li = document.querySelectorAll('.tab-section.has-it-all .default-content-wrapper ul li');
li.forEach(function(li, index) {
    if (index == 0) {
        li.classList.add('active');
    }
});

var divs = document.querySelectorAll('.main-image.accessories-cont .columns-2-cols > div');
divs.forEach(function(div, index) {
    if (index !== 0) {
        div.classList.add('hidden');
    }
});
var li = document.querySelectorAll('.tab-section.accessories .default-content-wrapper ul li');
li.forEach(function(li, index) {
    if (index == 0) {
        li.classList.add('active');
    }
});

// var imgLists = document.querySelectorAll('.has-it-all-cont .default-content-wrapper > ul > li picture');
// imgLists.forEach(function(li, index) {
//     if (index == 0) {
//         li.classList.add('active');
//     }
// });
// var imgLists = document.querySelectorAll('.accessories-cont .default-content-wrapper > ul >li picture');
// imgLists.forEach(function(li, index) {
//     if (index == 0) {
//         li.classList.add('active');
//     }
// });
var imgLists1 = document.querySelectorAll('.has-it-all-cont .default-content-wrapper > ul > li picture');
var imgLists2 = document.querySelectorAll('.accessories-cont .default-content-wrapper > ul > li picture');

var combinedImgLists = [...imgLists1, ...imgLists2];

combinedImgLists.forEach(function(li, index) {
    if (index == 0 || index == imgLists1.length) {
        li.classList.add('active');
    }
});


var divs = document.querySelectorAll('.has-it-all-cont');
divs.forEach(function(div, index) {
    if (index == 0) {
        div.style.display = 'block';
    }
    else
    div.style.display = 'none';
});
var divs = document.querySelectorAll('.accessories-cont');
divs.forEach(function(div, index) {
    if (index == 0) {
        div.style.display = 'block';
    }
    else
    div.style.display = 'none';
});

document.querySelectorAll('.main-image.has-it-all-cont li picture').forEach(function(image, index) {
    image.addEventListener('click', function() {
        document.querySelector('.main-image.has-it-all-cont li picture.active').classList.remove('active');
        //this.closest('.default-content-wrapper').querySelector('.main-image.has-it-all-cont li picture').classList.remove('active');
        this.classList.add('active');

        var section = image.closest('.main-image.has-it-all-cont');

        var divs = section.querySelectorAll(' .columns-2-cols > div');

        divs.forEach(function(div, i) {
            if (i === index) {
                div.classList.remove('hidden');
            } else {
                div.classList.add('hidden');
            }
        });
    });
 });

 document.querySelectorAll('.main-image.accessories-cont li picture').forEach(function(image, index) {
    image.addEventListener('click', function() {

        document.querySelector('.main-image.accessories-cont li picture.active').classList.remove('active');
        this.classList.add('active');

        var section = image.closest('.main-image.accessories-cont');

        var divs = section.querySelectorAll(' .columns-2-cols > div');

        divs.forEach(function(div, i) {
            if (i === index) {
                div.classList.remove('hidden');
            } else {
                div.classList.add('hidden');
            }
        });
    });
 });

// document.querySelectorAll('.tab-section.has-it-all .default-content-wrapper ul li').forEach(function(tab, index) {
//     tab.addEventListener('click', function() {
  
//         document.querySelector('.tab-section.has-it-all .default-content-wrapper ul li.active').classList.remove('active');
//         this.classList.add('active');
//         var content = tab.textContent.toLowerCase();
//         // Hide all tab panels
//         document.querySelectorAll('.has-it-all-cont').forEach(function(panel) {
//             panel.style.display = 'none';
//         });

//         // Show the corresponding tab panel
//         var targetPanel = document.querySelector('.has-it-all-cont.' + content );
//         targetPanel.style.display = 'block';
//     });
// });

document.querySelectorAll('.tab-section.has-it-all .default-content-wrapper ul li').forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        // Check screen width
        if (window.innerWidth < 992) {
            // If the clicked tab is already active, toggle visibility of all tabs
            if (this.classList.contains('active')) {
                document.querySelectorAll('.tab-section.has-it-all .default-content-wrapper ul li').forEach(function(t) {
                    t.style.display = t.style.display === 'block' ? 'block' : 'block';
                });
                return; // Exit the function to prevent removing the active class
            } else {
                // Hide all tabs except the clicked one
                document.querySelectorAll('.tab-section.has-it-all .default-content-wrapper ul li').forEach(function(t) {
                    t.style.display = 'none';
                });
                this.style.display = 'block';
            }
        }

        // Remove active class from all tabs and add to the clicked tab
        if (!this.classList.contains('active')) {
            document.querySelector('.tab-section.has-it-all .default-content-wrapper ul li.active').classList.remove('active');
            this.classList.add('active');
        }

        var content = tab.textContent.toLowerCase();
        // Hide all tab panels
        document.querySelectorAll('.has-it-all-cont').forEach(function(panel) {
            panel.style.display = 'none';
        });

        // Show the corresponding tab panel
        var targetPanel = document.querySelector('.has-it-all-cont.' + content);
        targetPanel.style.display = 'block';
    });
});


document.querySelectorAll('.tab-section.accessories .default-content-wrapper ul li').forEach(function(tab, index) {
    tab.addEventListener('click', function() {
        if (window.innerWidth < 992) {
            // If the clicked tab is already active, toggle visibility of all tabs
            if (this.classList.contains('active')) {
                document.querySelectorAll('.tab-section.accessories .default-content-wrapper ul li').forEach(function(t) {
                    t.style.display = t.style.display === 'block' ? 'block' : 'block';
                });
                return; // Exit the function to prevent removing the active class
            } else {
                // Hide all tabs except the clicked one
                document.querySelectorAll('.tab-section.accessories .default-content-wrapper ul li').forEach(function(t) {
                    t.style.display = 'none';
                });
                this.style.display = 'block';
            }
        }

        // Remove active class from all tabs and add to the clicked tab
        if (!this.classList.contains('active')) {
            document.querySelector('.tab-section.accessories .default-content-wrapper ul li.active').classList.remove('active');
            this.classList.add('active');
        }

        var content = tab.textContent.toLowerCase().replace(/\s/g, '-');
        // Hide all tab panels
        document.querySelectorAll('.accessories-cont').forEach(function(panel) {
            panel.style.display = 'none';
        });

        // Show the corresponding tab panel
        var targetPanel = document.querySelector('.accessories-cont.' + content );
        targetPanel.style.display = 'block';
    });
});

