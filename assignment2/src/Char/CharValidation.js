import React from 'react';

const CharValidation = (props) => {
    return(
        <div className="charCounterText">
            <span>Chars: {props.currentLength}</span>
            <span className="errorMessage">{props.errorMessage}</span>
        </div>
    );
}

export default CharValidation;