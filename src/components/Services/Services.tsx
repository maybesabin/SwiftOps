import ServicesCards from "./ServicesCards"
import { Cover } from "@/components/ui/cover";
const Services = () => {
    return (
        <div id="services" className="md:pb-[7rem] pb-12 -mt-1 w-screen relative dark:bg-[#111214] bg-white flex flex-col items-center gap-9">
            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white font-semibold text-3xl md:text-6xl md:px-0 px-9 md:leading-[4.5rem]">
                What does <Cover>SwiftOps</Cover> offer?
            </h1>
            <p className="text-center text-zinc-400 md:px-0 px-4 md:text-[1rem] text-[0.8rem] leading-6">
                Create a secure network between your servers, computers, and cloud instances. <br className="md:flex hidden" />
                Even when separated by firewalls or subnets, <span className="dark:text-white text-black font-medium">SwiftOps</span> just works.
            </p>

            <ServicesCards />

        </div>
    )
}

export default Services