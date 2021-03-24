import React, { Component } from "react";
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
    state = {
        bookShelf: this.props.bookShelf,
    };
    render() {
        const { bookImage, bookShelf, bookTitle, bookAuthor } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover bookImage={bookImage} />
                    <BookShelfChanger selectedOption={bookShelf} />
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthor}</div>
            </div>
        );
    }
}

export default Book;
