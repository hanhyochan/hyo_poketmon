import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPoketmonById } from '../RTK/selector';

const Detail = () => {
    const { poketmonId } = useParams()
    const poketmon = useSelector(selectPoketmonById(Number(poketmonId)))

    return (
        <div className='flex flex-col justify-center items-center border border-[gray] p-[30px] rounded-[10px]'>
            <div className='text-[28px] mb-[10px]'>{poketmon.name}</div>
            <div className='whitespace-pre-wrap text-center '>{poketmon.description}</div>
            <img className='w-[200px]' src={poketmon.front} />
        </div>
    );
};

export default Detail;