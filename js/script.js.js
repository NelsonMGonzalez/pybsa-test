



$ (document).ready(function(){
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    
    
    
    

    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

// OCULTANDO PRODUCTOS
        $('.category_item').removeClass('ct_item_active');
        $(this).addClass('ct_item_active');

// OCULTANDO PRODUCTOS 
        $('.product-item').css('transform', 'scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        } setTimeout(hideProduct,400);

//MOSTRANDO PRODUCTOS =============================================
        function showProduct(){
            $('.product-item[category="'+catProduct+'"]').show();
            $('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
        } setTimeout(showProduct,400);
       });

       //MOSTRANDO TODOS LOS PRODUCTOS ==================================

        $('.category-item[category="all"]').click(function(){
            function showAll(){
                $('.product-item').show();
                $('.product-item').css('transform', 'scale(1)');
            } setTimeout(showAll,400);
        });
    });
