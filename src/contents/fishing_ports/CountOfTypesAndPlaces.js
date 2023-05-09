import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {count_of_types_and_place} from '../../data/FISHING_PORTS.js';

export default function CountOfTypesAndPlaces () {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{fontSize:14}}>
                <TableCell rowSpan="2"></TableCell>
                <TableCell colSpan="2">第1種</TableCell>
                <TableCell colSpan="2">第2種</TableCell>
                <TableCell colSpan="2">第3種</TableCell>
                <TableCell colSpan="2">第4種</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>都道府県</TableCell>
                <TableCell>市町村</TableCell>
                <TableCell>都道府県</TableCell>
                <TableCell>市町村</TableCell>
                <TableCell>都道府県</TableCell>
                <TableCell>市町村</TableCell>
                <TableCell>都道府県</TableCell>
                <TableCell>市町村</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {count_of_types_and_place.map((data) => {
                  return (
                      <TableRow key={data.place}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {data.place}
                        </TableCell>
                        <TableCell>{data.type1.c1}</TableCell>
                        <TableCell>{data.type1.c2}</TableCell>
                        <TableCell>{data.type2.c1}</TableCell>
                        <TableCell>{data.type2.c2}</TableCell>
                        <TableCell>{data.type3.c1}</TableCell>
                        <TableCell>{data.type3.c2}</TableCell>
                        <TableCell>{data.type4.c1}</TableCell>
                        <TableCell>{data.type4.c2}</TableCell>
                      </TableRow>
                  );
              })}
            </TableBody>
          </Table>
        </TableContainer>
    );
}
