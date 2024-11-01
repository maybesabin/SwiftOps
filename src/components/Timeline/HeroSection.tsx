import CustomTimeline from "./Timeline"

const HeroSection = () => {
    return (
        <div id="timeline" className="md:py-[7rem] py-12 -mt-1 px-4 w-full dark:bg-[#111214] bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center gap-6 justify-center">

            {/* Background  */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#111214] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <h1 className="relative text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white font-semibold text-3xl md:text-6xl md:px-0 px-9 md:leading-[4.5rem]">
                Guarding Your Privacy:<span className="dark:text-white text-[#169d73]"> Our Story</span>
            </h1>
            <p className="text-center md:px-0 px-9 text-zinc-400 md:text-[1rem] text-[0.8rem] leading-6">
                Take a look at the milestones that define our journey in online privacy protection. From the beginning up until now.
            </p>

            <div className="flex items-start justify-center w-full relative">
                <CustomTimeline />
            </div>

        </div>
    )
}

export default HeroSection