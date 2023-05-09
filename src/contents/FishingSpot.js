import React from 'react';

import Map from './enoshima/Map.js';

const style = {
    fishes: {
        position: 'fixed',
        left: 22,
        bottom: 33,
        zIndex: 888888,
        background: '#fff',
        padding: 22,
        borderRadius: 5,
    },
    places: {
        position: 'fixed',
        right: 22,
        bottom: 33,
        zIndex: 888888,
        background: '#fff',
        padding: 22,
        borderRadius: 5,
    }
};

export default function FishingSpot () {
    return (
        <div style={{height: '100%',width: '100%'}}>
          <div style={style.fishes}>
            {fishs.map(fish=> (
                <div>{fish}</div>
            ))}
          </div>

          <div style={style.places}>
            {plase.map(fish=> (
                <div>{fish}</div>
            ))}
          </div>

          <Map />
        </div>
    );
}

const fishs = [
    'アジ',
    'イシダイ',
    'イシモチ',
    'イナダ',
    'イワシ',
    'カサゴ',
    'カレイ',
    'カワハギ',
    'キス',
    'クロダイ',
    'ゴンズイ',
    'シーバス',
    'タチウオ',
    'ハゼ',
    'ボラ',
    'メジナ',
    'モンゴウイカ',
    'ヤリイカ',
    'アオリイカ',
    'エイ',
    'ダイナンウミヘビ',
];

const plase = [
    '湘南港大堤防',
    '釜の口',
    '稚児ヶ淵',
    '割磯',
    '西浦漁港',
    '片瀬漁港',
];

