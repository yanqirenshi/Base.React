export const types = [
    { name: '第1種漁港', description: 'その利用範囲が地元の漁業を主とするもの' },
    { name: '第2種漁港', description: 'その利用範囲が第１種漁港よりも広く、第３種漁港に属しないもの' },
    { name: '第3種漁港', description: 'その利用範囲が全国的なもの' },
    { name: '特定第3種漁港', description: '第３種漁港のうち水産業の振興上特に重要な漁港で政令で定めるもの' },
    { name: '第4種漁港', description: '離島その他辺地にあって漁場の開発又は漁船の避難上特に必要なもの' },
];

export const count_of_types = {
    '第1種漁港': {
        main_land: { other: 855, peninsula: 590 },
        hokkaido: 167,
        remote_island: { other: 328, hokkaido: 17 },
        okinawa: 72,
        amami: 30,
        ogasawara: 0,
        by_admin: { prefectures: 276, municipality:1766 },
    },
    '第2種漁港': {
        main_land: { other: 249, peninsula: 154 },
        hokkaido: 38,
        remote_island: { other: 77, hokkaido: 1 },
        okinawa: 7,
        amami: 0,
        ogasawara: 0,
        by_admin: { prefectures: 331, municipality: 194 },
    },
    '第3種漁港': {
        main_land: { other: 48, peninsula: 28 },
        hokkaido: 18,
        remote_island: { other: 6, hokkaido: 1 },
        okinawa: 1,
        amami: 0,
        ogasawara: 0,
        by_admin: { prefectures: 96, municipality:5 },
    },
    '特定第3種漁港': {
        main_land: { other: 12, peninsula: 1 },
        hokkaido: 0,
        remote_island: { other: 0, hokkaido: 0 },
        okinawa: 0,
        amami: 0,
        ogasawara: 0,
        by_admin: { prefectures: 12, municipality: 1 },
    },
    '第4種漁港': {
        main_land: { other: 10, peninsula: 20 },
        hokkaido: 20,
        remote_island: { other: 35, hokkaido: 3 },
        okinawa: 7,
        amami: 5,
        ogasawara: 2,
        by_admin: { prefectures: 99, municipality: 0 },
    },
};

