import {Container, Row, Col} from 'bootstrap-4-react'
import EntireDateOne from './EntireDateOne'
import EntireDateTaskOne from './EntireDateTaskOne'
import EntireDateTaskTwo from './EntireDateTaskTwo'

const TaskOne = () => {
    return(
        <Container>
            <Row className="text-center">
                <Col>
                    <b>Вычисление заданной степени числа, когда степень n - положительная</b>
                </Col>
            </Row>
            <br />
            <Row className="text-center">
                <Col>
                    Автоматический счёт
                    <br />
                    <EntireDateOne />
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <b>1) Положительная стпень числа n</b>
                    <br />
                    <EntireDateTaskOne />
                </Col>
                <Col>
                    <b>2) Отрицательная стпень числа n</b>
                    <br />
                    <EntireDateTaskTwo />
                </Col>
            </Row>
            <Row className="text-center">
                    <Col>
                        <b>3) Экспанента стпень числа n</b>
                        <br />
                        <EntireDateTaskOne />
                    </Col>
                    <Col>
                        ....
                    </Col>
                </Row>
        </Container>
    );
}

export default TaskOne