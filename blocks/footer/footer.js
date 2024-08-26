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
  console.log(fragment);
  Array.from(fragment.children).forEach(child => footer.appendChild(child));
  await decorateIcons(footer);
  block.append(footer);
}
