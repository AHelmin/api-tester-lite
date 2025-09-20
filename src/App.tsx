
import { Container, Navbar, Nav, Card, Button, Form, Row, Col, DropdownMenu } from 'react-bootstrap';
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
              <Form.Select aria-label="Default select example">
                <option>Please select HTTP method</option>
                <option value="1">GET</option>
                <option value="2">POST</option>
                <option value="3">PUT</option>
                <option value="4">DELETE</option>
              </Form.Select>
              <div className="d-flex gap-2 mt-3">
                <Button variant="primary">Send</Button>
                <Button variant="outline-secondary">Clear</Button>
              </div>
            </Form>
          </Card.Body>
        </Container>
      </Card>

    </>
  );
}



