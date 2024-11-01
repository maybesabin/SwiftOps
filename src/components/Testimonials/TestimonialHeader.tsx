import { Separator } from "../ui/separator";
import TestimonialCard from "./TestimonialCard"
import companylogo from "../../assets/images/comapnylogo.jpg"

const TestimonialHeader = () => {
    const customerReviews = [
        {
            name: "Alice Johnson",
            review: "An incredible experience from start to finish! Truly impressed with the professionalism and dedication.",
            image: "https://plus.unsplash.com/premium_photo-1673957753719-fa0b3ab74094?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Founder at Eco Innovations"
        },
        {
            name: "Michael Lee",
            review: "As a founder of a startup in the sustainability sector, I knew I needed a team that understood my vision and could help bring it to life. Working with this team has been a transformative experience. From the very first meeting, they demonstrated a deep understanding of our goals and a commitment to excellence. They listened attentively to our needs and provided creative solutions that truly resonated with our mission. Their collaborative approach made us feel like partners in the process rather than just clients. The level of professionalism and support we received was unparalleled; they were always available to answer questions and provide guidance. The final product exceeded our expectations and has received positive feedback from our stakeholders. I can confidently say that this team has played a pivotal role in our success, and I wholeheartedly recommend their services to any founder looking for a dedicated and talented partner. I’m excited to continue working together as we grow and expand our impact in the world",
            image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "CEO at UrbanX"
        },
        {
            name: "Samantha Rivera",
            review: "The team went above and beyond our expectations. Their attention to detail is unmatched, and their commitment to client success is evident in every interaction. We felt supported and valued throughout the entire process, making it a truly memorable experience. Highly recommended!",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Co-Founder at Bright Start"
        },
        {
            name: "John O’Neill",
            review: "Fantastic service. Simple, efficient, and exactly what we needed.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Founder at FastFix Solutions"
        },
        {
            name: "Emily Chen",
            review: "Working with them was a game-changer for us. Their innovative approach transformed our project. We’re now seeing results that we couldn’t have imagined before! They listened attentively to our needs and provided creative solutions that truly resonated with our mission.",
            image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Head of Product at Nova Labs"
        },
        {
            name: "Raj Patel",
            review: "Professional and reliable team. Delivered on time with exceptional quality. They listened attentively to our needs and provided creative solutions that truly resonated with our mission.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Entrepreneur"
        },
        {
            name: "Jessica Martinez",
            review: "I appreciate the team’s flexibility and creative input throughout the project. They really understand how to support founders at every stage. They listened attentively to our needs and provided creative solutions that truly resonated with our mission. Their collaborative approach made us feel like partners in the process rather than just clients. The level of professionalism and support we received was unparalleled.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Founder at GreenTech Ventures"
        },
        {
            name: "Carlos Garcia",
            review: "As a founder of a startup in the sustainability sector, I knew I needed a team that understood my vision and could help bring it to life. Working with this team has been a transformative experience. From the very first meeting, they demonstrated a deep understanding of our goals and a commitment to excellence. They listened attentively to our needs and provided creative solutions that truly resonated with our mission. Their collaborative approach made us feel like partners in the process rather than just clients. The level of professionalism and support we received was unparalleled. I’m excited to continue working together as we grow and expand our impact in the world. As a founder of a startup in the sustainability sector, I knew I needed a team that understood my vision and could help bring it to life.",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Co-Founder at Reach Enterprises"
        },
        {
            name: "Lily Tran",
            review: "Amazing experience! Quick responses and always available to assist with any questions. As a founder of a startup in the sustainability sector, I knew I needed a team that understood my vision and could help bring it to life. Working with this team has been a transformative experience. ",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "CEO at Artify Studios"
        },
        {
            name: "Peter Wong",
            review: "As a founder of a startup in the sustainability sector, I knew I needed a team that understood my vision and could help bring it to life. Working with this team has been a transformative experience. From the very first meeting, they demonstrated a deep understanding of our goals and a commitment to excellence. They listened attentively to our needs and provided creative solutions that truly resonated with our mission. Their collaborative approach made us feel like partners in the process rather than just clients. The level of professionalism and support we received was unparalleled. I’m excited to continue working together as we grow and expand our impact in the world. I often juggle multiple responsibilities, making it challenging to focus on growth. Partnering with this team was one of the best decisions I've made. They took the time to understand my business model and objectives, and their tailored approach was refreshing. They provided actionable insights that allowed me to optimize my operations and marketing efforts effectively. The level of support and communication throughout the process was exceptional, making it easy for me to implement.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Founder at HealthHub"
        },
        {
            name: "Nina Schmidt",
            review: "Supportive and professional at every turn.",
            image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Head of Marketing at BrandWave"
        },
        {
            name: "Mohammed Ali",
            review: "Their work exceeded our expectations, and their support has been invaluable in helping us grow our business. Our nonprofit organization faced significant challenges in reaching our fundraising goals. After collaborating with this team, we experienced a remarkable turnaround. Their insights into donor engagement and targeted outreach strategies made a substantial difference in our campaigns.",
            image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            work: "Founder at QuickTech"
        }
    ];


    return (
        <div className="flex items-start justify-center xl:justify-between gap-6 xl:w-[80rem] xl:px-0 sm:px-12 px-4 w-full">
            <div className="w-1/4 xl:flex hidden flex-col items-start gap-6">
                {customerReviews.slice(0, 4).map((item, idx) => {
                    return (
                        <TestimonialCard key={idx} name={item.name} image={item.image} review={item.review} work={item.work} />
                    )
                })}
            </div>
            <div className="xl:w-2/4 lg:w-2/3 w-full flex flex-col items-start gap-6">

                <div className="w-full border rounded-2xl flex flex-col items-start gap-6 p-6">
                    <p className="md:text-lg text-[0.85rem] md:font-semibold dark:text-neutral-300 text-neutral-800">
                        "As a small business owner, I often juggle multiple responsibilities, making it challenging to focus on growth. Partnering with this team was one of the best decisions I've made. They took the time to understand my business model and objectives, and their tailored approach was refreshing. They provided actionable insights that allowed me to optimize my operations and marketing efforts effectively. The level of support and communication throughout the process was exceptional, making it easy for me to implement."
                    </p>
                    <Separator />
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-start gap-4">
                            <img className="rounded-full h-[50px] w-[50px] object-cover" src="https://images.unsplash.com/photo-1504199367641-aba8151af406?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="flex flex-col items-start">
                                <h1 className="text-[0.9rem] font-medium">Raj Sharma</h1>
                                <h3 className="text-[0.85rem] dark:text-neutral-300 text-neutral-800">Founder at Slack</h3>
                            </div>
                        </div>
                        <img className="w-[50px] h-[50px] rounded-full object-cover" src={companylogo} alt="" />
                    </div>
                </div>

                <div className="w-full flex items-start justify-between gap-6">
                    <div className="md:w-1/2 w-full flex flex-col items-start gap-6">
                        {customerReviews.slice(3, 7).map((item, idx) => {
                            return (
                                <TestimonialCard key={idx} name={item.name} image={item.image} review={item.review} work={item.work} />
                            )
                        })}
                    </div>
                    <div className="w-1/2 md:flex hidden flex-col items-start gap-6">
                        {customerReviews.slice(7, 9).map((item, idx) => {
                            return (
                                <TestimonialCard key={idx} name={item.name} image={item.image} review={item.review} work={item.work} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="xl:w-1/4 w-1/3 lg:flex hidden flex-col items-start gap-6">
                {customerReviews.slice(9, 12).map((item, idx) => {
                    return (
                        <TestimonialCard key={idx} name={item.name} image={item.image} review={item.review} work={item.work} />
                    )
                })}
            </div>
        </div>
    )
}

export default TestimonialHeader