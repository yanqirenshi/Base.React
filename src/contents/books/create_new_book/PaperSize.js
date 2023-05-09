import React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function PaperSize (props) {
    const data = props.data;
    const onChange = props.onChange;

    return (
        <FormControl fullWidth>

          <InputLabel id="demo-simple-select-label">
            判型
          </InputLabel>

          <Select labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.paper_size}
                  label="判型"
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

const list = ['A3', 'A4', 'A5', 'A6', 'B3', 'B4', 'B5', 'B6'] ;
