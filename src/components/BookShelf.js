import React from "react";
import Book from "./Book";

const BookShelf = (props) => {
    const { bookList, bookShelfId,bookShelfTitle, onChangeShelf } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList.map((book, idx) => (
                        <li key={idx}>
                            <Book
                                bookImage={`url(${book.url})`}
                                bookShelf={bookShelfId}
                                bookTitle={book.bookTitle}
                                bookAuthors={book.bookAuthors}
                                onUpdate={(newShelf) =>
                                    onChangeShelf(book.bookId, newShelf)
                                }
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default BookShelf;
