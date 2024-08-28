import { getMetadata } from '../../scripts/aem.js';
 import { loadFragment } from '../fragment/fragment.js';

// /**
//  * loads and decorates the footer
//  * @param {Element} block The footer block element
//  */
// export default async function decorate(block) {
//   // load footer as fragment
//   const footerMeta = getMetadata('footer');
//   const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
//   const fragment = await loadFragment(footerPath);

//   // decorate footer DOM
//   block.textContent = '';
//   const footer = document.createElement('div');
//   while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

//   block.append(footer);
// }
 import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
 // const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}`);
  const fragment = await loadFragment(footerPath);
  //const footerMeta = getMetadata('footer');

  const html = await resp.text();
  const footer = document.createElement('div');

  Array.from(fragment.children).forEach(child => footer.appendChild(child));
  await decorateIcons(footer);

  block.append(footer);

//adding another div to the submenues
  const divs = document.querySelectorAll('.columns.columns-8-cols > div > div:not(:first-child)');

  divs.forEach(div => {
    const footerSubmenu = document.createElement('div');
    footerSubmenu.className = 'footersubmenu';
    //  const title = div.querySelector('h2');
    //  title.className = 'menuTitle';
  
    const pTags = div.querySelectorAll('p.button-container');
    pTags.forEach(p => {
        footerSubmenu.appendChild(p);
    });

    div.appendChild(footerSubmenu);
  
  });
  
  // const menuTitles = document.querySelectorAll('footer .footer  h2');
  // console.log(menuTitles);
  // menuTitles.forEach(title => {
  //     title.addEventListener('click', () => {
  //       console.log('hello');
  //         // Hide all footersubmenu divs
  //         document.querySelectorAll('.footersubmenu').forEach(submenu => {
  //             submenu.style.display = 'none';
  //         });

  //         // Show the clicked footersubmenu
  //         const submenu = title.nextElementSibling;
  //         if (submenu && submenu.classList.contains('footersubmenu')) {
  //             submenu.style.display = 'block';
  //         }
  //     });
  // });



      $('footer').on("click", ".columns > div > div", function(){
        if (window.innerWidth < 768) {
          if($(this).hasClass('active')){
            console.log('active');
            $(this).removeClass('active');
            $('.footersubmenu').hide();
          }
          else{
            $('.columns > div > div').removeClass('active');
            $('.footersubmenu').hide();
            $(this).addClass('active')
            $(this).find('.footersubmenu').show();
          }
       }
      });

}
