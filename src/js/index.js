const botaoAlterarTema = document.getElementById("botao-alterar-tema");


const body = document.querySelector("body")


const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")


botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png")
        body.classList.remove("modo-escuro")
    } else {
        body.classList.add("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")

    }





})



