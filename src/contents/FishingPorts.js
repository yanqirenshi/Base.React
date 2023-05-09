import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import {Link} from '../ui/index.js';

import Types from './fishing_ports/Types.js';
import CountOfTypes from './fishing_ports/CountOfTypes.js';
import CountOfTypesAndPlaces from './fishing_ports/CountOfTypesAndPlaces.js';

export default function FishingPorts () {
    return (
        <Box style={{height: '100%',width: '100%'}}>
          <Container maxWidth="lg">

            <Paper sx={{p:'22px'}}>
              <Typography variant="h5">
                漁港の種類
              </Typography>
              <Types/>
            </Paper>

            <Paper sx={{p:'22px'}}>
              <Typography variant="h5">
                <Link href="https://www.jfa.maff.go.jp/j/gyoko_gyozyo/g_zyoho_bako/gyoko_itiran/attach/pdf/sub81-5.pdf">
                  指定漁港数一覧表
                </Link>
              </Typography>

              <CountOfTypes/>
            </Paper>

            <Paper sx={{p:'22px'}}>
              <Typography variant="h5">
                <Link href="https://www.jfa.maff.go.jp/j/gyoko_gyozyo/g_zyoho_bako/gyoko_itiran/attach/pdf/sub81-27.pdf">
                  都道府県別漁港管理者別漁港数一覧
                </Link>
              </Typography>

              <CountOfTypesAndPlaces />
            </Paper>

            <Paper sx={{p:'22px'}}>
              <Typography variant="h5">
                <Link href="https://www.jfa.maff.go.jp/j/gyoko_gyozyo/g_zyoho_bako/gyoko_itiran/sub81.html">
                  漁港一覧
                </Link>
              </Typography>
            </Paper>

          </Container>

          <div style={{height:222}}/>
        </Box>
    );
}
