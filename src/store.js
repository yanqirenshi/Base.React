import { configureStore } from '@reduxjs/toolkit';

import github from './slices/github.js';
import firebase from './slices/firebase.js';
import neo4j from './slices/neo4j.js';
import modals from './slices/modals.js';
import page_admin from './slices/page_admin.js';
import backlogs from './slices/backlogs.js';
import grobal_operator from './slices/grobal_operator.js';

export default configureStore({
  reducer: {
      // tools
      github: github,
      firebase: firebase,
      neo4j: neo4j,
      // modals
      modals: modals,
      // global
      grobal_operator,
      // pages
      page_admin,
      // contents
      backlogs,
  }
});
