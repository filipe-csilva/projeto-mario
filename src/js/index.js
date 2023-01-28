console.log("mostrar o document", document);

const botaoTrailer = document.querySelector(".botao-trailer");

const video = document.getElementById("video");

const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
	modal.classList.add("aberto");
	if(video.src != linkDoVideo){video.setAttribute("src", linkDoVideo)};
})

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
	modal.classList.remove("aberto");
	video.setAttribute("src", "");
})