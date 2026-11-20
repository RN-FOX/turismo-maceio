document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-contato");
    const campoNome = document.getElementById("nome");
    const campoEmail = document.getElementById("email");
    const campoMensagem = document.getElementById("mensagem");
    const feedback = document.getElementById("mensagem-feedback");
    const botao = document.getElementById("btn-enviar");

    const mostrarFeedback = (texto, tipo) => {
        feedback.textContent = texto;
        feedback.className = tipo;
    };

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = campoNome.value.trim();
        const email = campoEmail.value.trim();
        const mensagem = campoMensagem.value.trim();

        if (!nome || !email || !mensagem) {
            mostrarFeedback("Preencha todos os campos antes de enviar.", "erro");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            mostrarFeedback("Digite um endereço de e-mail válido.", "erro");
            campoEmail.focus();
            return;
        }

        // O HTML informa que o envio será simulado: nenhuma mensagem é enviada a um servidor.
        botao.disabled = true;
        botao.textContent = "Mensagem validada!";
        mostrarFeedback(`Obrigado, ${nome}! O formulário foi preenchido corretamente. O envio ainda não está conectado a um servidor.`, "sucesso");
        formulario.reset();

        window.setTimeout(() => {
            botao.disabled = false;
            botao.textContent = "Enviar Mensagem";
        }, 2500);
    });
});