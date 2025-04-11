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

let projects;
$.getJSON('dist/docs/projects.json', function (projectsJson) {
    // projects = projectsJson.sort(function () {
    //     return 0.5 - Math.random()
    // });
    projects = projectsJson.reverse();
    processJson();

});

function processJson() {
    $(document).ready(function () {
        const projectsGallery = $('#projects-gallery');
        projectsGallery.empty();
        let btnDetailsText = $('#btn-details-text').text();

        let langPreference = localStorage.getItem('i18nextLng');
        const lang = $('#language-selector-value').text();
        let titleKey = `titre-${lang}`;

        if (langPreference !== undefined) {
            titleKey = `titre-${langPreference}`;
        }

        for (let i = 0; i < projects.length; i++) {
            const pathProject = 'dist/images/projets/' + projects[i]["id"] + '/' + projects[i]["miniature"];
            const card = `
                <div class="col-lg-4 col-md-6 col-sm-6 col-12 mb-5" data-project-type="${projects[i]["type"]}">
                    <div class="card">
                        <div class="card-body p-0 surface">
                            <img class="img-fluid card-img" width="408" height="379" 
                                src="${pathProject}_w408.webp"
                                alt="projet ${projects[i][titleKey]} / ${projects[i]["miniature"]}">
                        </div>
                        <div class="card-body on-surface-text surface">
                            <div class="title-large mb-4">${projects[i][titleKey]}</div>
                        </div>
                    </div>
                </div>`;
            const cardElement = $(card);
            const button = $('<button>').addClass('btn btn-tertiary')
                .attr('data-project-id', projects[i]["id"])
                .attr('data-bs-toggle', 'offcanvas')
                .attr('data-bs-target', '#offcanvasProject')
                .attr('aria-controls', 'offcanvasProject')
                .attr('data-i18n', 'form.btn.details')
                .text(btnDetailsText)
                .click(function (event) {
                    getProject(event, projects[i]["id"]);
                });
            cardElement.find('div.card-body.on-surface-text').append(button);
            $(projectsGallery).append(cardElement);
        }
    });

    function getProject(e, projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        let langPreference = localStorage.getItem('i18nextLng');
        const lang = $('#language-selector-value').text();

        let descriptionKey = `description-${lang}`;
        let titleKey = `titre-${lang}`;

        if (langPreference !== undefined) {
            titleKey = `titre-${langPreference}`;
            descriptionKey = `description-${langPreference}`;
        }

        const description = project[descriptionKey];
        const titre = project[titleKey];
        const date = project["date"];
        const tag = project["tag"];
        const media = project["images"];
        const videoExtensions = ['.mp4', '.webm', '.ogg'];

        $('#project-description').html(description);
        $('#project-title').text(titre);
        $('#project-date').empty();
        $('#project-tags').empty();
        $('#project-images').empty();

        const tagsHtml = tag.map(t => `<span class="badge badge-project me-2">#${t}</span>`).join('');
        $('#project-tags').html(tagsHtml);
        $('#project-date').html(`<span class="badge badge-date me-2">${date}</span>`);

        const mediaHtml = media.map((item, index) => {
            const isVideo = videoExtensions.some(ext => item.toLowerCase().endsWith(ext));
            const path = `dist/images/projets/${projectId}/${item}`;

            if (isVideo) {
                return `
        <a href="${path}" data-fancybox="project-${projectId}" data-caption="${titre} - Vidéo ${index + 1}">
            <video class="img-fluid img-project" muted autoplay loop playsinline>
                <source src="${path}" type="video/${item.split('.').pop()}">
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>
        </a>`;
            } else {
                return `
        <a href="${path}" data-fancybox="project-${projectId}" data-caption="${titre} - Image ${index + 1}">
            <img class="img-fluid img-project" src="${path}">
        </a>`;
            }
        }).join('');
        $('#project-images').html(mediaHtml);

        Fancybox.bind('[data-fancybox=project-' + projectId + ']', {});
    }
}


$(document).ready(function () {
    $('#age').html(getAge('1998/10/22'));
    $('#year').html(new Date().getFullYear());

    $('#language-selector-menu button, #language-selector-menu-mobile button').on('click', function () {
        $('#projects-gallery').html();
        processJson();
    });

    $("#navbarCollapse .navbar-nav .nav-item, #language-selector-menu-mobile .dropdown-item").on('click', function () {
        $('.navbar-toggler').trigger("click");
    });

    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        var currentScrollTop = window.scrollY || document.documentElement.scrollTop;
        if (currentScrollTop > lastScrollTop) {
            document.querySelector(".navbar").classList.add("navbar-hidden");
        } else {
            document.querySelector(".navbar").classList.remove("navbar-hidden");
        }
        lastScrollTop = currentScrollTop;
    });

});
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    const star = document.querySelector(".star");

    let angleCircle = 0;
    let angleStar = 0;

    // Appliquer scale(0) initialement
    circles.forEach(circle => {
        circle.style.transform = "scale(0) translate(-50%, -50%)";
    });
    star.style.transform = "scale(0) translate(-50%, -50%)";

    // Effet de grossissement après 500ms
    setTimeout(() => {
        circles.forEach(circle => {
            circle.style.transition = "transform 0.6s ease-out";
            circle.style.transform = "scale(1) translate(-50%, -50%)"; // Effet de grossissement
        });

        star.style.transition = "transform 0.6s ease-out";
        star.style.transform = "scale(1) translate(-50%, -50%)"; // Effet de grossissement

        // Démarrer les animations après l'effet de grossissement
        setTimeout(() => {
            function animateCircles() {
                angleCircle += 0.005;

                circles.forEach((circle, index) => {
                    const speed = (index + 1) * 0.4;
                    const amplitude = 60;
                    const offsetX = Math.sin(angleCircle * speed) * amplitude;
                    const offsetY = Math.cos(angleCircle * speed) * amplitude;

                    circle.style.transform = `scale(1) translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
                });

                requestAnimationFrame(animateCircles);
            }

            function rotateStar() {
                angleStar += 0.1;
                star.style.transform = `scale(1) translate(-50%, -50%) rotate(${angleStar}deg)`;
                requestAnimationFrame(rotateStar);
            }

            animateCircles();
            rotateStar();
        }, 400); // Attendre la fin de l'animation de grossissement
    }, 300);
});