import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory , useParams} from 'react-router-dom';

const EditUser = () => {
  let history = useHistory();
    const {id} = useParams();
    alert(id);
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

    useEffect(()=>{
        loadUser()
    },[]);

    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:3003/users/${id}`,user);
      history.push("/registration");
    }

    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
  return (
    <>
    <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
            <h1 className='text-center mb-4'>Edit user</h1>
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
                <button className="btn btn-primary btn-block">Update user</button>
            </form>
        </div>
    </div>
    </>
  )
}
export default EditUser
