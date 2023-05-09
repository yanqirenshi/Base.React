import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const x = [
    { name: '底びき網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/soko_biki2.jpg' } },
    { name: '船びき網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/funa_biki2.jpg' } },
    { name: 'まき網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/makiami2.jpg' } },
    { name: '刺網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/sasiami2.jpg' } },
    { name: 'さんま棒受網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/sanma2.jpg' } },
    { name: '大型定置網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/ogata_teichi2.jpg' } },
    { name: 'さけ定置網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/sake2.jpg' } },
    { name: '小型定置網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/kogata_teichi2.jpg' } },
    { name: 'その他の網漁業', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/sonota_ami2.jpg' } },
    { name: 'はえ縄', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/haenawa2.jpg' } },
    { name: 'かつお一本釣', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/katuo2.jpg' } },
    { name: 'いか釣', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/ikaturi2.jpg' } },
    { name: 'ひき縄釣', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/hiki_nawa2.jpg' } },
    { name: '潜水器漁業', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/sensui_ki2.jpg' } },
    { name: '採貝', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/saikai2.jpg' } },
    { name: '採藻', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/saisou2.jpg' } },
    { name: 'まぐろ類養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/maguro2.jpg' } },
    { name: 'ほたてがい養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/hotate_gai2.jpg' } },
    { name: 'かき類養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/kaki2.jpg' } },
    { name: 'ほや類養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/hoya2.jpg' } },
    { name: 'こんぶ類養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/konbu2.jpg' } },
    { name: 'わかめ類養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/wakame2.jpg' } },
    { name: 'のり類養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/nori2.jpg' } },
    { name: '真珠養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/sinzyu2.jpg' } },
];

const y = [
    { name: '投網', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/toami2.jpg' } },
    { name: 'しじみ漁', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/sizimi2.jpg' } },
    { name: 'うなぎ養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/unagi2.jpg' } },
    { name: 'ます類養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/masu2.jpg' } },
    { name: '錦ごい養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/nisiki_goi2.jpg' } },
    { name: 'きんぎょ養殖', img: { url: 'https://www.maff.go.jp/j/tokei/census/img/kingyo2.jpg' } },
];


export default function FisheryType () {
    return (
        <Box style={{width:'100%', height: '100%', display:'flex', flexDirection:'column', alignItems: 'center' }}>

          <Box sx={{width:'77%', background:'#fff', padding:'22px', height: 'fit-content'}}>
            <Typography variant="h3">漁業種類</Typography>

            <Box sx={{padding:'22px'}}>
              <Typography variant="h4">海面漁業</Typography>

              <Paper elevation={0}  sx={{display:'flex', flexWrap:'wrap', p:"22px"}}>
                {x.map(data=> {
                    return (
                        <Card sx={{ minWidth: 300, maxWidth: 300, margin: '10px' }}>
                          <CardMedia sx={{ height: 140 }}
                                     image={data.img.url}
                                     title="green iguana"/>

                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {data.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                          </CardContent>

                          {/* <CardActions> */}
                          {/*   <Button size="small">Share</Button> */}
                          {/*   <Button size="small">Learn More</Button> */}
                          {/* </CardActions> */}
                        </Card>
                    );
                })}
              </Paper>
            </Box>

            <Box sx={{padding:'22px'}}>
              <Typography variant="h4">内水面漁業</Typography>

              <Paper elevation={0}  sx={{display:'flex', flexWrap:'wrap', p:"22px"}}>
                {y.map(data=> {
                    return (
                        <Card sx={{ minWidth: 300, maxWidth: 300, margin: '10px' }}>
                          <CardMedia sx={{ height: 140 }}
                                     image={data.img.url}
                                     title="green iguana"/>

                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {data.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            </Typography>
                          </CardContent>

                          {/* <CardActions> */}
                          {/*   <Button size="small">Share</Button> */}
                          {/*   <Button size="small">Learn More</Button> */}
                          {/* </CardActions> */}
                        </Card>
                    );
                })}
              </Paper>
            </Box>
          </Box>

          <Box sx={{width:'77%', background:'#fff', padding:'22px', height: 'fit-content'}}>
            <Typography variant="h3">捕獲漁業</Typography>

            <Box sx={{display:'flex', flexWrap:'wrap'}}>
              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h4">遠洋漁業</Typography>
                <Typography variant="h5">範囲</Typography>
                <Typography variant="h5">漁獲量</Typography>
                <Typography variant="h5">漁法</Typography>
                <Typography>カツオ一本釣り</Typography>
                <Typography>マグル延縄漁</Typography>
                <Typography>底引き網(トロール)漁</Typography>
              </Paper>

              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h4">沖合漁業</Typography>
                <Typography variant="h5">範囲</Typography>
                <Typography variant="h5">漁獲量</Typography>
                <Typography variant="h5">漁法</Typography>
                <Typography>沖合イカ釣り漁業</Typography>
                <Typography>巻き網漁</Typography>
                <Typography>棒受け網漁</Typography>
                <Typography>刺し網漁</Typography>
              </Paper>

              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h4">沿岸漁業</Typography>
                <Typography variant="h5">範囲</Typography>
                <Typography variant="h5">漁獲量</Typography>
                <Typography variant="h5">漁法</Typography>
              </Paper>

              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h4">淡水漁業</Typography>
                <Typography variant="h5">内水面漁業</Typography>
                <Typography variant="h5">内水面養殖業</Typography>
              </Paper>

              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h4">捕鯨</Typography>
              </Paper>
            </Box>
          </Box>

          <Box sx={{width:'77%', background:'#fff', padding:'22px', height: 'fit-content'}}>
            <Typography variant="h3">養殖漁業</Typography>

            <Box sx={{display:'flex', flexWrap:'wrap'}}>
              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h5">海水魚養殖</Typography>
              </Paper>

              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h5">淡水魚養殖</Typography>
              </Paper>

              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h5">魚介類養殖</Typography>
              </Paper>

              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h5">水性植物養殖</Typography>
              </Paper>

              <Paper elevation={0} sx={{p:"22px"}}>
                <Typography variant="h5">真珠養殖</Typography>
              </Paper>
            </Box>
          </Box>


          {false &&
           <Box sx={{width:1000, background:'#fff', padding:'22px'}}>
             <Box sx={{padding:'22px'}}>
               <Typography variant="h3">捕獲漁業</Typography>

               <Paper elevation={0}>
                 {/* | 2006年   | 万トン |  % | */}
                 {/* |----------+--------+----| */}
                 {/* | 沖合漁業 |    250 | 44 | */}
                 {/* | 沿岸漁業 |    145 | 26 | */}
                 {/* | 養殖業   |    118 | 21 | */}
                 {/* | 遠洋漁業 |     52 |  9 | */}
               </Paper>

             </Box>
           </Box>}

        </Box>
    );
}
