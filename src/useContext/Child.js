import React, {useContext} from 'react';
import Parent from './Parent'
import ValueContext from './ValueContext'



export default function Child() {

    let value = useContext(ValueContext);
    let uppdatevalue = value[1];


    return (
        <div>
            <p>This is Child Component and number is {value}</p>
            <button onClick={()=> { uppdatevalue(++value [0]) } }> Increment number</button>
        </div>
    );
}
