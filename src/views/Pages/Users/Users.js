import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import { connect } from "react-redux";
import Button from "./components/Button";
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
  const [show, setShow] = useState(false);
  const [modelText, setModelText] = useState({
    title: "Do you want to delete user?",
    des: "no --> comeback, yes --> moving on",
  });
  useEffect(() => {
    setTimeout(() => {
      fectchUsers();
    }, 100);
  }, []);
  const _handleUpdate = (id) => {
    console.log("update", id);
  };

  const _handleView = (id) => {
    history.push(`${URL_PAGE.USERS_DETAIL}/${id}`);
  };

  const _handleDelete = (id) => {
    // _handleShowUp(id)
    removeUser(id);
  };
  // console.log('initialUsers', initialUsers)
  const _handleSearchValue = (event) => {
    const { value } = event.target;
    const keywordsSearch = value.toLowerCase();
    searchUser(keywordsSearch);
  };

  const _handleYesButton = () => {
    setModelText({
      title: " please confirm",
      des: " if you click yes --> it will be delete ",
    });
  };

  const _handleNoButton = () => {
    setShow(false);
  };
  const Modelcontent = () => {
    return (
      <div className={`modalUser ${show ? "show-up-modal" : ""}`} id="myModal">
        <div className="modal-content-modalUser">
          <div className="modalcontent-wrapper">
            <span className="close-modalUser" onClick={_handleNoButton}>
              &times;
            </span>
            <h2 className="text-center">{modelText.title}</h2>
            <p>{modelText.des}</p>
            <Button
              handleClick={_handleNoButton}
              nameBtn="No"
              btnType="btn btn-primary btn-block"
            />
            <Button
              handleClick={_handleYesButton}
              nameBtn="Yes"
              btnType="btn btn-danger btn-block"
            />
          </div>
        </div>
      </div>
    );
  };

  const _handleConfirm = (id) => {};

  const _handleOverlay = (id) => {
    console.log(id);
    setShow(true);
  };
  console.log(show);
  return (
    <div className="user-page-wrapper">
      <header className="user-header">
        <h3>Member</h3>
        <Modelcontent />
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
                      handleDelete={() => _handleOverlay(user.id)}
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
