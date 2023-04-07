import axios, { AxiosResponse } from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

enum ProductActionTypes {
    FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE",
}

interface FetchProductsRequestAction {
    type: ProductActionTypes.FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: Product[];
}

interface FetchProductsFailureAction {
    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE;
    payload: string;
}

type ProductAction =
    | FetchProductsRequestAction
    | FetchProductsSuccessAction
    | FetchProductsFailureAction;

const productReducer = (
    state: ProductState,
    action: ProductAction
): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case ProductActionTypes.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export const ProductContext = createContext<{
    state: ProductState;
    dispatch: React.Dispatch<ProductAction>;
}>({
    state: initialState,
    dispatch: () => null,
});
interface Props {
    children: React.ReactElement;
}
const ProductProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response: AxiosResponse<Product[]> = await axios.get(
                `http://localhost:5006/Product`
            );
            setProducts(response.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            dispatch({ type: ProductActionTypes.FETCH_PRODUCTS_REQUEST });
            try {
                const response = await axios.get<Product[]>(
                    "http://localhost:5006/Product"
                );
                dispatch({
                    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
                    payload: response.data,
                });
            } catch (error) {
                dispatch({
                    type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
                    payload: "Lỗi",
                });
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
