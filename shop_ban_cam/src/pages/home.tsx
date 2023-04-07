import { useEffect, useState } from "react";

const Home = () => {
    const listBanner = [
        {
            name: "fujifilm x-t5",
            href: "",
            devices: [
                {
                    device: "mobile",
                    img: "https://fujifilm-x.com/wp-content/uploads/2022/11/x-t5_640x854.jpg",
                },
                {
                    device: "desktop",
                    img: "https://fujifilm-x.com/wp-content/uploads/2022/11/x-t5_2560x980.jpg",
                },
            ],
        },
        {
            name: "fujifilm x-h2s",
            href: "",
            devices: [
                {
                    device: "mobile",
                    img: "https://fujifilm-x.com/wp-content/uploads/2022/05/xh2s-home-sp_640x854.jpeg",
                },
                {
                    device: "desktop",
                    img: "https://fujifilm-x.com/wp-content/uploads/2022/05/xh2s-home-pc_2560x980.jpeg",
                },
            ],
        },
        {
            name: "fujifilm gfx-100s",
            href: "",
            devices: [
                {
                    device: "mobile",
                    img: "https://fujifilm-x.com/wp-content/uploads/2020/02/top_banner_1col-sp-x100v.jpg",
                },
                {
                    device: "desktop",
                    img: "https://fujifilm-x.com/wp-content/uploads/2020/02/top_banner_1col-pc-x100v.jpg",
                },
            ],
        },
    ];

    const [device, setDevice] = useState(1);
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 640) {
                setDevice(0);
            } else {
                setDevice(1);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <div className="">
                {listBanner.map((p, index) => (
                    <div key={index} className="my-5">
                        <a className="relative" href="#">
                            <div className="absolute text-xl  left-[50%] -translate-x-1/2 bottom-20 lg:left-60 lg:bottom-96">
                                <p className="text-white uppercase lg:text-4xl">
                                    {p.name}
                                </p>
                            </div>
                            <div className="absolute left-[50%] -translate-x-1/2 bottom-5 lg:left-60 lg:bottom-20  align-middle py-2 px-6 rounded-sm bg-white">
                                <p className="text-sm font-Montserrat text-black lg:btn font-bold">
                                    Tìm hiểu thêm
                                </p>
                            </div>
                            <img
                                className="w-full h-80 lg:h-full object-cover lg:object-center z-[-1]"
                                src={p.devices[device].img}
                                alt="img"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
