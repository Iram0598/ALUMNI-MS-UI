import { Card, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  const [showlogin, setshowlogin] = useState(true);
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const collectData = ()=>{
    console.warn(id, email, password, confirmpass)
  }

  return (
    <>
      
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
                    <Link href="/dashboard">
                    <Button variant="primary" type="submit" >
                      Login
                    </Button>
                    </Link>
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
                  <Form.Control type="email" onChange={(e)=> setID(e.target.value)} placeholder="Enter ID" value={id} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" value={email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" value={password}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={(e)=> setConfirmpass(e.target.value)}
                    placeholder="Confirm password"
                    value={confirmpass}
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
                    <Button variant="primary" onClick={collectData}>Register</Button>
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
