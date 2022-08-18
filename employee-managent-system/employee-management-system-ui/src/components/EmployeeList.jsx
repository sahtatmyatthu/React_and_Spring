import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee=(e, id)=>{
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res)=>{
      if(employees){
        setEmployees((prevElement)=>{
          return prevElement.filter((employee)=> employee.id!==id);
        })
      }
    })

  }
  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addemployee")}
          className="rounded bg-slate-600 text-white px-6 py-2"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
              <th className="">First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th className="text-middle">Actions</th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee employee={employee} deleteEmployee={deleteEmployee} key={employee.id}></Employee>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
