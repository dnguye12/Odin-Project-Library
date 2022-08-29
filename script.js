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

Book.info();