
import BrandFeatured from '../../Components/Brand/BrandFeatured'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import DiscountSection from '../../Components/Home/DiscountSection'
import { HomeCategory } from '../../Components/Home/HomeCategory'
import { Slider } from '../../Components/Home/Slider'
import CardProductContiner from '../../Components/Products/cardProductContiner'
import useViewHomeProducts from '../../Hook/prodcuts/useVitewHomeProducts'

export const HomePage = () => {

  const { items } = useViewHomeProducts();

  return (     
    <div className="min-h-screen">
      <CategoryHeader/>
        <Slider/>
        <HomeCategory/>
       <CardProductContiner products={items} title={'الاكثر مبيعا '} btntitle={'المزيد'} pathText={'/products'} />

       <DiscountSection/>
       <CardProductContiner  products={items} title={'أجدد المنتجات'} btntitle={'المزيد'} pathText={'/products'}/>
        <BrandFeatured />
    </div>
  )
}
