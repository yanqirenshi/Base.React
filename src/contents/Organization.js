import React from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Organization () {
    return (
        <div style={{width:'100%', height: '100%'}}>
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>

            <div style={{width: 1000, paddingTop:11}}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                  <TableHead>
                    <TableRow>
                      <TableCell>名前</TableCell>
                      <TableCell>種類</TableCell>
                      <TableCell>備考</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                  </TableBody>

                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
    );
}
