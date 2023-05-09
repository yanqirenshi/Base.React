import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import {Link} from '../ui/index.js';

export default function FisheriesLaw () {
    return (
        <Box style={{height: '100%',width: '100%'}}>
          <Container maxWidth="lg">

            <Paper sx={{p:'22px'}}>
              <Typography variant="h5">
                農林水産庁
              </Typography>

              <Link href="https://www.jfa.maff.go.jp/j/yugyo/y_kisei/gyo_hou/">
                ホーム 分野別情報 遊漁の部屋 遊漁・海面利用の基本的ルール 漁業法
              </Link>
            </Paper>

            <Paper sx={{p:'22px'}}>
              <Typography variant="h5">
                法律 (e-gov)
              </Typography>

              {low_data_list.map(low_data=> {
                  return (
                      <div key={low_data.label} style={{marginBottom:22}}>
                        <Typography variant="h6">
                          {low_data.label}
                        </Typography>

                        {low_data.list.map(data=> {
                            return (
                                <Typography>
                                  <Link href={data.url}>
                                    {data.name} {/* ({data.start.date}{data.start.number}, {data.update.date}{data.update.number})   */}
                                  </Link>
                                </Typography>
                            );
                        })}
                      </div>
                  );
              })}
            </Paper>
          </Container>

          <div style={{height:222}}/>
        </Box>
    );
}

const low_data_list = [
    {
        label: '水産',
        list: [
            {
                name: '水産基本法',
                start: {
                    date: '平成十三年',
                    number: '法律第八十九号',
                },
                update: {
                    date: '令和四年十二月一日',
                    number: '令和二年法律第七十九号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=413AC0000000089_20221201_502AC0000000079&keyword=%E6%B0%B4',
            },
            {
                name: '輸出水産業の振興に関する法律',
                start: {
                    date: '',
                    number: '',
                },
                update: {
                    date: '',
                    number: ''
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=325AC1000000253_20201201_430AC0000000095&keyword=%E6%B0%B4',
            },
            {
                name: '水産加工業施設改良資金融通臨時措置法',
                start: {
                    date: '昭和五十二年',
                    number: '法律第九十三号',
                },
                update: {
                    date: '平成三十年三月三十一日',
                    number: '平成三十年法律第九号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=352AC0000000093_20180331_430AC0000000009&keyword=%E6%B0%B4',
            },
        ],
    },

    {
        label: '水産資源',
        list: [
            {
                name: '水産資源保護法',
                start: {
                    date: '昭和二十六年',
                    number: '法律第三百十三号',
                },
                update: {
                    date: '令和四年六月十七日',
                    number: '令和四年法律第六十八号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=326AC1000000313',
            },
            {
                name: '海洋水産資源開発促進法',
                start: {
                    date: '昭和四十六年',
                    number: '法律第六十号',
                },
                update: {
                    date: '令和二年十二月一日',
                    number: '平成三十年法律第九十五号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=346AC0000000060_20201201_430AC0000000095&keyword=%E6%B0%B4',
            },
            {
                name: '独立行政法人水資源機構法',
                start: {
                    date: '平成十四年',
                    number: '法律第百八十二号',
                },
                update: {
                    date: '平成三十年法律第四十三号',
                    number: '平成三十一年四月一日'
                },
                url: '',
            },
        ],
    },
    {
        label: '省庁',
        list: [
            {
                name: '農林水産省設置法',
                start: {
                    date: '平成十一年',
                    number: '法律第九十八号',
                },
                update: {
                    date: '令和五年四月一日',
                    number: '令和二年法律第七十九号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=411AC0000000098_20221201_502AC0000000079&keyword=%E6%B0%B4',
            },
        ],
    },
    {
        label: '漁業',
        list: [
            {
                name: '漁業法',
                start: {
                    date: '昭和二十四年',
                    number: '法律第二百六十七号',
                },
                update: {
                    date: '令和四年六月十七日',
                    number: '令和四年法律第六十八号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=324AC0000000267',
            },
        ],
    },
    {
        label: '水質',
        list: [
            {
                name: '水資源開発促進法',
                start: {
                    date: '昭和三十六年',
                    number: '法律第二百十七号',
                },
                update: {
                    date: '',
                    number: ''
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=336AC0000000217_20150801_000000000000000&keyword=%E6%B0%B4',
            },
            {
                name: '水質汚濁防止法',
                start: {
                    date: '昭和四十五年',
                    number: '法律第百三十八号',
                },
                update: {
                    date: '令和四年六月十七日',
                    number: '令和四年法律第六十八号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=345AC0000000138_20220617_504AC0000000068&keyword=%E6%B0%B4',
            },
        ],
    },
    {
        label: '組合',
        list: [
            {
                name: '漁業用海岸局を開設運用する漁業協同組合及び漁業協同組合連合会に対する水産業協同組合法の適用の特例に関する法律',
                start: {
                    date: '昭和二十五年',
                    number: '法律第二百五十三号',
                },
                update: {
                    date: '令和二年十二月一日',
                    number: '平成三十年法律第九十五号'
                },
                url: '',
            },
            {
                name: '農水産業協同組合貯金保険法',
                start: {
                    date: '昭和四十八年',
                    number: '法律第五十三号',
                },
                update: {
                    date: '令和四年法律第六十八号',
                    number: '令和四年六月十七日'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=348AC0000000053_20220617_504AC0000000068&keyword=%E6%B0%B4',
            },
            {
                name: '農林中央金庫及び特定農水産業協同組合等による信用事業の再編及び強化に関する法律',
                start: {
                    date: '平成八年',
                    number: '法律第百十八号',
                },
                update: {
                    date: '令和四年九月一日',
                    number: '令和元年法律第七十一号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=408AC0000000118_20220901_501AC0000000071&keyword=%E6%B0%B4',
            },
            {
                name: '農水産業協同組合の再生手続の特例等に関する法律',
                start: {
                    date: '平成十二年',
                    number: '法律第九十五号',
                },
                update: {
                    date: '令和二年十二月一日',
                    number: '平成三十年法律第九十五号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=412AC0000000095_20201201_430AC0000000095&keyword=%E6%B0%B4',
            },
            {
                name: '水産業協同組合法',
                start: {
                    date: '昭和二十三年',
                    number: '法律第二百四十二号',
                },
                update: {
                    date: '令和四年九月一日',
                    number: '令和元年法律第七十一号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=323AC0000000242_20220901_501AC0000000071&keyword=%E6%B0%B4',
            },
        ],
    },
    {
        label: '水域',
        list: [
            {
                name: '排他的経済水域及び大陸棚に関する法律',
                start: {
                    date: '平成八年',
                    number: '法律第七十四号',
                },
                update: {
                    date: '',
                    number: ''
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=408AC0000000074_20150801_000000000000000&keyword=%E6%B0%B4',
            },
            {
                name: '排他的経済水域における漁業等に関する主権的権利の行使等に関する法律',
                start: {
                    date: '平成八年',
                    number: '法律第七十六号',
                },
                update: {
                    date: '令和二年十二月一日',
                    number: '平成三十年法律第九十五号'
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=408AC0000000076_20201201_430AC0000000095&keyword=%E6%B0%B4',
            },
            {
                name: '領海及び接続水域に関する法律',
                start: {
                    date: '昭和五十二年',
                    number: '法律第三十号',
                },
                update: {
                    date: '',
                    number: ''
                },
                url: 'https://elaws.e-gov.go.jp/document?lawid=352AC0000000030_20150801_000000000000000&keyword=%E6%B0%B4',
            },
        ],
    },
];
