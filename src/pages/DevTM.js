import React from 'react';

import Box from '@mui/material/Box';

import TM from '../lib/tm/index.js';

import DATA_TM, {IDENTIFIERS, ATTRIBUTES} from '../data/TM.js';

const data = {
    entities: DATA_TM,
    identifiers: IDENTIFIERS,
    attributes: ATTRIBUTES,
};

export default function DevTM (props) {
    return (
        <Box sx={{width:'100vw', height:'100vh'}}>
          <TM data={data}/>
        </Box>
    );
}
