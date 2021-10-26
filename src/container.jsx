import { useState } from 'react';

function Container(props) {
    return ( 
        <>
            <div className="d-flex m-3 p-4 border border-dark rounded" 
                style={{width:150+61.4*props.btns.length}}>
                {props.children}
            </div>
        </>
     );
}

export default Container;