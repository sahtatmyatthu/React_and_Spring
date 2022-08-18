import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };
  return (
    <tr className="text-left px-6 py-4 whitespace-nowrap" key={employee.id}>
      <td>
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td>
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td>
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>
      <td className="font-medium text-sm text-left">
        <button
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer "
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;
