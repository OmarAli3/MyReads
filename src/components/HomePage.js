import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class HomePage extends Component {
    render() {
        const { bookShelves, onChangeShelf } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {bookShelves.map((shelf, idx) => (
                            <BookShelf
                                key={idx}
                                bookShelfTitle={shelf.bookShelfTitle}
                                bookList={shelf.bookList}
                                onChangeShelf={onChangeShelf}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;
