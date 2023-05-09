import React, { useState, useEffect } from 'react';

import D3Network, { Rectum } from '@yanqirenshi/d3.network';

export default function SephirothicTree (props) {
    const [rectum, setRectum] = useState(null);

    const graph_data = props.data;
    const callbacks = props.callbacks;

    useEffect(()=> {
        if (rectum!==null) return;

        setRectum(new Rectum({
            transform: { k: 1.0, x: window.innerWidth/2, y: window.innerHeight/2 },
            grid: { draw: false },
            edge: { width: 6, color: '#eeeeee' },
            callbacks: callbacks,
        }));
    }, [rectum, callbacks]);

    useEffect(()=> {
        if (rectum)
            rectum.data(graph_data);
    }, [rectum, graph_data]);

    if (!rectum) return null;

    const view = props.view;

    const style = {
        width: '100%',
        height: '100%',
        zIndex: view ? 1 : 0,
    };

    return (
        <div style={style}>
          <D3Network rectum={rectum} />
        </div>
    );
}
