import { OlmaTechData } from "./api.js";

export async function renderFooter() {
    // Create the footer element
    const footer = document.createElement('footer');
    footer.className = 'ftco-footer ftco-section';

    // Create the container div
    const container = document.createElement('div');
    container.className = 'container';

    // Create the row for footer sections
    const row = document.createElement('div');
    row.className = 'row mb-5';

    // Create the About OlmaTech section
    const aboutCol = document.createElement('div');
    aboutCol.className = 'col-md';
    aboutCol.innerHTML = `
        <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2" data-i18n="footer.about">About OlmaTech</h2>
            <p data-api="OlmaTechData.about.description">Far texts.</p>
            <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="https://www.instagram.com/olmatech.uz"><span class="icon-instagram"></span></a></li>
            </ul>
        </div>
    `;
    row.appendChild(aboutCol);

    // Create the Links section
    const linksCol = document.createElement('div');
    linksCol.className = 'col-md';
    linksCol.innerHTML = `
        <div class="ftco-footer-widget mb-4 ml-md-4">
            <h2 class="ftco-heading-2" data-i18n="footer.links">Links</h2>
            <ul class="list-unstyled">
                <li><a href="#home-section" data-i18n="navbar.home"><span class="icon-long-arrow-right mr-2"></span>Home</a></li>
                <li><a href="#services-section" data-i18n="navbar.services"><span class="icon-long-arrow-right mr-2"></span>Services</a></li>
                <li><a href="#about-section" data-i18n="navbar.about"><span class="icon-long-arrow-right mr-2"></span>About</a></li>
                <li><a href="#projects-section" data-i18n="navbar.projects"><span class="icon-long-arrow-right mr-2"></span>Projects</a></li>
                <li><a href="#testimony-section" data-i18n="navbar.clients"><span class="icon-long-arrow-right mr-2"></span>Clients</a></li>
                <li><a href="#blog-section" data-i18n="navbar.blog"><span class="icon-long-arrow-right mr-2"></span>Blog</a></li>
                <li><a href="#contact-section" data-i18n="navbar.contact"><span class="icon-long-arrow-right mr-2"></span>Contact</a></li>
            </ul>
        </div>
    `;
    row.appendChild(linksCol);

    // Create the Services section
    const servicesCol = document.createElement('div');
    servicesCol.className = 'col-md';
    servicesCol.innerHTML = `
        <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2" data-i18n="footer.services">Services</h2>
            <ul class="list-unstyled" id="services-list"></ul>
        </div>
    `;
    row.appendChild(servicesCol);

    // Create the Questions section
    const questionsCol = document.createElement('div');
    questionsCol.className = 'col-md';
    questionsCol.innerHTML = `
        <div class="ftco-footer-widget mb-4">
            <h2 class="ftco-heading-2" data-i18n="footer.questions">Have a Questions?</h2>
            <div class="block-23 mb-3">
                <ul>
                    <li><span class="icon icon-map-marker"></span><span class="text" data-api="OlmaTechData.about.address">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span class="icon icon-phone"></span><span class="text">+998 99 721 5333</span></a></li>
                    <li><a href="#"><span class="icon icon-envelope"></span><span class="text">olmatech@gmail.com</span></a></li>
                </ul>
            </div>
        </div>
    `;
    row.appendChild(questionsCol);

    // Append the row to the container
    container.appendChild(row);

    // Append the container to the footer
    footer.appendChild(container);

    // Append the footer to the placeholder in the DOM
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.appendChild(footer);
    } else {
        console.error('Footer placeholder not found');
    }

    // Render the services list
    await renderServices();
}

async function renderServices() {
    try {
        let services = OlmaTechData.services;
        const servicesList = document.getElementById('services-list');
        
        // Clear the existing services if any
        servicesList.innerHTML = '';
        
        // Loop through the services and create list items
        services.forEach((service, i) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a data-api="OlmaTechData.services.name[${i}]"><span class="icon-long-arrow-right mr-2"></span>${service.title}</a>`;
            servicesList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error rendering services:', error);
    }
}
