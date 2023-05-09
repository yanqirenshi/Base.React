import React from 'react';

import TextField from '@mui/material/TextField';

export default function PageCount (props) {
    const data = props.data;
    const onChange = props.onChange;

    return (
        <TextField required fullWidth
                   id="outlined-required"
                   type="number"
                   style={{marginBottom:22}}
                   label="ページ数"
                   value={data.page_count}
                   onChange={onChange} />
    );
}
