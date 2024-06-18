const navButton = document.querySelector(".nav__button");
const navLinks = document.querySelector(".nav__links");
const clickOut = document.querySelectorAll("section")

navButton.addEventListener("click", () => {
    navButton.classList.toggle("ativo");
    navLinks.classList.toggle("ativo");
})

clickOut.forEach((section) => {
    section.addEventListener("click", () => {
        navButton.classList.remove("ativo");
        navLinks.classList.remove("ativo");
    })
})

const ctaButton = document.querySelector("#ctabutton");
ctaButton.addEventListener("click", () => {
    ctaButton.textContent = 'Cadastro realizado com sucesso!';
})