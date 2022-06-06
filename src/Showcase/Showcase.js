import React from 'react';
import './showcase.css';
import ShowcaseItem from './ShowcaseItem';

export default function Showcase( props ) {    
    const items = [];
    for (let key in props.items){
        if (key == '8'){
            break
        }
        else items.push(props.items[key])
    }
    return (        
        <div className='container'>
            <h2>Limited edition collection</h2>
            <section className='showcase'>
                { items.map( item => {
                    return <ShowcaseItem item={item} key={item.id} onItem={props.onItem}/>
                })}
            </section>
        </div>
    )
}