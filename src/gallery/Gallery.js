import React from 'react';
import ShowcaseItem from '../Showcase/ShowcaseItem';


export default function Gallery ( props ) {

    const items = props.items

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