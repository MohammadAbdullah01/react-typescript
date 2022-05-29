import React from 'react';
import User from './User';

const Users = () => {
    const addUser = (): void => {
        const counter: number = 13
        console.log(counter);
    }
    return (
        <div style={{ border: "1px solid" }}>
            <h1>my users</h1>
            <User
                name='ab'
                age={12}
                addUser={addUser}
            ></User>
        </div>
    );
};

export default Users;