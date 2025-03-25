import { useEffect, useState } from "react"
import EmployeeService from "../Service/EmployeeService"

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




    return <div>
        <table className="table table-striped table-bordered my-4">
            <thead>
                <tr>
                    <td>Emp id</td>
                    <td>Emp name</td>
                    <td>Emp sal</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map((d, i) =>
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.sal}</td>
                            <td><Link className="btn btn-info" to={`/employees/${d.id}`}>Update</Link>
                                <button className='btn btn-danger' style={{ marginLeft: 10 }} onClick={() => { deleteEmployee(d.id) }}>Delete</button>
                            </td>


                        </tr>)

                }

            </tbody>
        </table>
    </div>
}
export default EmployeeList;