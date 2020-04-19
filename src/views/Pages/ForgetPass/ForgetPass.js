import React, {useState} from "react";
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
  Row,
} from "reactstrap";
const ForgetPass = () => {
  const [inputValue, setInputVale] = useState('')
  const _handleOnChange = (evt) => {
    // console.log(evt);
    setInputVale(evt.target.value)
  };
  const _handleOnClick = () => {
    console.log('click')
  }


  return (
    <div className="forgot-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Forgot Password</h1>
                    <p className="text-muted">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sed quod temporibus est ipsum minima fuga obcaecati
                      quibusdam, molestias corrupti mollitia dignissimos
                      excepturi voluptates. Reprehenderit ab eos, fugiat error
                      veniam omnis.
                    </p>
                    <InputGroup className="mb-3">
                      <Input
                        type="email"
                        placeholder="Username"
                        autoComplete="username"
                        name="username"
                        onChange={(evt) => _handleOnChange(evt)}
                        value={inputValue}
                      />
                      <Button
                        color="primary"
                        className="px-4"
                        onClick={() => _handleOnClick()}
                      >
                        Reset my Password
                      </Button>
                    </InputGroup>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgetPass;
