import {Container, Row, Col} from 'bootstrap-4-react'
import EntireDateOne from './EntireDateOne'

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
                <Col>
                    Прописная логика
                </Col>
            </Row>
        </Container>
    );
}

export default TaskOne