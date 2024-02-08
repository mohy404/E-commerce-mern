import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from '../../assets/sort.png'

type SearchCountResultProps = {
    title: string; // Specify that title should be a string
}

const SearchCountResult: React.FC<SearchCountResultProps> = ({ title }) => {
    const handler = () => {
        // Handler logic
    }

    return (
        <div className="flex justify-between pt-3 px-2 items-center">
            <div className="sub-title">{title}</div>
            <div className="flex items-center">
                <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                        <p className="flex items-center mx-1 cursor-pointer">
                            <img
                                className="w-5 h-5 ml-2" // width and height 20px
                                src={sort}
                                alt="Sort icon"
                            />
                            ترتيب حسب
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover
                >
                    <div className="bg-white shadow rounded mt-2">
                        <div className="border-b py-2 px-4 hover:bg-gray-100 cursor-pointer">الاكثر مبيعا</div>
                        <div className="border-b py-2 px-4 hover:bg-gray-100 cursor-pointer">الاعلي تقييما</div>
                        <div className="border-b py-2 px-4 hover:bg-gray-100 cursor-pointer">
                            السعر من الاقل للاعلي
                        </div>
                        <div className="py-2 px-4 hover:bg-gray-100 cursor-pointer">السعر من الاعلي للاقل</div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchCountResult
