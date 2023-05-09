import React from 'react';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';

export default function Circle (props) {
    const node = props.data;

    return (
        <div>

          <h3 style={{marginBottom:8}}>Circle</h3>

          <Grid container spacing={2}>
            <Grid xs={6}>
              <TextField id="standard-basic"
                         style={{textAlign: 'right'}}
                         label="Line Fill"
                         variant="standard"
                         value={node.circle.fill}
                         onChange={e=>null}/>
            </Grid>
            <Grid xs={6}>
              <TextField id="standard-basic"
                         style={{textAlign: 'right'}}
                         label="r"
                         variant="standard"
                         type="number"
                         value={node.circle.r}
                         onChange={e=>null}/>
            </Grid>

            <Grid xs={6}>
              <TextField id="standard-basic"
                         style={{textAlign: 'right'}}
                         label="Stroke Fill"
                         variant="standard"
                         value={node.circle.stroke.color}
                         onChange={e=>null}/>
            </Grid>
            <Grid xs={6}>
              <TextField id="standard-basic"
                         style={{textAlign: 'right'}}
                         label="Stroke Color"
                         variant="standard"
                         type="number"
                         value={node.circle.stroke.width}
                         onChange={e=>null}/>
            </Grid>
          </Grid>

        </div>
    );
}
