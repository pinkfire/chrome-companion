$(function () {
    $("#channel").val(localStorage.getItem('X-PINKFIRE-CHANNEL'));
    $("#channel").change(function () {
        localStorage.setItem('X-PINKFIRE-CHANNEL', $(this).val());
    });
});
