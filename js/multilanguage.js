document.addEventListener('DOMContentLoaded', function () {
    let currentLang = 'ru';
  
    function changeLanguage(lang) {
      fetch(`${lang}.json`)
        .then(response => response.json())
        .then(data => {
          document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (data[key]) {
              element.textContent = data[key];
            }
          });
        })
        .catch(error => console.error('Error loading language file', error));
    }

    changeLanguage(currentLang);

    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
      languageSelector.addEventListener('change', function () {
        currentLang = this.value;
        changeLanguage(currentLang);
      });
    }
  });
  