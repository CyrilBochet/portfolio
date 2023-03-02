$(document).ready(function () {

    const link = document.querySelector('link[href="dist/css/material-theme/theme.light.css"]');
    const lightSymbol = $('#light-symbol');
    const darkSymbol = $('#dark-symbol');

// Get a reference to the button or toggle switch that toggles between light and dark mode
    var modeToggle = document.querySelector('#mode-toggle');

// Check if the user has previously set a preference for light or dark mode
    var modePreference = localStorage.getItem('modePreference');

// If the user has previously set a preference, update the UI to reflect the preference
    if (modePreference === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }

// Add an event listener to the button or toggle switch
    modeToggle.addEventListener('click', function () {
        // Toggle the mode preference between light and dark
        if (modePreference === 'dark') {
            modePreference = 'light';
        } else {
            modePreference = 'dark';
        }

        // Update the UI to reflect the new preference
        if (modePreference === 'dark') {
            enableDarkMode();
        } else {
            enableLightMode();
        }

        // Store the new preference in localStorage
        localStorage.setItem('modePreference', modePreference);
    });

    function enableDarkMode() {
        link.href = 'dist/css/material-theme/theme.dark.css';
        $(darkSymbol).show();
        $(lightSymbol).hide();
    }

    function enableLightMode() {
        link.href = 'dist/css/material-theme/theme.light.css';
        $(darkSymbol).hide();
        $(lightSymbol).show();
    }
});