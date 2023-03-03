$(document).ready(function () {

    const lightPath = 'dist/css/material-theme/theme.light.css';
    const darkPath = 'dist/css/material-theme/theme.dark.css';
    const link = $('#material-theme-link');
    const lightSymbol = $('.light-symbol');
    const darkSymbol = $('.dark-symbol');
    const modeToggle = $('.mode-toggle');

    let modePreference = localStorage.getItem('modePreference');

    if (modePreference === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    $(modeToggle).click(function () {
        $(modeToggle).prop('disabled', true);
        if (modePreference === 'dark') {
            modePreference = 'light';
        } else {
            modePreference = 'dark';
        }

        if (modePreference === 'dark') {
            enableDarkMode();
        } else {
            enableLightMode();
        }

        localStorage.setItem('modePreference', modePreference);
    });


    function enableDarkMode() {
        $(link).attr("href", darkPath);
        $(darkSymbol).hide();
        $(lightSymbol).show(100);
        $(modeToggle).prop('disabled', false);
    }

    function enableLightMode() {
        $(link).attr("href", lightPath);
        $(darkSymbol).show(100);
        $(lightSymbol).hide();
        $(modeToggle).prop('disabled', false);
    }
});