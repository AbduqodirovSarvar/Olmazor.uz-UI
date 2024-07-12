async function createTestimonySection() {
    let clients = OlmaTechData.client;

    // Create section element
    const section = document.createElement('section');
    section.className = 'ftco-section testimony-section';
    section.id = 'testimony-section';

    // Create container div
    const container = document.createElement('div');
    container.className = 'container';

    // Create row for heading
    const headingRow = document.createElement('div');
    headingRow.className = 'row justify-content-center pb-3';

    // Create heading column
    const headingCol = document.createElement('div');
    headingCol.className = 'col-md-7 text-center heading-section heading-section-white ftco-animate';
    headingCol.innerHTML = `<h2 class="mb-4">${clients.heading}</h2>`;
    
    // Append headingCol to headingRow
    headingRow.appendChild(headingCol);

    // Create row for testimonies
    const testimonyRow = document.createElement('div');
    testimonyRow.className = 'row ftco-animate justify-content-center';

    // Create testimonies carousel
    const carousel = document.createElement('div');
    carousel.className = 'carousel-testimony owl-carousel ftco-owl';

    // Loop through testimonies data and create testimonies items
    clients.people.forEach(testimony => {
        const item = document.createElement('div');
        item.className = 'item';

        item.innerHTML = `
            <div class="testimony-wrap text-center py-4 pb-5">
                <div class="user-img" style="background-image: url(${testimony.image})">
                    <span class="quote d-flex align-items-center justify-content-center">
                        <i class="icon-quote-left"></i>
                    </span>
                </div>
                <div class="text px-4 pb-5">
                    <p class="mb-4">${testimony.text}</p>
                    <p class="name">${testimony.name}</p>
                    <span class="position">${testimony.position}</span>
                </div>
            </div>
        `;

        carousel.appendChild(item);
    });

    // Append carousel to testimonyRow
    testimonyRow.appendChild(carousel);

    // Append headingRow and testimonyRow to container
    container.appendChild(headingRow);
    container.appendChild(testimonyRow);

    // Append container to section
    section.appendChild(container);

    return section;
}

// Function to render the section in the DOM
async function renderTestimonySection() {
    const section = await createTestimonySection();
    document.body.appendChild(section); // Append to the body or a specific container
}

// Call the function to render the section
renderTestimonySection();