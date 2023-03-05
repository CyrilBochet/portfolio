import {Fancybox} from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


const navbarToggler = $('.navbar-toggler');
const navbarCollapse = $('#navbarCollapse');

navbarToggler.on('click', function () {
    navbarCollapse.toggleClass('show');
});


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

$.getJSON('dist/docs/projects.json', function (projects) {
    $(document).ready(function () {
        $('#age').html(getAge('1998/10/22'));
        $('#year').html(new Date().getFullYear());

        const projectsGallery = $('#projects-gallery');
        let btnDetailsText = $('#btn-details-text').text();

        for (let i = 0; i < projects.length; i++) {

            const card = ` <div class="col-lg-4 col-md-6 col-sm-6 col-12 mb-5" data-project-type="${projects[i]["type"]}">
                        <div class="card">
                            <div class="card-body p-0 surface">
                                <img class="img-fluid card-img"
                                     src="dist/images/projets/miniatures/${projects[i]["miniature"]}" alt="">
                            </div>
                            <div class="card-body on-surface-text surface">
                                <div class="title-large mb-4">${projects[i]["titre"]}</div>
                            </div>
                        </div>
                    </div>`;
            const cardElement = $(card);
            cardElement.find('div.card-body.on-surface-text').append($('<a>').addClass('btn btn-tertiary')
                .attr('data-project-id', projects[i]["id"])
                .attr('data-bs-toggle', 'offcanvas')
                .attr('data-bs-target', '#offcanvasProject')
                .attr('aria-controls', 'offcanvasProject')
                .attr('data-i18n', 'form.btn.details')
                .text(btnDetailsText)
                .click(function (event) {
                    getProject(event, projects[i]["id"]);
                }));
            $(projectsGallery).append(cardElement);
        }


    });

    function getProject(e, projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        const {description, titre, tag, images} = project;

        $('#project-description').html(description);
        $('#project-title').text(titre);
        $('#project-tags').empty();
        $('#project-images').empty();

        const tagsHtml = tag.map(t => `<span class="badge badge-project me-2">#${t}</span>`).join('');
        $('#project-tags').html(tagsHtml);

        const imagesHtml = images.map((img, index) => `
        <a href="dist/images/projets/illustrations/${img}">
            <img class="img-fluid img-project" src="dist/images/projets/illustrations/${img}" data-fancybox="project-${projectId}" data-caption="${titre} - ${index + 1}">
        </a>
    `).join('');
        $('#project-images').html(imagesHtml);

        // Initialize Fancybox

        Fancybox.bind('[data-fancybox=project-' + projectId + ']', {
            // Toolbar: {
            //     display: [ "close"],
            // },
        });
    }


});


