import React from 'react';

import SideMenu from '../../lib/sidemenu/SideMenu.js';

import GlobalOperator from '../GlobalOperator.js';

import PAGES from '../../data/PAGES.js';

import maneger_firebase from '../../manegers/Firebase.js';

const style = {
    width: '100vw',
    height: '100vh',
    boxSizing: 'border-box',
    overflow: 'hidden',
};

export default function Page (props) {
    const children = props.children;

    const user = maneger_firebase.user().user;

    const menus = PAGES;

    return (
        <>
          <SideMenu data={menus} user={user}/>

          <div style={style} code="xxx">
            {children}
          </div>

          <GlobalOperator/>
        </>
    );
}
