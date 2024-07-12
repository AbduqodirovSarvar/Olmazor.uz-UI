const languageKey = "olma-tech-langauge-code";

async function getTranslatedTexts(){
    let languageCode = localStorage.getItem(languageKey) ?? "ru";
    const response = await fetch(`/resource/${languageCode}.json`);
    if (!response.ok) {
        throw new Error(`Failed to fetch translations for language code: ${languageCode}`);
    }
    return response.json();
}

function setLanguage(language) {
    fetch(`/resource/${language}.json`)
        .then(response => response.json())
        .then((translations) => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                const keys = key.split('.');
                let value = translations;
                keys.forEach(k => {
                    if (value[k]) {
                        value = value[k];
                    } else {
                        value = null;
                    }
                });
                if (value) {
                    element.textContent = value;
                }
            });
            const dropdownButton = document.querySelector('#dropdownMenuButton span');
            if (translations['navbar'] && translations['navbar']['language']) {
                dropdownButton.textContent = translations['navbar']['language'];
            }
        })
        .catch(error => console.error('Error loading language file:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem(languageKey) || 'en';
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