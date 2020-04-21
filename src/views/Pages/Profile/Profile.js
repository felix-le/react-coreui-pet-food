import React from "react";
import { Container, Col, Row, CardBody, Card, Button } from "reactstrap";

const Profile = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs="8">
            <Card>
              <CardBody>
                <h3>Profile</h3>
                <hr className="my-2" />
                <h5>Account</h5>
                <Row>
                  <Col xs="6">Username: admin</Col>
                  <Col xs="6">Role: ADMIN</Col>
                </Row>
                <hr className="my-2" />
                <h3>Personal</h3>
                <hr className="my-2" />
                <Row>
                  <Col xs="6">First Name: Anh</Col>
                  <Col xs="6">Last Name: Le Viet</Col>
                </Row>
                <Row>
                  <Col xs="12">Address: XXXXXX</Col>
                </Row>
                <Row>
                  <Col xs="6">City: Hanoi</Col>
                  <Col xs="6">Country: Vietnam</Col>
                </Row>
                <Row>
                  <Col>Birthday: Mar 11,1987</Col>
                </Row>
                <hr className="my-2" />
                <h3>Company</h3>
                <Row>
                  <Col xs="6">Position: Front End Developer</Col>
                  <Col xs="6">Department: PPPT</Col>
                </Row>
                <Row>
                  <Col>
                    Skills: HTML/CSS, SCSS, Javascript, Jquery, Angular,
                    ReactJS, React Typescript, Gulp
                  </Col>
                </Row>
                <hr className="my-2" />
                <h3>Contacts</h3>
                <Row>
                  <Col xs="6">Email: mc.vietanh@gmail.com</Col>
                  <Col xs="6">Phone Number: 0903xxxxxx</Col>
                </Row>
                <Row>
                  <Col>Github: https://github.com/vietanhle1987</Col>
                </Row>
                <Row>
                  <Col>skype: anh.viet87</Col>
                </Row>
                <hr className="my-2" />
                <Button color="primary">primary</Button>{" "}
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card xs="6" aline-item-center className="avatar-all-wrapper">
              <div className="img-avatar-wrapper">
                <img
                  src="https://bit.ly/34Q7iNM"
                  alt=""
                  className="avatar-admin"
                />
              </div>
              <div className="avatar-text-wrapper">
                <h2>
                  CEO / CO-FOUNDER <br /> LE VIET ANH
                </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus repellat, alias laboriosam atque ex tenetur
                  similique nam non dolor quos tempore exercitationem nihil
                  debitis temporibus cum hic quo neque quas!
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
