import React, { Component } from "react";

class ClassComponent2 extends Component {  //component는 this.props를 가지고있음
    render(){
        const {name, children} = this.props;
        return(
            <div>나는 클래스 컴포넌트{name} {children}</div>  //jsx구문
        )
    }
}

export default ClassComponent2;