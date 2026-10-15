import* as bookModels from '../models/bookModels.js';

export const getAllBooks = async() => {
    const books = await bookModels.fetchAllBooks();
    return books;

};

export const createBook = async(book) =>{
    const bookId = await bookModels.insert(book);
    return bookId;
}

export const updateBook = async(book) => {
    const updatedBook = await bookModels.update(book);
    return updatedBook;

}
export const deleteBook = async(id) => {
    const deletedBook = await bookModels.remove(id);
    return deletedBook;
}