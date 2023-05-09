import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {types, count_of_types} from '../../data/FISHING_PORTS.js';

export default function CountOfTypes () {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{fontSize:14}}>
                <TableCell rowSpan="2">漁港種類</TableCell>
                <TableCell rowSpan="2">合計</TableCell>
                <TableCell colSpan="2">本土</TableCell>
                <TableCell rowSpan="2">北海道</TableCell>
                <TableCell colSpan="2">離島</TableCell>
                <TableCell rowSpan="2">沖縄</TableCell>
                <TableCell rowSpan="2">奄美</TableCell>
                <TableCell rowSpan="2">小笠原</TableCell>
                <TableCell colSpan="2">管理者別</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>≠半島</TableCell>
                <TableCell>＝半島</TableCell>
                <TableCell>≠北海道</TableCell>
                <TableCell>＝北海道</TableCell>
                <TableCell>都道府県</TableCell>
                <TableCell>市町村</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {types.map((type) => {
                  const name = type.name;
                  const row = count_of_types[name];
                  return (
                      <TableRow key={name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {name}
                        </TableCell>
                        <TableCell>{calTotal(row)}</TableCell>
                        <TableCell>{row.main_land.other}</TableCell>
                        <TableCell>{row.main_land.peninsula}</TableCell>
                        <TableCell>{row.hokkaido}</TableCell>
                        <TableCell>{row.remote_island.other}</TableCell>
                        <TableCell>{row.remote_island.hokkaido}</TableCell>
                        <TableCell>{row.okinawa}</TableCell>
                        <TableCell>{row.amami}</TableCell>
                        <TableCell>{row.ogasawara}</TableCell>
                        <TableCell>{row.by_admin.prefectures}</TableCell>
                        <TableCell>{row.by_admin.municipality}</TableCell>
                      </TableRow>
                  );
              })}
            </TableBody>
          </Table>
        </TableContainer>
    );
}

function calTotal (row) {
    return row.main_land.other +
        row.main_land.peninsula +
        row.hokkaido +
        row.remote_island.other +
        row.okinawa +
        row.amami +
        row.ogasawara;
}
