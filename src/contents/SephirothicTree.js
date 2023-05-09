import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Graph from '../ui/SephirothicTree.js';

import maneger from '../manegers/SephirothicTree.js';

import Inspector from './sephirothic_tree/Inspector.js';

import {
    mergeRootOrganism,
    fildOrganisms,
    selectOrganismNode,
    changedSelectedTabInspectore,
    openCreateChildNodePanel,
    closeCreateChildNodePanel,
    changeCreateChildNodeContents,
    createChildNode,
    updateNodeMove,
    updateNodePosition,
} from '../slices/page_admin.js';

export default function SephirothicTree () {
    const state = useSelector(state => state.page_admin.life);
    const dispatch = useDispatch();

    if (state.root.start===null)
        dispatch(mergeRootOrganism());

    if (state.netrowrk.start===null)
        dispatch(fildOrganisms());

    const graph_data = maneger.graphData();

    const callbacks = {
        operators: {
            switch: ()=> {
            },
        },
        node: {
            click: (node, event)=> {
                dispatch(selectOrganismNode(node));
            },
        },
        inspector: {
            tabs: {
                change: (code)=> {
                    dispatch(changedSelectedTabInspectore(code));
                }
            },
            view_node: {
                change: {
                    move: (v, node)=> dispatch(updateNodeMove(node.id, v)),
                    position: (x, y, node)=> dispatch(updateNodePosition(node.id, x, y)),
                },
            },
            create_child_node: {
                open: ()=> {
                    dispatch(openCreateChildNodePanel());
                },
                close: ()=> {
                    dispatch(closeCreateChildNodePanel());
                },
                change: {
                    contents: (v)=> dispatch(changeCreateChildNodeContents(v)),
                },
                create: ()=> {
                    const child_data = state.inspectore.create_child_node.contents;
                    const parent_id = state.selected.node;

                    dispatch(createChildNode(parent_id, child_data));
                },
            },
        },
    };

    const selected_node = maneger.getNode(state.selected.node);

    return (
        <div style={{width:'100%', height: '100%', overflow:'hidden'}}>

          <Graph data={graph_data} callbacks={callbacks}/>

          {selected_node &&
           <Inspector data={selected_node}
                      state={state}
                      callbacks={callbacks}/>}

        </div>
    );
}
