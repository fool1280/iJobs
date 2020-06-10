import React, { useState }from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Login() {
    const dispatch = useDispatch();
    let history = useHistory();
    let [email, setEmail] = useState("");
    let [password, setPass] = useState("");
    let loginUser = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        let user = {email: email, password: password};
        dispatch({type: "LOGIN", payload: user})
        history.goBack();
    }
    return (
        <div>
            <Container className="bg-light text-dark p-3 mx-auto rounded" style={{marginTop: "15%", marginBottom: "15%"}}>
            <Form>
                <Form.Text>
                    <h1>Login to iJobs</h1>
                </Form.Text>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        Your email will only be shared with employers.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPass(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => loginUser(e)}>
                    Submit
                </Button>
                </Form>
            </Container>
        </div>
    )
}
