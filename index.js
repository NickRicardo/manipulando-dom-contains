const quadrado = document.querySelector('.bola')
const preto = document.querySelector('.preto')

quadrado.addEventListener("click", () => {
    if (quadrado.classList.contains('preto')) {
        quadrado.classList.remove("preto")
        quadrado.classList.add("azul")
    }else{
        quadrado.classList.contains("azul")
        quadrado.classList.remove("azul")
        quadrado.classList.add("preto")
    }
})



// const quadrado = document.querySelector(".quadrado");
// quadrado.addEventListener('click', () => {	
//     const classeAzulExiste = quadrado.classList.contains('azul');	
//     if (classeAzulExiste) {
//         quadrado.classList.remove("azul");
//     } else {		
//         quadrado.classList.add("azul");
//     }
// });