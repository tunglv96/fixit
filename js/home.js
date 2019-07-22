// xử lý slide
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// xu ly su kien click choose
function change_choose() {

    var item =  document.querySelectorAll('.choose .box-click .item'),
        van_ban = document.querySelectorAll('.choose .box-click .item .vb'),
        nut = document.querySelectorAll('.choose .box-click .item .nut'),
        img = document.querySelector('.box-left img');
        for (var i = 0; i < item.length; i++) {
            item[i].onclick = function () {
                if (this.classList[1] == 'change') {
                    this.classList.remove('change');

                    var showData = this.getAttribute('data-show'),
                        phanTu = document.getElementById(showData),
                        changeNut = this.getAttribute('data-nut'),
                        phanTuNut = document.getElementById(changeNut);

                        phanTu.classList.remove('active');

                        for (var b = 0; b < nut.length; b++) {
                            nut[b].innerHTML = '+';
                        }


                        img.classList.remove('change_img');
                }
                else {
                    for (var k = 0; k < item.length; k++) {
                        item[k].classList.remove('change');
                    }
                        this.classList.add('change');

                    var showData = this.getAttribute('data-show'),
                        phanTu = document.getElementById(showData),
                        changeNut = this.getAttribute('data-nut'),
                        phanTuNut = document.getElementById(changeNut);

                        for (var a = 0; a < van_ban.length; a++) {
                            van_ban[a].classList.remove('active');
                        }

                        phanTu.classList.add('active');

                        for (var b = 0; b < nut.length; b++) {
                            nut[b].innerHTML = '+';
                        }
                        phanTuNut.innerHTML = '-';


                        img.classList.add('change_img');
                }
            }
        }
}
change_choose();
// xuly menu

function show_menu() {
    var nutX = document.getElementById('close'),
        nutBar = document.getElementById('bar'),
        menu = document.getElementById('menumobile');

    nutBar.onclick = function() {
        menu.classList.add('active');

    }
    nutX.onclick = function() {
        menu.classList.remove('active');
    }
}
show_menu();

