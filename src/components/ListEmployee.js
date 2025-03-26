import { useEffect, useState } from "react"
import EmployeeService from "../Service/EmployeeService"
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom'
const EmployeeList = () => {
    const [employee, setEmployee] = useState([])


    useEffect(() => {
        getAllEmployees()
    }, [])
    const getAllEmployees = () => {
        EmployeeService.getEmployees().then((response) => {
            setEmployee(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        });
    }
    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id).then(response => {
            getAllEmployees()
        }).catch(error => {
            console.log(error);
        })
    }




    return (
        <div className="container-fluid my-4">
          {/* Add table-responsive for responsiveness */}
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Emp ID</th>
                  <th>Emp Name</th>
                  <th>Emp Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employee.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.sal}</td>
                    <td>
                      <Link className="btn btn-info btn-sm" to={`/employees/${d.id}`}>
                        Update
                      </Link>
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => deleteEmployee(d.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}
export default EmployeeList;
