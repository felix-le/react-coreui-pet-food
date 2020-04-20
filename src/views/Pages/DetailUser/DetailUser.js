import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

const DetailUser = () => {
  let {id} = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout( async() =>{
      const fetchUsers = async () =>{
        const res = await axios.get(`http://localhost:4000/users/${id}`)
        setUser(res.data)
      }
      fetchUsers();
    },100)
  }, [id]);
  return(
    <>
      {Object.keys(user).length > 0 ? (
        <div key={user.id} className="well">
          <h1>{user.name}</h1>
          <h3><img src={user.avatar} alt={user.name} style={{"max-height": '320px'}}/></h3>
          <p>{user.role}</p>
          <p>{user.gender}</p>
          <p>{user.email}</p>
        </div>
      ) : null}
    </>
  )

}

export default DetailUser;