
import { Container, Navbar, Nav, Card, Button, Form, Row, Col } from 'react-bootstrap';
import './App.css'

export default function App() {
  return (
    <>
      <Navbar expand="md" className='' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">API Tester Lite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href='#history'>History</Nav.Link>
              <Nav.Link href="#logout">Logout</Nav.Link>
              <Navbar.Text>
                Signed in as: 'Placeholder'
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Card>
        <Container>
          <Card.Body>
            <Card.Title>Request</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Request Type</Form.Label>
                <Form.Control type="email" placeholder="Please enter request url" />
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={3}>
                  Please Select Method
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="GET"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="POST"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="PUT"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                   <Form.Check
                    type="radio"
                    label="PUT"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>

            </Form>
          </Card.Body>
        </Container>
      </Card>

    </>
  );
}



