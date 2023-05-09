import React from 'react';

import TextField from '@mui/material/TextField';

export default function ReleaseDate (props) {
    const data = props.data;
    const onChange = props.onChange;

    return (
        <TextField required fullWidth
                   id="outlined-required"
                   style={{marginBottom:22}}
                   label="発売日"
                   value={data.release_date}
                   onChange={onChange} />
    );
}
