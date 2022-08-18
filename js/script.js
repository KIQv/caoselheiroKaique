/* TESTE VITRINE COM JQUERY */

$(document).ready(function(e){

    jsonObject.products.forEach((i)=>loadProducts(i));

});


function loadProducts(data){

    var li = document.createElement('li');

    li.innerHTML ='<div class="cardProduto">'+
                            '<div class="badge">40% OFF</div>'+
                            '<div class="badgeHeart"><img src="./img/heartIcon.png" alt=""></div>'+
                            '<div class="produtoFoto"><img src="'+data.photo+'" alt=""></div>'+
                            '<div class="detalhesProduto">'+
                                '<h3 id="nomeProduto">'+data.productName+'</h3>'+
                                '<h4>De R$ 96,69</h4>'+
                                '<h2>Por R$ 90,69</h2>'+
                                '<p><span>R$ 85,69</span><br>Para assinantes</p>'+
                            '</div>'+
                            '<button class="btnProduto">ADICIONAR</button>'
                        '</div>';
document.getElementById("home_product").appendChild(li);
}

/////////////////////////////////////////////////////////////////////////////
/* MODAL OPEM */

$(document).ready(function(){
    $('.btnProduto').click(function(){
        $('.modalContainer').css('transform','scale(1)');
    });
    $('.produtoFoto').click(function(){
        $('.modalContainer').css('transform','scale(1)');
    });
    $('.nomeProduto').click(function(){
        $('.modalContainer').css('transform','scale(1)');
    });
    $('#close').click(function(){
        $('.modalContainer').css('transform','scale(0)');
    });
});

/////////////////////////////////////////////////////////////////////////////
/* BANNER */

var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function() {
    bannerLoop();
}

var startBannerLoop = setInterval(function(){
    bannerLoop();
}, bannerTimer);

document.getElementById("main-banner").onmouseenter = function(){
    clearInterval(startBannerLoop);
}

document.getElementById("main-banner").onmouseleave = function(){
    startBannerLoop = setInterval(function(){
        bannerLoop();
    }, bannerTimer);
}

document.getElementById("imgbanbtn-prev").onclick = function() {
    if(bannerStatus === 1){
        bannerStatus = 2;
    }
    else if (bannerStatus === 2){
        bannerStatus = 3;
    }
    else if (bannerStatus === 3){
        bannerStatus = 1;
    }
    bannerLoop();
}

document.getElementById("imgbanbtn-next").onclick = function() {
    bannerLoop();
}

function bannerLoop(){
    if (bannerStatus === 1){
        document.getElementById("imgban2").style.opacity = "0";
        setTimeout(function(){
            document.getElementById("imgban1").style.right = "0px";
            document.getElementById("imgban1").style.zIndex = "1000";
            document.getElementById("imgban2").style.right = "-100%";
            document.getElementById("imgban2").style.zIndex = "1500";
            document.getElementById("imgban3").style.right = "100%";
            document.getElementById("imgban3").style.zIndex = "500";
        }, 500);
        setTimeout(function(){
            document.getElementById("imgban2").style.opacity = "1";
        }, 1000);
        bannerStatus = 2;
    }
    else if (bannerStatus === 2){
        document.getElementById("imgban3").style.opacity = "0";
        setTimeout(function(){
            document.getElementById("imgban2").style.right = "0px";
            document.getElementById("imgban2").style.zIndex = "1000";
            document.getElementById("imgban3").style.right = "-100%";
            document.getElementById("imgban3").style.zIndex = "1500";
            document.getElementById("imgban1").style.right = "100%";
            document.getElementById("imgban1").style.zIndex = "500";
        }, 500);
        setTimeout(function(){
            document.getElementById("imgban3").style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
    }
    else if (bannerStatus === 3){
        document.getElementById("imgban1").style.opacity = "0";
        setTimeout(function(){
            document.getElementById("imgban3").style.right = "0px";
            document.getElementById("imgban3").style.zIndex = "1000";
            document.getElementById("imgban1").style.right = "-100%";
            document.getElementById("imgban1").style.zIndex = "1500";
            document.getElementById("imgban2").style.right = "100%";
            document.getElementById("imgban2").style.zIndex = "500";
        }, 500);
        setTimeout(function(){
            document.getElementById("imgban1").style.opacity = "1";
        }, 1000);
        bannerStatus = 1;
    }
}

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:false,
    nav:false,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})