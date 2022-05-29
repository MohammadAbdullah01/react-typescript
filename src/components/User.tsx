import React, { FC } from 'react';


// example one
// const User = (props: { age: number }) => {
//     const age = props.age;
//     return (
//         <div>
//             <h3>One user</h3>
//         </div>
//     );
// };


//example 2
// const User: FC<{ name: string, age: number }> = (props) => {
//     const age = props.age;
//     const name = props.name
//     return (
//         <div>
//             <h3>One user</h3>
//             <p>name:{name} </p>
//             <p>age:{age} </p>
//         </div>
//     );
// };

//example 3

interface Profile {
    name: string,
    age: number,
    addUser: () => void
}
const User: FC<Profile> = ({ name, age, addUser }) => {
    return (
        <div>
            <h3>One user</h3>
            {/* <p>name:{name} </p>
            <p>age:{age} </p> */}
            <button onClick={addUser}>click</button>
        </div>
    );
};

export default User;