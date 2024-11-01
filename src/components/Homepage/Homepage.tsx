import HeroSection from "./HeroSection"

const Homepage = () => {
    return (
        <div className="md:pb-[7rem] border pb-12 w-full dark:bg-[#111214] bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-start justify-center sm:px-0 px-4">
            {/* Background  */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#111214] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            {/* Main Content  */}

            <HeroSection />

            {/* <div className="dark:bg-[#111214] bg-white w-screen h-screen fixed z-[999] flex items-center justify-center">
                <Lottie animationData={rocket} className="object-cover flex items-center justify-center" />
            </div> */}
        </div>
    )
}

export default Homepage