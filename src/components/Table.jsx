import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


const Table = ({ rows,deleteRow,editRow }) => {
  return (
    <div className="">
      <table className="">
        <thead>
          <tr>
            <th>Page</th>
            <th className="">Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>{row.page}</td>
                <td className="">{row.desc}</td>
                <td>
                  <span className={`${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td className="">
                  <span className="">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table