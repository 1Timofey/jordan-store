import React from 'react';
import './detail.css';


export default function Detail ( props ) {

    return (
        <div className="details"> 
                <div className="container">
                    <div className="product-page">
                        <section className="product-photo ">
                            <img src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d0955e45-d306-43c5-be21-3f20f16f6e2a/jordan-flight-club-91-shoes-3C3CpX.png' className="picture" alt=""/>
                        </section >
                        <section  className="product-info ">
                            <div className="product-title"><h2>{props.item['name']}</h2></div>
                            <div className="product-price"><p>Price: {props.item['price']}$</p></div>
                            <div className="product-size">
                                <label>
                                    Size:  
                                    <select>
                                        <option value='s'>S</option>
                                        <option value='m'>M</option>
                                        <option value='l'>L</option>
                                    </select>
                                </label>
                                </div>
                            <div className="product-btnCart">
                                <button>Add to Cart</button>
                            </div>
                            <div className="product-btnBuy" onClick={() => console.log(props.item)}><button>Buy Now</button></div>
                            <div className="product-description p-style">{props.item['description']}</div>
                        </section >
                    </div>
                </div>
            </div>
    )
}