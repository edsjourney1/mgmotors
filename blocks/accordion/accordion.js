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
  }

document.addEventListener("DOMContentLoaded", function () {
    const accordionContainer = document.querySelector(".mg-motors-accordion");
    if (!accordionContainer) return;

    const accordionItems = accordionContainer.querySelectorAll(".accordion-item");

    // Close all accordion items except the first one
    accordionItems.forEach((item, index) => {
        if (index !== 0) {
            item.removeAttribute("open");
        }
    });

    accordionItems.forEach(item => {
        item.addEventListener("click", function () {
            // Close all accordion items except the clicked one
            accordionItems.forEach(i => {
                if (i !== this) {
                    i.removeAttribute("open");
                }
            });

            if (!this.hasAttribute("open")) {
                this.setAttribute("open", "");
            } else {
                this.removeAttribute("open");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.mg-motors-accordion .accordion-item-label').on('click', function() {
    // Remove 'active' class from all labels and bodies
    document.querySelector('.mg-motors-accordion .accordion-item-label p').removeClass('active');
    document.querySelector('.mg-motors-accordion .accordion-item-body').removeClass('active');

    // Add 'active' class to the clicked label and corresponding body
    document.querySelector(this).find('p').addClass('active');
    document.querySelector(this).next('.accordion-item-body').addClass('active');
  });

  // Automatically trigger click on the first tab to display it initially
  document.querySelector('.mg-motors-accordion .accordion-item-label:first').trigger('click');
});
