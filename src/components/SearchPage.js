import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

class SearchPage extends Component {
    state = {
        searchList: [],
    };
    handleChange = (event) => {
        BooksAPI.search(event.target.value)
            .then(async (res) => {
                try {
                    const searchList = res
                        .filter((book) => book.imageLinks)
                        .map((book) => {
                            const existingBook = this.props.getExistingBook(
                                book.id
                            );
                            return {
                                bookId: book.id,
                                url: book.imageLinks.thumbnail,
                                bookShelf: existingBook
                                    ? existingBook.bookShelf
                                    : "none",
                                bookTitle: book.title,
                                bookAuthors: book.authors || [],
                            };
                        });
                    this.setState({ searchList });
                } catch (e) {
                    console.log(e);
                    this.setState({ searchList: [] });
                    return e;
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };
    handleUpdate = (bookId, newShelf) => {
        this.props.onChangeShelf(bookId, newShelf);
        const changedBook = this.state.searchList.find(
            (book) => book.bookId === bookId
        );
        changedBook.bookShelf = newShelf;
        const searchList = this.state.searchList.map((book) =>
            book.bookTitle === changedBook.title ? changedBook : book
        );
        this.setState({ searchList });
    };
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            onChange={this.handleChange}
                            type="text"
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchList &&
                            this.state.searchList.map((book, idx) => (
                                <li key={idx}>
                                    <Book
                                        bookImage={`url(${book.url})`}
                                        bookTitle={book.bookTitle}
                                        bookAuthors={book.bookAuthors}
                                        bookShelf={book.bookShelf}
                                        onUpdate={(newShelf) =>
                                            this.handleUpdate(
                                                book.bookId,
                                                newShelf
                                            )
                                        }
                                    />
                                </li>
                            ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;
