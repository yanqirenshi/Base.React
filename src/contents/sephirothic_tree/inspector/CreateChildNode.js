import React from 'react';

import TextField from '@mui/material/TextField';

import Rank from './Rank.js';
import Move from './MoveEdit.js';
import Position from './PositionEdit.js';

export default function CreateChildNode (props) {
    const data = props.data;
    const parent = props.parent;
    const callbacks = props.callbacks;

    const onChangeContents = callbacks.inspector.create_child_node.change.contents;

    const change = (keys, v)=>
          onChangeContents(updateValue(keys, v, data));

    return (
        <>
          <h2 style={{marginTop: 0}}>
            Create Child Node
          </h2>

          <h3 style={{marginBottom: 33}}>
            {parent.label.text}
          </h3>

          <Rank value={data.rank}
                parent={parent}
                onChange={(v)=>change('rank', v)}/>

          <div style={{marginBottom:33}}>
            <TextField id="standard-basic"
                       label="name ja"
                       variant="standard"
                       value={data.name_ja}
                       onChange={(e)=>change('name_ja', e.target.value)}/>

            <TextField id="standard-basic"
                       label="name en"
                       variant="standard"
                       value={data.name_en}
                       onChange={(e)=>change('name_en', e.target.value)}/>

            <TextField id="standard-basic"
                       label="name scientific"
                       variant="standard"
                       value={data.name_scientific}
                       onChange={(e)=>change('name_scientific', e.target.value)}/>
          </div>

          <Move data={data}
                onChange={(v)=>change('move', v)}/>

          <Position  value={data.position}
                     onChange={(v)=>change('position', v)}/>

          <h3>Label</h3>
          <TextField id="standard-basic"
                     label="text"
                     variant="standard"
                     value={data.label.contents}
                     onChange={(e)=>onChangeContents(changeLabelContents(e, data))}/>

          <TextField id="standard-basic"
                     label="font size"
                     variant="standard"
                     type="number"
                     value={data.label.font.size}
                     onChange={(e)=>onChangeContents(changeLabelFontSize(e, data))}/>
        </>
    );
}

function updateValue (key, v, data) {
    const new_data = {...data};

    new_data[key] = v;

    return new_data;
}

function changeLabelContents (e, data) {
    const v = e.target.value;

    const new_data = {...data};

    new_data.label = {...new_data.label};

    new_data.label.contents = v;

    return new_data;
}

function changeLabelFontSize (e, data) {
    const v = e.target.value;

    const new_data = {...data};

    new_data.label = {...new_data.label};
    new_data.label.font = {...new_data.label.font};

    new_data.label.font.size = v;

    return new_data;
}

