import React from 'react';

/* function Hello(){
    const name = "green";
    return (//여러줄일때는 소괄호 감싸기
    <> {/* 하나의 태그로 무조건 묶어주기  css편하게 쓰려면 빈괄호로 묶어주기<></>
        <div className='hello'>{name}님 안녕하세요</div> {/* 자바스크립트 변수는 중괄호로 묶어주기 
        <p>재미있는 리액트</p>
    </>
    )
} */
/* function Hello({name, message, isSpecial}){
    return (//여러줄일때는 소괄호 감싸기
    <> {/* 하나의 태그로 무조건 묶어주기  css편하게 쓰려면 빈괄호로 묶어주기<></>
        {/* let {name} = props 구조분해할당함
        <div className='hello'>{name}님 안녕하세요 {message}</div> {/* 자바스크립트 변수는 중괄호로 묶어주기 
        <p>재미있는 리액트</p>
    </>
    )
}
 */
function Hello({name, message, isSpecial}){
    return (//여러줄일때는 소괄호 감싸기
    <> {/* 하나의 태그로 무조건 묶어주기  css편하게 쓰려면 빈괄호로 묶어주기<></>*/}
        {/* let {name} = props 구조분해할당함*/}
        <div className='hello'>
            {isSpecial ? <b>* </b> : null}
            {name}님 안녕하세요 {message}</div> {/* 자바스크립트 변수는 중괄호로 묶어주기 */}
        <p>재미있는 리액트</p>
    </>
    )
}
//기본값 설정
Hello.defaultProps = {
    name: "이름"
}

export default Hello;