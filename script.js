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

let overlayShown = false;
BtnAdd.addEventListener("click", function () {

   if( !overlayShown) {
    overlay.style.visibility = "visible";
    add.style.visibility = "visible";
    overlay.style.opacity = "1";
    add.style.opacity = "1";
    add.style.transform = "translate(-50%, -50%)";
    overlayShown = true;
   }
});

overlay.addEventListener("click", function() {
    if(overlayShown) {
        overlay.style.visibility = "hidden";
    add.style.visibility = "hidden";
    overlay.style.opacity = "0";
    add.style.opacity = "0";
    add.style.transform = "translate(-500%, -50%)";
        overlayShown = false;
    }
});

let form = document.querySelector("form");
let ftitle = document.getElementById("ftitle");
let fauthor = document.getElementById("fauthor");
let fpages = document.getElementById("fpages");
let red = document.getElementById("checkbox");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let helper = new Book(ftitle.value, fauthor.value, fpages.value, red.checked);
    helper.info();
    library.append(helper);
    console.log(library.length);
});