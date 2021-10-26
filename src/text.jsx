import { useState } from 'react';

function Text(props) {
    return ( 
        <>
            <input type="text" value={props.text || 0} onKeyPress={props.onKeyPress} 
                onChange={props.onChange} style={{textAlign:'right', paddingRight:10}} />
        </>
     );
}

export default Text;