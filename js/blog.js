async function createBlogSection() {
    // Example data, replace with your API fetch logic
    const data = OlmaTechData.blogs;

    // Create section element
    const section = document.createElement('section');
    section.className = 'ftco-section bg-light';
    section.id = 'blog-section';

    // Create container div
    const container = document.createElement('div');
    container.className = 'container';

    // Create row for heading
    const headingRow = document.createElement('div');
    headingRow.className = 'row justify-content-center mb-5 pb-5';

    // Create heading column
    const headingCol = document.createElement('div');
    headingCol.className = 'col-md-7 heading-section text-center ftco-animate';
    headingCol.innerHTML = `
        <span class="subheading" data-i18n="blog.title">${data.subheading}</span>
        <h2 class="mb-4" data-i18n="blog.subtitle">${data.heading}</h2>
        <p data-i18n="blog.description">${data.description}</p>
    `;
    
    // Append headingCol to headingRow
    headingRow.appendChild(headingCol);

    // Create row for blog entries
    const blogRow = document.createElement('div');
    blogRow.className = 'row d-flex';
    i=0;

    // Loop through blog entries data and create blog entry items
    data.forEach(entry => {
        const col = document.createElement('div');
        col.className = 'col-md-4 d-flex ftco-animate';

        col.innerHTML = `
            <div class="blog-entry justify-content-end">
                <a href="${entry.link}" class="block-20" style="background-image: url('${entry.image}');"></a>
                <div class="text mt-3 float-right d-block">
                    <div class="d-flex align-items-center pt-2 mb-4 topp">
                        <div class="one mr-2">
                            <span class="day">${entry.date.day}</span>
                        </div>
                        <div class="two">
                            <span class="yr">${entry.date.year}</span>
                            <span class="mos">${entry.date.month}</span>
                        </div>
                    </div>
                    <h3 class="heading"><a data-api="OlmaTechData.blogs.title[${i}]>${entry.title}</a></h3>
                    <p data-api="OlmaTechData.blogs.description[${i}]>${entry.description}</p>
                    <div class="d-flex align-items-center mt-4 meta">
                        <p class="ml-auto mb-0">
                            <a href="#" class="mr-2"></a>
                        </p>
                    </div>
                </div>
            </div>
        `;

        blogRow.appendChild(col);
        i++;
    });

    // Append headingRow and blogRow to container
    container.appendChild(headingRow);
    container.appendChild(blogRow);

    // Append container to section
    section.appendChild(container);

    return section;
}

// Example function to fetch data (replace with actual API call)
async function fetchBlogData() {
    // Example data, replace with your API call
    return {
        subheading: 'Blog',
        heading: 'Our Blog',
        description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        entries: [
            {
                date: { day: '12', month: 'March', year: '2019' },
                image: 'images/image_1.jpg',
                title: 'Why Lead Generation is Key for Business Growth',
                excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                link: 'single.html',
                author: 'Admin',
                comments: 3
            },
            {
                date: { day: '10', month: 'March', year: '2019' },
                image: 'images/image_2.jpg',
                title: 'Why Lead Generation is Key for Business Growth',
                excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                link: 'single.html',
                author: 'Admin',
                comments: 3
            },
            {
                date: { day: '05', month: 'March', year: '2019' },
                image: 'images/image_3.jpg',
                title: 'Why Lead Generation is Key for Business Growth',
                excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
                link: 'single.html',
                author: 'Admin',
                comments: 3
            }
        ]
    };
}

// Function to render the section in the DOM
async function renderBlogSection() {
    const section = await createBlogSection();
    document.body.appendChild(section); // Append to the body or a specific container
}

// Call the function to render the section
renderBlogSection();