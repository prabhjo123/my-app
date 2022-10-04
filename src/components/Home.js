import React,{useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
 const [users,setUsers] = useState([]);
 useEffect(()=> {
  loadUsers();
 } ,[]);

 const loadUsers = async()=>{
  const result = await axios.get("http://localhost:3003/users");
  setUsers(result.data);
 }

 const deleteUser = async id =>{
  await axios.delete(`http://localhost:3003/users/${id}`);
  loadUsers();
 }


  return (
    <div className='container'>
    <div className="py-4">
      <h1 text align = "center">User Table</h1>
    <table className="table border shadow">
      <thead className="thead-dark">
            <tr>
                <th scope="col">Sr no.</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
            </tr>
      </thead>
    <tbody>
      {
        users.map((user,index)=>(
          <tr>
              <th scopr="row"> {index + 1}</th>
              <td>{user.Name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className='btn btn-primary mx-2'to={`/view/${user.id}`}>View</Link>
                <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                <Link className='btn btn-danger' onClick={()=> deleteUser(user.id)}>Delete</Link>
              </td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
</div>
    
  )
}
