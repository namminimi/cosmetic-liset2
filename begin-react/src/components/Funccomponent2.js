//import React from "react";

/* function FuncCompoenent2() {
    return(
        <div></div>
    )
} */
/* 화살표변경 */
                 //(props)에 있는게 앱에 적어둔 { name: "green", children: "안녕하세요"} =>props(객체)  전달받음
/* const FuncCompoenent2 = ({name, children}) => {
                  //(props)이거를 위에처럼 구조분해할당을 넣어서 바로 해줌
    //const {name, children} = props;    /* props.name쓰기 불편하고 더편하게 써주기 위해서 구조분해할당을 써준다 
    return(
        <div>{name}{children}</div>
    )
}

export default FuncCompoenent2; */



import React, {useState} from "react";

const Funccompoenent2 = ({name, children}) => {
    const [number, setNumber] = useState(0)  //배열 구조분해할당
    //let number2 = 0;
    const onAddnumber = () => {  //상태업데이트함수 사용했을때
        setNumber(number+1)
    } 
    /* const onAddnumber2 = () => { //변수로만 값을 줬을때
        number2++  //변수는 화면을 그리지않음
        console.log(number2)
    } */
    return(
        <div>
            <h2>{number}<button onClick={onAddnumber}>+1</button></h2>
            {name}{children}
        </div>
    )
}

export default Funccompoenent2;