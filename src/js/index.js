console.log("mostrar o document", document);

const botaoTrailer = document.querySelector(".botao-trailer");

const video = document.getElementById("video");

const linkDoVideo = video.src;

function aternarModal(){
	modal.classList.add("aberto");
}

botaoTrailer.addEventListener("click", () => {
	aternarModal();
	if(video.src === "")
		video.setAttribute("src", linkDoVideo)
})

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
	aternarModal();
	video.setAttribute("src", "");
})