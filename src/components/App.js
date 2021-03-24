import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../styles/App.css";
import Book from "./Book";

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <button
                                className="close-search"
                                onClick={() =>
                                    this.setState({ showSearchPage: false })
                                }
                            >
                                Close
                            </button>
                            <div className="search-books-input-wrapper">
                                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                                <input
                                    type="text"
                                    placeholder="Search by title or author"
                                />
                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">
                                        Currently Reading
                                    </h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <li>
                                                <Book
                                                    bookImage={
                                                        'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
                                                    }
                                                    bookShelf={
                                                        "Currently Reading"
                                                    }
                                                    bookTitle={
                                                        "To Kill a Mockingbird"
                                                    }
                                                    bookAuthor={"Harper Lee"}
                                                />
                                            </li>
                                            <li>
                                                <Book
                                                    bookImage={
                                                        'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
                                                    }
                                                    bookShelf={
                                                        "Currently Reading"
                                                    }
                                                    bookTitle={"Ender's Game"}
                                                    bookAuthor={
                                                        "Orson Scott Card"
                                                    }
                                                />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">
                                        Want to Read
                                    </h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <li>
                                                <Book
                                                    bookImage={
                                                        'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'
                                                    }
                                                    bookShelf={"Want to Read"}
                                                    bookTitle={"1776"}
                                                    bookAuthor={
                                                        "David McCullough"
                                                    }
                                                />
                                            </li>
                                            <li>
                                                <Book
                                                    bookImage={
                                                        'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")'
                                                    }
                                                    bookShelf={"Want to Read"}
                                                    bookTitle={
                                                        "Harry Potter and the Sorcerer's Stone"
                                                    }
                                                    bookAuthor={"J.K. Rowling"}
                                                />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <li>
                                                <Book
                                                    bookImage={
                                                        'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")'
                                                    }
                                                    bookShelf={"Read"}
                                                    bookTitle={"The Hobbit"}
                                                    bookAuthor={
                                                        "J.R.R. Tolkien"
                                                    }
                                                />
                                            </li>
                                            <li>
                                                <Book
                                                    bookImage={
                                                        'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")'
                                                    }
                                                    bookShelf={"Read"}
                                                    bookTitle={
                                                        "Oh, the Places You'll Go!"
                                                    }
                                                    bookAuthor={"Seuss"}
                                                />
                                            </li>
                                            <li>
                                                <Book
                                                    bookImage={
                                                        'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")'
                                                    }
                                                    bookShelf={"Read"}
                                                    bookTitle={
                                                        "The Adventures of Tom Sawyer"
                                                    }
                                                    bookAuthor={"Mark Twain"}
                                                />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="open-search">
                            <button
                                onClick={() =>
                                    this.setState({ showSearchPage: true })
                                }
                            >
                                Add a book
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default BooksApp;