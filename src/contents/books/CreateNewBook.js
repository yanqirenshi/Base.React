import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import PaperSize from './create_new_book/PaperSize.js';
import Isbn10 from './create_new_book/Isbn10.js';
import Isbn13 from './create_new_book/Isbn13.js';
import PriceUnit from './create_new_book/PriceUnit.js';
import PageCount from './create_new_book/PageCount.js';
import PriceAmount from './create_new_book/PriceAmount.js';
import ReleaseDate from './create_new_book/ReleaseDate.js';
import PublicationDate from './create_new_book/PublicationDate.js';

const sx = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 555,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateNewBook (props) {
    const data = props.data;
    const callbacks = props.callbacks;

    const cbs = callbacks.create_book;
    const form_data = props.data.create_book.data;

    if (!form_data)
        return null;

    const change = (code, e)=> cbs.change(code, e.target.value);

    const closeModal = ()=> cbs.close();

    const comimt = ()=> cbs.commit();

    return (
        <Modal
          open={data.create_book.active}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">

          <Box sx={sx}>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid xs={12}>
                  <TextField required fullWidth
                             id="outlined-required"
                             style={{marginBottom:22}}
                             label="タイトル"
                             value={form_data.title}
                             onChange={(e)=>change('title', e)} />
                </Grid>

                <Grid xs={6}>
                  <Isbn10 data={form_data}
                          onChange={(e)=>change('isbn10', e)}/>
                </Grid>

                <Grid xs={6}>
                  <Isbn13 data={form_data}
                          onChange={(e)=>change('isbn13', e)}/>
                </Grid>

                <Grid xs={6}>
                  <PaperSize data={form_data}
                             onChange={(e)=>change('paper_size', e)}/>
                </Grid>

                <Grid xs={6}>
                  <PageCount data={form_data}
                             onChange={(e)=>change('page_count', e)}/>
                </Grid>

                <Grid xs={6}>
                  <PriceAmount data={form_data}
                               onChange={(e)=>change('price_amount', e)}/>
                </Grid>

                <Grid xs={6}>
                  <PriceUnit data={form_data}
                             onChange={(e)=>change('price_unit', e)}/>
                </Grid>

                <Grid xs={6}>
                  <PublicationDate data={form_data}
                                   onChange={(e)=>change('publication_date', e)}/>
                </Grid>
                <Grid xs={6}>
                  <ReleaseDate data={form_data}
                               onChange={(e)=>change('release_date', e)}/>
                </Grid>

                <Grid xs={1}>
                  <Button variant="outlined" onClick={closeModal}>
                    Cancel
                  </Button>
                </Grid>

                <Grid xs={9}>
                </Grid>

                <Grid xs={1}>
                  <Button variant="text" onClick={comimt}>
                    Commit
                  </Button>
                </Grid>

              </Grid>
            </Box>

          </Box>

        </Modal>
    );
}
