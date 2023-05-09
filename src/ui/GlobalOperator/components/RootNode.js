import React from 'react';

export default function RootNode (props) {
    const operator = props.data;
    const opened_operator = props.opened_operator;
    const onClick = props.onClick;

    const style = {
        position: 'fixed',
        top: operator.y,
        left: operator.x,
        width: operator.w,
        height: operator.h,
        borderRadius: operator.w,
        background:'#fff',
        border: `5px solid rgba(137, 195, 235, ${opened_operator===operator.code ? 1 : 0.2})`,
    };

    const click = ()=> onClick(operator.code);

    return (
        <div style={style} onClick={click}>

          <div style={{
              display:'flex',
              justifyContent:'center',
              alignItems: 'center',
              height: '100%',
          }}>
            {operator.label}
          </div>

        </div>
    );
}
