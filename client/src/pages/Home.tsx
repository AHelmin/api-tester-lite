
import { Container, Card, Button, Form } from 'react-bootstrap';

export default function Home() {
    
    function onSendClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
    
      }
    
      function onClearClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
      }

return( 
<Card>
        <Container>
          <Card.Body>
            <Card.Title>Request</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Please enter request url" />
              </Form.Group>
              <Form.Label>Request Type</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Please select HTTP method</option>
                <option value="1">GET</option>
                <option value="2">POST</option>
                <option value="3">PUT</option>
                <option value="4">DELETE</option>
              </Form.Select>
              <div className="d-flex gap-2 mt-3">
                <Button variant="primary" onClick={onSendClick}>Send</Button>
                <Button variant="outline-secondary" onClick={onClearClick}>Clear</Button>
              </div>
            </Form>
          </Card.Body>
        </Container>
      </Card>
      )
    }