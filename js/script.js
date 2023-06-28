//dropDown
$(function () {
    $('.navbar li').hover(
        function () {
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function () {
            $('>ul.sub', this).slideUp(300);
        }
    )
});

//*video
window.addEventListener("load", function () {
    var video = this.window.document.querySelector("#video");
    video.play();
    video.loop = true;
});


//reload
window.addEventListener('resize', function (event) {
    recarrega();
});

function recarrega() {
    document.location.reload();
};


// cards
if ($(window).width() < 769) {
    var swiper = new Swiper(".about-inner", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} else {
    var swiper = new Swiper(".about-inner", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}

//carousel-swiper
var swiper = new Swiper(".carousel-swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteracion: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

/*menu-hamburger*/

$("i").click(function () {
    $("ul").toggleClass("open")
})


/*login*/
function login() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if ((name == 'admin' && password == 'admin')) {
        alert('Sucesso!!');
        location.href = 'privacity.html'
    }
    else {
        alert('Fracasso!! Usuário ou senha estão incorretos!!');
        document.getElementById('name').value = "";
        document.getElementById('pasword').value = "";
        document.getElementById('name').focus();
    }




}









