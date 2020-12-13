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
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

export const EditEmployee = (props) => {
  const [employee, setEmployee] = useState({
    name: "",
    salary: "",
    bornDate: "",
    position: "",
  });

  const Url = "http://localhost:3000/employees" ;

  useEffect(() => {
    const GetData = async () => {
      const result = await axios(Url);
      setEmployee(result.data);
    };
    GetData();
  }, []);

  const UpdateEmployee = (event) => {
    event.preventeDefault();
    const data = {
      Id: props.match.params.id,
      name: employee.name,
      salary: employee.salary,
      bornDate: employee.bornDate,
      position: employee.position,
    };
    axios.post(`http://localhost:3000/employees`, data).then((result) => {
      props.history.push("/EmployeeList");
    });
  };

  const onChange = (event) => {
    event.persist();
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  };

  return (
    <div className="app flex-row aling-items-center">
      <Container>
        <Row className="justfy-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={UpdateEmployee}>
                  <h1> Atualiza Funcionário </h1>
                  <InputGroup className="mb-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome"
                      value={employee.name}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <input
                      type="text"
                      name="salary"
                      id="salary"
                      placeholder="Salário"
                      value={employee.salary}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <input
                      type="text"
                      name="bornDate"
                      id="bornDate"
                      placeholder="Data Nascimento"
                      value={employee.bornDate}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <input
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
                        <Button type="submit" className="btn btn-info mb-1" block>
                          <span>Save</span>
                        </Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button type="submit" className="btn btn-info mb-1" block>
                          <span>Cancel</span>
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
