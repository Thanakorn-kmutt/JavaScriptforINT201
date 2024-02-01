// class book {
//     constructor(title, author, yearPublished){
//         this.title = title || "no title"
//         this.author = author || "no author"
//         this.yearPublished = yearPublished || 0
//     }

//     getinfo(){
//         return `${this.title} by ${this.author} (${this.yearPublished})`
//     }

// }

// const book1 = new book("title1","author1",)
// console.log(getinfo())



class Book {
    constructor(title, author, pages, genre) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.genre = genre;
    }
   
    getSummary() {
      return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`;
    }
   }
   
   class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
   
    addBook(newBook) {
      this.books.push(newBook);
    }
   
    getBooksByGenre(genre) {
      return this.books.filter(book => book.genre === genre);
    }
   
    getTotalPagesByGenre(genre) {
      const booksInGenre = this.getBooksByGenre(genre);
      return booksInGenre.reduce((totalPages, book) => totalPages + book.pages, 0);
    }
   }
   
   //example usage

   const myLibrary = new Library("My Library");
   
   myLibrary.addBook(new Book("Harry Wick", "Conan", 345, "Sci-Fi"));
   myLibrary.addBook(new Book("The Lord of the Rings", "J. R. R. Tolkien", 1216, "Fantasy"));
   myLibrary.addBook(new Book("The Martian", "Andy Weir", 369, "Sci-Fi"));
   
   console.log(myLibrary.getBooksByGenre("Sci-Fi"));
   console.log(myLibrary.getTotalPagesByGenre("Sci-Fi"));




// class elevator{
//     constructor(maxfloor,minfloor,currentFloor){
//         this.currentFloor = currentFloor || 0
//         this.maxfloor = maxfloor
//         this.minfloor = minfloor
//     }

//     displayFloor(){
//         return this.currentFloor
//     }

//     goToFloor(floor){
//         this.currentFloor = floor

//     }

//     goUp(){
//         if(this.currentFloor < this.maxfloor){
//             this.currentFloor++
//         }
//     }

//     goDown(){
//         if(this.currentFloor > this.minfloor){
//             this.currentFloor--
//         }

//     }

// }

// const elevator1 = new elevator(10,-5,2)

// console.log(elevator1)
// elevator1.goToFloor(5)

// console.log("-----")

// console.log(elevator1.displayFloor())
