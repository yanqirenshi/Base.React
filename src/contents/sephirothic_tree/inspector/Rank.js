import React from 'react';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export default function Rank (props) {
    const value = props.value || '未設定';
    const parent = props.parent;
    const onChange = props.onChange;

    const ranks_targets = getRanks(parent);

    return (
        <FormControl size="small">
          <InputLabel id="demo-simple-select-label">Rank</InputLabel>

          <Select labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  label="Rank"
                  onChange={(e)=>onChange(e.target.value)}>

            {ranks_targets.map(rank=>
                <MenuItem key={rank.value}
                          value={rank.value}>
                  {rank.label}
                </MenuItem>)}

          </Select>
        </FormControl>
    );
}

function getRanks (parent) {
    if (!parent)
        return [
            { value: '未設定',   label: '未設定' }
        ];

    const rank = parent._core.rank();
    const pos = ranks.findIndex(d=>d.value===rank);

    return [
        { value: '未設定',   label: '未設定' }
    ].concat(ranks.slice(pos + 1));
}

const ranks = [
    { value: 'ドメイン', label: 'ドメイン' },
    { value: '上界',     label: '上界' },
    { value: '界',       label: '界' },
    { value: '亜界',     label: '亜界' },
    { value: '下界',     label: '下界' },
    { value: '上門',     label: '上門' },
    { value: '門',       label: '門' },
    { value: '亜門',     label: '亜門' },
    { value: '下門',     label: '下門' },
    { value: '上綱',     label: '上綱' },
    { value: '綱',       label: '綱' },
    { value: '亜綱',     label: '亜綱' },
    { value: '下綱',     label: '下綱' },
    { value: '上区',     label: '上区' },
    { value: '区',       label: '区' },
    { value: '亜区',     label: '亜区' },
    { value: '大目',     label: '大目' },
    { value: '上目',     label: '上目' },
    { value: '目',       label: '目' },
    { value: '亜目',     label: '亜目' },
    { value: '下目',     label: '下目' },
    { value: '小目',     label: '小目' },
    { value: '上科',     label: '上科' },
    { value: '科',       label: '科' },
    { value: '亜科',     label: '亜科' },
    { value: '属',       label: '属' },
    { value: '亜属',     label: '亜属' },
    { value: '種',       label: '種' },
];


// | 和名     | 英名     | ラテン語名 |
// |----------+----------+------------|
// | ドメイン | domain   | regio      |
// |----------+----------+------------|
// | 上界     |          |            |
// | 界       | kingdom  | regnum     |
// | 亜界     |          |            |
// | 下界     |          |            |
// |----------+----------+------------|
// | 上門     |          |            |
// | 門       |          |            |
// | 亜門     |          |            |
// | 下門     |          |            |
// |----------+----------+------------|
// | 上綱     |          |            |
// | 綱       | class    | classis    |
// | 亜綱     |          |            |
// | 下綱     |          |            |
// |----------+----------+------------|
// | 上区     |          |            |
// | 区       |          |            |
// | 亜区     |          |            |
// |----------+----------+------------|
// | 大目     |          |            |
// | 上目     |          |            |
// | 目       | order    | ordo       |
// | 亜目     |          |            |
// | 下目     |          |            |
// | 小目     |          |            |
// |----------+----------+------------|
// | 上科     |          |            |
// | 科       | family   | familia    |
// | 亜科     | family   | subfamilia |
// |----------+----------+------------|
// | 属       | genus    | genus      |
// | 亜属     | subgenus | subgenera  |
// |----------+----------+------------|
// | 種       | species  | species    |
