import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

i18next
    .use(Backend)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    }, function (err, t) {
        console.log(i18next.lang)
        // Callback appelé lorsque le chargement des fichiers de traduction est terminé
        if (err) return console.error(err);
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = i18next.t(key);
            el.textContent = value;
        });
    });

document.addEventListener("DOMContentLoaded", function () {


// récupération du bouton du sélecteur de langue
    const languageSelectorButton = document.getElementById('language-selector-button');

// récupération du menu déroulant du sélecteur de langue
    const languageSelectorMenu = document.getElementById('language-selector-menu');

// ajout d'un écouteur d'événement aux éléments du menu déroulant
    const languageSelectorItems = languageSelectorMenu.getElementsByTagName('button');
    for (let i = 0; i < languageSelectorItems.length; i++) {
        languageSelectorItems[i].addEventListener('click', function () {
            // récupération de la langue sélectionnée
            const language = this.dataset.language;

            // changement de la langue de l'application
            i18next.changeLanguage(language, function (err, t) {
                if (err) {
                    console.error(err);
                } else {
                    // mise à jour de l'affichage du sélecteur de langue
                    document.getElementById('language-selector-value').textContent = language;
                    // mise à jour de la page avec les traductions de la nouvelle langue
                    updateTranslations();
                }
            });

            // masquage du menu déroulant
            languageSelectorMenu.classList.remove('show');
        });
    }

// fonction pour mettre à jour les traductions sur la page
    function updateTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            const key = element.dataset.i18n;
            let options = {};
            if (element.dataset.i18nOptions) {
                options = JSON.parse(element.dataset.i18nOptions);
            }
            element.textContent = i18next.t(key, options);
        });
    }
});