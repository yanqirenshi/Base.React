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

export default function DevDeploymentDiagram (props) {
    const [tabs, setTabs] = React.useState(makeTabs(
        '1',
        [
            { code: '1', label: 'システム' },
            { code: '2', label: '画面遷移' },
        ]));

    return (
        <ContentsWithTabs data={tabs}
                          onChange={(code)=> setTabs(selectTab(code, tabs))}>

          <TabPanel value="1" style={style.contents}>
            <content.DevDeploymentDiagram/>
          </TabPanel>

          <TabPanel value="2" style={style.contents}>
            <content.ScreenTransitionDiagram/>
          </TabPanel>

        </ContentsWithTabs>
    );
}
