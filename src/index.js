import React , { useState} from 'react';
import ReactDOM from 'react-dom';

import './css/myStyle.scss';


  function App(props){
    const [count , setCount]= useState(0);
    return (
      <div className="App">
        <p>You clicked {count} times </p>
        <button onClick={()=>setCount(count+1)}>
          Click me !!
        </button>
      </div>
    );
  }
  



ReactDOM.render(<App />, document.getElementById('app'));