import React from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function PositionView (props) {
    const node = props.data;
    const onChange = props.onChange;

    const clickUpdate = ()=>
          onChange(num(node._node.x), num(node._node.y));

    return (
        <div>

          <h3 style={{marginBottom:8}}>Position</h3>

          <TableContainer component={Paper}>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>X</TableCell>
                  <TableCell>Y</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>DB</TableCell>
                  <TableCell>{num(node.x)}</TableCell>
                  <TableCell>{num(node.y)}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Now</TableCell>
                  <TableCell>{num(node._node.x)}</TableCell>
                  <TableCell>{num(node._node.y)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <div style={{marginTop:8}}>
            <Button variant="outlined"
                    color="error"
                    style={{width:'100%'}}
                    size="small"
                    onClick={clickUpdate}>
              現在の位置を保存する
            </Button>
          </div>
        </div>
    );
}

function num (v) {
    return Math.floor( v * 100) / 100;
}
