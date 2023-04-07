import { useState, useEffect } from "react";
import {
    BsChevronUp,
    BsChevronDown,
    BsMoonFill,
    BsSunFill,
} from "react-icons/bs";
import { HiViewList } from "react-icons/hi";
import Logo from "../assets/logo.png";

// interface NavLink {
//     type: string;
//     name: string;
//     children?: string[];
//     link: string;
// }

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            window.innerWidth >= 960 ? setOpenNav(false) : setOpenNav(true);
        });
    }, []);

    const languages: Language[] = [
        {
            name: "Tiếng việt",
            img: "https://fujifilm-x.com/vi-vn/wp-content/themes/fujifilm-x_jp/assets/img/common/flag/vietnam.svg",
        },
        {
            name: "English",
            img: "https://fujifilm-x.com/vi-vn/wp-content/themes/fujifilm-x_jp/assets/img/common/flag/usa.svg",
        },
    ];
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
                { name: "Phụ kiện", href: "accessory" },
                { name: "Phim", href: "" },
                { name: "Chân máy", href: "" },
                { name: "Microphone", href: "" },
                { name: "Lọc âm", href: "" },
                { name: "Gimbal", href: "" },
                { name: "Thẻ nhớ", href: "" },
            ],
            link: "/catagories",
        },
        {
            type: "navLink",
            name: "Sự kiện",
            link: "/blogdoisong",
        },
        {
            type: "navLink",
            name: "Khuyến mãi",
            link: "/blogdoisong",
        },
        {
            type: "navLink",
            name: "Cửa hàng",
            link: "/blogdoisong",
        },
    ];
    return (
        <nav className="container m-auto px-4 py-2 bg-white  lg:flex lg:items-center lg:justify-between">
            <div className="flex flex-row justify-between items-center">
                <a href="/home" className="flex flex-row gap-2  items-center">
                    <img className="w-8" src={Logo} alt="logo" />
                    <span>
                        <p className="text-orange-400">Shop bán cam</p>
                    </span>
                </a>
                <button
                    className="cursor-pointer lg:hidden bg-orange-400  text-white py-2 px-4 rounded-lg text-2xl"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <HiViewList />
                </button>
            </div>
            <div
                className={`${
                    openNav ? " opacity-0 hidden" : "  opacity-100"
                }  mt-5 lg:mt-0 transition-opacity duration-300 ease-in-out`}
            >
                <ul className=" lg:flex lg:items-center gap-3">
                    {navLink.map((p, index) => (
                        <li key={index} className="p-2">
                            {p.type === "navLink" ? (
                                <a className="btn px-2" href={p.link}>
                                    {p.name}
                                </a>
                            ) : (
                                <div className="relative parrent-nav">
                                    <button className="btn flex flex-row justify-between items-center">
                                        {p.name}
                                        <BsChevronDown className="mx-2" />
                                    </button>
                                    <ul className="children-nav lg:absolute hidden bg-white shadow lg:w-max">
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
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {!openNav && (
                <div className="mt-5 lg:mt-0">
                    <ul className=" lg:flex lg:items-center gap-2">
                        <li className="relative parrent-nav">
                            <button className="btn flex flex-row  gap-2 justify-center items-center">
                                <img
                                    className="w-[32px]"
                                    src="https://fujifilm-x.com/vi-vn/wp-content/themes/fujifilm-x_jp/assets/img/common/flag/vietnam.svg"
                                    alt="flag"
                                />{" "}
                                <BsChevronDown className="mx-2" />
                            </button>
                            <ul className="children-nav lg:absolute hidden bg-white shadow lg:w-max">
                                {languages.map((p, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="px-6 py-2 flex flex-row justify-between items-center gap-4 hover:bg-orange-200"
                                        >
                                            <img
                                                className="w-[32px]"
                                                src={p.img}
                                                alt="flag"
                                            />
                                            {p.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="parrent-nav">
                            {/* <div className="cursor-pointer justify-center flex flex-row  gap-3 bg-orange-400 py-1 px-3 rounded text-black items-center">
                                <BsSunFill />
                                Sáng
                            </div> */}
                            {/* <div className="cursor-pointer justify-center flex flex-row  gap-3 bg-blue-950 py-1 px-3 rounded text-white items-center">
                                Tối
                                <BsMoonFill />
                            </div> */}
                        </li>
                        <li className="grid grid-flow-row grid-cols-2 gap-5 text-center">
                            <div className="col-span-1 border-orange-500 border-2 cursor-pointer py-1 px-4 gap-3 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white">
                                <p>Login</p>
                            </div>
                            <div className=" col-span-1 border-orange-500 border-2 cursor-pointer py-1 px-4 gap-3 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white">
                                <p>Sign Up</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;
