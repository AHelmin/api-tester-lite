import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, History, Auth } from './pages/index'
import './App.css'

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  // function verifyUser() {
  //   const cookie = Cookie.get('auth_cookie');
  //   if(!cookie) {
  //     setIsLoggedIn(false)
  //   }
  // }

  // useEffect(() => {
  //   verifyUser()
  // }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar expand="md" className='' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href="#home">API Tester Lite</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isLoggedIn ? <Nav.Link href="/">Home</Nav.Link> : <Nav.Link href="/auth">Auth</Nav.Link>}
              <Nav.Link href='/history'>History</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
              <Navbar.Text>
                Signed in as: 'Placeholder'
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/history' element={<History />} />
      <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter >

    </>
  );
}



