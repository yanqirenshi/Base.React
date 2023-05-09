import React from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';

export default function Position (props) {
    const node = props.value;

    const onChange = props.onChange;

    const change = (code, e)=> {
        const val = e.target.value;
        // TODO: これはいいのか？
        const new_value = {...node};

        new_value[code] = val;

        onChange(new_value);
    };

    return (
        <div>

          <h3>Position</h3>

          <Grid container spacing={2}>

            <Grid xs={6}>
              {textField ('X', node.x, e=>change('x', e))}
            </Grid>
            <Grid xs={6}>
              {textField ('Y', node.y, e=>change('y', e))}
            </Grid>
          </Grid>

        </div>
    );
}

function textField (label, value, change) {
    return (
        <TextField id="standard-basic"
                   style={{textAlign: 'right'}}
                   label={label}
                   variant="standard"
                   type="number"
                   value={value}
                   onChange={e=>change('x', e)}/>
    );
}
