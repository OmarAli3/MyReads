import React from "react";

const BookShelfChanger = (props) => {
    const options = [
        {
            value: "Currently Reading",
        },
        {
            value: "Want to Read",
        },
        {
            value: "Read",
        },
        {
            value: "None",
        },
    ];
    return (
        <div className="book-shelf-changer">
            <select>
                <option value="move" disabled>
                    Move to...
                </option>
                {options.map((option, idx) => (
                    <option
                        key={idx}
                        value={option.value}
                        selected={props.selectedOption === option.value}
                        className={
                            props.selectedOption === option.value
                                ? "selected"
                                : ""
                        }
                    >
                        {option.value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BookShelfChanger;
