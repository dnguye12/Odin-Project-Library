let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        let red = "";
        if (this.read) {
            red = "already read";
        } else {
            red = "not read yet";
        }
        console.log(`${this.name} by ${this.author}, ${this.pages} pages, ${red}`);
    }
};

let BtnAdd = document.getElementById("BtnAdd");
let overlay = document.getElementById("overlay");
let add = document.getElementById("add");

overlay.addEventListener("click", function () {

    if (overlay.classList.contains("overlay-active")) {

        overlay.classList.toggle("overlay-active");
        add.classList.toggle("add-active");

    }

});

BtnAdd.addEventListener("click", function () {

    overlay.classList.toggle("overlay-active");
    add.classList.toggle("add-active");

});

let form = document.querySelector("form");
let ftitle = document.getElementById("ftitle");
let fauthor = document.getElementById("fauthor");
let fpages = document.getElementById("fpages");
let red = document.getElementById("checkbox");
form.addEventListener("submit", function () {

    let helper = new Book(ftitle.textContent, fauthor.textContent, fpages.textContent, red.checked);
    helper.info();
});