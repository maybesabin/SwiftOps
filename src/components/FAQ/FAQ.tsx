import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const FAQ = () => {
    const faqData = [
        {
            question: "What is SwiftOps?",
            answer: "SwiftOps is a cloud-based solution designed to help businesses streamline their operations, automate workflows, and enhance team collaboration."
        },
        {
            question: "How does SwiftOps work?",
            answer: "Once you sign up, you can access our platform through your web browser. SwiftOps allows you to create projects, assign tasks, monitor progress, and collaborate with your team in real-time."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 14-day free trial for you to explore all features of SwiftOps without any commitment."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods, including credit cards, PayPal, and bank transfers. You can choose your preferred method during checkout."
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Yes, you can cancel your subscription at any time through your account settings. You will not be charged for the next billing cycle after cancellation."
        },
        {
            question: "What support options do you offer?",
            answer: "We provide 24/7 customer support via email, live chat, and a comprehensive knowledge base. Our support team is always ready to assist you."
        },
        {
            question: "Is my data secure with SwiftOps?",
            answer: "Absolutely! We prioritize your data security and use industry-standard encryption and compliance measures to protect your information."
        },
        {
            question: "Can I integrate SwiftOps with other tools?",
            answer: "Yes, SwiftOps supports integrations with popular tools such as Slack, Google Drive, and Trello, making it easy to streamline your workflow."
        },
        {
            question: "How can I provide feedback or request features?",
            answer: "We welcome your feedback! You can submit your suggestions through our feedback form located in your account settings or contact our support team."
        },
        {
            question: "Where can I find tutorials and guides?",
            answer: "You can find a variety of tutorials and guides in our Help Center, which covers everything from getting started to advanced features."
        }
    ];



    return (
        <div id="faq" className="md:py-[7rem] py-12 -mt-1 px-4 w-full dark:bg-[#111214] bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center gap-6 justify-center">

            {/* Background  */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#111214] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <div className="xl:w-[80rem] w-full xl:px-0 sm:px-12 px-4 flex flex-col relative items-start gap-6">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:text-white dark:to-white font-semibold text-xl md:text-3xl md:leading-[4.5rem]">
                    Frequently asked questions
                </h1>
                <p className="-mt-5 dark:text-zinc-400 text-zinc-600 text-xs md:text-[1rem] leading-6">
                    Can't find answer you're looking for ? <span className="text-[#059681] cursor-pointer">Reach out to us </span> and we will get in touch with you.
                </p>

                <div className="w-full">
                    <Accordion type="single" collapsible>
                        {faqData.map((item, idx) => {
                            return (
                                <AccordionItem key={idx} value={`item-${idx + 1}`}>
                                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-left md:text-[1rem] text-[0.65rem]">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>

            </div>


        </div>
    )
}

export default FAQ