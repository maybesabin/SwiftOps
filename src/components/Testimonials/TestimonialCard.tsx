
const TestimonialCard = ({ name, review, image, work }: { name: string, review: string, image: string, work: string }) => {

    return (
        <div className="w-full shadow-lg border rounded-2xl flex flex-col items-start gap-6 p-6">
            <p className="text-[0.85rem] dark:text-neutral-300 text-neutral-800">
                "{review}"
            </p>
            <div className="flex items-center gap-4">
                <img className="rounded-full h-[50px] w-[50px] object-cover" src={image} alt="" />
                <div className="flex flex-col items-start">
                    <h1 className="text-[0.9rem] font-medium">{name}</h1>
                    <h3 className="text-[0.85rem] dark:text-neutral-300 text-neutral-800">{work}</h3>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard