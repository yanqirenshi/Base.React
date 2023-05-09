import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function PriceUnit (props) {
    const data = props.data;
    const onChange = props.onChange;

    return (
        <FormControl fullWidth>

          <InputLabel id="demo-simple-select-label">
            定価(単位)
          </InputLabel>

          <Select labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.price_unit}
                  label="定価(単位)"
                  onChange={onChange}>
            {list.map(d=>{
                return (
                    <MenuItem value={d}>{d}</MenuItem>
                );
            })}
          </Select>

        </FormControl>
    );
}

const list = ['円', 'US$'] ;
