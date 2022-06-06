import React from 'react';
import './App.css';

import ProductAll from './ProductAll';
import Showcase from './Showcase/Showcase';
import Gallery from './gallery/Gallery';
import Detail from './detail/Detail';

const items = ProductAll;

function App() {

  const [item, setItem] = React.useState();

  function itemDetail (id) {
    setItem('');
    setItem(id);
    
  }





  return (
    <div className="App">
        <Showcase items={items} onItem={itemDetail}/>
        {/* <Gallery items={items} onItem={itemDetail}/> */}
        {item ? (<Detail item={items[item]} />) : (<p>No Detail</p>)}
         
    </div>
  );
}

export default App;
