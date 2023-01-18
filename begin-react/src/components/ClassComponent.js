import React, { Component } from "react";
import PropTypes from 'prop-types';

class ClassComponent extends Component {
    //클래스 내부에서 프로프타입 지정
    static defaultProps = {
        name : "기본이름"
    }
    static propTypes = {
        name: PropTypes.string
    }
    render(){
        const { name, children } = this.props;
        return (
            <div>클래스형 컴포넌트 입니다.
                <p>{name} 안녕</p>
                {children}
            </div>
        )
    }


}
/* ClassComponent.defaultProps = {
    name: "abc"
} */

/* ClassComponent.propTypes = {
    name: PropTypes.string 문자열이 아니면 에러뜸
} */

/* ClassComponent.propTypes = {
    name: PropTypes.string.isRequired
} */

/* propTypes 종류
array : 배열
bool: true 혹은 false
func: 함수
number: 숫자
string: 문자열
object: 객체
any: 아무종류 */

console.log(ClassComponent.propTypes)



export default ClassComponent