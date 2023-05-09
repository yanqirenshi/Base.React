import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UBooks from '../ui/books/Books.js';
import CreateNewBook from './books/CreateNewBook.js';

import librarian from '../manegers/Librarian.js';

import {
    openCreateBook,
    closeCreateBook,
    changecreateBook,
    createBook,
    findBooks,
} from '../slices/page_admin.js';

export default function Books () {
    const state = useSelector(state => state.page_admin.books);
    const dispatch = useDispatch();

    if (!state.books.start)
        dispatch(findBooks());

    const callbacks = {
        create_book: {
            open: ()=> dispatch(openCreateBook()),
            close: ()=> dispatch(closeCreateBook()),
            change: (code, value)=> dispatch(changecreateBook(code, value)),
            commit: ()=> dispatch(createBook(state.create_book.data)),
        },
    };

    const books = librarian.books();

    return (
        <div style={{width:'100%', height: '100%'}}>
          <CreateNewBook data={state}
                         callbacks={callbacks}/>

          <UBooks data={books} state={state} callbacks={callbacks}/>
        </div>
    );
}
