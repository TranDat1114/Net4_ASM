import { BsStarFill } from "react-icons/bs";

const calReview = (reviews: Review[]) => {
    let total =
        reviews.reduce((acc, val) => acc + val.rating, 0) / reviews.length;

    return Number.isNaN(total) ? 0 : total;
};

const calMoney = (discount: number, price: number) => {
    let money = (price - (price * discount) / 100).toFixed(2);
    return money;
};

interface Props {
    products: Product[];
}

const ShowProducts = ({ products }: Props) => {
    return (
        <div className="mx-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, index) => (
                <a href="#" key={index}>
                    <div className="col-span-1 rounded-md shadow-lg hover:shadow-2xl p-2 h-96">
                        <img
                            className="h-3/4 object-center object-cover m-auto"
                            src={p?.productImages[0]?.uri}
                            alt=""
                        />
                        <hr className="mt-3" />
                        <div className="m-4">
                            <div className=" flex flex-row justify-between text-lg gap-5">
                                <p className="truncate uppercase">
                                    {p?.productName}
                                </p>
                                <div className="text-orange-500 flex flex-row items-center">
                                    <p className="text-lg">
                                        {calReview(p.reviews)}
                                    </p>
                                    <BsStarFill className="text-sm" />
                                </div>
                            </div>
                            <div>
                                {p.discount != 0 ? (
                                    <p className="text-base text-orange-500">
                                        {calMoney(p.discount, p.price)} $ -
                                        <strong className="text-xs">
                                            {p.discount}%
                                        </strong>
                                    </p>
                                ) : (
                                    <p className="text-basel ">{p.price} $</p>
                                )}
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ShowProducts;
