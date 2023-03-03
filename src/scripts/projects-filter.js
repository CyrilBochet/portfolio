$(document).ready(function () {
    $('.nav-projects a').click(function (event) {
        event.preventDefault();
        const selectedProjectType = $(this).data('project-type');
        $('.col-lg-4').each(function () {
            const cardProjectType = $(this).data('project-type');
            if (selectedProjectType === "all" || cardProjectType === selectedProjectType) {
                $(this).show(300);
            } else {
                $(this).hide();
            }
        });
        $('.tab').removeClass('active');
        $(this).addClass('active');
    });
});
