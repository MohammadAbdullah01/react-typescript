import React, { FC } from 'react';
import ModelUser from '../types/models';

interface Props {
    student: ModelUser,
    addUser: (student: ModelUser) => void
}

const Student: FC<Props> = ({ addUser, student }) => {

    return (
        <div>
            <h1>name: {student.name}, email {student.email}</h1>
            <button onClick={() => addUser(student)}>add user</button>
        </div>
    );
};

export default Student;