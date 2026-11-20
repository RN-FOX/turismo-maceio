document.addEventListener("DOMContentLoaded", () => {
    // Destaca automaticamente o link correspondente à página atual.
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav a").forEach((link) => {
        const destino = link.getAttribute("href");
        if (destino === paginaAtual) {
            link.classList.add("ativo");
            link.setAttribute("aria-current", "page");
        }
    });

    // Pequena melhoria de acessibilidade para imagens.
    document.querySelectorAll("img").forEach((imagem) => {
        imagem.loading = "lazy";
    });
});