import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";

const PricingHero = ({ isActive }: { isActive: string }) => {
    const monthlyPlans = [
        {
            title: "Basic plan", price: 10, featureTitle: "Basic features for up to 10 users.", features: [
                "Access to basic features",
                "Up to 1 individual user",
                "100 MB secure storage",
                "Email support",
                "Basic usage analytics",
                "Community access",
            ],
        },
        {
            title: "Business plan", price: 20, featureTitle: "Growing teams up to 20 users.", features: [
                "Access to all basic features",
                "Up to 20 individual users",
                "10 GB secure storage",
                "Priority email support",
                "Advanced usage analytics",
                "Monthly performance reports",
            ],
        },
        {
            title: "Enterprise plan", price: 40, featureTitle: "Advanced features + unlimited users.", features: [
                "Access to all pro features",
                "Unlimited individual users",
                "Unlimited secure storage",
                "Dedicated account manager",
                "Premium analytics & insights",
                "24/7 priority support",
            ],
        },
    ];

    const annualPlans = [
        {
            title: "Basic plan", price: 100, featureTitle: "Basic annual features for up to 10 users.", features: [
                "Access to basic features",
                "Up to 1 individual user",
                "1 GB secure storage",
                "Email support",
                "Basic usage analytics",
                "Community access",
            ],
        },
        {
            title: "Business plan", price: 200, featureTitle: "Growing teams up to 20 users annually.", features: [
                "Access to all basic features",
                "Up to 20 individual users",
                "50 GB secure storage",
                "Priority email support",
                "Advanced usage analytics",
                "Annual performance reports",
            ],
        },
        {
            title: "Enterprise plan", price: 400, featureTitle: "Advanced annual features + unlimited users.", features: [
                "Access to all pro features",
                "Unlimited individual users",
                "Unlimited secure storage",
                "Dedicated account manager",
                "Premium analytics & insights",
                "24/7 priority support",
            ],
        },
    ];

    const plans = isActive === "monthly" ? monthlyPlans : annualPlans;

    return (
        <div className="w-full xl:px-0 sm:px-12 px-4 flex lg:flex-row flex-col lg:items-center items-start lg:justify-between gap-9">
            {plans.map((plan, idx) => (
                <div
                    key={idx}
                    className={`lg:w-1/3 w-full flex flex-col p-6 items-start gap-4 relative border rounded-2xl 
                        }`}
                >
                    <h3 className="font-semibold text-[1rem]">{plan.title}</h3>
                    <div className="flex items-center gap-2">
                        <h1 className="text-6xl">${plan.price}</h1>
                        <p className="text-[0.85rem] dark:text-neutral-300 text-neutral-700 font-medium">
                            per user <br /> per {isActive === "monthly" ? "month" : "year"}
                        </p>
                    </div>
                    <p className="text-[0.85rem] -mt-2 text-neutral-500">{plan.featureTitle}</p>
                    <Button className="w-full py-6 mt-4">Get started</Button>
                    <Button className="w-full py-6" variant="secondary">
                        Chat to sales
                    </Button>
                    <h3 className="tracking-wide text-[1rem] mt-4 uppercase">Features</h3>
                    <p className="text-[0.85rem] -mt-4 text-neutral-500">Everything in our free plan plus...</p>
                    <Separator className="w-full mb-1" />
                    {plan.title === "Business plan" && (
                        <button className="bg-[#aeff0e] absolute right-4 top-4 text-zinc-600 font-medium px-3 py-1 text-xs rounded-full">
                            Popular
                        </button>
                    )}
                    <ul className="flex flex-col items-start gap-4">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-[0.9rem]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="text-black fill-[#adff11] stroke-none"
                                    fill="none"
                                >
                                    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" />
                                    <path
                                        d="M8 12.5L10.5 15L16 9"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="dark:text-neutral-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PricingHero;
