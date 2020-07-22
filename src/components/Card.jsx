import React from "react";
import './Card.css';

function cardColor(props) {
    if (props.red) {
        return "Red";
    } else if (props.green) {
        return "Green";
    } else if (props.blue) {
        return "Blue";
    } else if (props.purple) {
        return "Purple";
    }
    return '';
}

export default (props) => {
    return (
        <div className={`Card ${cardColor(props)}`}>
            <div className='Header'>
                <span className='title'>{props.title}</span>
            </div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    );
};