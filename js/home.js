async function createHomeSection() {
    
    const data = await fetchData();

    // Create the section element
    const section = document.createElement('section');
    section.id = 'home-section';
    section.className = 'hero';
    // console.log(translations['home.welcome']);

    // Create the rest of the HTML structure
    // if(translations.length>0){
    //     console.log(translations['home.welcome']);
    //     const h3 = document.createElement('h3');
    //     h3.className = 'vr';
    //     h3.textContent = "123";
    // }
    const homeSlider = document.createElement('div');
    homeSlider.className = 'home-slider js-fullheight owl-carousel';

    data.items.forEach(item => {
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

        const subheading = document.createElement('span');
        subheading.className = 'subheading';
        subheading.textContent = 'Welcome to OlmaTech';

        const h1 = document.createElement('h1');
        h1.className = 'mb-4 mt-3';
        h1.innerHTML = item.title;

        const p = document.createElement('p');
        p.textContent = item.description;

        // const button = document.createElement('a');
        // button.href = '#';
        // button.className = 'btn btn-primary px-5 py-3 mt-3';
        // button.textContent = 'Get in touch';

        // Append elements to their respective parents
        imgDiv.appendChild(imgOverlay);
        text.appendChild(subheading);
        text.appendChild(h1);
        text.appendChild(p);
        //text.appendChild(button);
        textDiv.appendChild(text);
        row.appendChild(imgDiv);
        row.appendChild(textDiv);
        container.appendChild(row);
        sliderItem.appendChild(overlay);
        sliderItem.appendChild(container);
        homeSlider.appendChild(sliderItem);
    });
// if(translations.length>0){ 
//     section.appendChild(h3);
// }
const h3 = document.createElement('h3');
    h3.className = 'vr';
    h3.textContent = data.translates['home.welcome'];
    section.appendChild(h3);
section.appendChild(h3);
    section.appendChild(homeSlider);
    return section;
}

async function fetchData() {
    let arrays= [
        {
            title: "Small Details Make A Big Impression",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
            photo: "images/bg_1.jpg"
        },
        {
            title: "Strategic Design And Technology Agency",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
            photo: "images/bg_2.jpg"
        },
        {
            title: "Test small river",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
            photo: "images/bg_1.jpg"
        },
    ];
    let translate=await getTranslations();
    let data={
        items: arrays,
        translates: translate
    }
    return data
    // Example data, replace this with your API call
    
}
async function getTranslations(){
    let languageCode = localStorage.getItem(languageKey) ?? "ru";
    const response = await fetch(`../resource/${languageCode}.json`);
    return response.json();
}

async function renderHomeSection() {
    const section = await createHomeSection();
    document.body.appendChild(section);
}

renderHomeSection();