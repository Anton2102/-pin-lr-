import { Card, ListGroup } from 'bootstrap-4-react'
import TaskOne from '../components/lr1/TaskOne'

const FirstLab = () => {
    return (

      <Card style={{ width: '90%', margin: '0 auto', marginTop: '10px'}}>
        <Card.Body className="text-center">
          <Card.Title>Лабараторная работа 1</Card.Title>
          <Card.Text>
            Работа предсназначена для развития математических навыков в программировании:
            <br />
            "Вычисление заданной степени числа у Y=X^n"
          </Card.Text>
        </Card.Body>
        <ListGroup flush>
          <ListGroup.Item>
              <TaskOne />
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="/">Главная</Card.Link>
          {/* <Card.Link href="#">Another link</Card.Link> */}
        </Card.Body>
      </Card>
    )
}

export default FirstLab