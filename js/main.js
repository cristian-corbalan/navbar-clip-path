window.addEventListener('DOMContentLoaded', function () {
    // Obtengo los elementos del DOM
    let btnMenu = document.getElementById('menu-icono');
    let menuEnlaces = document.getElementById('enlaces');
    let contenedorTotal = document.querySelector('.all');
    let menuController = 0;

    console.log(btnMenu, menuEnlaces);

    btnMenu.addEventListener('click', function (ev) {
        ev.preventDefault();

        if (!menuController) {
            menuEnlaces.classList.add("show");
            contenedorTotal.classList.add("max");
            this.className = "icon-close";
            menuController = 1;
        } else {
            menuEnlaces.classList.remove('show');
            contenedorTotal.classList.remove('max');
            this.className = "icon-bars";
            menuController = 0;
        }
    })

    window.addEventListener('resize',function (){
        if(screen.width > 768){
            menuEnlaces.classList.remove('show');
            contenedorTotal.classList.remove('max');
            btnMenu.className = "icon-bars";
            menuController = 0;
        }
    })

})