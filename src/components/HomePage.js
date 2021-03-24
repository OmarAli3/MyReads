import React, { Component } from "react";
import BookShelf from "./BookShelf";

class HomePage extends Component {
    state = {
    };
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.bookShelves.map((shelf, idx) => (
                            <BookShelf
                                key={idx}
                                bookShelfTitle={shelf.bookShelfTitle}
                                bookList={shelf.bookList}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <button
                        onClick={()=>this.props.onSearch(true)}
                    >
                        Add a book
                    </button>
                </div>
            </div>
        );
    }
}

export default HomePage;
