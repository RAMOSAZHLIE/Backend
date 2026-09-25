import* as bookModels from '../models/bookModels.js';

export const fetchAllBooks = async() => {
    const books = await bookModels.fetchAllBooks();
    return books;

};