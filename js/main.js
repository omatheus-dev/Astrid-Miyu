$(document).ready(function() {
    $('#carousel-images').slick({
        autoplay: true
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                reuired: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu email'
        }
    })
})