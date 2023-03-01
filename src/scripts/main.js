// Calculate age
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


//Filter portfolio
$(document).ready(function () {


    $('#age').html(getAge('1998/10/22'));
    $('#year').html(new Date().getFullYear());


    let projects = [
        {
            "id": 1,
            "titre": "Multi sites Magento",
            "description": "Amélioration et mise à jour de 3 sites e-commerce sur Magento. \n" +
                "Paramétrage de modules et amélioration de l'expérience utilisateur",
            "miniature": "assets/img/projects/miniature/miniature-multisite.jpg",
            "images": ["assets/img/projects/image/multi-site-1.jpg", "assets/img/projects/image/multi-site-2.jpg"],
            "tag": ["MAGENTO", "MULTISITE"],
            "filter": "web",
        },
        {
            "id": 2,
            "titre": "Bloc-notes",
            "description": "Le projet consistait a créer un bloc-notes en C# avec Windows Form.\n" +
                "L’application permet d'ouvrir ou de créer un fichier texte modifiable, et de l'enregistrer. \nLe bloc-notes dispose d'un compteur de caractères.",
            "miniature": "assets/img/projects/miniature/miniature-blocnote.jpg",
            "images": ["assets/img/projects/image/bloc-notes-1.jpg"],
            "tag": ["CSHARP", "WINFORM"],
            "filter": "logiciel",
        },
        {
            "id": 3,
            "titre": "Newsletters programmées : Mailchimp\n",
            "description": "Création de newsletters programmées sur Mailchimp et retouche des photos des produits sur Photoshop.\n",
            "miniature": "assets/img/projects/miniature/miniature-mailchimp.gif",
            "images": ["assets/img/projects/image/mailchimp-1.gif"],
            "tag": ["MAILING", "MAILCHIMP", "PHOTOSHOP"],
            "filter": "web",
        },
        {
            "id": 4,
            "titre": "Site web réalisé sur WordPress\n",
            "description": "Site Wordpress réalisé selon les demandes du client. " +
                "Le site comprenait les dates des campagnes, les photos, et les événements importants de la campagne du candidat.\n" +
                "Il y avait également le fil d'actualité Twitter intégré sur le site.",
            "miniature": "assets/img/projects/miniature/miniature-wordpress.jpg",
            "images": ["assets/img/projects/image/institu-wordpress-1.jpeg"],
            "tag": ["WORDPRESS"],
            "filter": "web",
        },
        {
            "id": 6,
            "titre": "Application android - Lazy Garden\n",
            "description": "Des capteurs disposés sur un pot de fleurs récoltent des données et les envoient dans le cloud. " +
                "L'application Lazy Garden récupère et analyse en direct les données depuis le cloud et affiche un message en fonction des besoins en eau et en lumière de la plante. " +
                "L'application affiche aussi un message en fonction de la température ambiante. Les images changent en fonction de l'état de la plante.",
            "miniature": "assets/img/projects/miniature/miniature-lazy.jpg",
            "images": ["assets/img/projects/image/lazy-garden-1.jpg", "assets/img/projects/image/lazy-garden-2.jpg", "assets/img/projects/image/lazy-garden-3.jpg"],
            "tag": ["ANDROID", "MOBILE", "FIREBASE"],
            "filter": "mobile",
        },
        {
            "id": 7,
            "titre": "Gestionnaire de commandes\n",
            "description": "Logiciel permettant de gérer le statut des commandes\n" +
                "(payée, expédiée) et de générer un PDF récapitulatif d'une commande sélectionnée.\n",
            "miniature": "assets/img/projects/miniature/miniature-menagelec.jpg",
            "images": ["assets/img/projects/image/gestion-commande-1.jpg"],
            "tag": ["CSHARP", "WINFORM"],
            "filter": "logiciel",
        },
        {
            "id": 8,
            "titre": "Module PrestaShop \n",
            "description": "Module PrestaShop qui permet de gérer plusieurs fournisseurs avec plusieurs prix d'achat pour les produits du catalogue. \n" +
                "Il est possible d'activer ou de désactiver les fournisseurs, et de les classer par ordre de priorité.\n" +
                "Une fonctionnalité d'automatisation a également été développée afin d'activer automatiquement le produit qui correspond le plus aux critères suivant : \n - Produit avec le meilleur prix. \n - Produit avec le plus grand stock disponible.  \n - Produit avec le founisseur ayant la plus haute priorité." +
                "\nCompatible pour la version 1.7.x de Prestashop.",
            "miniature": "assets/img/projects/miniature/miniature-dropship.jpg",
            "images": ["assets/img/projects/image/dropship-1.jpg", "assets/img/projects/image/dropship-2.jpg", "assets/img/projects/image/dropship-3.jpg", "assets/img/projects/image/dropship-4.jpg"],
            "tag": ["PHP", "PRESTASHOP", "SYMFONY"],
            "filter": "web",
        },
        {
            "id": 9,
            "titre": "Bingo\n",
            "description": "Logiciel simulant une partie de Bingo. \n" +
                "Vous sélectionnez tout d'abord le nombre de joueurs (de 2 à 4 joueurs) et saisissez leurs noms.\n" +
                "Après avoir cliquer sur \"Jouer !\" on vous propose de lire les règles. \n" +
                "Une fois dans le jeu, vous pouvez cliquer sur \"Lancer la roue\" pour tirer un numéro aléatoirement. \n" +
                "Si le numéro se trouve sur la grille d'un joueur, il doit cliquer dessus pour le valider. \n" +
                "Le gagnant est celui qui valide une ligne en premier.",
            "miniature": "assets/img/projects/miniature/miniature-bingo.jpg",
            "images": ["assets/img/projects/image/bingo-1.jpg", "assets/img/projects/image/bingo-2.jpg", "assets/img/projects/image/bingo-3.jpg"],
            "tag": ["CSHARP", "WINFORM"],
            "filter": "logiciel",
        }, {
            "id": 10,
            "titre": "Comparateur de contrats d'assurance\n",
            "description": "Application web qui permet de comparer des contrats d'assurance.\n" +
                "L'application fait appel à plusieurs API afin de récupérer les contrats et les tarifications de différentes compagnies d'assurance. Ces tarifs varient selon les données saisies dans le dossier du client.",
            "miniature": "assets/img/projects/miniature/miniature-assurance.jpg",
            "images": ["assets/img/projects/image/comparateur-1.jpg"],
            "tag": ["SYMFONY4", "PHP", "API"],
            "filter": "web",
        },
        {
            "id": 11,
            "titre": "Galerie photo\n",
            "description": "Espace de partage de photos sous forme de galeries.\n" +
                "Un utilisateur peut s'inscrire, télécharger des photos dans sa galerie personnelle, et les publier à la vue de tous.\n" +
                "La page d'accueil du site présente une galerie photo aléatoire parmi toutes les galeries du site.",
            "miniature": "assets/img/projects/miniature/miniature-galerie.jpg",
            "images": ["assets/img/projects/image/galerie-1.jpg", "assets/img/projects/image/galerie-2.jpg", "assets/img/projects/image/galerie-3.jpg", "assets/img/projects/image/galerie-4.jpg", "assets/img/projects/image/galerie-5" +
            ".jpg"],
            "tag": ["SYMFONY4", "PHP"],
            "filter": "web",
        },
    ]

});


