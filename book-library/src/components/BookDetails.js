import React, {useContext} from "react";
import {BooksContext} from "../BooksContext";
import {useParams} from "react-router-dom";

export default function BookDetails() {
    const {bookId} = useParams();
    const books = useContext(BooksContext);

    const book = books.find(b => b.id === parseInt(bookId));

    if(books.length === 0) {
        return <h1>Loading...</h1>
    }

    if(!book) {
        return <h1>Book not found!</h1>
    }

    return(
        <div>
            <h1>{book.title}</h1>
            <h2>by {book.author}</h2>
            <p>{book.description}</p>
        </div>
    );
}