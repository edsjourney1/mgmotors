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

document.addEventListener('DOMContentLoaded', function() {
  // Create tab links
  const tabsContainer = document.createElement('div');
  tabsContainer.classList.add('tabs-container');
  
  const tabLinks = document.createElement('div');
  tabLinks.classList.add('tab-links');
  
  const tabContentContainer = document.createElement('div');
  
  // Get existing paragraphs and lists
  const paragraphs = document.querySelectorAll('p');
  const lists = document.querySelectorAll('ul');
  
  paragraphs.forEach((p, index) => {
    // Create tab link
    const tabLink = document.createElement('p');
    tabLink.textContent = p.textContent;
    tabLink.dataset.tab = index;
    tabLinks.appendChild(tabLink);

    // Create tab content
    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');
    tabContent.appendChild(lists[index]);
    tabContentContainer.appendChild(tabContent);
  });

  // Insert tab links and content before the first p
  const firstElement = paragraphs[0];
  firstElement.parentNode.insertBefore(tabsContainer, firstElement);
  tabsContainer.appendChild(tabLinks);
  tabsContainer.appendChild(tabContentContainer);

  // Add event listeners
  const tabElements = document.querySelectorAll('.tab-links p');
  const contentElements = document.querySelectorAll('.tab-content');
  
  tabElements.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabElements.forEach(t => t.classList.remove('active'));
      contentElements.forEach(c => c.classList.remove('active'));
      
      tab.classList.add('active');
      contentElements[index].classList.add('active');
    });
  });
  
  // Initialize first tab as active
  if (tabElements.length > 0) {
    tabElements[0].classList.add('active');
    contentElements[0].classList.add('active');
  }
});
