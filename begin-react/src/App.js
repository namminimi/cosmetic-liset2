/* import './App.css';
//import Hello from './components/Hello';/
//import Wrapper from './components/Wrapper';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App; 

//카운터 클릭이벤트 실습

 import './App.css';
import InputSample from './components/InputSample';



function App() {
  return (
    <div className="App">
      <InputSample/>
    </div>
  );
}

export default App;
 

import './App.css';
//import InputSample from './components/InputSample';
import ClassComponent from './components/ClassComponent';
import FuncCompoenent from './components/FuncComponent';



function App() {
  return (
    <div className="App">
      <ClassComponent name="ggg">안녕하세요</ClassComponent> 
      <ClassComponent >나는name이 없어</ClassComponent>
      <FuncCompoenent name="green">하하하하하</FuncCompoenent>
      <FuncCompoenent >하하하하하</FuncCompoenent>
      {안녕하세요는 children 키값의 value 값이 된다 }
    </div>
  );
}
console.log(ClassComponent.propTypes)

export default App;
 

import './App.css';
import ClassCounter from './components/ClassCounter';



function App() {
  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}


export default App;  */



//////// 함수형 복습.......//////
import './App.css';
import FuncCompoenent2 from './components/Funccomponent2';




function App() {
  return (
    //{ name: "green", children: "안녕하세요"} =>props   FuncCompoenent2에서 이렇게 전달 받는다는거
    <div className="App">
      <FuncCompoenent2 name="green" >안녕하세요</FuncCompoenent2>
      {/* 안녕하세요는 props.children으로 전달
                위에 객체는 props  */}
    </div>
  );
}


export default App; 


//////// class형 복습.......//////

/* import './App.css';
import ClassComponent2 from './ClassComponent2';
import Funccompoenent2 from './components/Funccomponent2';



function App() {
  return (
    <div className="App">
      <ClassComponent2 name="abc">아하하하하</ClassComponent2>
      <Funccompoenent2 name="green" >안녕하세요</Funccompoenent2>
    </div>
  );
}


export default App; 



///class형 상태관리
import './App.css';
import Classcounter2 from './components/ClassCounter2';


//함수형에서는 useState업데이트 함수사용
//class형에서는 state, this.setState함수 사용

function App() {
  return (
    <div className="App">
      <Classcounter2/>
    </div>
  );
}


export default App;  */