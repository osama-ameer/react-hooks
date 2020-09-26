import React, {useState} from 'react';
import './room.css'


export default function Room() {


    let [isLit, setLit] = useState(true);
    let [age , setage] = useState(45)


    function updatelit(){
        console.log("Button clicked")
        setLit(!isLit);
    }

   
    return (
        <div className ={`room ${isLit ? 'lit' : 'dark'}`}>
          <h2> The room is {isLit ? 'Lit':'Dark'} </h2>
          <br/>
          <button onClick={updatelit} > Toggle Light </button>
          <br/>
             <h2> Age is: {age}</h2>
             <button onClick ={()=>{ setage(++age)} }>Increase age</button>
             <button onClick ={()=>{ setage(--age)} }>Decrease age</button>
             
         
                <input
          type="number"
          value={age}
          onChange={e => setage(e.target.value)}
        />

       
        </div>
    )
}
