async function createServicesSection() {
    // Example data, replace this with your actual API call
    const data = await fetchServicesData();

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

    data.forEach((item, index) => {
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
            <h2 class="mb-4">${item.title}</h2>
            <p>${item.description}</p>
            <p>${item.details}</p>
            <p><a href="${item.link}" class="btn btn-primary px-4 py-3">Learn More</a></p>
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

// Example function to fetch data (replace with actual API call)
async function fetchServicesData() {
    // Example data, replace this with your API call
    return [
        {
            title: "Business Strategy",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-ideas",
            link: "#"
        },
        {
            title: "Research",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-flasks",
            link: "#"
        },
        {
            title: "Data Analysis",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-analysis",
            link: "#"
        },
        {
            title: "UI Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-web-design",
            link: "#"
        },
        {
            title: "UX Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-ux-design",
            link: "#"
        },
        {
            title: "Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-innovation",
            link: "#"
        },
        {
            title: "Creative Solution",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-idea",
            link: "#"
        },
        {
            title: "Creative Solution",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-idea",
            link: "#"
        },
        {
            title: "Creative Solution",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur",
            details: "Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.",
            icon: "flaticon-idea",
            link: "#"
        }
    ];
}

// Function to render the section in the DOM
async function renderServicesSection() {
    const section = await createServicesSection();
    document.body.appendChild(section); // Append to the body or a specific container
}

// Call the function to render the section
renderServicesSection();