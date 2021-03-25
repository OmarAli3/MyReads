import React from "react";
import { Route } from "react-router-dom";
import "../styles/App.css";
import * as BooksAPI from "../BooksAPI";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.shelvesTemplate = [
            {
                id: "currentlyReading",
                bookShelfTitle: "Currently Reading",
                bookList: [],
            },
            {
                id: "wantToRead",
                bookShelfTitle: "Want to Read",
                bookList: [],
            },
            {
                id: "read",
                bookShelfTitle: "Read",
                bookList: [],
            },
        ];
        this.state = {
            books: [],
            bookShelves: [],
        };
    }
    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                console.log(books);
                books = books.map((book) => ({
                    bookId: book.id,
                    url: book.imageLinks.thumbnail,
                    bookShelf: book.shelf,
                    bookTitle: book.title,
                    bookAuthors: book.authors,
                }));
                const bookShelves = this.putOnShelf(books);
                this.setState({ books, bookShelves });
            })
            .catch((e) => {
                console.log(e);
            });
    }
    putOnShelf = (books) => {
        return this.shelvesTemplate.map((shelf) => ({
            id: shelf.id,
            bookShelfTitle:shelf.bookShelfTitle,
            bookList: books.filter((book) => book.bookShelf === shelf.id),
        }));
    };
    handleChangeShelf = (bookId, newShelf) => {
        console.log(bookId, newShelf)
        BooksAPI.update({ id: bookId }, newShelf)
            .then(() => {
                const changedBook = this.state.books.find(
                    (book) => book.bookId === bookId
                );
                changedBook.bookShelf = newShelf;
                const books = this.state.books.map((book) =>
                    book.bookTitle === changedBook.title ? changedBook : book
                );
                const bookShelves = this.putOnShelf(books);
                this.setState({ books, bookShelves });
            })
            .catch((e) => {
                console.log(e);
            });
    };
    getExistingBook = (id) =>
        this.state.books.find((book) => book.bookId === id);
    render() {
        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() => (
                        <HomePage
                            bookShelves={this.state.bookShelves}
                            onChangeShelf={this.handleChangeShelf}
                        />
                    )}
                />
                <Route
                    path="/search"
                    render={() => (
                        <SearchPage
                            onChangeShelf={this.handleChangeShelf}
                            getExistingBook={this.getExistingBook}
                        />
                    )}
                />
            </div>
        );
    }
}

export default BooksApp;
