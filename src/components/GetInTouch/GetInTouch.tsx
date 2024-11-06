import logo from "../../assets/images/logo.png"
import { AnimatedTooltip } from "../ui/animated-tooltip"
import StarIcon from '@mui/icons-material/Star';
import appPreview from "../../assets/images/app-preview.png"

const GetInTouch = () => {
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
            name: "Michael Thompson",
            designation: "Frontend Developer",
            image:
                "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },


    ];
    return (
        <div className="w-full px-9 dark:bg-[#111214] bg-white flex items-center justify-center md:py-[7rem] py-12">
            <div className="xl:w-[80rem] w-full lg:h-[32rem] bg-gradient-to-br from-[rgb(17,25,44)] to-[#536074] rounded-2xl flex items-center justify-between gap-6">
                <div className="flex flex-col items-start gap-7 xl:w-1/2 lg:w-2/3 w-full lg:pl-12 px-6 md:py-9 py-6">
                    <img src={logo} width={'40px'} alt="" />
                    <h1 className="font-semibold text-white md:text-3xl text-xl">Want secure and unrestricted internet access? Get started with us!</h1>
                    <p className="md:text-[1rem] text-xs text-neutral-300">
                        Experience the freedom of a fast, secure, and private online connection designed to keep you safe anywhere, anytime. 🚀
                    </p>
                    <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-3 px-6 ring-1 ring-white/10 text-[1rem]">
                            <span>
                                Book a call
                            </span>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                    </button>
                    <div className="flex md:flex-row flex-col md:items-center items-start justify-center md:gap-12 gap-2">
                        <div className="flex items-center gap-1 md:mt-4"><AnimatedTooltip items={people} /></div>
                        <div className="flex items-center gap-2 mt-4">
                            <StarIcon className="text-yellow-400" />
                            <StarIcon className="text-yellow-400" />
                            <StarIcon className="text-yellow-400" />
                            <StarIcon className="text-yellow-400" />
                            <StarIcon className="text-yellow-400" />
                        </div>
                    </div>
                </div>

                <div className="xl:w-1/2 w-1/3 lg:flex hidden h-full">
                    <img src={appPreview} className="h-full rounded-br-lg opacity-80 w-full object-cover" alt="" />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch