import React, { Component } from 'react';
import {Form, Row, Col, Container, Button} from 'react-bootstrap';

class FormApp extends Component {
  render() {
    return (
      <div>
        <Container>
            <div className="form-wrapper">
                <Form onSubmit={this.props.getWeather}>
                    <Row>
                        <Col xs={4}>
                            <Form.Control className="input-field" name="city" placeholder="Enter City" />
                        </Col>
                        <Col xs={4}>
                            <Form.Control className="input-field" name="country" placeholder="Enter Country" />
                        </Col>
                        <Col xs={4}>
                            <Button type="submit" variant="outline-primary" className="btn-custom">Primary</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
      </div>
    )
  }
}

export default FormApp;