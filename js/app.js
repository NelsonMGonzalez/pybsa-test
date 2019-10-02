var menu = false;

$(function(argument){
    $("#colapsable").click(function(){
        if(menu==false){
            $(".menu-cotenido-movil").css("top", "8vh");
            $menu = true;
        }else{
            $(".menu-cotenido-movil").css("top", "-100%");
            menu = false;
        }
    })
    
    $(window).scroll(function(){
        var scroll= $ (this).scrollTop();
        console.log(scroll)

        if(scroll>=250){
            $(".menu-escritorio").addClass("menu-scroll-top");
        }else{
            $(".menu-escritorio").removeClass("menu-scroll-top");
        }
    });
});