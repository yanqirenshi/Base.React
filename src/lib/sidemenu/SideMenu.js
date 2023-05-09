import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';

import MenuItem from './MenuItem.js';

const style = {
    zIndex: 88888888,
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    padding: 8,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    contents: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderRadius: '8px 8px 87px 87px',
        boxSizing: 'border-box',
    },
    bottom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingTop: 0,
        paddingBottom: 11,
    },
};

export default function SideMenu (props) {
    const menus = props.data;
    const user = props.user;

    const location = useLocation();
    const navigate = useNavigate();

    const clickMenu = (code)=> {
        const menu = menus.reduce((list, menu_group)=>{
            return list.concat(menu_group.items);
        },[]).find(d=>d.code===code);

        navigate(menu.action.path);
    };

    const clickMenuMe = (code)=> {
        // const menu = menus.find(d=>d.code===code);
        navigate('/me');
    };

    const pathname = location.pathname;

    return (
        <div style={style}>

          <div style={style.contents}>
            {menus.map((menu_group,i)=> {
                return (
                    <div key={i} style={menu_group.style}>
                      {menu_group.items.map(menu=> {
                          return (
                              <MenuItem key={menu.code}
                                        code={menu.code}
                                        label={menu.label}
                                        num ={i}
                                        onClick={clickMenu}
                                        is_active={menu.action.path===pathname} />
                          );
                      })}
                    </div>
                );
            })}

            <div style={style.bottom}>
            </div>

          </div>

        </div>
    );
}
