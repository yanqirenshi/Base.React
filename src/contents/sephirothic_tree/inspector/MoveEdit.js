import React from 'react';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function MoveEdit (props) {
    const node = props.data;
    const onChange = props.onChange;

    return (
        <div>
          <FormControl size="small">

            <InputLabel id="demo-simple-select-label">Move</InputLabel>

            <Select labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={node.move}
                    label="Move"
                    onChange={(e)=>onChange(e.target.value)}>

              {moves.map(d=> {
                  return (
                      <MenuItem key={d.code} value={d.code}>
                        {d.label}
                      </MenuItem>
                  );
              })}

            </Select>

          </FormControl>
        </div>
    );
}

const moves = [
    { code: 'will',    label: '移動(自動)' },
    { code: 'support', label: '移動(手動)' },
    { code: 'freeze',  label: '固定(移動不可)' },
];
