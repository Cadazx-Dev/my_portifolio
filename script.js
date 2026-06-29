/* Js do about */

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
}, { threshold: 0.3 });

hiddenElements.forEach((el) => observer.observe(el));



/* Js do projetos */

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



/* Js da tradução */

const traducoes = {
    pt: {
        heroTitle: "Desenvolvedor <br> Full Stack",
        downloadCV: "Download CV",
        aboutTitle: "Sobre Mim",
        aboutP1: "Olá, eu sou Cauã. Sou estudante e desenvolvedor em formação, focado na criação de interfaces web modernas e responsivas.",
        aboutP2: "Atualmente estudo HTML, CSS, JavaScript e Git, desenvolvendo projetos para aprimorar minhas habilidades e evoluir constantemente na área de tecnologia.",
        aboutP3: "Pretendo entrar para a área de Full-stack depois da faculdade.",
        projetosTitle: "Projetos",
        filtroTodos: "Todos",
        filtroCursos: "Cursos",
        filtroAutoral: "Pessoais",
        cardTitle: "Painel de Clientes",
        cardDesc: "Sistema desenvolvido para gerenciamento e consulta de clientes.",
        cardTag: "Pessoal",
        contatoTitle: "Vamos conversar?",
        contatoDesc: "Estou aberto a oportunidades, freelas e colaborações. Me manda uma mensagem!",
        footer: "Feito por Cauã Cada &nbsp;·&nbsp; 2025"
    },
    en: {
        heroTitle: "Full Stack <br> Developer",
        downloadCV: "Download CV",
        aboutTitle: "About Me",
        aboutP1: "Hi, I'm Cauã. I'm a student and developer in training, focused on building modern and responsive web interfaces.",
        aboutP2: "I currently study HTML, CSS, JavaScript and Git, developing projects to improve my skills and constantly grow in the tech field.",
        aboutP3: "I plan to work as a Full-stack developer after college.",
        projetosTitle: "Projects",
        filtroTodos: "All",
        filtroCursos: "Courses",
        filtroAutoral: "Personal",
        cardTitle: "Client Dashboard",
        cardDesc: "System developed for client management and lookup.",
        cardTag: "Personal",
        contatoTitle: "Let's talk?",
        contatoDesc: "I'm open to opportunities, freelance work and collaborations. Send me a message!",
        footer: "Made by Cauã Cada &nbsp;·&nbsp; 2025"
    }
};

let idiomaAtual = "pt";

const btnIdioma = document.querySelector(".idioma");

btnIdioma.addEventListener("click", () => {

    idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";

    document.querySelector("#bandeira").src = idiomaAtual === "pt" ? "imgs/img.eua.png" : "imgs/img.brasil.png";

    const t = traducoes[idiomaAtual];

    document.querySelector(".home-content h2").innerHTML = t.heroTitle;
    document.querySelector(".Botão-CV").textContent = t.downloadCV;
    document.querySelector(".about-content h2").textContent = t.aboutTitle;

    const paragrafos = document.querySelectorAll(".about-content p");
    paragrafos[0].textContent = t.aboutP1;
    paragrafos[1].textContent = t.aboutP2;
    paragrafos[2].textContent = t.aboutP3;

    document.querySelector(".projetos h2").textContent = t.projetosTitle;

    const filtros = document.querySelectorAll(".filtro-btn");
    filtros[0].textContent = t.filtroTodos;
    filtros[1].textContent = t.filtroCursos;
    filtros[2].textContent = t.filtroAutoral;

    document.querySelector(".projeto-card h3").textContent = t.cardTitle;
    document.querySelector(".projeto-info p").textContent = t.cardDesc;
    document.querySelector(".card-tag").textContent = t.cardTag;

    document.querySelector(".contato-inner h2").textContent = t.contatoTitle;
    document.querySelector(".contato-inner p").textContent = t.contatoDesc;
    document.querySelector(".footer p").innerHTML = t.footer;

});