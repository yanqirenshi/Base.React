import React from 'react';

import MTabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function Tabs (props) {
    const data = props.data;
    const callbacks = props.callbacks;

    const onChange = (e, index) =>
          callbacks.inspector.tabs.change(data.list[index].code);

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

          <MTabs value={data.list.findIndex(d=>d.code===data.selected)}
                 onChange={onChange}
                 aria-label="basic tabs example"
                 centered>

            {data.list.map(tab=> {
                return (
                    <Tab key={tab.code}
                         label={tab.label} />
                );
            })}

          </MTabs>

        </Box>
    );
}
