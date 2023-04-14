
function mudarCor(){
    
    let corpo = document.querySelector('body')
    corpo.style.backgroundColor = gerar_cor();
}
function gerar_cor(opacidade = 1) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
 
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
 }