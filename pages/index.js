import { Card, Form, Button, FormGroup } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [showlogin, setshowlogin] = useState(true);

  return (
    <>
      <title>IUBAT-ACMS</title>
      {showlogin ? (
        <div className="d-flex align-items-center justify-content-center min-vh-100 me-3">
          <Card>
            <Card.Body>
              <Form>
                <h2 className="text-center mb-4">Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <div>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                  <div>
                    <Button onClick={() => setshowlogin(false)}>
                      Register
                    </Button>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center min-vh-100 me-3">
          <Card>
            <Card.Body>
              <Form>
                <h2 className="text-center mb-4">Register</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>ID (University ID)</Form.Label>
                  <Form.Control type="email" placeholder="Enter ID" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                  />
                </Form.Group>
                <Form.Text className="text-muted ">
                  We'll never share your password with anyone else.
                </Form.Text>
                <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <div>
                    <Button variant="primary">
                      Register
                    </Button>
                  </div>
                  <div className="ms-5">
                    Have an account? Then
                    <Button className="ms-2">Login</Button>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}
