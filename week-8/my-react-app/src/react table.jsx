import React from "react";

export default function App()
{
  const students=[
    { name: "Pramoda", roll: 75, branch: "IT" },
    { name: "Caroline", roll: 65, branch: "CSM" },
    { name: "Klaus", roll: 55, branch: "CSE" }
  ];

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
          </tr>
        </thead>

        <tbody>
          
         {students.map((s,index)=>{
          return(
            <tr key={index}>
            <td>{s.name}</td>
            <td>{s.roll}</td>
            <td>{s.branch}</td>
          </tr>
          );
         })}
        </tbody>
      </table>
    </div>
  );
}