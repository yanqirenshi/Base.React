import React from 'react';

import LinkMaterial from '@mui/material/Link';

export default function FishTools () {
    return (
        <div style={{width:'100%', height: '100%'}}>
          <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>

            <div style={{width: '88%', paddingTop:11, display: 'flex', flexWrap: 'wrap' }}>
              {tools.map(d=> {
                  return (
                      <div key={d.id} style={{margin:22}}>
                        <p>{d.title}</p>

                        <LinkMaterial href={d.actions[0].href}>
                          <p>{d.description}</p>
                        </LinkMaterial>

                        <img style={{height:d.img.h, top: d.img.top}}
                             src={d.img.url}
                             alt={d.img.url}/>
                      </div>
                  );
              })}
            </div>

          </div>
        </div>
    );
}

const DATA = [
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 180,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/41sza5yTiCL._AC_SL1000_.jpg'
        },
        title: 'Cutting Board',
        description: 'JosephJoseph 食洗器対応水切り一体型まな板',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https:www.amazon.co.jp/Joseph-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%82%81%E3%82%8B%E3%81%BE%E3%81%AA%E6%9D%BF-%E3%83%81%E3%83%A7%E3%83%83%E3%83%97-%E3%82%B9%E3%83%A2%E3%83%BC%E3%83%AB-600728/dp/B009X07ILW/ref=sr_1_12'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 280,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/61a4V2+OUxL._AC_SL1200_.jpg'
        },
        title: 'Char',
        description: 'ロゴス アウトドアチェア',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https:www.amazon.co.jp/%E3%83%AD%E3%82%B4%E3%82%B9-LOGOS-73175033-%E3%82%A2%E3%82%A6%E3%83%88%E3%83%89%E3%82%A2%E3%83%81%E3%82%A7%E3%82%A2-7075%E3%82%BF%E3%83%95%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%93%E3%83%83%E3%82%AF%E3%83%81%E3%82%A7%E3%82%A2%E3%83%BB%E3%83%AF%E3%82%A4%E3%83%89/dp/B01N6RZB05/ref=sr_1_21'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 180,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/71Lmh1M03lL._AC_SL1500_.jpg'
        },
        title: 'Table',
        description: 'キャプテンスタッグ(CAPTAIN STAG) アルミ ロールテーブル',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%86%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%83%E3%82%B0-CAPTAIN-STAG-%E3%83%AD%E3%83%BC%E3%83%AB%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB-M-3713/dp/B000AR4TJQ/ref=pd_bxgy_img_1/355-0961192-1797146'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 70,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://www.yoshikin.co.jp/wp-content/uploads/2019/10/globalist_IST_05-1.png'
        },
        title: 'Knife',
        description: 'IST-05 小出刃 12cm',
        actions: [
            {
                type: 'LINK',
                label: 'Yoshikin',
                href: 'https://www.yoshikin.co.jp/products/%e5%b0%8f%e5%87%ba%e5%88%8312cm'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 70,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://www.yoshikin.co.jp/wp-content/uploads/2019/10/globalist_IST_06.png'
        },
        title: 'Knife',
        description: 'IST-06 柳刃 24cm',
        actions: [
            {
                type: 'LINK',
                label: 'Yoshikin',
                href: 'https://www.yoshikin.co.jp/products/%e6%9f%b3%e5%88%83-24cm'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 70,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://www.yoshikin.co.jp/wp-content/uploads/2019/10/ac_main_gs-29.png'
        },
        title: 'Knife',
        description: 'GS-29 骨抜き',
        actions: [
            {
                type: 'LINK',
                label: 'Yoshikin',
                href: 'https://www.yoshikin.co.jp/products/%e9%aa%a8%e6%8a%9c%e3%81%8d'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 350,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/31Y831j8bNL._AC_.jpg'
        },
        title: 'Water',
        description: 'ポータブル活かし水くみ',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E3%83%80%E3%82%A4%E3%83%AF-DAIWA-%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB%E6%B4%BB%E3%81%8B%E3%81%97%E6%B0%B4%E3%81%8F%E3%81%BF-15-A/dp/B098VZ2X5L/ref=pd_sbs_7/355-0961192-1797146'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 380,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/416V8OL4WES._AC_SL1500_.jpg'
        },
        title: 'Preserve',
        description: 'ATITI 真空パック機',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/ATITI-%E7%9C%9F%E7%A9%BA%E3%83%91%E3%83%83%E3%82%AF%E6%A9%9F-%E7%9C%9F%E7%A9%BA%E8%A2%8B5%E6%9E%9A%E4%BB%98%E3%81%8D-%E5%AE%B6%E5%BA%AD%EF%BC%8F%E6%97%85%E8%A1%8C%EF%BC%8F%E3%83%8F%E3%82%A4%E3%82%AD%E3%83%B3%E3%82%B0%E6%9C%80%E9%81%A9%E7%94%A8-%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8/dp/B094CPTLKK/ref=sr_1_38'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 240,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/61b-mD7cXvS._AC_SL1500_.jpg'
        },
        title: 'Preserve',
        description: '真空パック袋20枚',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E7%9C%9F%E7%A9%BA%E3%83%91%E3%83%83%E3%82%AF%E8%A2%8B20%E6%9E%9A-%E5%AF%86%E5%B0%81%E7%94%A8%E3%82%B9%E3%83%A9%E3%82%A4%E3%83%80%E3%83%BC4%E6%9E%9A%E4%BB%98-%E6%8A%97%E8%8F%8C%E8%A2%8B-%E5%9C%A7%E7%B8%AE%E8%A2%8B-%E3%83%9A%E3%83%83%E3%83%88/dp/B0963S2JHL/ref=pd_day0fbt_img_2/355-0961192-1797146'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 80,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://www.purefishing.jp/product/assets/2017era_77mlt.jpg'
        },
        title: 'Rod',
        description: 'AbuGarcia EBFC-77MLT-PF-TZ (The"Power Finesse")',
        actions: [
            {
                type: 'LINK',
                label: 'AbuGarcia',
                href: 'https://www.purefishing.jp/product/abugarcia/eradicator-baitfinesse-custom-air.html'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 230,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://www.purefishing.jp/zenon/assets/img/specDetail-image--ltx.jpg'
        },
        title: 'Reel',
        description: 'ZENON LTX',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.purefishing.jp/product/abugarcia/zenon.html'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 80,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://www.purefishing.jp/product/assets/ERD-REALFINESSE-Prototype-ERFS-60Pro-FS.png'
        },
        title: 'Rod',
        description: 'AbuGarcia ERD REALFINESSE Prototype ERFS-60Pro-FS (6ft, 39g)',
        actions: [
            {
                type: 'LINK',
                label: 'AbuGarcia',
                href: 'https://www.purefishing.jp/product/abugarcia/eradicator-realfinesse-prototype.html?utm_source=pocket_mylist'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 230,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://www.purefishing.jp/product/assets/2021_ZENON%202500SH_main_sq.jpg'
        },
        title: 'Reel',
        description: 'ZENON 1000S',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.purefishing.jp/product/abugarcia/sp/zenon/revo-mgx-theta-1.html'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 230,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/71APiRK+9oL._AC_SL1500_.jpg'
        },
        title: 'Fish Grip',
        description: '第一精工 フィッシュグリップ',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E7%AC%AC%E4%B8%80%E7%B2%BE%E5%B7%A5-%E3%83%AF%E3%83%8B%E3%82%B0%E3%83%AA%E3%83%83%E3%83%97%E3%83%9F%E3%83%8BMC-%E3%83%9B%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%BC-%E3%83%80%E3%83%BC%E3%82%AF%E3%82%A2%E3%83%BC%E3%82%B9/dp/B00U2TDCXG/ref=pd_sbs_1/355-0961192-1797146'
            },
        ],
    },
    {
        type: 'INFO',
        w: 1,
        img: {
            h: 165,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/91k5MtR5ZhL._AC_UL1500_.jpg'
        },
        title: 'Trash',
        description: 'カリマー ポーチ',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E3%82%AB%E3%83%AA%E3%83%9E%E3%83%BC-belt-pouch-Steel-Blue/dp/B091PWZG9Y/ref=sr_1_87'
            },
        ],
    },
    {
        type: 'INFO',
        w: 1,
        img: {
            h: 210,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/61Kw5nmollL._AC_UL1000_.jpg'
        },
        title: 'Trash',
        description: 'JETEDC MOLLE ケトルバッグ',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/JETEDC%EF%BC%88%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E3%82%A4%E3%83%87%E3%82%A4%E3%82%B7%E3%82%A4%EF%BC%89MOLLE-%E3%82%B1%E3%83%88%E3%83%AB%E3%83%90%E3%83%83%E3%82%B0-%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%9C%E3%83%88%E3%83%AB%E3%83%90%E3%83%83%E3%82%B0-%E9%BB%91-%E7%B7%91%E8%89%B2-2PCS/dp/B07H4HNJD7/ref=pd_sim_25/356-1976881-7343929'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 160,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/61CoyAIA6RL._AC_SL1500_.jpg'
        },
        title: 'Bag',
        description: 'ハウスホールドジャパン ゴミ袋',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E3%83%8F%E3%82%A6%E3%82%B9%E3%83%9B%E3%83%BC%E3%83%AB%E3%83%89%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3-100%E6%9E%9A%E5%85%A5-23%C3%9738cm-%E3%81%8A%E3%82%80%E3%81%A4%E3%82%84%E7%94%9F%E3%82%B4%E3%83%9F%E3%81%AE%E8%87%AD%E3%81%84%E6%88%90%E5%88%86%E3%82%9280-AS05/dp/B07H322H9Y/ref=pd_yo_rr_rp_2/356-1976881-7343929'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 200,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/71FuR930Y1L._AC_SL1500_.jpg'
        },
        title: 'Soap',
        description: '毛穴撫子 重曹つるつる石鹸',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E6%AF%9B%E7%A9%B4%E6%92%AB%E5%AD%90-%E9%87%8D%E6%9B%B9%E3%81%A4%E3%82%8B%E3%81%A4%E3%82%8B%E7%9F%B3%E3%81%91%E3%82%93-155g-%E6%A8%99%E6%BA%96%E9%87%8D%E9%87%8F/dp/B003M0OY5W/ref=sr_1_1'
            },
        ],
    },
    {
        type: 'INFO',
        w: 1,
        img: {
            h: 390,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/51YPJldn7tL._AC_SL1000_.jpg'
        },
        title: 'Soap',
        description: 'TAKAMIYA 釣専消臭 100ml',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E3%82%BF%E3%82%AB%E3%83%9F%E3%83%A4-TAKAMIYA-%E9%87%A3%E5%B0%82%E6%B6%88%E8%87%AD-100ml/dp/B00WVVTA66/ref=sr_1_2'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 300,
            // top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/41fgLo-ho6L._AC_.jpg'
        },
        title: 'Towel',
        description: 'びわこ 「ふきん」 生成',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E3%81%B3%E3%82%8F%E3%81%93-%E3%80%8C%E3%81%B5%E3%81%8D%E3%82%93%E3%80%8D-%E7%94%9F%E6%88%90-32%C3%9735cm/dp/B00BOH02B0/ref=sr_1_7'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 270,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://m.media-amazon.com/images/I/71jcaMa+XAL._AC_SL1200_.jpg'
        },
        title: 'Box',
        description: 'キャプテンスタッグ クーラーボックス (容量8L)',
        actions: [
            {
                type: 'LINK',
                label: 'Amazon',
                href: 'https://www.amazon.co.jp/%E3%82%AD%E3%83%A3%E3%83%97%E3%83%86%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%83%E3%82%B0-CAPTAIN-STAG-%E7%99%BA%E6%B3%A1%E3%82%AF%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B98L-M-8169/dp/B001W03N1A/ref=psdc_14916931_t1_B001W03N2Y'
            },
        ],
    },
    {
        type: 'INFO',
        w: 2,
        img: {
            h: 160,
            top: 22,
            // left: -22,
            background: '#fff',
            url: 'https://huerco.jp/admin/wp-content/uploads/2021/05/MG700R-5S.jpg'
        },
        title: 'Rod',
        description: 'Huerco MG700R-5S (7ft, 110g)',
        actions: [
            {
                type: 'LINK',
                label: 'Huerco',
                href: 'https://huerco.jp/product/mg700r-5s?utm_source=pocket_mylist'
            },
        ],
    },
];

let i = 1;
const tools = DATA.map(d=> {
    d.id = i++;
    return d;
});
