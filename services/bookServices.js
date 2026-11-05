import* as bookModels from '../models/bookModels.js';
import ValidationError from '../utils/ValidationError.js'

export const getAllBooks = async() => {
    const books = await bookModels.fetchAllBooks();
    return books;

}

const doesBookExist = async(book) => {
   let existing;
   if(Object.hasOwn(book, "id")){
    existing = await bookModels.findBookById(book.id);
   }else{
    existing = await bookModels.findBookByNameAndAuthor(book);
   }
  
    if (existing.length > 0) {
        return true;
    }
    return false;
}


export const createBook = async(book) =>{
    if(!book.name || !book.author){
        throw new ValidationError(404, "Name and Author are required!");
    }

   const existing = await doesBookExist(book);

   if(existing){
    throw new ValidationError (409, "Book already exists!");
   }

   const bookId = await bookModels.insert(book);
   return bookId;

}


export const updateBook = async(book) =>{
    const existing = await doesBookExist(book);

    if(!existing){
        throw new ValidationError(404, "Book does not  exists!");
    }

    const updatedBook = await bookModels.update(book);
    return updatedBook;

}
export const deleteBook = async(id) =>{
    const book = {id};
    const existing = await doesBookExist(book);

    if(!existing){
        throw new ValidationError(404, "Book does not exists!");
    }

    const deletedBook = await bookModels.remove(id);
    return deletedBook;
}