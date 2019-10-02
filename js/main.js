 
// sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('click')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});










// SLIDE SHOW
$(document).ready(function(){
    var imgItems = $('.slidershow li').length;
    var imgPos =1;
    for(i =1; i <= imgItems; i++){

        $('.pagination').append('<li><span class=" fa fa-circle"></span></li>')
    }
    
    $('.slidershow li').hide ();
    $('.slidershow li:first').show();
    $('.pagination li:first').css({'color': '#CD6E2E'});

    //Ejecutamos todo
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);
    setInterval(function(){
    }, 4000);

    // FUNCIONES ===========================================================
    function pagination(){
        var paginationPos = $(this).index() +1;
        
        $('.slidershow li').hide();
        $('.slidershow li:nth-child('+ paginationPos +')').fadeIn();
        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#CD6E2E'});
    }
    function nextSlider(){
        if(imgPos >= imgItems){ imgPos = 1;}
         else{  imgPos++; }
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+imgPos+')').css({'color': '#CD6E2E'});


         
        $('.slidershow li').hide();
        $('.slidershow li:nth-child('+imgPos+')').fadeIn();

        }
    

        function prevSlider(){
        if(imgPos <= 1){ imgPos = imgItems;}
         else{  imgPos--; }
        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child('+imgPos+')').css({'color': '#CD6E2E'});

        $('.slidershow li').hide();
        $('.slidershow li:nth-child('+ imgPos +')').fadeIn();

        }

});