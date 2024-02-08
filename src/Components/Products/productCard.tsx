import React from 'react';
import prod1 from "../../assets/prod1.png";
import favoff from "../../assets/fav-off.png";
import rate from "../../assets/rate.png";
import { Link } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-2">
      <div className="bg-white rounded-lg shadow overflow-hidden group">
        <div className="relative">

            <img className="w-full h-56 object-cover" src={item.imageCover} alt="Product" />
          <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow">
            <img src={favoff} alt="Favorite" className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">
          <h5 className="text-gray-900 text-lg font-bold mb-2 truncate"> {item.title}</h5>
          <div className="flex items-center mb-4">
            <img src={rate} alt="Rating" className="h-4 w-4" />
            <span className="text-gray-600 text-sm ml-1">{item.ratingsQuantity}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-bold">{item.price} جنيه</span>
            <Link to={`/products/${item._id}`}>
            <button className="text-white bg-blue-500 hover:bg-blue-600 rounded px-3 py-1 transition-colors duration-300">
              إكتشف
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
