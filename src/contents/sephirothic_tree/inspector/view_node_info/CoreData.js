import React from 'react';

import TextField from '@mui/material/TextField';

import Rank from '../Rank.js';

export default function CoreData (props) {
    const node = props.data;

    return (
        <>
          <div style={{marginBottom:22}}>
            <h3 style={{marginTop:0}}>ID: {node.id}</h3>
          </div>

          <Rank data={node}/>

          <h3>Names</h3>
          <TextField id="standard-basic" label="name en" variant="standard"
                     value={node._core.nameEn()}
                     onChange={()=>null}/>
          <TextField id="standard-basic" label="name ja" variant="standard"
                     value={node._core.nameJa()}
                     onChange={()=>null}/>
          <TextField id="standard-basic" label="name scientific" variant="standard"
                     value={node._core.nameScientific()}
                     onChange={()=>null}/>
        </>
    );
}
