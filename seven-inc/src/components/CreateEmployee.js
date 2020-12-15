import React, { useState} from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Form,
  Input,
  InputGroup,
  Row,
  Container,
} from "reactstrap";

export const CreateEmployee = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
    bornDate: "",
    position: "",
  });

  const apiUrl = "http://localhost:3000/employees";

  const InsertEmployee = (event) => {
    event.preventDefault();
    const data = {
      name: employee.name,
      salary: employee.salary,
      bornDate: employee.bornDate,
      position: employee.position,
    };
    axios.post(apiUrl, data).then((result) => {
      props.history.push("/EmployeeList");
    });
  };
  const onChange = (event) => {
    event.persist();
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  return (
    <div className="app flex-row align-items-center">
      <Container className="themed-container" fluid={true}>
        <Row className="justfy-content-center mx-">
          <Col py-2 border rounded>
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={InsertEmployee}>
                  <h1> Cadastro de Funcionário </h1>
                  <InputGroup className="mb-3">
                    <Input
                      required
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
                      required
                      className="form-control"
                      type="Number"
                      name="salary"
                      id="salary"
                      placeholder="Salário"
                      value={employee.salary}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      required
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
                      required
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
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span> Registar </span>
                        </Button>
                      </Col>
                      <Col py-2 border rounded>
                        <Button className="btn btn-danger mb-1" block
                        onClick={()=>{
                          window.location.replace("http://localhost:3001/EmployeeList");
                        }}>
                          <span> Cancelar </span>
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
