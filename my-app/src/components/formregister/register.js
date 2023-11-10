import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './register.css';
const App = () => {
    return (
        <Container fluid>
            <Container>
                <Row className="main-section">
                    <Col lg={5} className="detail-section">
                        <div className="information">
                            <h2 className="heading__h2">Music for everyone.</h2>
                            <h3 className="heading__h3">Premium Subscription</h3>
                            <div className="little-info">
                                <h2 className="heading__h2__1">$9.99 / month</h2>
                                <ul>
                                    <li>Shuffle play</li>
                                    <li>Ad Free</li>
                                    <li>Unlimited skips</li>
                                    <li>Listen Offline</li>
                                    <li>Play any track</li>
                                    <li>High Quality Audio</li>
                                </ul>
                                <span style={{ fontSize: '0.85em' }}>Lorem ipsum dolor sit amet.</span>
                                <br />
                                <span style={{ fontSize: '0.85em' }}>Lorem ipsum dolor sit amet.</span>
                            </div>
                            <p style={{ fontSize: '0.6em', margin: '0 auto', padding: '0' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, odio! Lorem ipsum dolor. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </Col>
                    <Col lg={7} className="form-section">
                        <div className="form-conatiner">
                            <h2 className="heading__h2">
                                <i style={{ fontSize: '1.5em' }} className="fa fa-spotify"></i> Spotify
                            </h2>
                            <br />
                            <br />
                            <p className="links__p">
                                <a href="#">Sign In</a> | <a href="#" style={{ fontWeight: 700 }}>Sign Up</a>
                            </p>
                            <Form action="/">
                                <Form.Group controlId="name">
                                    <Form.Label>NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your full name" />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>EMAIL</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email address" />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>PASSWORD</Form.Label>
                                    <Form.Control type="password" placeholder="Set a strong password" />
                                </Form.Group>
                                <Form.Group controlId="checkbox">
                                    <Form.Check type="checkbox" label="I agree to terms and conditions" />
                                </Form.Group>
                                <br />
                                <center>
                                    <Button variant="primary" type="submit">
                                        Sign Up
                                    </Button>
                                </center>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default App;
