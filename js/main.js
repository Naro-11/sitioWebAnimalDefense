
function enviarCorreo(){
    let nombre = document.getElementById('nombreCompleto').value;
    let correo = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let servicio = document.getElementById('servicio').value;
    let mensaje = document.getElementById('mensaje').value;
    let html = 'contenidoMensaje'
    let asunto_ = 'asuntoMensaje'
    let para = ';natyrestrepo24@gmail.com';

    let xx = $("#nombreCompleto").val();
    alert(xx)
    
    $.ajax({
        url: 'http://solmex-app.com/solmex-app/Solmex_Service_Web.asmx/enviarCorreo', 
        type: "POST",
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
            "html": html,
            "para": para,
            "asunto": asunto_
        }), 
        beforeSend: function () {
        },
        success: function (data) {
            console.log(data)
        },
        error: function (error) {
            console.log("Error: ", error);
        }
    });
}