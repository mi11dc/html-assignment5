const articles = document.querySelectorAll("article");

for (let i = 0; i < articles.length; i++) {
    articles[i].addEventListener("mouseenter", function() {
        this.classList.add("animated", "pulse");
    });

    articles[i].addEventListener("mouseleave", function() {
        this.classList.remove("animated", "pulse");
    });
}