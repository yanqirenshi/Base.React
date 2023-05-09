import React from 'react';

import Tabs from './view_node_info/Tabs.js';
import CoreData from './view_node_info/CoreData.js';
import NodeData from './view_node_info/NodeData.js';

export default function ViewNodeInfo (props) {
    const node = props.data;
    const tabs = props.tabs;
    const callbacks = props.callbacks;

    const selected_tab = tabs.selected;

    return (
        <>
          <Tabs data={tabs}
                callbacks={callbacks}/>

          <div style={{padding: 22, flexGrow: 1}}>

            {'core-data'===selected_tab &&
             <CoreData data={node}/>}

            {'node-data'===selected_tab &&
             <NodeData data={node} callbacks={callbacks}/>}

          </div>
        </>
    );
}
