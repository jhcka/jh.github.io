const toc = document.querySelector('.report-toc');
const nav = toc.querySelector('nav');
const entries = Array.from(nav.querySelectorAll('#markdown-toc a'), link => ({
  link,
  heading: document.getElementById(decodeURIComponent(link.hash.slice(1))),
})).filter(entry => entry.heading);
const desktop = matchMedia('(min-width: 800px)');

let activeLink;
let pendingFrame;

function updateToc() {
  pendingFrame = undefined;
  let currentLink;

  for (const { heading, link } of entries) {
    if (heading.getBoundingClientRect().top > 32) break;
    currentLink = link;
  }

  if (currentLink !== activeLink) {
    activeLink?.removeAttribute('aria-current');
    currentLink?.setAttribute('aria-current', 'location');
    activeLink = currentLink;
  }

  if (!desktop.matches || !toc.open) return;

  if (!activeLink) {
    nav.scrollTop = 0;
    return;
  }

  const item = activeLink.getBoundingClientRect();
  const viewport = nav.getBoundingClientRect();
  if (item.top < viewport.top + 8 || item.bottom > viewport.bottom - 8) {
    nav.scrollTop += item.top - viewport.top - nav.clientHeight / 3;
  }
}

function scheduleUpdate() {
  if (pendingFrame === undefined) pendingFrame = requestAnimationFrame(updateToc);
}

toc.classList.add('report-toc--tracking');
addEventListener('scroll', scheduleUpdate, { passive: true });
addEventListener('resize', scheduleUpdate);
addEventListener('hashchange', scheduleUpdate);
toc.addEventListener('toggle', scheduleUpdate);
scheduleUpdate();
