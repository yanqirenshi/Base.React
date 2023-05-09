import React from 'react';

import TabPanel from '@mui/lab/TabPanel';

import {ContentsWithTabs, makeTabs, selectTab} from '../ui/layout.js';

import * as content from '../contents/index.js';

const style = {
    contents: {
        height:'100%',
        boxSizing: 'border-box',
        overflow: 'auto',
    },
};

export default function Home (props) {
    const [tabs, setTabs] = React.useState(makeTabs(
        '5',
        [
            { code: '5', label: 'tab1' },
            { code: '1', label: 'tab2' },
            { code: '3', label: 'tab3' },
            { code: '4', label: 'tab4' },
        ]));

    return (
        <ContentsWithTabs data={tabs}
                          onChange={(code)=> setTabs(selectTab(code, tabs))}>

          <TabPanel value="5" style={style.contents}>
          </TabPanel>

          <TabPanel value="1" style={style.contents}>
          </TabPanel>

          <TabPanel value="3" style={style.contents}>
          </TabPanel>

          <TabPanel value="4" style={style.contents}>
          </TabPanel>

        </ContentsWithTabs>
    );
}
