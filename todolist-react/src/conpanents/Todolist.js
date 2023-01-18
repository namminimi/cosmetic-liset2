import React, {useState} from 'react';

const Todolist = () => {
    const [names, setNames] = useState([
        {id:1, text:"댓글1"},
        {id:2, text:"댓글2"},
        {id:3, text:"댓글3"}
    ]);
    //input 상태관리자 생성
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(4);
    const onClick = () =>{
        const nextNames = [
            ...names,
            {id: nextId, text:inputText}
        ]
        setNextId(nextId+1)
        setNames(nextNames)
        setInputText("")
    }
    const onChange = (e) =>setInputText(e.target.value);

    
    const onRemove = (id) => {
        const nextNames = names.filter(name=>name.id !== id)
        setNames(nextNames);
    }
    const namesList = names.map((el, index)=><li key={index}><span>{el.text}</span>
    <button onClick={()=>onRemove(el.id)}>X</button></li>)
    return (
        <div id="wrap">
            <div id="header">
                <h2>To do List</h2>
                <div id="inpp">
                    <input value={inputText} onChange={onChange}></input><button onClick={onClick}>+</button>
                </div>
            </div>
            <ul>
                {namesList}
            </ul>
        </div>
    );
};

export default Todolist;