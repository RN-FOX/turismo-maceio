document.addEventListener("DOMContentLoaded", () => {
    const paginaAtual = window.location.pathname.split("/").pop() || "conteudo.html";
    document.querySelectorAll("nav a").forEach((link) => {
        if (link.getAttribute("href") === paginaAtual) {
            link.classList.add("ativo");
            link.setAttribute("aria-current", "page");
        }
    });

    document.querySelectorAll(".destinos article img").forEach((imagem) => {
        imagem.loading = "lazy";
    });

    // Faz os vídeos e mapas incorporados se ajustarem ao espaço disponível.
    document.querySelectorAll(".iframe-container iframe").forEach((iframe) => {
        iframe.removeAttribute("width");
        iframe.removeAttribute("height");
    });
});