import React, {useRef, useEffect} from 'react'
import { Card, Container, Row, Col, Button } from 'bootstrap-4-react'
import {useFocus} from '@react-aria/interactions'

let statusStart = true; // тут у меня впроекте переменная из хранилища, это не глупости :D

const OnFocus = () => {
    let [events, setEvents] = React.useState([]);
    let {focusProps} = useFocus({
        onFocus: (e) => setEvents((events) => ['focus']),
        onBlur: (e) => setEvents((events) => ['blur']),
        onFocusChange: (isFocused) =>
        setEvents((events) => [`${isFocused}`])
    });

    let textInput = null;
    let textInputText = null;

    function handleClick() {
        textInput.focus();
    }
    function handleClickTest() {
        textInputText.focus();
    }

    useEffect(() => {
        if (statusStart){
            textInputText.focus();
        }
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
                            <Button secondary onClick={handleClick}>5</Button>
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
                        <Col>
                            <input ref={(input) => { textInput = input; }} />
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col>
                            <span onClick={handleClickTest}>
                                123
                            </span>
                            <input ref={(input) => { textInputText = input; }}/>
                        </Col>
                    </Row>
                </Container>
            <Card.Link href="/">Главная</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default OnFocus