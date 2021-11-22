/**
 * Cargar la libreria de JQuery y ubicar el cursor en el campo login
 */

 $(document).ready (function(){
    $("#useremail").focus();
});
/**
 * Autenticar usuario en sistema
 */
function login(){
    //Leer datos
    let email= $("#useremail").val()
    let password = $("#password").val()
    //Generar una peticion tipo ajax para validar login
    $.ajax ({
        url: "http://localhost:8080/api/user/"+email+"/"+password,
        type: 'GET',
        dataType: 'json',
        contentType: "aplication/JSON",
        success: function(respuesta){
            console.log(respuesta);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Algo fallo")
        }
    });
    //Generar mensaje de respuesta
}