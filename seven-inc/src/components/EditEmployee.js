import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";

export const EditEmployee = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
    bornDate: "",
    position: "",
  });

  const Url = `http://localhost:3000/employees/${props.match.params.id}`;

  useEffect(() => {
    const GetData = async () => {
      const result = await axios.get(Url);
      setEmployee(result.data);
    };
    GetData();
  }, []);

  const UpdateEmployee = (event) => {
    event.preventDefault();
    const data = {
      id: props.match.params.id,
      name: employee.name,
      salary: employee.salary,
      bornDate: employee.bornDate,
      position: employee.position,
    };
    axios.put(Url, data).then((result) => {
      props.history.push("/employees");
    });
  };

  const onChange = (event) => {
    event.persist();
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  return (
    <div className="app flex-row aling-items-center">
      <Container className="themed-container" fluid={true}>
        <Row className="justfy-content-center">
          <Col py-2 border rounded>
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={UpdateEmployee}>
                  <h1> Atualizar Funcionário </h1>
                  <InputGroup className="mb-3">
                    <Input
                      className="form-control"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome"
                      value={employee.name}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      className="form-control"
                      type="number"
                      name="salary"
                      id="salary"
                      placeholder="Salário"
                      value={employee.salary}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      className="form-control"
                      type="date"
                      name="bornDate"
                      id="bornDate"
                      placeholder="Data Nascimento"
                      value={employee.bornDate}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input
                      className="form-control"
                      type="text"
                      name="position"
                      id="position"
                      placeholder="Cargo"
                      value={employee.position}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          onClick={() => {
                            window.location.replace(
                              "http://localhost:3001/EmployeeList"
                            );
                          }}
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Salvar</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button
                          onClick={() => {
                            window.location.replace(
                              "http://localhost:3001/EmployeeList"
                            );
                          }}
                          type="submit"
                          className="btn btn-danger mb-1"
                          block
                        >
                          <span>Cancelar</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
