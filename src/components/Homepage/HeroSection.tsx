
import { AnimatedTooltip } from "../ui/animated-tooltip";
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/images/logo-acme.png"
import logo2 from "../../assets/images/logo-apex.png"
import logo3 from "../../assets/images/logo-celestial.png"
import logo4 from "../../assets/images/logo-echo.png"
import logo5 from "../../assets/images/logo-pulse.png"
import logo6 from "../../assets/images/logo-quantum.png"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image:
            "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
    {
        id: 7,
        name: "Emily Davis",
        designation: "UX Designer",
        image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },

];

const marquee = [logo1, logo2, logo3, logo4, logo5, logo6]

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-12 relative mt-[7rem] overflow-x-hidden">

            <div className="rounded-full group flex items-center cursor-pointer justify-center gap-2 md:border-2 border border-zinc-400 md:text-xs text-[0.6rem] px-6 py-2">
                <h1 className=" dark:text-zinc-300 dark:group-hover:text-white transition-all">SwiftOps has 5M daily active users</h1>
                <ArrowOutwardIcon className="dark:text-zinc-300 group-hover:rotate-[10deg]" style={{ fontSize: '1rem' }} />
            </div>

            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white font-semibold text-4xl md:text-7xl md:px-0 px-6 md:leading-[4.5rem]">
                Empower your team with <br className="md:flex hidden" /> <span className="dark:text-white text-[#169d73]">secure vpn access</span>
            </h1>

            <p className="text-center text-zinc-400 md:text-[1rem] text-[0.8rem] leading-6">Replace your old crappy VPN with SwiftOps that's easy to <br />adpot and loved by millions.</p>


            <button className="px-8 py-3 rounded-full relative bg-black text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-transparent">
                <div className="absolute inset-x-0 dark:h-[1px] h-1 dark:w-1/2 w-full mx-auto -bottom-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">
                    Try SwiftOps for free
                </span>
            </button>


            <div className="flex flex-col items-center gap-4">
                <p className="text-center text-zinc-400 md:text-[1rem] text-[0.8rem] leading-6">Trusted by millions all over the world</p>
                <div className="flex items-center justify-center">
                    <AnimatedTooltip items={people} />
                </div>
            </div>

            <div className="mt-12 xl:w-[80rem] w-full dark:flex hidden items-center justify-center max-w-full bg-[#111214] md:h-20 h-10 overflow-x-hidden">
                <Marquee
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor="#111214"
                >
                    {marquee.map((logo, idx) => (
                        <img
                            src={logo}
                            key={idx}
                            className="xl:mx-12 md:mx-8 mx-4 xl:w-[120px] md:w-[100px] w-[60px] cursor-pointer brightness-75 hover:brightness-100 transition-all"
                            alt=""
                        />
                    ))}
                </Marquee>
            </div>

            <div className="md:mt-12 xl:w-[80rem] w-full dark:hidden flex items-center justify-center max-w-full bg-white md:h-20 h-10 overflow-x-hidden">
                <Marquee
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor="white"
                >
                    {marquee.map((logo, idx) => (
                        <img
                            src={logo}
                            key={idx}
                            className="xl:mx-12 md:mx-8 mx-4 xl:w-[120px] md:w-[100px] w-[60px] cursor-pointer brightness-50  hover:brightness-0 transition-all"
                            alt=""
                        />
                    ))}
                </Marquee>
            </div>

        </div >
    )
}

export default HeroSection
