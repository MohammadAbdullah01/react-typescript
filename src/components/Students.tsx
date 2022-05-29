import React, { useEffect, useState } from 'react';
import ModelUser from '../types/models';
import Student from './Student';

const Students = () => {
    const [students, setStudents] = useState<ModelUser[]>([])
    const [users, setUsers] = useState<ModelUser[]>([])
    const addUser = (student: ModelUser): void => {
        const newUser: ModelUser = student;
        setUsers([...users, newUser])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])
    console.log(students);

    return (
        <div>
            <h1>Users: {users.length}</h1>
            {students.map(student => <Student
                student={student}
                addUser={addUser}
            ></Student>)}
        </div>
    );
};

export default Students;