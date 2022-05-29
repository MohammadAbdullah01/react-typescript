import React from 'react';
import logo from './logo.svg';
import './App.css';
import { fireEvent } from '@testing-library/react';
import Counter from './components/Counter';
import Users from './components/Users';
import Students from './components/Students';

let student: string = 'abdullah'
student = "6545645"

let age: number = 64;

let myArr: string[] = ["jlsdf", "jlsdf", "5454"]

let strarr: string[] = ['lsjlk', "ksjfakjfkl"]

interface MyObj {
  student: string,
  institute: string,
  age?: number
  isGood: any
}

const myObj: MyObj = {
  student: "abdullah",
  institute: "ndm dhaka",
  isGood: 45
}

const handleAddUser = (firstName: string, lastName: string): string => {
  const total: number = 2122;
  return firstName;
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Users></Users>
      <Students></Students>
    </div>
  );
}

export default App;
