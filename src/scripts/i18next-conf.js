import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en', 'es'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
    }, function (err, t) {
        // Callback appelé lorsque le chargement des fichiers de traduction est terminé
        if (err) return console.error(err);
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = i18next.t(key);
            // Remplace les "\n" par des balises <br>
            el.innerHTML = value.replace(/\n/g, '<br>');
        });
    });

document.addEventListener("DOMContentLoaded", function () {

    const languageSelectorMenu = document.getElementById('language-selector-menu');
    const languageSelectorMenuMobile = document.getElementById('language-selector-menu-mobile');

    function changeLanguage(language) {
        i18next.changeLanguage(language, function (err, t) {
            if (err) {
                console.error(err);
            } else {
                document.getElementById('language-selector-value').textContent = language;
                updateTranslations();
            }
        });
    }

    [...languageSelectorMenu.getElementsByTagName('button'), ...languageSelectorMenuMobile.getElementsByTagName('button')].forEach(button => {
        button.addEventListener('click', () => {
            const language = button.dataset.language;
            changeLanguage(language);
            button.closest('.dropdown-menu').classList.remove('show');
        });
    });

    function updateTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            const key = element.dataset.i18n;
            let options = {};
            if (element.dataset.i18nOptions) {
                options = JSON.parse(element.dataset.i18nOptions);
            }
            element.innerHTML = i18next.t(key, options).replace(/\n/g, '<br>');
        });
    }
});
