import React from "react";

function FuncCompoenent(props){
    const {name, children} = props;
    return(
        <div>{name} {children}</div>
    )
}
FuncCompoenent.defaultProps = {
    name: "ccc"
}

export default FuncCompoenent;