import React, {useState,useEffect} from 'react';
import { Link , useParams} from 'react-router-dom';
import axios from 'axios';

const View = () => {
    const [user,setUser] = useState({
        Name: "",
        username: "",
        email: "",
        phone: ""
    });
    const {id} = useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser = async () =>{
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }
  return (
    <div className='container py-4'>
        <Link className='btn btn-primary' to="/registration">Back to home</Link>
        <ul className='list-group py-4'>
            <li className='list-group-item'>name:  {user.Name}</li>
            <li className='list-group-item'>user name:  {user.username}</li>
            <li className='list-group-item'>email:  {user.email}</li>
            <li className='list-group-item'>phone:  {user.phone}</li>
        </ul>
    </div>
  )
}

export default View
