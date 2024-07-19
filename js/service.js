function createServicesSection() {
    let services = OlmaTechData.services;

    // Create the section element
    const section = document.createElement('section');
    section.className = 'ftco-section ftco-no-pb ftco-no-pt ftco-services bg-light';
    section.id = 'services-section';

    // Create the container div
    const container = document.createElement('div');
    container.className = 'container';

    // Create the row div
    const row = document.createElement('div');
    row.className = 'row no-gutters';

    // Create the nav column
    const navCol = document.createElement('div');
    navCol.className = 'col-md-4 ftco-animate py-5 nav-link-wrap';

    // Create the nav pills
    const nav = document.createElement('div');
    nav.className = 'nav flex-column nav-pills';
    nav.id = 'v-pills-tab';
    nav.setAttribute('role', 'tablist');
    nav.setAttribute('aria-orientation', 'vertical');

    // Create the content column
    const contentCol = document.createElement('div');
    contentCol.className = 'col-md-8 ftco-animate p-4 p-md-5 d-flex align-items-center';

    // Create the tab content
    const tabContent = document.createElement('div');
    tabContent.className = 'tab-content pl-md-5';
    tabContent.id = 'v-pills-tabContent';

    services.forEach((item, index) => {
        const isActive = index === 0 ? 'active' : '';

        // Create nav link
        const navLink = document.createElement('a');
        navLink.className = `nav-link px-4 ${isActive}`;
        navLink.id = `v-pills-${index + 1}-tab`;
        navLink.setAttribute('data-toggle', 'pill');
        navLink.href = `#v-pills-${index + 1}`;
        navLink.setAttribute('role', 'tab');
        navLink.setAttribute('aria-controls', `v-pills-${index + 1}`);
        navLink.setAttribute('aria-selected', isActive ? 'true' : 'false');
        navLink.setAttribute('data-api', `OlmaTechData.services.name[${index}]`);
        navLink.innerHTML = `<span class="mr-3 ${item.icon}"></span> ${item.title}`;

        // Append nav link to nav
        nav.appendChild(navLink);

        // Create tab pane
        const tabPane = document.createElement('div');
        tabPane.className = `tab-pane fade show py-5 ${isActive}`;
        tabPane.id = `v-pills-${index + 1}`;
        tabPane.setAttribute('role', 'tabpanel');
        tabPane.setAttribute('aria-labelledby', `v-pills-${index + 1}-tab`);
        tabPane.innerHTML = `
            <span class="icon mb-3 d-block ${item.icon}"></span>
            <h2 class="mb-4" data-api="OlmaTechData.services.name[${index}]">${item.name}</h2>
            <p data-api="OlmaTechData.services.description[${index}]">${item.description}</p>
        `;

        // Append tab pane to tab content
        tabContent.appendChild(tabPane);
    });

    // Append nav to nav column
    navCol.appendChild(nav);

    // Append tab content to content column
    contentCol.appendChild(tabContent);

    // Append columns to row
    row.appendChild(navCol);
    row.appendChild(contentCol);

    // Append row to container
    container.appendChild(row);

    // Append container to section
    section.appendChild(container);

    return section;
}

// Function to render the section in the DOM
async function renderServicesSection() {
    const section = createServicesSection();
    document.body.appendChild(section); // Append to the body or a specific container
}

// Call the function to render the section
renderServicesSection();