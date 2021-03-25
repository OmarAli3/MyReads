import React from "react";

const BookShelfChanger = (props) => {
    const shelves = [
        {
            name: "Currently Reading",
        },
        {
            name: "Want to Read",
        },
        {
            name: "Read",
        },
        {
            name: "None",
        },
    ];
    const shelfId = {
        "Currently Reading": "currentlyReading",
        "Want to Read": "wantToRead",
        Read: "read",
        None: "none",
    };
    return (
        <div className="book-shelf-changer">
            <select
                onChange={(event) =>
                    props.onChangeShelf(event.target.value)
                }
                value={props.selectedShelf}
            >
                <option value="move" disabled>
                    Move to...
                </option>
                {shelves.map((shelf, idx) => (
                    <option key={idx} value={shelfId[shelf.name]}>
                        {props.selectedShelf === shelfId[shelf.name]
                            ? `✓ ${shelf.name}`
                            : shelf.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BookShelfChanger;
