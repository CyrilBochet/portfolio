import CookieConsent from "vanilla-cookieconsent/dist/cookieconsent.umd";

document.addEventListener("DOMContentLoaded", function () {
    CookieConsent.run({
        onConsent: ({cookie}) => {
            $('.btn-cookie').removeClass('d-none');
        },
        onModalShow: ({modalName}) => {
            $('.btn-cookie').addClass('d-none');
        },
        onModalHide: ({modalName}) => {
            $('.btn-cookie').removeClass('d-none');
        },
        onChange: ({cookie, changedCategories, changedServices}) => {
            let categories = cookie.categories;
            if(!categories.includes("analytics")){
                window.location.reload();
            }
        },
        categories: {
            necessary: { enabled: true, readOnly: true },
            analytics: { enabled: false, readOnly: false }
        },
        language: {
            default: 'fr',
            translations: {
                fr: {
                    consentModal: {
                        title: 'Votre confidentialité, votre choix 🍪',
                        description: "Hello ! Ce site utilise des cookies fonctionner correctement et améliorer votre expérience. Acceptez tout ou personnalisez vos préférences !",
                        acceptAllBtn: 'Tout accepter',
                        // acceptNecessaryBtn: 'Refuser les cookies optionnels',
                        showPreferencesBtn: 'Personnaliser mes choix'
                    },
                    preferencesModal: {
                        title: 'Gérez vos préférences en matière de cookies',
                        acceptAllBtn: 'Tout accepter',
                        acceptNecessaryBtn: 'Refuser les cookies optionnels',
                        savePreferencesBtn: 'Enregistrer mes choix',
                        closeIconLabel: 'Fermer la pop-up',
                        sections: [
                            {
                                title: "Pourquoi des cookies ? 🍪",
                                description: "Ici, vous pouvez choisir les types de cookies que vous souhaitez activer. Vous avez le contrôle total !"
                            },
                            {
                                title: 'Cookies essentiels',
                                description: "Ces cookies sont nécessaires au bon fonctionnement du site. Vous ne pouvez pas les désactiver, sinon certaines fonctionnalités ne marcheront plus correctement.",
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Cookies de mesure d’audience',
                                description: "Ces cookies me permettent de mieux comprendre comment vous utilisez mon site et d'améliorer votre expérience. Toutes les données sont anonymisées.",
                                linkedCategory: 'analytics'
                            },
                            {
                                title: "En savoir plus",
                                description: "Vos données sont traitées conformément aux règles du RGPD. Consultez ma <a class='text-decoration-none' href='https://cyril-bochet.dev/mentions-legales.html'><span class='font-weight-bold'>politique de confidentialité</span></a> pour plus d’infos."
                            }
                        ]
                    }
                }
            }
        }
    });
});
