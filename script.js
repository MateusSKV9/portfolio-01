function menu () {
    if(window.innerWidth <= 600) {
        nav.style.display = 'none'
    }
}

function mudouTam () {
    if(window.innerWidth >= 600) {
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
}

function clickMenu () {
    if(nav.style.display == 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
}
let nav = document.getElementById('itens');
let burguer = document.getElementById('burguer');
burguer.addEventListener('click', clickMenu);

function mudarTema () {
    const html = document.documentElement;
    html.classList.toggle('dark');

    const divTema = document.getElementById('switch');

    if(divTema.classList.contains('light')) {
        divTema.classList.remove('light');
        divTema.classList.add('dark');
    } else if (divTema.classList.contains('dark')) {
        divTema.classList.remove('dark');
        divTema.classList.add('light');
    }
}
let btnTema = document.getElementById("switch");
btnTema.addEventListener("click", mudarTema);

function animarScroll() {
    const header = document.querySelector('header');
    const positionScroll = window.scrollY;

    if(positionScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '5px 1px 1px rgba(0, 0, 0, 0.1)';
    }
}
window.addEventListener('scroll', animarScroll);