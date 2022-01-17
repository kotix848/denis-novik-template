$(document).ready(function () {
    $('.content_toggle').click(function () {
        $('.content_block').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                // $('.content_toggle').html('Показать текст');
            } else {
                // $('.content_toggle').html('Скрыть текст');
            }
        });
        return false;
    });
});