import TestimonialHeader from "./TestimonialHeader"

const Testimonials = () => {
    return (
        <div id="testimonials" className="md:py-[7rem] py-12 -mt-1 w-screen relative dark:bg-[#111214] bg-white flex flex-col items-center md:gap-12 gap-9">
            <h1 className="md:pb-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white font-semibold text-3xl md:text-6xl md:px-0 sm:px-9 px-4 md:leading-[4.5rem]">
                Trusted by <span className="dark:text-white text-[#169d73]">millions</span> <br className="md:hidden flex" /> of people
            </h1>
            <TestimonialHeader />
        </div>
    )
}

export default Testimonials