import { HiViewList } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";

const navLink = [
    {
        type: "parrent",
        name: "Danh mục sản phẩm",
        children: [
            {
                name: "Tất cả",
                href: "/catagories/all",
            },
            {
                name: "Máy ảnh",
                href: "/catagories/camera",
            },
            {
                name: "Ống kính",
                href: "/catagories/lens",
            },
            {
                name: "Phụ kiện",
                href: "/catagories/accessory",
            },
        ],
        link: "/catagories",
    },
    {
        type: "navLink",
        name: "Sự kiện",
        link: "/event",
    },
    {
        type: "navLink",
        name: "Khuyến mãi",
        link: "/shopcode",
    },
    {
        type: "navLink",
        name: "Cửa hàng",
        link: "/stores",
    },
];

const Nav = () => {
    return (
        <nav className="p-3">
            <div className="grid grid-cols-12 items-center">
                <div className="col-span-6 md:col-span-4 lg:col-span-3">
                    <a
                        href="/home"
                        className="flex flex-row gap-2  items-center"
                    >
                        <img className="w-8" src={Logo} alt="logo" />
                        <span>
                            <p className="text-orange-400">Shop bán cam</p>
                        </span>
                    </a>
                </div>
                <div className="col-span-6 md:col-span-4 lg:col-span-3">
                    <div className="flex justify-end items-center gap-5 ">
                        <div className=" rounded bg-orange-400 p-1">
                            <AiFillSetting className="text-2xl" />
                        </div>
                        <div className="rounded bg-orange-400 p-1">
                            <HiViewList className="text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className="m-3 bg-orange-400" />

            <div className="grid grid-cols-2 justify-items-center gap-5 shadow-lg p-4 rounded-lg">
                {navLink.map((p, index) =>
                    p.type == "navLink" ? (
                        <div className="col-span-1">
                            <a className="btn" href={p.link}>
                                {p.name}
                            </a>
                        </div>
                    ) : (
                        <div className="relative parrent-nav col-span-1">
                            <button className="btn flex  justify-between gap-2 items-center">
                                {p.name}
                                <BsChevronDown className="text-2xl" />
                            </button>
                            <ul className="children-nav lg:absolute hidden bg-white shadow-lg lg:w-max">
                                {p.children?.map((c, index) => (
                                    <li key={index}>
                                        <a
                                            href={c.href}
                                            className="block px-12 py-2 hover:bg-orange-200"
                                        >
                                            {c.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                )}
                <div className="col-span-1 border-orange-500 border-2 cursor-pointer py-1 px-4 gap-3 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white">
                    <p>Login</p>
                </div>
                <div className=" col-span-1 border-orange-500 border-2 cursor-pointer py-1 px-4 gap-3 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white">
                    <p>Sign Up</p>
                </div>
            </div>
            <hr className="m-3 bg-orange-400" />
            <div className="grid grid-cols-2">
                <div className="col-span-1"></div>
                <div className="col-span-1"></div>
            </div>
        </nav>
    );
};

export default Nav;
