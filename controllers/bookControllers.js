import * as bookServices from '../services/bookServices.js';

export const fetchAllBooks = async(req, res) => {
    const books = await bookServices.fetchAllBook();
    res.status(200).json(books);
}

export const createBook = async(req, res) => {
    const {name, author} = req.body;
    const book = {name, author};

    try{
        const bookId = await bookServices.createBook(book);
        res.status(200).json ({
            success: true,
            message: bookId
        });
    }catch(e) {
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}

export const editBook = async(req, res) => {
    const {name, author} = req.body;
    const {id} = req.params;
    const book = {id: parseInt(id), name, author
    };

     try{
        const updatedBook = await bookServices.updateBook(book);
        res.status(200).json ({
            success: true,
            message: updatedBook
        });
    }catch(e){
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}
export const deleteBook = async (req,res) => {
    const {id} = req.params;

    try{
        const deleteBook = await bookServices.deleteBook(parseInt(id));
        res.status(200).json({
            success: true,
            message: deleteBook
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Service Error"
        });
    }
}    