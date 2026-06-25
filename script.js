/* Js do about*/

const hiddenElements = document.querySelectorAll(
    ".about-img, .about-content"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });

        {
            threshold: 0.3
        }

});

hiddenElements.forEach((el) => observer.observe(el));



/* Js do projetos*/



const botoesFiltro = document.querySelectorAll(".filtro-btn");
const projetos = document.querySelectorAll(".projeto-card");

botoesFiltro.forEach(botao => {

    botao.addEventListener("click", () => {

        botoesFiltro.forEach(btn =>
            btn.classList.remove("active")
        );

        botao.classList.add("active");

        const filtro = botao.dataset.filter;

        projetos.forEach(projeto => {

            if (
                filtro === "all" ||
                projeto.classList.contains(filtro)
            ) {
                projeto.style.display = "block";
            } else {
                projeto.style.display = "none";
            }

        });

    });

});