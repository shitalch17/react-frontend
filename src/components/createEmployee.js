import { useState ,useEffect} from 'react';
import EmployeeService from '../Service/EmployeeService';
import { useNavigate,useParams} from 'react-router-dom';
const CreateEmployee = () => {
   
    const [employee,setEmployee]=useState({id:'',name:'',sal:''})
    const navigate=useNavigate();
    const {id1}=useParams();

    useEffect(()=>
    {
        EmployeeService.getEmployeeById(id1).then(response=>
            {
               
               setEmployee(response.data);

            }).catch(error=>
                {
                    console.log(error)
                })
    },[])
    const title=()=>
    {
        if(id1)
        {
            return <h2>Update Employee</h2>
        }
        else{
            return <h2>Add Employee</h2>
        }
    }
    const saveorUpdateEmployee = (e) => {
        e.preventDefault();
       
        if(id1)
        {
            EmployeeService.updateEmployee(employee,id1).then(response=>
                {
                    navigate('/');
                }).catch(error=>
                    {
                        console.log(error);
                    })
        }
        else{
            EmployeeService.createEmployee(employee).then(response=>{
                console.log(response.data);
                navigate('/');
            }).catch(error=>{
                console.log(error);
            })
        }
       
    }
    return (

        <div className='container my-4'>
            
            <div class=" row card col-md-6 offset-md-3 offset-md-3">
                {
                    title()
                }
                <form onSubmit={saveorUpdateEmployee}>
                    <div className="form-group">
                        <label htmlForfor="id">Id</label>
                        <input type="text" className="form-control" id="id" name="id" value={employee.id} onChange={e=>setEmployee({...employee,id:e.target.value})} />
                        <label htmlForfor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={employee.name} onChange={e=>setEmployee({...employee,name:e.target.value})} />
                        <label htmlForfor="sal">Salary</label>
                        <input type="text" className="form-control" id="sal" name="sal" value={employee.sal} onChange={e=>setEmployee({...employee,sal:e.target.value})} />
                        <br />
                        <button className="btn btn-success" type="submit">Submit</button>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default CreateEmployee
