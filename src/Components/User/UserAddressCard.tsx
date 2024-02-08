import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/delete.png';

const UserAddressCard = () => {
    return (
        <div className="my-3 px-2 shadow-lg rounded-lg bg-white"> {/* Added Tailwind classes for margin, padding, shadow, border radius, and background color */}
            <div className="flex justify-between items-center py-2"> {/* Replaces Row and Col with flex */}
                <div className="p-2">المنزل</div>
                <div className="flex justify-end p-2">
                    <div className="flex mx-2 items-center">
                        <img
                            alt=""
                            className="ml-1 mt-2"
                            src={deleteIcon}
                            height="17px"
                            width="15px"
                        />
                        <Link to="/user/edit-address" className="no-underline text-blue-600 hover:text-blue-800"> {/* Tailwind classes for link styling */}
                            <p className="inline-block ml-2">تعديل</p> {/* Replaces item-delete-edit */}
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <img
                            alt=""
                            className="ml-1 mt-2"
                            src={deleteIcon}
                            height="17px"
                            width="15px"
                        />
                        <p className="inline-block ml-2 text-red-600 cursor-pointer hover:text-red-800">ازاله</p> {/* Tailwind classes for delete styling */}
                    </div>
                </div>
            </div>

            <div className="text-gray-800 text-sm py-2"> {/* Tailwind classes for text color and size */}
                القاهرة مدينه نصر شارع التسعين عماره ١٤
            </div>

            <div className="flex mt-3 items-center">
                <div className="text-gray-800 font-semibold">رقم الهاتف:</div> {/* Tailwind classes for font color and weight */}
                <div className="text-gray-500 ml-2">0021313432423</div> {/* Tailwind classes for font color */}
            </div>
        </div>
    );
}

export default UserAddressCard;
