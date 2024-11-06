import PricingHero from "./PricingHero"
import { Button } from "../ui/button"
import { useState } from "react"

const Pricing = () => {
    const [isActive, setIsActive] = useState("monthly")

    return (
        <div id="pricing" className="md:py-[7rem] py-12 -mt-1 w-screen relative dark:bg-[#111214] bg-white flex flex-col items-center gap-9">
            <div className="xl:w-[80rem] w-full flex flex-col items-center justify-center gap-12">
                <div className="flex flex-col md:items-start items-center w-full xl:px-0 md:px-12 sm:px-4 px-0">
                    <h1 className="md:text-left text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white font-semibold text-3xl md:text-5xl md:leading-[3.5rem]">
                        We've got a plan <br className="md:flex hidden" />that's<span className="dark:text-white text-[#169d73]"> perfect</span> for you.
                    </h1>
                    <div className="flex items-center gap-2 mt-6 border md:p-1.5 p-1 rounded-[1.5rem]">
                        <Button className="rounded-2xl" variant={`${isActive == "monthly" ? "default" : "ghost"}`} value={isActive} onClick={() => setIsActive("monthly")}>Monthly billing</Button>
                        <Button className="rounded-2xl" variant={`${isActive == "annual" ? "default" : "ghost"}`} value={isActive} onClick={() => setIsActive("annual")}>Annual billing</Button>
                    </div>
                </div>
                <PricingHero isActive={isActive} />
            </div>
        </div>
    )
}

export default Pricing