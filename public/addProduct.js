//Product addition handle bar definitions
var $productTemplate = $('#hb-product-template');
var productTemplateHtml = $productTemplate.html();
var compiledProductTemplateHtml = Handlebars.compile(productTemplateHtml);
var $productTarget = $('#hb-product-target');


var addProduct = function(){
    
    $productName = $('#new-product-name').val();
    $productPrice = $('#new-product-price').val();
    $productPictureUrl = $('#new-product-url').val();

    renderedProduct = compiledProductTemplateHtml({
        name: $productName,
        price: $productPrice,
        imageUrl: $productPictureUrl
    });

    $productTarget.append(renderedProduct);

}

$('#new-product-submit').click(addProduct);


