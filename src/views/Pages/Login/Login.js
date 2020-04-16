import React, { useState } from "react";
import { connect } from "react-redux";

// import actions
import { setUser } from "../../../redux/actions";

import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

const Login = ({ setUser }) => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });

  const _handleOnClick = () => {
    console.log("login submit");
    setUser(account.username, account.password);
  };

  const _handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setAccount({ ...account, [name]: value });
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        name="username"
                        onChange={(evt) => _handleOnChange(evt)}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={(evt) => _handleOnChange(evt)}
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button
                          color="primary"
                          className="px-4"
                          onClick={() => _handleOnClick()}
                        >
                          Login
                        </Button>
                      </Col>
                      <Col xs="6" className="text-right">
                        <Link to="forget-password">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CardBody className="text-center">
                  <div>
                    <h2>Sign Up</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Similique expedita voluptate eius, officia et sequi est
                      deleniti.
                    </p>
                    <Link to="/register">
                      <Button
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
// Đéo hiểu sao lại có thằng email xuất hiệntrong state
const mapStateToProps = (state) => {
  const {
    appReducers: { data },
  } = state;
  console.log(state);
  return {
    data,
  };
};
// Đéo hiểu sao lại có thằng email xuất hiệntrong state
const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
