import React from 'react';

import D3Deployment, { Rectum } from '@yanqirenshi/d3.deployment';

import DEV_DEPLOYMENT_DIAGRAM from '../data/dev/DEV_DEPLOYMENT_DIAGRAM.js';

const rectum = new Rectum({
    transform: {
        k: 0.5,
        x: 1000.0,
        y: 200.0,
    },
});

export default function DevDeploymentDiagram () {
    const [graph_data] = React.useState(DEV_DEPLOYMENT_DIAGRAM);

    React.useEffect(()=> {
        rectum.data(graph_data);
    }, [graph_data]);

    return (
        <div style={{height: '100%',width: '100%'}}>
          <D3Deployment rectum={rectum} />
        </div>
    );
}
