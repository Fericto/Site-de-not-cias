function semLogin () {
    alert("Ainda não é possível de se realizar um login, mas fique a vontade para navegar pelo site.")
}


var chk = document.getElementById('chk')
var tapreto = 1

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    tapreto *= -1
})

function abrirPag(a, coluna){
    var localPag = document.querySelector("#container")
    var pag = new XMLHttpRequest()
    var elemento = document.querySelector("body")
    elemento.className = a;
    
    if(coluna==1){
        elemento.id = 'uma_coluna'
    }else if (coluna==2){
        elemento.id = 'duas_colunas'
    }else if (coluna==3){
        elemento.id = ''
    }

    pag.onreadystatechange = () =>{
        if(pag.readyState == 4 && pag.status == 200){
            localPag.innerHTML = pag.response
        }
    }

    pag.open('GET', `../${a}.html`)
    pag.send()
}