import React from 'react';
import { Link, useParams } from 'react-router-dom';

const data = {
    item1: {
        title: "아이폰",
        price: "150만원",
        desc: "비싸고 예뻐요"
    },
    item2: {
        title: "갤럭시",
        price: "30만원",
        desc: "싸고 예뻐요."
    }
}

const Product = () => {
    const {productname} = useParams(); //객체를 리턴
    const product = data[productname]
   
    return (
        <div>
            <h2>제품페이지</h2>
            <p>제품페이지입니다.</p>
            {product ? <div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.desc}</p>
            </div> : 
            <p>존재하지 않는 페이지입니다</p>
            }
            
            <Link to="/Home">홈</Link>
        </div>
    );
};

export default Product;