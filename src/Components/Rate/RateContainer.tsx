import React from 'react';
import rate from '../../assets/rate.png';
import Pagination from '../utility/Pagination';
import RatePost from './RatePost';
import RateItem from './RateItem';


const RateContainer = () => {
    return (
        <div className='container mx-auto my-4'> 
            <div className="flex"> 
                <div className="inline-block p-1 mr-2">التقيمات</div> 
                <img className="mt-2 mr-2 h-4 w-4" src={rate} alt="Rating" />  
                <div className="inline-block p-1 pt-2 mr-2">(160 تقييم)</div> 
            </div>

            <RatePost />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />

            <Pagination />
        </div>
    );
}

export default RateContainer;
