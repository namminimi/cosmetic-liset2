/* import React,{useState} from 'react';

const InputSample = () => {
    const [text, setText] = useState('');
    const onChange = (e) =>{
        setText(e.target.value);
    }
    const onReset = () => {
        setText('');
    }
    return (
        <div>
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <span >값: {text}</span>
            </div>
        </div>
    );
};
 */
//input값이 2개일경우
import React,{useState} from 'react';

const InputSample = () => {
    const [inputs, setInputs] = useState({
        username:'',
        usernickname:''
    });
    //구조분해 할당
    const {username, usernickname} = inputs;
    const onChange = (e) =>{
        console.log(e);
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const onReset = () => {
        console.log(111)
        setInputs({
            username: '',
            usernickname: ''
        });
    }
    return (
        <div>
            <input name="username" onChange={onChange} value={username}/>
            <input name="usernickname" onChange={onChange} value={usernickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <span >값: {username},{usernickname}</span>
            </div>
        </div>
    );
};
export default InputSample;