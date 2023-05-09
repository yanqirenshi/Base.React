import React from 'react';

import TextField from '@mui/material/TextField';

import Move from '../MoveEdit.js';
import PositionView from '../PositionView.js';
import Circle from '../Circle.js';

export default function NodeData (props) {
    const node = props.data;
    const callbacks = props.callbacks;

    const changeMove = (v)=>
        callbacks.inspector.view_node.change.move(v, node);

    const changePosition = (x, y)=>
          callbacks.inspector.view_node.change.position(x, y, node);

    return (
        <>
          <div style={{marginBottom:22}}>
            <h3 style={{marginTop:0}}>ID: {node.id}</h3>
          </div>

          <Move data={node}
                onChange={(v)=>changeMove(v)}/>

          <h3 style={{marginBottom:8}}>Label</h3>
          <TextField id="standard-basic" label="text" variant="standard"
                     value={node.label.text}
                     onChange={()=>null}/>

          <TextField id="standard-basic" label="font size" variant="standard"
                     value={node.label.font.size}
                     onChange={()=>null}/>

          <PositionView data={node}
                        onChange={(x,y)=>changePosition(x,y)}/>

          <Circle data={node}/>
        </>
    );
}
