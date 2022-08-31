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
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${red}`);
    }
};

let BtnAdd = document.getElementById("BtnAdd");
let overlay = document.getElementById("overlay");
let add = document.getElementById("add");

let overlayShown = false;
BtnAdd.addEventListener("click", function () {

    if (!overlayShown) {
        overlay.style.visibility = "visible";
        add.style.visibility = "visible";
        overlay.style.opacity = "1";
        add.style.opacity = "1";
        add.style.transform = "translate(-50%, -50%)";
        overlayShown = true;
    }
});

function submitted() {
    if (overlayShown) {
        ftitle.value = "";
        fauthor.value = "";
        fpages.value = "";
        overlay.style.opacity = "0";
        add.style.opacity = "0";
        add.style.transform = "translate(-500%, -50%)";
        overlayShown = false;
        overlay.style.visibility = "hidden";
        add.style.visibility = "hidden";
    }
}

overlay.addEventListener("click", submitted());

let form = document.querySelector("form");
let ftitle = document.getElementById("ftitle");
let fauthor = document.getElementById("fauthor");
let fpages = document.getElementById("fpages");
let red = document.getElementById("fread");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let helper = new Book(ftitle.value, fauthor.value, fpages.value, red.checked);
    library.push(helper);
    submitted();
    console.log(library);
    createLibItem(helper);
});



let lib = document.getElementById("lib");

function createLibItem(book) {
    book.info();
    let item = document.createElement("div");
    item.classList.add("item");

    let title = document.createElement("p");
    title.textContent = book.title;
    item.appendChild(title);
    let author = document.createElement("p");
    author.textContent = book.author;
    item.appendChild(author);
    let pages = document.createElement("p");
    pages.textContent = book.pages;
    item.appendChild(pages);

    let btnReadStatus = document.createElement("button");
    if(book.read) {
        btnReadStatus.classList.add("btnRead");
        btnReadStatus.textContent = "Read";
    }else {
        btnReadStatus.classList.add("btnNotRead");
        btnReadStatus.textContent = "Not read";
    }
    btnReadStatus.addEventListener("click", function() {
        btnReadStatus.classList.toggle("btnRead");
        btnReadStatus.classList.toggle("btnNotRead");
        if(btnReadStatus.textContent == "Read") {
            btnReadStatus.textContent = "Not read";
        }else {
            btnReadStatus.textContent = "Read";
        }
    });
    item.appendChild(btnReadStatus);

    let btnRemove = document.createElement("button");
    btnRemove.classList.add("btnRemove");
    btnRemove.textContent = "Remove";
    btnRemove.addEventListener("click", function() {
        item.remove();
    });
    item.appendChild(btnRemove);

    lib.appendChild(item);
}