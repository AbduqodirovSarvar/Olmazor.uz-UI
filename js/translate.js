const languageKey = "olma-tech-language-code";

// Function to update text and data content based on language
function updateContent(translations, language) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = key.split('.').reduce((obj, i) => obj && obj[i], translations);
        if (value) {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const text = key.split('.').reduce((obj, i) => obj && obj[i], translations);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = text;
            } else {
                element.textContent = text;
            }
        }
    });

    document.querySelectorAll('[data-api]').forEach(element => {
        const key = element.getAttribute('data-api');
        let value = null;

        const match = key.match(/([a-zA-Z0-9._]+)\[(\d+)\]/);  // Match keys with indices like OlmaTechData.projects.name[0]

        if (match) {
            const baseKey = match[1];
            const index = parseInt(match[2], 10);

            switch (baseKey) {
                // Projects
                case 'OlmaTechData.projects.name':
                    value = OlmaTechData.projects[index]?.name?.[language];
                    break;
                case 'OlmaTechData.projects.description':
                    value = OlmaTechData.projects[index]?.description?.[language];
                    break;
                case 'OlmaTechData.services.name':
                    value = OlmaTechData.services[index]?.name?.[language];
                    break;
                case 'OlmaTechData.services.description':
                    value = OlmaTechData.services[index]?.description?.[language];
                    break;
                case 'OlmaTechData.home.subtitle':
                    value = OlmaTechData.home[index]?.subtitle?.[language];
                    break;
                case 'OlmaTechData.home.description':
                    value = OlmaTechData.home[index]?.description?.[language];
                    break;
                case 'OlmaTechData.home.title':
                    value = OlmaTechData.home[index]?.title?.[language];
                    break;
                case 'OlmaTechData.blogs.title':
                    value = OlmaTechData.blogs[index]?.title?.[language];
                    break;
                case 'OlmaTechData.blogs.description':
                    value = OlmaTechData.blogs[index]?.description?.[language];
                    break;
                default:
                    console.log(baseKey, "DEFAULT");
                    break;
            }
        } else {
            switch (key) {
                // About
                case 'OlmaTechData.about.title':
                    value = OlmaTechData.about.title?.[language];
                    break;
                case 'OlmaTechData.about.description':
                    value = OlmaTechData.about.description?.[language];
                    break;
                case 'OlmaTechData.about.descriptionFooter':
                    value = OlmaTechData.about?.descriptionFooter?.[language];
                    break;
                case 'OlmaTechData.about.address':
                    value = OlmaTechData.about.address?.[language];
                    break;
                default:
                    console.log(key, "DEFAULT");
                    break;
            }
        }

        if (value) {
            element.textContent = value;
        }
    });
}

// Function to set the language and fetch translations
function setLanguage(language) {
    document.getElementById('loader').style.display = 'block';

    fetch(`/resource/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            updateContent(translations, language);

            const dropdownButton = document.querySelector('#dropdownMenuButton span');
            if (translations['navbar'] && translations['navbar']['language']) {
                dropdownButton.textContent = translations['navbar']['language'];
            }

            // Store the selected language in localStorage
            localStorage.setItem(languageKey, language);

            // Hide loader
            document.getElementById('loader').style.display = 'none';
        })
        .catch(error => {
            console.error('Error loading language file:', error);
            // Hide loader in case of error
            document.getElementById('loader').style.display = 'none';
        });
}

// Load the saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem(languageKey) || 'ru';
    setLanguage(savedLanguage);

    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedLanguage = item.getAttribute('onclick').split("'")[1];
            localStorage.setItem(languageKey, selectedLanguage);
            setLanguage(selectedLanguage);
        });
    });
});
