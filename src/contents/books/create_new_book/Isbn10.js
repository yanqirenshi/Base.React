import React from 'react';

import TextField from '@mui/material/TextField';

export default function Isbn10 (props) {
    const data = props.data;
    const onChange = props.onChange;

    return (
        <TextField required fullWidth
                   id="outlined-required"
                   style={{marginBottom:22}}
                   label="ISBN-10"
                   value={data.isbn10}
                   onChange={onChange} />
    );
}
