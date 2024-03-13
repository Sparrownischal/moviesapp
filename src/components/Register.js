import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const registernow=()=>setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="fullname">
              <Form.Label>Ful Name:-</Form.Label>
              <Form.Control type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address:-</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:-</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmedPassword">
              <Form.Label>Password:-</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Accept Terms and Conditions" />
            </Form.Group>
            <p> Already Registered?? <Button variant="primary" onClick={handleClose}>
              Login
            </Button> </p>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={registernow}>
            Register Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;