import React from "react";

const BookCover = (props) => {
    return (
        <div
            className="book-cover"
            style={{
                width: 128,
                height: 193,
                backgroundImage: props.bookImage,
            }}
        ></div>
    );
};

export default BookCover;
