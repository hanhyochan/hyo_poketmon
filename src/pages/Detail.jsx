import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPoketmonById } from '../RTK/selector';
import Favorite from './Favorite';
import FavoriteButton from '../component/FavoriteButton';
import FlipCard from '../component/FlipCard';

const Detail = () => {
    const { poketmonId } = useParams()
    const poketmon = useSelector(selectPoketmonById(Number(poketmonId)))

    return (
        <div className='bg-white flex flex-col justify-center items-center border border-[gray] py-[30px] px-[30px] rounded-[10px] border-b-[8px] border-r-[8px] border-black'>
            <div className='text-[28px] mb-[10px]'>{poketmon.name}
                <FavoriteButton poketmonId={Number(poketmonId)} />
            </div>
            <div className='whitespace-pre-wrap text-center '>{poketmon.description}</div>
            <FlipCard front={poketmon.front} back={poketmon.back} />
        </div>
    );
};

export default Detail;