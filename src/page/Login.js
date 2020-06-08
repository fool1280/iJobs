import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function Login() {
    return (
        <div>
            <Container className="bg-light text-dark p-3 mx-auto rounded" style={{marginTop: "15%", marginBottom: "15%"}}>
            <Form>
                <Form.Text>
                    <h1>Login to iJobs</h1>
                </Form.Text>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Your email will only be shared with employers.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
        </div>
    )
}
