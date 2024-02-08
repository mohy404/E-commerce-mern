import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import ImageUploading from 'react-images-uploading';
import { useDispatch, useSelector } from 'react-redux';
import { CompactPicker } from 'react-color';

// Importing image assets
import addIcon from '../../assets/add.png';
import avater from '../../assets/avatar.png';
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction.js";
import { getSubCategoryById } from "../../redux/actions/subCategoryAction.js";
import { createProduct } from "../../redux/actions/productAction.js";

// Interface for image upload component props
interface ImageUploaderProps {
  images: any[];
  setImages: React.Dispatch<React.SetStateAction<any[]>>;
  maxNumber?: number;
}

// ImageUploader Component for managing image uploads
const ImageUploader: React.FC<ImageUploaderProps> = ({ images, setImages, maxNumber = 69 }) => {
  // Function to handle image list change
  const onChange = (imageList: any) => {
    // Update the state with the new image list
    setImages(imageList);
  };

  return (
    <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
      {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove }) => (
        <div>
          <button onClick={onImageUpload}>
            <img src={avater} alt='add image' className="ml-2 w-25 h-25" />
          </button>&nbsp;
          <button onClick={onImageRemoveAll}>Remove All Images</button>
          <div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </ImageUploading>
  );
};

const AdminAddProducts: React.FC = () => {
  const dispatch = useDispatch();

  // State for image uploads
  const [images, setImages] = useState<any[]>([]);

  // State for product details
  const [prodName, setProdName] = useState<string>('');
  const [prodDescription, setProdDescription] = useState<string>('');
  const [priceBefore, setPriceBefore] = useState<string>('السعر قبل الخصم');
  const [priceAftr, setPriceAftr] = useState<string>('السعر النهائي');
  const [qty, setQty] = useState<string>('الكميه المتاحه');
  const [catID, setCatID] = useState<string>('');
  const [brandID, setBrandID] = useState<string>('');
  const [subCatID, setSubCatID] = useState<string[]>([]);
  const [selectedSubID, setSelectedSubID] = useState<string[]>([]);

  // State for color picker
  const [showColor, setShowColor] = useState<boolean>(false);
  const [colors, setColors] = useState<string[]>([]);

  // Function to handle color change
  const handelChangeComplete = (color: any) => {
    setColors([...colors, color.hex])
    setShowColor(!showColor)
  }

  // Function to remove a color
  const removeColor = (colorIndex: number) => {
    const newColors = colors.filter((_, index) => index !== colorIndex)
    setColors(newColors)
  }

  useEffect(() => {
    // Fetch category and brand data
    dispatch(getAllCategory());
    dispatch(getAllBrand());
  }, [dispatch]);

  // Selectors for category and brands
  const category = useSelector((state: any) => state.allCategory.category);
  const brands = useSelector((state: any) => state.allBrand.brands);
  const subCategory = useSelector((state: any) => state.allSubCategory.subcategory);

  const onSelect = (selectedList: React.SetStateAction<string[]>) =>{
    setSelectedSubID(selectedList)
  }

  const onRemove = (selectedList: React.SetStateAction<string[]>) =>{
    setSelectedSubID(selectedList)
  }

  // console.log(selectedSubID)
  // Options for categories
  const [options , setOptions] =useState([])

  // Handle category change
  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value != 0) {
      
     await  dispatch(getSubCategoryById(e.target.value))
    }
    setCatID(e.target.value)
  }

  useEffect(() => {
    if (catID != 0){
      if (subCategory.data) {
        setOptions(subCategory.data)
      }
    }
  }, [catID])

  // Handle brand selection
  const onSelectBrand = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBrandID(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert the first image in the array to a file
    const imageCover = images[0] ? dataURLtoFile(images[0].data_url, `cover-${Date.now()}.png`) : null;
  
    // Ensure `images` is actually an array and has a length property
    const itemImages = images.map((image, index) => 
      dataURLtoFile(image.data_url, `image-${Date.now()}-${index}.png`)
    );
  
    const formData = new FormData();
    formData.append("title", prodName);
    formData.append("description", prodDescription);
    formData.append("quantity", qty);
    formData.append("price", priceBefore);
  
    if (imageCover) formData.append("imageCover", imageCover);
  
    itemImages.forEach((item) => formData.append("images", item));
    colors.forEach((color) => formData.append("availableColors", color));
    selectedSubID.forEach((item) => formData.append("subcategories", item._id));
  
    try {
      await dispatch(createProduct(formData));
      // Handle success scenario
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };
  
  const dataURLtoFile = (dataurl, filename) => {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
  
    while(n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new File([u8arr], filename, {type: mime});
  };
  
  
  return (
    <div className="mt-20 max-w-7xl mx-auto py-4">
      <h2 className="text-2xl font-semibold mb-4">اضافه منتج جديد</h2>
      <div className="max-w-lg space-y-4">
        <ImageUploader images={images} setImages={setImages} />
        <input value={prodName} onChange={(e) => setProdName(e.target.value)} type="text" className="form-input w-full px-3 py-2 border border-gray-300 rounded" placeholder="اسم المنتج" />
        <textarea className="form-textarea w-full p-2 border border-gray-300 rounded" rows={4} placeholder="وصف المنتج" value={prodDescription} onChange={(e) => setProdDescription(e.target.value)}></textarea>
        <input
  value={priceBefore}
  onChange={(e) => setPriceBefore(e.target.value)}
  type="number"
  className="form-input w-full px-3 py-2 border border-gray-300 rounded"
  placeholder="السعر قبل الخصم" // Use placeholder for non-numeric text
/>

<input
  value={priceAftr}
  onChange={(e) => setPriceAftr(e.target.value)}
  type="number"
  className="form-input w-full px-3 py-2 border border-gray-300 rounded"
  placeholder="السعر النهائي" // Similarly here
/>

        <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" className="form-input w-full px-3 py-2 border border-gray-300 rounded" placeholder=" الكميه المتاحه" />

        <select name="category"
          className="form-select w-full px-3 py-2 border border-gray-300 rounded"
          onChange={handleChange}
        >
          <option value="0">التصنيف الرئيسي</option>
          {category.data && category.data.map((item: any) => (
            <option key={item._id} value={item._id}>{item.name}</option>
          ))}
        </select>

        <Multiselect
        placeholder="التصنيف الفرعي"
        options={options}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"  />

        <select
          name="brand"
          className="form-select w-full px-3 py-2 border border-gray-300 rounded"
          onChange={onSelectBrand}
        >
          <option value="brand">أختر ماركة</option>
          {brands.data && brands.data.map((item: any) => (
            <option key={item._id} value={item._id}>{item.name}</option>
          ))}
        </select>

        <div className="text-lg font-medium mt-3">الألوان المتاحه للمنتج</div>
        <div className="flex items-center mt-2">
          {colors.length >= 1 ?
            (
              colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => removeColor(index)}
                    className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                    style={{ backgroundColor: color }}
                  ></div>
                )
              })
            ) : null
          }
          <img onClick={() => setShowColor(!showColor)} src={addIcon} alt="Add color" className="ml-2 w-12 h-12 cursor-pointer" />
          {showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null}
        </div>
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none mt-4">
          حفظ التعديلات
        </button>
      </div>
    </div>
  );
};

export default AdminAddProducts;
