import React from "react";
// import * as BooksAPI from './BooksAPI'
import "../styles/App.css";
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

class BooksApp extends React.Component {
    state = {
        bookShelves: [
            {
                bookShelfTitle: "Currently Reading",
                bookList: [
                    {
                        url:
                            "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                        bookShelf: "Currently Reading",
                        bookTitle: "To Kill a Mockingbird",
                        bookAuthor: "Harper Lee",
                    },
                    {
                        url:
                            "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
                        bookShelf: "Currently Reading",
                        bookTitle: "Ender's Game",
                        bookAuthor: "Orson Scott Card",
                    },
                ],
            },
            {
                bookShelfTitle: "Want to Read",
                bookList: [
                    {
                        url:
                            "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
                        bookShelf: "Want to Read",
                        bookTitle: "1776",
                        bookAuthor: "David McCullough",
                    },
                    {
                        url:
                            "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
                        bookShelf: "Want to Read",
                        bookTitle: "Harry Potter and the Sorcerer's Stone",
                        bookAuthor: "J.K. Rowling",
                    },
                ],
            },
        ],
        showSearchPage: false,
    };
    pageHandler = (isSearch) => {
        this.setState({ showSearchPage: isSearch });
    };
    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <SearchPage
                        bookShelves={this.state.bookShelves}
                        showSearchPage={this.state.showSearchPage}
                        onBackHome={this.pageHandler}
                    />
                ) : (
                    <HomePage
                        bookShelves={this.state.bookShelves}
                        showSearchPage={this.state.showSearchPage}
                        onSearch={this.pageHandler}
                    />
                )}
            </div>
        );
    }
}

export default BooksApp;
