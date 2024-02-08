import UserAllOrderItem from './UserAllOrderItem';


const UserAllOrder = () => {
    return (
        <div className='mt-20'>
            <h2 className="text-2xl font-semibold mb-4">اهلا محمد على</h2>
            <div className="flex flex-col space-y-4">
                <UserAllOrderItem/>
                <UserAllOrderItem />
                <UserAllOrderItem />
            </div>
        </div>
    );
}

export default UserAllOrder;
