import React from 'react';

const Char = (props) => {
    return(
        <button className="digit" onClick={() => props.removeDigit(props.index)}>
            {props.digit}
        </button>
    );
}

export default Char;