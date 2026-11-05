const controls = document.getElementById('compliance-controls');
const search = document.getElementById('compliance-search');
const status = document.getElementById('compliance-status');
const domainLinks = document.querySelectorAll('[data-compliance-link]');
const domains = document.querySelectorAll('[data-compliance-domain]');

search.addEventListener('input', () => {
  const query = search.value.trim().toLowerCase();
  let hasMatches = false;
  for (const [index, domain] of domains.entries()) {
    for (const group of domain.querySelectorAll('[data-compliance-type]')) {
      const entries = Array.from(group.querySelectorAll('[data-compliance-entry]'));
      for (const entry of entries) {
        entry.hidden = !entry.textContent.toLowerCase().includes(query);
      }
      group.hidden = entries.every(entry => entry.hidden);
    }
    domain.hidden = !domain.querySelector('[data-compliance-type]:not([hidden])');
    domainLinks[index].hidden = domain.hidden;
    hasMatches ||= !domain.hidden;
  }
  status.textContent = hasMatches ? '' : '没有匹配的条目。';
});

controls.hidden = false;
