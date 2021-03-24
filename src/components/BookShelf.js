import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
    state = {
        bookList: this.props.bookList,
    };
    render() {
        const { bookList, bookShelfTitle } = this.props;
        console.log(bookShelfTitle)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {bookList.map((book, idx) => (
                            <li key={idx}>
                                <Book
                                    bookImage={`url(${book.url})`}
                                    bookShelf={book.bookShelf}
                                    bookTitle={book.bookTitle}
                                    bookAuthor={book.bookAuthor}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookShelf;
