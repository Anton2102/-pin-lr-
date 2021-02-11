import {useState} from 'react'
import {InputGroup, Form, Badge, Button} from 'bootstrap-4-react'

const EntireDateOne = () => {
    const [dataNumber, setNumberInput] = useState(0);
    const [dataExp, setExpInput] = useState(0);
    
    
    return (
        <>
            <InputGroup lg mb="3">
                <InputGroup.PrependText>Число</InputGroup.PrependText>
                <Form.Input 
                    type="number" 
                    min="0"
                    onChange={(e) => {setNumberInput(e.target.value)}}
                />
            </InputGroup>
            <InputGroup lg mb="3">
                <InputGroup.PrependText>Степень</InputGroup.PrependText>
                <Form.Input 
                    type="number"
                    min="0"
                    onChange={(e) => {setExpInput(e.target.value)}}
                />
            </InputGroup>
            <h2 className="text-center">
                <Button variant="secondary" size="lg" block>
                    Получить расчёт:
                </Button>
                <Badge pill dark style={{marginTop: '10px'}}>{dataNumber | ""}</Badge>
                <Badge pill success>{dataExp | ""}</Badge>
            </h2>
        </>
    );
}

export default EntireDateOne