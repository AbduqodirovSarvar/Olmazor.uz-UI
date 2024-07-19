function createHomeSection() {
    try {
        const home = OlmaTechData.home;
        const section = document.createElement('section');
        section.id = 'home-section';
        section.className = 'hero';

        const h3 = document.createElement('h3');
        h3.className = 'vr';
        h3.textContent = "Welcome to OlmaTech";
        h3.setAttribute('data-i18n', 'home.welcome');

        const homeSlider = document.createElement('div');
        homeSlider.className = 'home-slider js-fullheight owl-carousel';

        home.forEach(item => {
            const sliderItem = document.createElement('div');
            sliderItem.className = 'slider-item js-fullheight';
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';

            const container = document.createElement('div');
            container.className = 'container-fluid p-0';

            const row = document.createElement('div');
            row.className = 'row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end';
            row.setAttribute('data-scrollax-parent', 'true');

            const imgDiv = document.createElement('div');
            imgDiv.className = 'one-third order-md-last img js-fullheight';
            imgDiv.style.backgroundImage = `url(${item.photo})`;

            const imgOverlay = document.createElement('div');
            imgOverlay.className = 'overlay';

            const textDiv = document.createElement('div');
            textDiv.className = 'one-forth d-flex js-fullheight align-items-center ftco-animate';
            textDiv.setAttribute('data-scrollax', ' properties: { translateY: \'70%\' }');

            const text = document.createElement('div');
            text.className = 'text';
            i = 0;

            const subheading = document.createElement('span');
            subheading.className = 'subheading';
            subheading.textContent = item.subtitle["en"];
            subheading.setAttribute('data-i18n', `OlmaTechData.home.subtitle[${i}]`);

            const h1 = document.createElement('h1');
            h1.className = 'mb-4 mt-3';
            h1.innerHTML = item.title;
            h1.setAttribute('data-api', `OlmaTechData.home.title[${i}]`);

            const p = document.createElement('p');
            p.textContent = item.description;
            p.setAttribute('data-api', `OlmaTechData.home.description[${i}]`);
            i++;
            text.appendChild(subheading);
            text.appendChild(h1);
            text.appendChild(p);

            textDiv.appendChild(text);
            row.appendChild(imgDiv);
            row.appendChild(textDiv);
            container.appendChild(row);
            sliderItem.appendChild(overlay);
            sliderItem.appendChild(container);
            homeSlider.appendChild(sliderItem);
        });

        section.appendChild(h3);
        section.appendChild(homeSlider);

        return section;
    } catch (error) {
        console.error('Error creating home section:', error);
        throw error;
    }
}


async function renderHomeSection() {
    try {
        const section = createHomeSection();
        document.body.appendChild(section);
        const savedLanguage = localStorage.getItem("olma-tech-langauge-code") || 'en';
        setLanguage(savedLanguage);
    } catch (error) {
        console.error('Error rendering home section:', error);
    }
}

renderHomeSection();