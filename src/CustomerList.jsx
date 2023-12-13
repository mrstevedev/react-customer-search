import React from "react";

const CustomerList = ({ customers }) => {
  console.log("List array in CustomerList:::", customers);
  return (
    <table>
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="left">Age</th>
          <th align="left">Location</th>
          <th align="left">Gender</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((data) => {
          return (
            <tr key={data.name}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.location}</td>
              <td>{data.gender}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomerList;
