import React from 'react';

import Button from '@mui/material/Button';

export default function MenuItem (props) {
    const [hover, setHover] = React.useState(false);

    const label = props.label || '???';
    const code = props.code;
    const is_active = props.is_active;
    const onClick = props.onClick;

    const style = {
        background: is_active ? '#ffffff' : 'none',
        color: is_active ? null : '#ffffff',
        border: hover ? 'solid 1px #ffffff' : 'solid 1px rgba(30, 80, 162, 1.0)',
        marginTop: 5,
        marginBottom: 5,
    };

    return (
        <Button variant="text"
                size="small"
                style={style}
                onClick={()=>onClick(code)}
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}>
          {label}
        </Button>
    );
}
