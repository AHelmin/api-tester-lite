
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

    </>
  );
}



