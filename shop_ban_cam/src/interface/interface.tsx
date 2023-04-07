interface Product {
    productId: number;
    productName: string;
    description: string;
    price: number;
    brandId: number;
    categoryId: number;
    discount: number;
    brand: Brand;
    category: Category;
    productImages: ProductImage[];
    reviews: Review[];
}

interface Brand {
    brandId: number;
    brandName: string;
    description: string;
}
interface Category {
    categoryId: number;
    categoryName: string;
    description: string;
    categoriesImg: string;
}

interface ProductImage {
    productImageId: number;
    productId: number;
    uri: string;
}

interface Review {
    reviewId: number;
    productId: number;
    reviewerName: string;
    reviewText: string;
    rating: number;
}

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

interface Language {
    name: string;
    img: string;
}
