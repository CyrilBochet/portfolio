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

    setTimeout(function () {
        $("#missions").isotope('shuffle');
        $(".loader").fadeOut("fast");
    }, 1000);


    document.getElementById('age').innerHTML = getAge('1998/10/22');

    let $container = $('#missions');

    $('#filters button').click(function () {
        let selector = $(this).attr('data-filter');
        $container.isotope({filter: selector});
        $container.isotope('shuffle');
        return false;
    });

    $(".filter-button").click(function () {
        if ($(".filter-button").removeClass("active")) {
            $(this).removeClass("active");
        }
        $(this).addClass("active");
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not(value).hide('3000');
            $('.filter').filter(value).show('3000');

        }
    });


    let projects = [
        {
            "id": 1,
            "titre": "Multi sites Magento",
            "description": "Amélioration et mise à jour de 3 sites e-commerce sur Magento. \n" +
                "Paramétrage de modules et amélioration de l'expérience utilisateur",
            "miniature": "assets/img/projects/miniature/miniature-multisite.jpg",
            "images": ["assets/img/projects/image/multi-site-1.jpg", "assets/img/projects/image/multi-site-2.jpg"],
            "duree": "1",
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
            "duree": "2",
            "tag": ["CSHARP", "WINFORM"],
            "filter": "logiciel",
        },
        {
            "id": 3,
            "titre": "Newsletters programmées : Mailchimp\n",
            "description": "Création de newsletters programmées sur Mailchimp et retouche des photos des produits sur Photoshop.\n",
            "miniature": "assets/img/projects/miniature/miniature-mailchimp.gif",
            "images": ["assets/img/projects/image/mailchimp-1.gif"],
            "duree": "2",
            "tag": ["MAILING", "MAILCHIMP", "PHOTOSHOP"],
            "filter": "web",
        },
        {
            "id": 4,
            "titre": "Site web réalisé sur WordPress\n",
            "description": "Site Wordpress réalisé selon les demandes du client. " +
                "Le site comprenait les dates des campagnes, les photos, et les événements importants de la campgne du candidat.\n" +
                "Il y avait également le fil d'actualité Twitter intégré sur le site.",
            "miniature": "assets/img/projects/miniature/miniature-wordpress.jpg",
            "images": ["assets/img/projects/image/institu-wordpress-1.jpeg"],
            "duree": "2",
            "tag": ["WORDPRESS"],
            "filter": "web",
        },
        // {
        //     "id": 5,
        //     "titre": "Application web de gestion de contacts\n",
        //     "description": "Application web pour gérer des contacts.\n" +
        //         "L’application permet l’ajout, la modification, la suppression et l'affichage des contacts stockés en base de données.\n" +
        //         "Les contacts sont caractérisés par plusieurs informations dont une photo de profil.\n" +
        //         "L’application disposait d’un système d’authentification.\n",
        //     "miniature": "assets/img/projects/miniature/miniature-contact.jpg",
        //     "images": ["assets/img/projects/image/gestion-contact-1.jpg"],
        //     "duree": "2",
        //     "tag": ["PHP", "SQL"],
        //     "filter": "web",
        // },
        {
            "id": 6,
            "titre": "Application android - Lazy Garden\n",
            "description": "Des capteurs disposés sur un pot de fleurs récoltent des données et les envoient dans le cloud. " +
                "L'application Lazy Garden récupère et analyse en direct les données depuis le cloud et affiche un message en fonction des besoins en eau et en lumière de la plante. " +
                "L'application affiche aussi un message en fonction de la température ambiante. Les images changent en fonction de l'état de la plante.",
            "miniature": "assets/img/projects/miniature/miniature-lazy.jpg",
            "images": ["assets/img/projects/image/lazy-garden-1.jpg", "assets/img/projects/image/lazy-garden-2.jpg", "assets/img/projects/image/lazy-garden-3.jpg"],
            "duree": "2",
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
            "duree": "2",
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
            "duree": "2",
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
            "duree": "2",
            "tag": ["CSHARP", "WINFORM"],
            "filter": "logiciel",
        }, {
            "id": 10,
            "titre": "Comparateur de contrats d'assurance\n",
            "description": "Application web qui permet de comparer des contrats d'assurance.\n" +
                "L'application fait appel à plusieurs API afin de récupérer les contrats et les tarifications de différentes compagnies d'assurance. Ces tarifs varient selon les données saisies dans le dossier du client.",
            "miniature": "assets/img/projects/miniature/miniature-assurance.jpg",
            "images": ["assets/img/projects/image/comparateur-1.jpg"],
            "duree": "2",
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
            "duree": "2",
            "tag": ["SYMFONY4", "PHP"],
            "filter": "web",
        },
    ]


    $('#missionModal').on('show.bs.modal', function (e) {

        var pId = $(e.relatedTarget).data('project-id');

        for (let i = 0; i < projects.length; i++) {
            if (pId == projects[i]["id"]) {
                var pDesc = projects[i]["description"];
                var pTitre = projects[i]["titre"];
                var pTags = projects[i]["tag"];
                var pDuree = projects[i]["duree"];
                var pFilter = projects[i]["filter"];
                var pMinia = projects[i]["miniature"];
                var pImages = projects[i]["images"];
            }
        }
        $('#mission-description').text(pDesc);
        $('#mission-titre').text(pTitre);
        $('#mission-tags').empty();
        $('#mission-images').empty();

        for (let i = 0; i < pTags.length; i++) {
            var div = document.createElement('div');
            var element = "<span class=\"badge badge-dark\">#" + pTags[i] + "</span>"
            div.innerHTML = element;
            $('#mission-tags').append(div);
        }
        for (var i = 0; i < pImages.length; i++) {

            $("#mission-images").append('<a href="' + pImages[i] + '"><img class="img-fluid" style="max-width: 100px; max-height: 80px;min-height: 80px;padding: 3px;margin:3px;background-color: #f4623a8a;" src="' + pImages[i] +
                '"></a>');
        }

    });
    $container.isotope()


    createProjects(projects);

});


//projects
function createProjects(projects) {


    for (let i = 0; i < projects.length; i++) {


        let element = '\n' +
            '                    <a onclick="loadGallery()" class="portfolio-box" data-toggle="modal" href="1" data-project-id="' + projects[i]["id"] + '" data-target="#missionModal"\n' +
            '                       data-project-description=" ' + projects[i]["description"] + '"\n' +
            '                       data-project-title=" ' + projects[i]["titre"] + '">\n' +
            '                        <img class="img-fluid" style="padding: 5px;"\n' +
            '                             src="' + projects[i]["miniature"] + '"\n' +
            '                             alt="">\n' +
            '                        <div class="portfolio-box-caption">\n' +
            '                            <div class="project-category text-white-50">\n' +
            '                            </div>\n' +
            '                            <div class="project-name">\n' +
            '                                ' + projects[i]["titre"] + '\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </a>\n'
        ;


        var div = document.createElement('div');
        div.className = 'col-lg-4 col-sm-6 mission ' + projects[i]["filter"];
        div.innerHTML = element;

        $("#missions").append(div)
            .isotope('appended', div).isotope('shuffle');
    }


}


function loadGallery() {
    setTimeout(function () {
        baguetteBox.run('.gallery')
    }, 200);

}