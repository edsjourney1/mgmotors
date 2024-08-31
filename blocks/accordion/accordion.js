/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

export default function decorate(block) {
    [...block.children].forEach((row) => {
      // decorate accordion item label
      const label = row.children[0];
      const summary = document.createElement('summary');
      summary.className = 'accordion-item-label';
      summary.append(...label.childNodes);
      // decorate accordion item body
      const body = row.children[1];
      body.className = 'accordion-item-body';
      // decorate accordion item
      const details = document.createElement('details');
      details.className = 'accordion-item';
      details.append(summary, body);
      row.replaceWith(details);
    });

  const accordionItems = document.querySelectorAll('.mg-motors-accordion .accordion-item');

  accordionItems.forEach(function(item) {
    const label = item.querySelector('.accordion-item-label');

    label.addEventListener('click', function() {
      // Close all other accordions
      accordionItems.forEach(function(otherItem) {
        if (otherItem !== item) {
          otherItem.removeAttribute('open');
        }
      });

      // Toggle the current accordion's open state
      if (item.hasAttribute('open')) {
        item.removeAttribute('open');
      } else {
        item.setAttribute('open', '');
      }
    });
  });

  // Automatically open the first accordion item
  if (accordionItems.length > 0) {
    accordionItems[0].setAttribute('open', '');
  }
}


