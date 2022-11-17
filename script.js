//smooth scrolling

const links = document.querySelectorAll(".nav-list li a");

for (i of links) {
    i.addEventListener("click", smoothScroll);
}


function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({behavior: "smooth",
})

}