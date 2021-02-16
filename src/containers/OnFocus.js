import React from 'react'
import { Card, Container, Row, Col, Button } from 'bootstrap-4-react'
import {useFocus} from '@react-aria/interactions'


const OnFocus = () => {
    let [events, setEvents] = React.useState([]);
    let {focusProps} = useFocus({
        onFocus: (e) => setEvents((events) => ['focus']),
        onBlur: (e) => setEvents((events) => ['blur']),
        onFocusChange: (isFocused) =>
        setEvents((events) => [`${isFocused}`])
    });
    return (

        <Card style={{ width: '90%', margin: '0 auto', marginTop: '10px'}}>
            <Card.Header>
                <Card.Title>Тест работы focus/blur</Card.Title>
            </Card.Header>
        
            <Card.Body>
                <Container class="text-center">
                    <Row>
                        <Col>
                            <Button secondary>1</Button>
                            <Button secondary>2</Button>
                            <Button secondary>3</Button>
                        </Col>
                        <Col>
                            <Button secondary>4</Button>
                            <Button secondary>5</Button>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Button {...focusProps} aria-label="Example">Жмяк!</Button>
                            <ul
                                style={{
                                maxHeight: '200px',
                                overflow: 'auto'
                            }}>
                            {events.map((e, i) => (
                                <li key={i}>{e}</li>
                            ))}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            <Card.Link href="/">Главная</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default OnFocus