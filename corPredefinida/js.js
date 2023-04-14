let cor = ['black', 'white','orange','green','red','pink','gray','yellow', 'aqua', 'blue', 'purple']
let indice = 0;

function mudarCor(){
    if(indice >= 10){
        indice = 0
    }
    else{
        indice ++
    }
    let corpo = document.querySelector('body')
    corpo.style.backgroundColor=cor[indice]
    console.log(indice)
}