import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddUser = () => {
  let history = useHistory();
    const [user,setUser] = useState({
        Name: "",
        username: "",
        email: "",
        phone: ""
    });
    
    const{Name, username, email, phone} = user;

    const onInputChange = e => {
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value});
    };

    const onSubmit = async e => {
      e.preventDefault();
      await axios.post("http://localhost:3003/users",user);
      history.push("/registration");
    }
  return (
    <>
    <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
            <h1 className='text-center mb-4'>Add user</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                  <input type="text" 
                  className='form-control form-control-lg'
                  placeholder='Enter your name' 
                  name='Name'
                  value ={Name} 
                  onChange={e => onInputChange(e)}/>
                </div>
                <div className='form-group'>
                  <input type="text" className='form-control form-control-lg' 
                  placeholder='Enter username' 
                  name='username' 
                  value ={username} 
                  onChange={e => onInputChange(e)}/>
                </div>
                <div className='form-group'>
                  <input type="email" className='form-control form-control-lg' 
                  placeholder='Enter email' 
                  name='email' 
                  value ={email} 
                  onChange={e => onInputChange(e)}/>
                </div>
                <div className='form-group'>
                  <input type="text" className='form-control form-control-lg' 
                  placeholder='Enter phone number' 
                  name='phone' 
                  value ={phone} onChange={e => onInputChange(e)}/>
                </div>
                <button className="btn btn-primary btn-block">Add user</button>
            </form>
        </div>
    </div>
   
    </>
  )
}

export default AddUser
