import * as bookServices from '../services/bookServices.js';

export const fetchAllBooks = async(req, res) => {
    const books = await bookServices.fetchAllBooks();
    res.status(200).json(books);
}