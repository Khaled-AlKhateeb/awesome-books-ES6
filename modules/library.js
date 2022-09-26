class BookLibrary {
  constructor() {
    this.booksArr = [];
    this.add = (Obj) => {
      this.booksArr.push(Obj);
    };
    this.remove = (Obj) => {
      this.booksArr.splice(Obj, 1);
    };
  }
}

//export const library = new BookLibrary();
export { BookLibrary };