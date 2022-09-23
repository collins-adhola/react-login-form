import { Button, Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";



function UseForm() {


  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [emailError, setEmailError] = useState(" ");
  const [passwordError, setPasswordError] = useState(" ");

  const handleSubmit = (event) => {
    event.preventDefault();
    var emailValid = false;
    let passwordValid = false;
    if (email.length === 0) {
      setEmailError("Email is required");
    } else if (email.length < 6) {
      setEmailError("Email should be minimum 6 characters");
    } else if (email.indexOf(" ") >= 0) {
      setEmailError("Email cannot conatain spaces");
    } else {
      emailValid = true;
      setEmailError(" ");
    }
    if (password.length === 0) {
      setPasswordError("Please enter your password");
    } else if (password.indexOf("  ") >= 0) {
      setPasswordError("Please eneter a valid password");
    } else if (password.length < 6) {
      setPasswordError("your password should be more than 6 characters");
    } else {
      passwordValid = true;
      setPasswordError(" ");
    }
    if (emailValid && passwordValid) {
      alert("Email: " + email + " \n password: " + password);
      setEmail(" ");
      setPassword(" ");
    }
  };

  return (
    <div styles={{margin:'auto', padding:"70px"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        {emailError.length > 0 && <Alert variant="danger">{emailError}</Alert>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </Form.Group>
        {passwordError.length > 0 && (
          <Alert variant="danger">{passwordError}</Alert>
        )}

        <br />
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      Email enetered: {email}
      <br />
      Password :{password}
      <br />
    </div>
  );
}

export default UseForm;
