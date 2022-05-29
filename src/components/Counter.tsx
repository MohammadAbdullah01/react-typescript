import React, { ChangeEvent, FormEvent, useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState<number>(50)
    const handleIncrease = (): void => {
        setCounter(counter + 1)
    }
    const handleSubmitUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {

    }
    return (
        <div>
            <h1>My first counter</h1>
            <h3>{counter}</h3>
            <button onClick={handleIncrease}>Increase</button>

        </div>
    );
};

export default Counter;