/////////////////////////////////////////////////////////////////////////////
/* VITRINE DE PRODUTOS */
function pegarUrl(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
let data = pegarUrl("https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json");
let produtos = JSON.parse(data);

$(document).ready(function(e){

    produtos.products.forEach((i)=>loadProducts(i));

});


function loadProducts(data){

    var div = document.createElement('div');
    
    if (div.classList) div.classList.add("swiper-slide");
    else div.className += " swiper-slide";

    div.innerHTML ='<div class="cardProduto">'+
                            '<div class="badge">40% OFF</div>'+
                            '<div class="badgeHeart"><img src="./img/heartIcon.png" alt=""></div>'+
                            '<div class="produtoFoto"><img src="./img/card01.png" alt=""></div>'+
                            '<div class="detalhesProduto">'+
                                '<h3 id="nomeProduto">'+data.productName+'</h3>'+
                                '<h4>De R$ 96,69</h4>'+
                                '<h2>Por R$ '+data.price+'</h2>'+
                                '<p><span>R$ 85,69</span><br>Para assinantes</p>'+
                            '</div>'+
                            '<button class="btnProduto">ADICIONAR</button>'
                        '</div>';
document.getElementById("produtosVitrine").appendChild(div);
}

/////////////////////////////////////////////////////////////////////////////
/* MODAL OPEN */

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

/////////////////////////////////////////////////////////////////////////////
/* SWIPERJS */

var swiper = new Swiper(".carrosselCategoria", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    navigation: {
        nextEl: "#btnCategoria-next",
        prevEl: "#btnCategoria-prev",
    },
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".dotsVitrine",
        clickable: true,
    },
    navigation: {
        nextEl: "#btnProdutos-next",
        prevEl: "#btnProdutos-prev",
    },
});

var swiper = new Swiper(".carrosselArtigos", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    pagination: {
        el: ".dots",
        clickable: true,
    },
    navigation: {
        nextEl: "#btnArtigos-next",
        prevEl: "#btnArtigos-prev",
    },
});

var swiper = new Swiper(".carrosselMarcas", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: "#btnMarca-next",
        prevEl: "#bbtnMarca-prev",
    },
});

var swiper = new Swiper(".parceiros", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: ".dotsParceiros",
        clickable: true,
    },
});

var swiper = new Swiper(".carrosselGaleria", {
    slidesPerView: 3,
    spaceBetween: 0,

});