import { useParams } from "react-router-dom";
import { useMemo, useContext } from "react";
import { ProductContext } from "../contexts/productContext";

import { Link } from "react-router-dom";
import ShowProducts from "../components/ShowProducts";

const Catagory = () => {
    const { name } = useParams();
    const { state, dispatch } = useContext(ProductContext);

    const discountedProducts = useMemo(() => {
        return name != "all"
            ? state.products.filter(
                  (p) =>
                      p.category.categoryName?.toLowerCase() ==
                      name?.toLowerCase()
              )
            : state.products;
    }, [state.products]);

    return (
        <>
            <div className="container m-auto">
                <p className="text-center text-3xl uppercase font-Montserrat mt-5 border-b-4 border-orange-500 w-max m-auto">
                    {name}
                </p>
                <p className="text-center text-base font-Quicksand mt-5">
                    Sản phẩm cao cấp, với nhiều tính năng đặc biệt và độ phân
                    giải ảnh cao
                </p>
                <hr className="my-12 h-1 rounded mx-3 bg-orange-500" />
                <ShowProducts products={discountedProducts} />
            </div>
        </>
    );
};
export default Catagory;
