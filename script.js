function menu () {
    if(window.innerWidth <= 600) {
        itens.style.display = 'none'
    }
}

function mudouTam () {
    if(window.innerWidth >= 600) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu () {
    if(itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function mudarTema () {
    const html = document.documentElement;
    html.classList.toggle("dark");

    const divTema = document.getElementById("switch");

    if(divTema.classList.contains("light")) {
        divTema.classList.remove("light");
        divTema.classList.add("dark");
    } else if (divTema.classList.contains("dark")) {
        divTema.classList.remove("dark");
        divTema.classList.add("light");
    }
    
}
let btnTema = document.getElementById("switch");
btnTema.addEventListener("click", mudarTema);