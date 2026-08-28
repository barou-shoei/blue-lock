const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const opcoesAcessibilidade = document.getElementById("opcoes-acessibilidade");
const botaoAumentar = document.getElementById("aumentar-fonte");
const botaoDiminuir = document.getElementById("diminuir-fonte");
const botaoContraste = document.getElementById("alterna-contraste");
const formulario = document.getElementById("form-contato");
const avisoForm = document.getElementById("aviso-form");

let tamanhoFonte = 1;

botaoAcessibilidade.addEventListener("click", () => {
    const aberto = botaoAcessibilidade.getAttribute("aria-expanded") === "true";
    botaoAcessibilidade.setAttribute("aria-expanded", String(!aberto));
    opcoesAcessibilidade.classList.toggle("apresenta-lista");
    botaoAcessibilidade.classList.toggle("rotacao-botao");
});

botaoAumentar.addEventListener("click", () => {
    if (tamanhoFonte < 1.4) {
        tamanhoFonte += 0.1;
        document.documentElement.style.setProperty("--fonte-base", `${tamanhoFonte}rem`);
    }
});

botaoDiminuir.addEventListener("click", () => {
    if (tamanhoFonte > 0.8) {
        tamanhoFonte -= 0.1;
        document.documentElement.style.setProperty("--fonte-base", `${tamanhoFonte}rem`);
    }
});

botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    avisoForm.hidden = false;
    formulario.reset();
});

if (window.ScrollReveal) {
    ScrollReveal().reveal(".inicio-conteudo, .img-projeto, .secao-projeto h2, .card-jogador, .img-campo, .formulario", {
        distance: "40px",
        duration: 900,
        easing: "ease-out",
        origin: "bottom",
        interval: 120
    });
}