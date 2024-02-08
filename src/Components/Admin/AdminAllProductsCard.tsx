import { Link } from 'react-router-dom';
import prod1 from '../../assets/prod1.png'

const AdminAllProductsCard = () => {
  return (
    <div className="w-full sm:w-1/2 md:w-5/12 lg:w-1/3 px-2 my-2">
      <div className="bg-white rounded-lg shadow overflow-hidden h-auto">
        <div className="flex justify-between px-4 pt-4">
          <button className="text-red-600 hover:text-red-800 transition-colors">ازاله</button>
          <button className="text-blue-600 hover:text-blue-800 transition-colors">تعديل</button>
        </div>
        <Link to="/products/:id" className="block">
          <img className="w-full h-56 object-cover" src={prod1} alt="Product" />
          <div className="p-4">
            <h5 className="font-semibold mb-2 text-gray-800">سود كربون ساعة يد ذكية بيب إس أسود كربون</h5>
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 text-xl">4.5</span>
              <div className="flex items-baseline">
                <span className="text-gray-500 mr-1">جنيه</span>
                <span className="text-gray-800 text-xl font-bold">880</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminAllProductsCard;
