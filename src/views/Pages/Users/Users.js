import React, { useEffect } from "react";
import { Spinner } from "reactstrap";
import { connect } from "react-redux";

// Import components
// import Button from "./components/Button";
import User from "./components/User";

import { searchUser, removeUser, fectchUsers } from "../../../redux/actions";

// configs
import { URL_PAGE } from "../../../configs";

const Users = ({
  history,
  visibleUsersRedux,
  loading,
  error,
  data,
  initUsersRedux,
  removeUser,
  fectchUsers,
  searchUser,
}) => {
  // const [visibleUsersRedux, setVisibleUsersRedux] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fectchUsers();
    }, 1000);
  }, []);
  const _handleUpdate = (id) => {
    console.log("update", id);
  };

  const _handleView = (id) => {
    history.push(`${URL_PAGE.USERS_DETAIL}/${id}`);
  };

  const _handleDelete = (id) => {
    removeUser(id);
  };
  // console.log('initialUsers', initialUsers)
  const _handleSearchValue = (event) => {
    const { value } = event.target;
    const keywordsSearch = value.toLowerCase();
    searchUser(keywordsSearch);
  };
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
            placeholder="Please input keywords of name"
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
            {visibleUsersRedux.length ? (
              visibleUsersRedux.map((user, idx) => {
                return (
                  <tr key={Math.random()} className="userItem">
                    <User
                      idx={idx}
                      name={user.name}
                      avatar={user.avatar}
                      role={user.role}
                      gender={user.gender}
                      email={user.email}
                      handleUpdate={() => _handleUpdate(user.id)}
                      handleView={() => _handleView(user.id)}
                      handleDelete={() => _handleDelete(user.id)}
                    />
                  </tr>
                );
              })
            ) : (
              <Spinner color="info" />
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    appReducers: {
      visibleUsersRedux,
      loading,
      error,
      data,
      initUsersRedux,
      keywords,
    },
  } = state;
  // console.log(state);
  return {
    visibleUsersRedux,
    loading,
    error,
    data,
    initUsersRedux,
    keywords,
  };
};

const mapDispatchToProps = {
  removeUser,
  fectchUsers,
  searchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
