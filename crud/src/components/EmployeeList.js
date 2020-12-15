import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";
import Moment from "react-moment";

export const EmployeeList = (props) => {
  const [data, setData] = useState([]);
  const GetData = async () => {
    const result = await axios("http://localhost:3000/employees");
    setData(result.data);
  };

  useEffect(() => {
    GetData();
  }, []);

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:3000/employees/${id}`)
      .then(() => GetData())
      .catch((err) => console.log(err));
  };

  const editEmployee = (id) => {
    props.history.push({
      pathname: `/EditEmployee/${id}`,
    });
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col py-2 border rounded>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"> </i>
              <h1> Lista de Funcionários </h1>
            </CardHeader>
            <CardBody>
              <Table bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th> Nome </th> <th> Cargo </th> <th> Data Nascimento </th>
                    <th> Salário </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td> {item.name} </td> <td> {item.position} </td>
                        <td>
                          <Moment format="DD/MM/YYYY">{item.bornDate}</Moment>
                        </td>
                        <td> R$ {item.salary} </td>
                        <td>
                          <div className="btn-group">
                            <Button
                              className=" btn-icon"
                              color="info"
                              size="ls"
                              type="submit"
                              onClick={() => {
                                editEmployee(item.id);
                              }}
                            >
                              Edit
                            </Button>

                            <Button
                              className=" btn-icon"
                              color="danger"
                              size="sm"
                              type="submit"
                              onClick={() => {
                                deleteEmployee(item.id);
                                window.location.reload();
                              }}
                            >
                              Delete
                            </Button>
                          </div>
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
    </div>
  );
};
