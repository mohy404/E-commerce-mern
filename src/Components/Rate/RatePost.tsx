import React from 'react';
import ReactStars from 'react-rating-stars-component';

const RatePost: React.FC = () => {
    const ratingChanged = (newRating: number) => { // Explicitly define the type of newRating as number
        console.log(`New rating is: ${newRating}`);
    };

    return (
        <div className="flex flex-col p-4 border border-gray-300 shadow rounded">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                    <div className="text-lg font-semibold mr-2">علي محمد</div>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                    <div className="ml-2">(160 تقييم)</div>
                </div>
                <div className="text-xl font-bold text-yellow-400">4.3</div>
            </div>
            <textarea
                className="form-textarea border p-2 w-full"
                rows={4}
                placeholder="اكتب تعليقك...."
            />
            <button className="bg-blue-600 text-white mt-4 px-6 py-2 rounded text-sm hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
                اضف تعليق
            </button>
        </div>
    );
};

export default RatePost;
