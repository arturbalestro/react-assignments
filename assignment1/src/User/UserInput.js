import React from 'react';

const UserInput = (props) => {
    return(
        <div className="userNameField">
            <input type="text" onChange={props.handleChangeUser} value={props.userName} />
        </div>
    )
}

export default UserInput;