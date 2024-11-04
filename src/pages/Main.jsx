import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../component/Card';

const Main = () => {
    const poketmonData = useSelector(state => state.poketmon.data)

    return (
        <>
            {poketmonData.map(el => <Card key={el.id} poketmon={el} />)}
        </>
    );
};

export default Main;