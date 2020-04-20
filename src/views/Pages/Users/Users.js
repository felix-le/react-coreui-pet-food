import React, { useState, useEffect } from "react";
import axios from 'axios'
// Import components
import Button from "./components/Button";
import User from "./components/User";

const Users = () => {
  const [initialUsers, setInitiaUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);

  const _handleSearchValue = (event) => {
    const { value } = event.target;
    console.log(value);
  };

  useEffect(() => {
    setTimeout(() =>{
      const fetchUsers = async () =>{
        const res = await axios.get("http://localhost:4000/users")
        console.log(res)
        setInitiaUsers(res.data)
        setVisibleUsers(res.data)
      };
      fetchUsers()
    }, 100)
  }, []);
  const _handleUpdate = (id) => {
    console.log('update', id)
  }

  const _handleView = (id) =>{
  console.log("OUTPUT: _handleView -> id", id);
  }

  const _handleDelete= id =>{
  console.log("OUTPUT: Users -> id", id);
    
  }

  return (
    <div className="user-page-wrapper">
      <header className="user-header">
        <h3>Member</h3>
        <div className="input-group">
          <button type="button" className="btn search-btn">
            <i className="icon-magnifier"></i>
          </button>
          <input
            type="text"
            className="form-control input-search"
            placeholder="Please input your keywords"
            onChange={_handleSearchValue}
          />
        </div>
      </header>
      <section className="user-body">
        <table className="user-table">
          <thead>
            <th>No.</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Role</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Action</th>
          </thead>
          <tbody>
            {visibleUsers.length ? (
              visibleUsers.map((user, idx) => {
                return(
                  <tr key={Math.random()} className="userItem">
                    <User 
                      idx={idx}
                      name ={user.name}
                      avatar={user.avatar}
                      role={user.role}
                      gender={user.gender}
                      email={user.email}
                      handleUpdate={() => _handleUpdate(user.id)}
                      handleView={() => _handleView(user.id)}
                      handleDelete={() => _handleDelete(user.id)}
                    />
                  </tr>





                )
              })
            ): (<div>loading...</div>)}




          </tbody>
        </table>

        <ul className="user-list no-bullet">
          {visibleUsers.length ? (
            visibleUsers.map((user, idx) => {
              return(
                <li key={Math.random()} className="userItem">
                  <User 
                    idx={idx}
                    name ={user.name}
                    avatar={user.avatar}
                    role={user.role}
                    gender={user.gender}
                    email={user.email}
                    handleUpdate={() => _handleUpdate(user.id)}
                    handleView={() => _handleView(user.id)}
                    handleDelete={() => _handleDelete(user.id)}
                  />
                </li>
              )
            })
          ): (<div>loading...</div>)}
        </ul>
      </section>
    </div>
  );
};

export default Users;
