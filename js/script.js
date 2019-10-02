$(document).ready(function(){
    $('#btnSend').click(function(){

        var errores = '';

        //validando nombres ==============
        if($('#names').val()== ''){
            errores +='<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
        }else{
            $('#names').css("border-bottom-color", "#d1d1d1") 
        }

        //validando correo =================
        if($('#email').val()== ''){
            errores +='<p>Escriba un Correo</p>';
            $('#email').css("border-bottom-color", "#F14B4B")
        }else{
            $('#email').css("border-bottom-color", "#d1d1d1")
        }

        //validando mensaje ============
        if($('#mensaje').val()== ''){
            errores +='<p>Escribe un mensaje</p>';
            $('#mensaje').css("border-bottom-color","#F14B4B" )
        }else{
            $('#mensaje').css("border-bottom-color","#d1d1d1 " )
        }

        //ENVIANDO MENSAJE ====================
        if( errores ==''== false){
            var mensajeModal ='<div class="modal_wrap">'+
                                '<div class="mensaje_modal">'+
                                '<h3>Errores</h3>'+
                                errores+
                                '</div>'+
                                '</div>'

            $('body').append(mensajeModal);
        }

        //CERRANDO MODAL
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });
    });
});