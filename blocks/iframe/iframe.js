export default async function decorate(block) {
  const iframe = document.createElement('iframe');
  const link = block.querySelector('a')?.getAttribute('href');
  const fixedHeightClass = [...block.classList].find((el) => /[0-9]+px/.test(el));

  if (fixedHeightClass) {
    iframe.height = fixedHeightClass;
  }
  iframe.src = link;
  iframe.setAttribute('frameborder', 0);
  block.replaceChildren(iframe);
}
document.querySelectorAll('.youtube-w-title .iframe-wrapper').forEach((iframeWrapper) => {
  // Get the next sibling element
  const nextElement = iframeWrapper.nextElementSibling;
  
  // Check if the next sibling is a .default-content-wrapper
  if (nextElement && nextElement.classList.contains('default-content-wrapper')) {
    iframeWrapper.appendChild(nextElement);
  }
});