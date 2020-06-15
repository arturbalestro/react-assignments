import React from 'react';

const UserOutput = (props) => {
    return(
        <div className="userOutputBox" style={ props.bg }>
            <h1>{props.salute}, {props.userName}!</h1>
            <p>{props.welcomeMessage}</p>
        </div>
    )
}

export default UserOutput;