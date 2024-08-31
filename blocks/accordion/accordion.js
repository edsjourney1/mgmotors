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
  const accordionBody = document.querySelector('.accordion-item-body');
  const paragraphs = accordionBody.querySelectorAll('p');
  const lists = accordionBody.querySelectorAll('ul');

  const tabTitlesContainer = document.createElement('div');
  tabTitlesContainer.classList.add('tab-titles');

  const tabContentsContainer = document.createElement('div');

  paragraphs.forEach((p, index) => {
    // Create tab titles
    const tabTitle = document.createElement('p');
    tabTitle.classList.add('tab-title');
    tabTitle.textContent = p.textContent;
    tabTitle.setAttribute('data-tab', `tab${index}`);
    tabTitlesContainer.appendChild(tabTitle);

    // Create tab content
    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');
    tabContent.setAttribute('id', `tab${index}`);
    tabContent.appendChild(lists[index].cloneNode(true));
    tabContentsContainer.appendChild(tabContent);
  });

  // Insert tab titles and contents into the DOM
  accordionBody.innerHTML = '';
  accordionBody.appendChild(tabTitlesContainer);
  accordionBody.appendChild(tabContentsContainer);

  // Handle tab switching
  tabTitlesContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('tab-title')) {
      const targetTabId = event.target.getAttribute('data-tab');

      // Remove active class from all tabs and contents
      tabTitlesContainer.querySelectorAll('.tab-title').forEach(title => title.classList.remove('active'));
      tabContentsContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

      // Add active class to clicked tab and corresponding content
      event.target.classList.add('active');
      document.getElementById(targetTabId).classList.add('active');
    }
  });

  // Activate the first tab by default
  const firstTabTitle = tabTitlesContainer.querySelector('.tab-title');
  if (firstTabTitle) {
    firstTabTitle.classList.add('active');
    document.getElementById(firstTabTitle.getAttribute('data-tab')).classList.add('active');
  }
});
