import AdminAllOrdersItem from './AdminAllOrdersItem';


const AdminAllOrders = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-2xl font-semibold my-4'>ادارة جميع الطلبات</h2>
            <div className='flex flex-col md:flex-row md:flex-wrap justify-start gap-4'>
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                {/* Repeat AdminAllOrdersItem as many times as needed */}
            </div>
        </div>
    );
}

export default AdminAllOrders;
