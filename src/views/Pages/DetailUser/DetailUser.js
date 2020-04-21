import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

const DetailUser = () => {
  let { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    setTimeout(async () => {
      const fetchUsers = async () => {
        const res = await axios.get(`http://localhost:4000/users/${id}`);
        setUser(res.data);
      };
      fetchUsers();
    }, 100);
  }, [id]);

  const userDetails = user
    ? Object.entries(user)
    : [
        [
          "id",
          <span>
            <i className="text-muted icon-ban"></i> Not found
          </span>,
        ],
      ];

  return (
    <>
      {Object.keys(user).length > 0 ? (
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong>
                  <i className="icon-info pr-1"></i>
                  User id: {id}
                </strong>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    {userDetails.map(([key, value]) => {
                      return (
                        <tr key={key}>
                          <td>{`${key}:`}</td>
                          <td>
                            <strong>
                              {value === user.avatar ? (
                                <img
                                  src={user.avatar}
                                  alt={user.name}
                                  style={{ maxHeight: "300px" }}
                                />
                              ) : (
                                value
                              )}
                            </strong>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default DetailUser;
