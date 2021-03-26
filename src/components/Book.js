import React, { Component } from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
    render() {
        const {
            bookImage,
            bookShelf,
            bookTitle,
            bookAuthors,
            onUpdate,
        } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover bookImage={bookImage} />
                    <BookShelfChanger
                        selectedShelf={bookShelf}
                        onChangeShelf={(shelf) => onUpdate(shelf)}
                    />
                </div>
                <div className="book-title">{bookTitle}</div>
                {bookAuthors.map((author, idx) => (
                    <div key={idx} className="book-authors">
                        {author}
                    </div>
                ))}
            </div>
        );
    }
}

export default Book;
