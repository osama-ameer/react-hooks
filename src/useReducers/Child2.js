import React, { useReducer } from 'react'
import { numberReducer } from './numberReducer';

export default function Child2() {

    let [state, dispatch ] = useReducer(numberReducer, 5);

    return (
        <div>

            <br/><br/>

            Child 2 : {state}
            <br/>
            <button onClick={()=>{ dispatch({type: 'INCREMENT', val: 50})}}>Incerment</button>
            <button onClick={()=>{ dispatch({type: 'DECREMENT', val: 40})}}>Decerment</button>
            
        </div>
    )
}
