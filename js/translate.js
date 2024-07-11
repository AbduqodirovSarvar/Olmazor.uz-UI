const languageKey = "olma-tech-langauge-code";

function setLanguage(language) {
    fetch(`/resource/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[key]) {
                    element.textContent = translations[key];
                }
            });
            document.querySelector('#dropdownMenuButton span').textContent = translations['navbar.language'];
        })
        .catch(error => console.error('Error loading language file:', error));
}

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
