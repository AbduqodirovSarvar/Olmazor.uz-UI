async function renderServices() {
    try {
        let services = OlmaTechData.services;
        const servicesList = document.getElementById('services-list');
        
        // Clear the existing services if any
        servicesList.innerHTML = '';
        i=0;
        // Loop through the services and create list items
        services.forEach(service => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${service.link}" data-api="OlmaTechData.services.name[${i}]"><span class="icon-long-arrow-right mr-2"></span>${service.title}</a>`;
            servicesList.appendChild(listItem);
            i++;
        });
    } catch (error) {
        console.error('Error rendering services:', error);
    }
}

renderServices();