import React, {Component} from "react";

class Classcounter2 extends Component {
    state = {  //상태관리
        number: 0
    }
    handleIncrease = () => {
        this.setState({number: this.state.number+1})  //number에 바로 접근 불가하여 this.state사용
    }
    render(){
        const {number} = this.state;
        return(
            <div>
                <h2>{number}</h2>
                {/* <button onClick={()=>{ //클릭이벤트 함수를 태그안에 넣는방법
                    this.setState({number: number+1}) //상태를 업데이트해주는 함수
                }}>+1</button> */} 
                {/* 메서드를 작성하고 변수선언후 그 변수를 클릭이벤트에 전달 */}
                <button onClick={this.handleIncrease} //상태를 업데이트해주는 함수
                >+1</button>
            </div>
        )
    }
}

export default Classcounter2;