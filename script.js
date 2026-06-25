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