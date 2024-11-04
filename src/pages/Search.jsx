import { getRegExp } from 'korean-regexp';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectPoketmonByRegExp } from '../RTK/selector';
import { Card } from '../component/Card';

const Search = () => {
    const [searchParams] = useSearchParams()
    const params = searchParams.get('poketmon')
    const reg = getRegExp(params)

    const poketmon = useSelector(selectPoketmonByRegExp(reg))

    return (
        <>
            {poketmon.map(el => <Card key={el.id} poketmon={el} />)}
        </>
    );
};

export default Search;