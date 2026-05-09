import React from "react";

function Child(props)
{
  return(
    <div>
      <h1>The student details</h1>
      <p>Name: {props.name}</p>
      <p>Roll no:{props.rollno}</p>
      <p>Branch:{props.branch}</p>
    </div>
  );
}

export default function App()
{
  return(
    <div>
      <Child name="pramoda" rollno="75" branch="IT"></Child>
      <Child name="caroline" rollno="65" branch="CSM"></Child>
      <Child name="Klaus" rollno="55" branch="CSE"></Child>
    </div>
  );
}