export const count_of_types_and_place = [
    { place: '北海道', type1: { c1:167, c2:0 }, type2: { c1:38, c2:0 }, type3: { c1:18, c2:0 }, type4: { c1:20, c2:0 } },
    { place: '青森県', type1: { c1:11, c2:43 }, type2: { c1:24, c2:0 }, type3: { c1:4, c2:0 }, type4: { c1:3, c2:0 } },
    { place: '岩手県', type1: { c1:3, c2:67 }, type2: { c1:23, c2:0 }, type3: { c1:4, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '宮城県', type1: { c1:0, c2:116 }, type2: { c1:21, c2:0 }, type3: { c1:5, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '秋田県', type1: { c1:1, c2:13 }, type2: { c1:6, c2:0 }, type3: { c1:1, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '山形県', type1: { c1:3, c2:9 }, type2: { c1:2, c2:0 }, type3: { c1:0, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '福島県', type1: { c1:2, c2:0 }, type2: { c1:6, c2:0 }, type3: { c1:2, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '茨城県', type1: { c1:5, c2:14 }, type2: { c1:0, c2:0 }, type3: { c1:5, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '千葉県', type1: { c1:4, c2:42 }, type2: { c1:5, c2:7 }, type3: { c1:8, c2:0 }, type4: { c1:2, c2:0 } },
    { place: '東京都', type1: { c1:14, c2:2 }, type2: { c1:1, c2:0 }, type3: { c1:0, c2:0 }, type4: { c1:6, c2:0 } },
    { place: '神奈川県', type1: { c1:0, c2:19 }, type2: { c1:0, c2:4 }, type3: { c1:2, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '新潟県', type1: { c1:0, c2:47 }, type2: { c1:12, c2:1 }, type3: { c1:2, c2:0 }, type4: { c1:2, c2:0 } },
    { place: '富山県', type1: { c1:1, c2:9 }, type2: { c1:2, c2:2 }, type3: { c1:2, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '石川県', type1: { c1:0, c2:55 }, type2: { c1:3, c2:6 }, type3: { c1:2, c2:0 }, type4: { c1:3, c2:0 } },
    { place: '福井県', type1: { c1:0, c2:34 }, type2: { c1:5, c2:3 }, type3: { c1:1, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '静岡県', type1: { c1:0, c2:33 }, type2: { c1:3, c2:6 }, type3: { c1:3, c2:1 }, type4: { c1:2, c2:0 } },
    { place: '愛知県', type1: { c1:0, c2:17 }, type2: { c1:7, c2:6 }, type3: { c1:3, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '三重県', type1: { c1:1, c2:43 }, type2: { c1:6, c2:16 }, type3: { c1:3, c2:0 }, type4: { c1:3, c2:0 } },
    { place: '滋賀県', type1: { c1:0, c2:20 }, type2: { c1:0, c2:0 }, type3: { c1:0, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '京都府', type1: { c1:0, c2:20 }, type2: { c1:0, c2:11 }, type3: { c1:1, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '大阪府', type1: { c1:9, c2:2 }, type2: { c1:2, c2:0 }, type3: { c1:0, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '兵庫県', type1: { c1:2, c2:34 }, type2: { c1:10, c2:4 }, type3: { c1:2, c2:1 }, type4: { c1:0, c2:0 } },
    { place: '和歌山県', type1: { c1:1, c2:76 }, type2: { c1:0, c2:11 }, type3: { c1:4, c2:0 }, type4: { c1:2, c2:0 } },
    { place: '鳥取県', type1: { c1:0, c2:14 }, type2: { c1:2, c2:0 }, type3: { c1:2, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '島根県', type1: { c1:0, c2:55 }, type2: { c1:21, c2:0 }, type3: { c1:4, c2:0 }, type4: { c1:3, c2:0 } },
    { place: '岡山県', type1: { c1:4, c2:12 }, type2: { c1:9, c2:1 }, type3: { c1:0, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '広島県', type1: { c1:1, c2:24 }, type2: { c1:12, c2:6 }, type3: { c1:1, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '山口県', type1: { c1:0, c2:54 }, type2: { c1:1, c2:33 }, type3: { c1:3, c2:0 }, type4: { c1:3, c2:0 } },
    { place: '徳島県', type1: { c1:0, c2:16 }, type2: { c1:11, c2:0 }, type3: { c1:1, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '香川県', type1: { c1:0, c2:86 }, type2: { c1:0, c2:6 }, type3: { c1:0, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '愛媛県', type1: { c1:0, c2:162 }, type2: { c1:0, c2:22 }, type3: { c1:0, c2:3 }, type4: { c1:2, c2:0 } },
    { place: '高知県', type1: { c1:14, c2:59 }, type2: { c1:8, c2:2 }, type3: { c1:4, c2:0 }, type4: { c1:1, c2:0 } },
    { place: '福岡県', type1: { c1:0, c2:42 }, type2: { c1:4, c2:16 }, type3: { c1:0, c2:1 }, type4: { c1:2, c2:0 } },
    { place: '佐賀県', type1: { c1:1, c2:33 }, type2: { c1:2, c2:8 }, type3: { c1:2, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '長崎県', type1: { c1:7, c2:173 }, type2: { c1:29, c2:4 }, type3: { c1:5, c2:0 }, type4: { c1:10, c2:0 } },
    { place: '熊本県', type1: { c1:2, c2:78 }, type2: { c1:13, c2:9 }, type3: { c1:1, c2:0 }, type4: { c1:0, c2:0 } },
    { place: '大分県', type1: { c1:0, c2:89 }, type2: { c1:7, c2:10 }, type3: { c1:2, c2:0 }, type4: { c1:2, c2:0 } },
    { place: '宮崎県', type1: { c1:11, c2:0 }, type2: { c1:5, c2:0 }, type3: { c1:5, c2:0 }, type4: { c1:2, c2:0 } },
    { place: '鹿児島県', type1: { c1:0, c2:94 }, type2: { c1:24, c2:0 }, type3: { c1:5, c2:0 }, type4: { c1:16, c2:0 } },
    { place: '沖縄県', type1: { c1:12, c2:60 }, type2: { c1:7, c2:0 }, type3: { c1:1, c2:0 }, type4: { c1:7, c2:0 } },
];
