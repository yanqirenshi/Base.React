import React from 'react';

import TextField from '@mui/material/TextField';

export default function PublicationDate (props) {
    const data = props.data;
    const onChange = props.onChange;

    return (
        <TextField required fullWidth
                   id="outlined-required"
                   style={{marginBottom:22}}
                   label="発行年月日"
                   value={data.publication_date}
                   onChange={onChange} />
    );
}
