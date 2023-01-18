import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation(); //location 객체
    //http://localhost:3000/about?name=green&age=30
    //{name: "green", age: "60"}
    const [searchParams, setSearchParams] = useSearchParams()  //hook함수 -->배열 리턴
    const name = searchParams.get('name') //get메소드로 접근
    const age = searchParams.get('age')
    console.log(location);
    return (
        <div>
           <h2>소개페이지</h2>
           <p>소개페이지입니다.</p> 
           <p>{location.search}</p>
           <p>namer값은 {name}</p>
           <p>age값은 {age}</p>
        </div>
    );
};

export default About;