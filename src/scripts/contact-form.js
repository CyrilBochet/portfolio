window.onload = function() {
    var el = document.getElementById('g-recaptcha-response');
    if (el) {
        el.setAttribute('required', 'required');
    }
}
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("contact-form");
    var button = document.getElementById("contact-form-button");
    var status = document.getElementById("contact-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.setAttribute("disabled", "true");
        status.classList.remove("alert-danger");
        status.classList.add("alert-success");
        status.innerHTML = "Merci pour votre message !";
        status.style.display = 'block';
    }

    function error(statusCode) {
        status.classList.remove("alert-success");
        status.classList.add("alert-danger");
        if (statusCode === 401) {
            status.innerHTML = "La vérification reCAPTCHA a échoué. Veuillez réessayer.";
        } else if (statusCode === 403) {
            status.innerHTML = "Le serveur a refusé la demande. Veuillez réessayer plus tard.";
        } else if (statusCode === 500) {
            status.innerHTML = "Une erreur s'est produite sur le serveur. Veuillez réessayer plus tard.";
        } else {
            status.innerHTML = "Oups ! Une erreur est survenue.. 😅";
        }
        status.style.display = 'block';
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
