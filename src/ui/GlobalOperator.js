import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changedRect, clickRoot } from '../slices/grobal_operator.js';

import { RootNode } from './GlobalOperator/index.js';

export default function GlobalOperator (props) {
    const [is_seted_resize_event, setIsSetedResizeEvent] = React.useState(false);

    const state = useSelector(state => state.grobal_operator);
    const dispatch = useDispatch();

    // grobal_operator
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (state.w!==w || state.h!==h)
        dispatch(changedRect({w:w, h:h}));

    if (!is_seted_resize_event) {
        setIsSetedResizeEvent(true);

        window.addEventListener('resize', ()=> {
            const w = window.innerWidth;
            const h = window.innerHeight;
            dispatch(changedRect({w:w, h:h}));
        });
    }

    const clicRoot = (code)=> dispatch(clickRoot(code));

    const opened_operator = state.opened_operator;

    return (
        <>
          {state.operators.map((operator,i)=>
              <RootNode key={i}
                        data={operator}
                        opened_operator={opened_operator}
                        onClick={clicRoot}/>)}

          {opened_operator &&
           <div>
           </div>}
        </>
    );
}
