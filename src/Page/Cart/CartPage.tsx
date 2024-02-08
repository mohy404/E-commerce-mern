import React from 'react';
import CartItem from '../../Components/Cart/CartItem';
import CartCheckout from '../../Components/Cart/CartCheckout';


const CartPage = () => {
    return (
        <div className="mx-auto p-4" style={{ minHeight: '670px' }}> {/* Container with horizontal padding */}
            <h1 className='text-2xl font-bold mt-4 mb-6'>عربة التسوق</h1> {/* Title */}
            
            <div className='flex flex-wrap justify-center -mx-2'> {/* Row with negative margin to counteract child padding */}
                <div className="w-full md:w-9/12 px-2 mb-4"> {/* Column for cart items */}
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <div className="w-full md:w-3/12 px-2"> {/* Column for checkout */}
                    <CartCheckout />
                </div>
            </div>
        </div>
    );
}

export default CartPage;
