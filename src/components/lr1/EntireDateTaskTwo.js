import {useState} from 'react'
import {InputGroup, Form, Badge} from 'bootstrap-4-react'

const EntireDateTwo = () => {
    const [dataNumber, setNumberInput] = useState(0);
    const [dataExp, setExpInput] = useState(0);

    function getUserExp(dataNumber, dataExp) {

        let start = 1;
        for (let i = 1; i <= Math.abs(dataExp); i++){
            start *= dataNumber;
        }
        return 1/start || "";
    }
    
    return (
        <>
            <InputGroup lg mb="3">
                <InputGroup.PrependText>Число</InputGroup.PrependText>
                <Form.Input 
                    type="number" 
                    min="0"
                    onChange={(e) => {setNumberInput(e.target.value)}}
                    defaultValue="0"
                />
            </InputGroup>
            <InputGroup lg mb="3">
                <InputGroup.PrependText>Степень</InputGroup.PrependText>
                <Form.Input 
                    type="number"
                    min="0"
                    onChange={(e) => {setExpInput(e.target.value)}}
                    defaultValue="0"
                />
            </InputGroup>
            <h2 className="text-center">
                <Badge pill dark style={{marginTop: '10px'}}>{getUserExp(+dataNumber, +dataExp)}</Badge>
            </h2>
        </>
    );
}

export default EntireDateTwo