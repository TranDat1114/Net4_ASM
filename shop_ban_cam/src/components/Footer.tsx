import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="w-full shadow bg-[#242424] text-white">
                <div className="container m-auto">
                    <div className="grid py-5 grid-cols-3 grid-flow-col">
                        <div className="col-span-2 flex flex-row justify-evenly items-center  text-sm">
                            <p>Hoàn cảnh</p>
                            <p>Blog cuộc sống</p>
                            <p>Đối tác đồng hành</p>
                            <p>Tin tức cộng đồng</p>
                        </div>
                        <div className="col-span-1 ">
                            <p className="uppercase">Thông tin liên hệ</p>
                            <div className="text-gray-300">
                                <p className="text-xs">
                                    Địa chỉ: Tầng 1, FPT Polytechnic Tòa nhà F,
                                    Tân Hưng Thuận, Quận 12, Thành phố Hồ Chí
                                    Minh
                                </p>
                                <p className="text-xs">Hotline:</p>
                                <p className="text-xs">Email:</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-5 flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-between items-center">
                            <span>
                                <p className="text-blue-500 text-2xl">ANNAN</p>
                                <p className="text-pink-500">Ví Nhân ái</p>
                            </span>
                        </div>
                        <div className="grid text-center gap-2">
                            <div className="flex flex-row justify-center items-center  text-lg gap-5">
                                <a
                                    href="#"
                                    className="text-[#3b5998] p-2 bg-pink-50 rounded-[50%]"
                                >
                                    <BsFacebook />
                                </a>

                                <a
                                    href="#"
                                    className="text-[#0e76a8] bg-pink-50 p-2 rounded-[50%]"
                                >
                                    <BsLinkedin />
                                </a>
                                <a
                                    href="#"
                                    className="text-[#c4302b] bg-pink-50 p-2 rounded-[50%]"
                                >
                                    <BsYoutube />
                                </a>
                            </div>
                            <div className="w-full ">
                                <p className="text-gray-400 text-xs">
                                    ©Copyright UDPM_Polytechnic 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
