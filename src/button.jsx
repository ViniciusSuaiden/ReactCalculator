import { useState } from 'react';

function Button(props) {
    return ( 
        <>
            <button className="btn border border-dark ml-4 d-flex justify-content-center"
                onClick={props.clicked} style={{height:30, paddingTop:2, boxShadow:'none', 
                width:30, fontSize:20}}><div className="align-self-center">{props.sign}</div>
            </button>
        </>
     );
}

export default Button;