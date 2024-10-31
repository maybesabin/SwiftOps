import logo from "../assets/images/logo.png";
import { ModeToggle } from "./mode-toggle";
import logoDark from "../assets/images/logo-dark.png";
import { useState } from "react";

const Header = () => {

    const [showNavbar, setShowNavbar] = useState(false)
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            setShowNavbar(false);
            setClosing(false);
        }, 500);
    };


    return (
        <div className="z-[999] backdrop-blur-sm dark:bg-[#111214]/5 bg-white/30 w-full h-16 fixed top-0 flex items-center justify-center text-[0.85rem]">

            <div className="flex items-center xl:w-[80rem] h-16 backdrop-blur-2xl dark:bg-[#111214]/30 bg-white/30 w-full lg:px-0 px-6 xl:justify-between justify-between lg:justify-center xl:gap-0 lg:gap-10 gap-0">
                <div className="flex items-center gap-3">
                    <img className="dark:flex hidden" src={logo} width={'25px'} alt="" />
                    <img className="dark:hidden flex" src={logoDark} width={'25px'} alt="" />
                    <h1 className="text-[1rem]">SwiftOps</h1>
                </div>
                <ul className="lg:flex hidden items-center gap-9">
                    <li className="cursor-pointer hover:text-zinc-300 transition-all">Company</li>
                    <li className="cursor-pointer hover:text-zinc-300 transition-all">Download</li>
                    <li className="cursor-pointer hover:text-zinc-300 transition-all">Customers</li>
                    <li className="cursor-pointer hover:text-zinc-300 transition-all">Partners</li>
                    <li className="cursor-pointer hover:text-zinc-300 transition-all">Pricing</li>
                </ul>
                <div className="lg:flex hidden items-center gap-4">
                    <ModeToggle />
                    <button className="border dark:border-zinc-600 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 ease-in-out dark:font-semibold rounded-lg px-4 py-2">Request Demo</button>
                    <button className="dark:bg-white bg-black dark:text-black text-white border hover:border hover:bg-transparent dark:hover:bg-transparent dark:hover:text-white hover:text-black duration-500 ease-in-out dark:border-white border-zinc-600 transition-all font-semibold rounded-lg px-4 py-2">Try for free</button>
                </div>
                <div className="flex items-center gap-4">
                    <div className="lg:hidden flex"><ModeToggle /></div>
                    <svg onClick={() => setShowNavbar(!showNavbar)} className="lg:hidden flex dark:fill-white fill-black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </div>
            </div>

            {/* Mobile Navbar  */}
            <div
                className={`dark:bg-[#111214] bg-white h-screen lg:hidden w-screen fixed inset-0 ${showNavbar ? (closing ? "animate-fadeout" : "animate-dropdown") : "hidden"
                    } flex items-center justify-center p-6`}
            >
                <div className="w-full h-full flex flex-col items-center justify-start gap-[8rem]">
                    <div className="w-full flex justify-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleClose}
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                        >
                            <path
                                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <ul className="lg:hidden flex flex-col items-center justify-center gap-12">
                        <li className="cursor-pointer font-semibold tracking-widest text-lg hover:text-zinc-300 transition-all">Company</li>
                        <li className="cursor-pointer font-semibold tracking-widest text-lg hover:text-zinc-300 transition-all">Download</li>
                        <li className="cursor-pointer font-semibold tracking-widest text-lg hover:text-zinc-300 transition-all">Customers</li>
                        <li className="cursor-pointer font-semibold tracking-widest text-lg hover:text-zinc-300 transition-all">Partners</li>
                        <li className="cursor-pointer font-semibold tracking-widest text-lg hover:text-zinc-300 transition-all">Pricing</li>
                        <li>
                            <button className="px-6 py-2 mt-4 rounded-full relative bg-black text-white text-xs hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-transparent">
                                <div className="absolute inset-x-0 dark:h-[1px] h-1 dark:w-1/2 w-full mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                                <span className="relative z-20">Try SwiftOps for free</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Header;
