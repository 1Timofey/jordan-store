import React from 'react';
import './showcase.css';


export default function ShowcaseItem ( props ) {

    const item = props.item;

    return(
    <div className='item-table'>
    <div className="item-table__elem">
        <div className="item-table__bg">
        <div className="hover-text-one">
            <figure className="effect-text-two" onClick={() => props.onItem(item['id'])}>
            <img src={item['url']} className="picture" alt="" />
            <figcaption>
            <p>{item['description']}</p>
            </figcaption>
            </figure>
            </div>
            <p className="fnt">{item["name"]}</p>
            <p className="fnt">{item["price"]}$</p>
            <button className='btn'>add to cart</button>
        </div>
    </div>
    </div>        
    )
}