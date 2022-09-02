import React, {useState, useEffect}from 'react'
import { useNavigate, Link , useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

export const AddEmployeeComponent = () => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const history= useNavigate();
    const {id}=useParams();


    const saveOrUpdateEmployee =(e)=>{
        e.preventDefault();

        const employee ={firstName, lastName, emailId}

        if(id){
             EmployeeService.updateEmployee(id, employee).then((response) => {
                history('/employees');
             }).catch(error => {
                console.log(error);
             })
             
        }else{
            EmployeeService.createEmployee(employee).then((response)=>{
                console.log(response.data);
    
                history('/employees');
    
            }).catch(error =>{
                console.log(error)
            })
        }
    }

    useEffect(() => {
      EmployeeService.getEmployeeById(id).then((response)=>{
        setfirstName(response.data.firstName);
        setlastName(response.data.lastName);
        setEmailId(response.data.emailId);
      }).catch(error =>{ console.log(error)
    })
    }, [])
    
    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

  return (
    <div>
        <br/><br/>
        <div className='contaner'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className="from-group mb-2">
                                <label className='form-label'> First Name :</label>
                                <input
                                type="text"
                                placeholder='Enter first name'
                                name='firstName'
                                className='form-control'
                                value={firstName}
                                onChange={(e) => setfirstName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="from-group mb-2">
                                <label className='form-label'> Last Name :</label>
                                <input
                                type="text"
                                placeholder='Enter last name'
                                name='lastName'
                                className='form-control'
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="from-group mb-2">
                                <label className='form-label'> Email Id :</label>
                                <input
                                type="email"
                                placeholder='Enter Email ID'
                                name='emailId'
                                className='form-control'
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                                >
                                </input>
                            </div>
                            <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                            <Link to="/employees" className="btn btn-danger" > Cancel </Link>

                        </form>


                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent