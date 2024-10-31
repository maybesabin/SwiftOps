import logo from "../assets/images/logo.png";
import { ModeToggle } from "./mode-toggle";
import logoDark from "../assets/images/logo-dark.png";

const Header = () => {
    return (
        <div className="z-[999] backdrop-blur-sm dark:bg-[#111214]/30 bg-white/30 w-full h-16 fixed top-0 flex items-center justify-center text-[0.85rem]">
            <div className="flex items-center xl:w-[80rem] h-16 backdrop-blur-2xl dark:bg-[#111214]/30 bg-white/30 w-full lg:px-0 px-6 xl:justify-between justify-between lg:justify-center xl:gap-0 lg:gap-10 gap-0">
                <div className="flex items-center gap-3">
                    <img className="dark:flex hidden" src={logo} width={'25px'} alt="" />
                    <img className="dark:hidden flex" src={logoDark} width={'25px'} alt="" />
                    <h1 className="text-[1rem]">SwiftOps</h1>
                </div>
                <ul className="lg:flex hidden items-center gap-9">
                    <li className="cursor-pointer hover:text-zinc-300 transition-all">Docs</li>
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
                <svg className="lg:hidden flex dark:fill-white fill-black" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </div>
        </div>
    );
};

export default Header;
