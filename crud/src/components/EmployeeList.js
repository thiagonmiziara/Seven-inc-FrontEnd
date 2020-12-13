import React, { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";
import Moment from "react-moment";

export const EmployeeList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const result = await axios("http://localhost:3000/employees");
      setData(result.data);
    };
    GetData();
  }, []);

  const deleteEmployee = (id) => {
    axios.delete("http://localhost:3000/employees/:id" + id).then((result) => {
      props.history.push("/EmployeeList");
    });
  };

  const editEmployee = (id) => {
    props.history.push({
      pathname: "http://localhost:3000/employees/:id" + id,
    });
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <h1>Lista de Funcionários</h1>
            </CardHeader>
            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Data Nascimento</th>
                    <th>Salário</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <tr Key={index}>
                        <td>{item.name}</td>
                        <td>{item.position}</td>
                        <td>
                          <Moment format="DD/MM/YYYY">{item.bornDate}</Moment>
                        </td>
                        <td>R${item.salary}</td>
                        <td>
                          <div className="btn-group">
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                editEmployee(item.Id);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                deleteEmployee(item.Id);
                              }}
                            >
                              Delete
                            </button>
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
