import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';

import ViewNodeInfo from './inspector/ViewNodeInfo.js';
import CreateChildNode from './inspector/CreateChildNode.js';

export default function Inspector (props) {
    const state = props.state;
    const node = props.data;
    const callbacks = props.callbacks;

    const tabs = state.inspectore.tabs;

    const is_create_child_mode = state.inspectore.create_child_node.active;
    const create_child_data = state.inspectore.create_child_node.contents;

    const is_valid = isValid(create_child_data);

    return (
        <Box>
          <Paper style={{position: 'fixed',
                         right: 0,
                         top: 0,
                         height: '100%',
                         background: '#fff',
                         width: 300,
                         boxSizing: 'border-box'}}>

            <div style={{height:'100%', display:'flex', flexDirection: 'column'}}>

              {!is_create_child_mode &&
               <ViewNodeInfo data={node}
                             tabs={tabs}
                             callbacks={callbacks}/>}

              {is_create_child_mode &&
               <div style={{padding: 22, flexGrow: 1}}>
                 <CreateChildNode data={create_child_data}
                                  parent={node}
                                  callbacks={callbacks}/>
               </div>}

              <div style={{padding:11}}>

                <Grid container spacing={2}>
                  {!is_create_child_mode &&
                   <Grid xs={12}>
                     <Button variant="outlined" style={{width: '100%'}}
                             onClick={callbacks.inspector.create_child_node.open}>
                       Add Child
                     </Button>
                   </Grid>}


                  {is_create_child_mode &&
                   <>
                     <Grid xs={6}>
                       <Button variant="outlined" style={{width: '100%'}}
                               onClick={callbacks.inspector.create_child_node.close}>
                         Cancel
                       </Button>
                     </Grid>
                     <Grid xs={6}>
                       <Button variant="outlined" style={{width: '100%'}}
                               onClick={callbacks.inspector.create_child_node.create}
                               disabled={!is_valid}>
                         Create
                       </Button>
                     </Grid>
                   </>}

                   <Grid xs={12}>
                     <Button variant="outlined" style={{width: '100%'}}
                             onClick={()=>null}>
                       Close
                     </Button>
                   </Grid>
                 </Grid>
              </div>
            </div>

          </Paper>
        </Box>
    );
}


function isEmptyStr (v) {
    return v.trim().length===0;
}

function isValid (data) {
    return true &&
        !isEmptyStr(data.name_ja) &&
        // !isEmptyStr(data.name_scientific) &&
        '未設定'!==data.rank;
}
