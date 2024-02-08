import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { useParams } from 'react-router-dom';
import useViewDetalisProduct from '../../Hook/prodcuts/useViewDetalisProduct';

const ProductGallery = () => {
    const {id} = useParams()
    const  { item , images} = useViewDetalisProduct(id)
    // console.log(item)

 

    // const images = [
    //     {
    //         original: mobile,
    //     },
    //     {
    //         original: mobile,
    //     },
    //     {
    //         original: mobile,
    //     },
    // ];

    const renderRightNav = (onClick: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean) => {
        return <RightButton onClick={onClick} disabled={disabled} />;
    };

    const renderLeftNav = (onClick: React.MouseEventHandler<HTMLButtonElement>, disabled: boolean) => {
        return <LeftButton onClick={onClick} disabled={disabled} />;
    };

    return (
        <div className="flex justify-center items-center pt-2">
            <ImageGallery 
                items={images}
                // defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={renderRightNav}
                renderLeftNav={renderLeftNav}
            />
        </div>
    );
}

export default ProductGallery;
