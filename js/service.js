import { OlmaTechData } from './api.js';

export function createServicesSection() {
  try {
    if (!OlmaTechData) {
      throw new Error('OlmaTechData is not initialized');
    }

    let services = OlmaTechData.services;

    const section = document.getElementById('services-section') || document.createElement('section');

    const container = document.createElement('div');
    container.className = 'container';

    const row = document.createElement('div');
    row.className = 'row no-gutters';

    const navCol = document.createElement('div');
    navCol.className = 'col-md-4 ftco-animate py-5 nav-link-wrap';

    const nav = document.createElement('div');
    nav.className = 'nav flex-column nav-pills';
    nav.id = 'v-pills-tab';
    nav.setAttribute('role', 'tablist');
    nav.setAttribute('aria-orientation', 'vertical');

    const contentCol = document.createElement('div');
    contentCol.className = 'col-md-8 ftco-animate p-4 p-md-5 d-flex align-items-center';

    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content pl-md-5';
    tabContent.id = 'v-pills-tabContent';

    services.forEach((item, index) => {
      const isActive = index === 0 ? 'active' : '';

      const navLink = document.createElement('a');
      navLink.className = `nav-link px-4 ${isActive}`;
      navLink.id = `v-pills-${index + 1}-tab`;
      navLink.setAttribute('data-toggle', 'pill');
      navLink.href = `#v-pills-${index + 1}`;
      navLink.setAttribute('role', 'tab');
      navLink.setAttribute('aria-controls', `v-pills-${index + 1}`);
      navLink.setAttribute('aria-selected', isActive ? 'true' : 'false');
      navLink.setAttribute('data-api', `OlmaTechData.services.name[${index}]`);
      navLink.innerHTML = `<span class="mr-3 ${item.icon}"></span> ${item.name['en']}`;

      nav.appendChild(navLink);

      const tabPane = document.createElement('div');
      tabPane.className = `tab-pane fade show py-5 ${isActive}`;
      tabPane.id = `v-pills-${index + 1}`;
      tabPane.setAttribute('role', 'tabpanel');
      tabPane.setAttribute('aria-labelledby', `v-pills-${index + 1}-tab`);
      tabPane.innerHTML = `
        <span class="icon mb-3 d-block ${item.icon}"></span>
        <h2 class="mb-4" data-api="OlmaTechData.services.name[${index}]">${item.name['en']}</h2>
        <p data-api="OlmaTechData.services.description[${index}]">${item.description['en']}</p>
      `;

      tabContent.appendChild(tabPane);
    });

    navCol.appendChild(nav);
    contentCol.appendChild(tabContent);
    row.appendChild(navCol);
    row.appendChild(contentCol);
    container.appendChild(row);
    section.appendChild(container);

    return section;
  } catch (error) {
    console.error('Error creating services section:', error);
    throw error;
  }
}

export async function renderServicesSection() {
  try {
    const section = createServicesSection();
  } catch (error) {
    console.error('Error rendering services section:', error);
  }
}