$(function() {
    var defaultServer = 'http://localhost:3000';

    $("#channel")
        .val(localStorage.getItem('X-PINKFIRE-CHANNEL'))
        .change(function() {
            localStorage.setItem('X-PINKFIRE-CHANNEL', $(this).val());
        });

    $("#server")
        .val(localStorage.getItem('X-PINKFIRE-SERVER') || defaultServer)
        .change(function() {
            localStorage.setItem('X-PINKFIRE-SERVER', $(this).val());
        });

    $("#pinkfire-go").on('click', function() {
        $(this).attr('href', $("#server").val() || defaultServer);
    });
});
