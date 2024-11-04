import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoritePoketmon } from '../RTK/selector';
import { Card } from '../component/Card';

const Favorite = () => {
    const poketmon = useSelector(selectFavoritePoketmon)
    return (
        <>
           {poketmon.map(el => <Card key={el.id} poketmon={el} />)}
        </>
    );
};

export default Favorite;