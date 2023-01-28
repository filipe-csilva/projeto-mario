console.log("mostrar o document", document);

const botaoTrailer = document.querySelector(".botao-trailer");

botaoTrailer.addEventListener("click", () => {
	modal.classList.add("aberto");
})

const modal = document.querySelector(".modal");

const botaoFecharTrailer = document.querySelector(".fechar-modal");

botaoFecharTrailer.addEventListener("click", () => {
	modal.classList.remove("aberto");
})