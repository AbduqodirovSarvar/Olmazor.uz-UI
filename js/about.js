function createAboutSection(language) {
    let about = OlmaTechData.about;

    // Create the section element
    const section = document.createElement('section');
    section.className = 'ftco-counter img ftco-section ftco-no-pt ftco-no-pb';
    section.id = 'about-section';

    // Create the container div
    const container = document.createElement('div');
    container.className = 'container';

    // Create the row div
    const row = document.createElement('div');
    row.className = 'row d-flex';

    // Create the image column
    const imgCol = document.createElement('div');
    imgCol.className = 'col-md-6 col-lg-5 d-flex';

    // Create the image div
    const imgDiv = document.createElement('div');
    imgDiv.className = 'img d-flex align-self-stretch align-items-center';
    imgDiv.style.backgroundImage = `url(${about.photo})`;

    // Append imgDiv to imgCol
    imgCol.appendChild(imgDiv);

    // Create the text column
    const textCol = document.createElement('div');
    textCol.className = 'col-md-6 col-lg-7 pl-lg-5 py-5';

    // Create the inner div
    const innerDiv = document.createElement('div');
    innerDiv.className = 'py-md-5';

    // Create the heading row
    const headingRow = document.createElement('div');
    headingRow.className = 'row justify-content-start pb-3';

    // Create the heading column
    const headingCol = document.createElement('div');
    headingCol.className = 'col-md-12 heading-section ftco-animate';
    headingCol.innerHTML = `
        <span class="subheading" data-i18n="home.welcome"></span>
        <h2 class="mb-4" style="font-size: 34px; text-transform: capitalize;">${about.title.en}</h2>
        <p>${about.description[language]}</p>
    `;

    // Append heading column to heading row
    headingRow.appendChild(headingCol);

    // Create the counter div
    const counterWrap = document.createElement('div');
    counterWrap.className = 'counter-wrap ftco-animate d-flex mt-md-3';

    // Create the text div inside the counter
    const counterText = document.createElement('div');
    counterText.className = 'text p-4 bg-primary';
    counterText.innerHTML = `
        <p class="mb-0">
            <span class="number" data-number="${about.experience}">0</span>
            <span>Years of experience</span>
        </p>
    `;

    // Append counterText to counterWrap
    counterWrap.appendChild(counterText);

    // Append headingRow and counterWrap to innerDiv
    innerDiv.appendChild(headingRow);
    innerDiv.appendChild(counterWrap);

    // Append innerDiv to textCol
    textCol.appendChild(innerDiv);

    // Append imgCol and textCol to row
    row.appendChild(imgCol);
    row.appendChild(textCol);

    // Append row to container
    container.appendChild(row);

    // Append container to section
    section.appendChild(container);

    return section;
}

// Function to render the section in the DOM
async function renderAboutSection() {
    const section = createAboutSection();
    document.body.appendChild(section); // Append to the body or a specific container
}

// Call the function to render the section
renderAboutSection();