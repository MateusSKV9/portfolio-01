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