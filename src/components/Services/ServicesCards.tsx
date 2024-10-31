import Lottie from "lottie-react"
import network from "../../assets/network.json"
import secure from "../../assets/secure.json"
import Marquee from "react-fast-marquee";
import logo1 from "../../assets/images/logo-acme.png"
import logo2 from "../../assets/images/logo-apex.png"
import logo3 from "../../assets/images/logo-celestial.png"
import logo4 from "../../assets/images/logo-echo.png"
import logo5 from "../../assets/images/logo-pulse.png"
import logo6 from "../../assets/images/logo-quantum.png"
import video from "../../assets/vpn.mp4"
const marquee = [logo1, logo2, logo3, logo4, logo5, logo6]

const ServicesCards = () => {

    return (
        <div className="flex items-center justify-center xl:w-[65rem] w-full xl:px-0 px-6">
            <div className="lg:h-[50rem] h-auto w-full flex md:flex-row flex-col-reverse md:items-start items-center md:justify-between justify-center gap-4">

                <div className="lg:w-[70%] md:w-1/2 w-[85%] h-full flex flex-col items-start gap-4">

                    <div className="border md:flex hidden p-6 items-start justify-between gap-6 rounded-2xl h-2/4 w-full">

                        <div className="flex flex-col items-start gap-6">
                            <div className="dark:bg-white bg-black rounded-full flex items-center justify-between">
                                <svg className="dark:text-black text-white m-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">
                                    <path d="M9 13C9 13 10 13 11 15C11 15 14.1765 10 17 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89839 3.18863 7.79784 3.61619 6.54933 3.9711C4.72193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                            <h1 className="text-[1rem] font-medium">Military-Grade Encryption</h1>
                            <p className="text-zinc-400 text-[0.8rem]">Protect your data with advanced, military-grade encryption that secures all connections, ensuring your information stays private, safe, and inaccessible to third parties.</p>
                        </div>

                        <div className="flex-grow lg:flex hidden">
                            <Lottie animationData={secure} className="w-72 dark:brightness-75 h-52 object-contain" />
                        </div>

                    </div>


                    <div className="flex lg:flex-row flex-col items-start justify-between gap-4 w-full h-full">

                        <div className="border rounded-2xl lg:h-full h-1/2 w-full flex flex-col items-start gap-6 p-6">
                            <div className="flex flex-col items-start gap-4 flex-grow">
                                <div className="dark:bg-white bg-black rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-black text-white m-3" viewBox="0 0 24 24" width="20" height="20" fill="none">
                                        <path d="M11 5L18 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 10L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 11L5 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="6.44444" cy="6.44444" r="4.44444" stroke="currentColor" stroke-width="1.5" />
                                        <circle cx="5" cy="20" r="2" stroke="currentColor" stroke-width="1.5" />
                                        <circle cx="16" cy="16" r="2" stroke="currentColor" stroke-width="1.5" />
                                        <circle cx="20" cy="5" r="2" stroke="currentColor" stroke-width="1.5" />
                                    </svg>
                                </div>
                                <h1 className="text-[1rem] font-medium">Global Server Access</h1>
                                <p className="text-zinc-400 text-[0.8rem] w-full">Enjoy unrestricted access to a global network of servers, allowing secure browsing and seamless streaming from anywhere, without compromising speed or privacy.</p>
                            </div>
                            <div className="flex-grow flex justify-center">
                                <Lottie animationData={network} className="lg:w-full w-1/2 object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-4 w-full h-full">

                            <div className="border rounded-2xl h-1/2 w-full flex flex-col items-start gap-6 p-6">
                                <div className="flex flex-col items-start gap-6 flex-grow">
                                    <div className="dark:bg-white bg-black rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-black text-white m-3" viewBox="0 0 24 24" width="20" height="20" fill="none">
                                            <path d="M12 16.5V14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M4.2678 18.8447C4.49268 20.515 5.87612 21.8235 7.55965 21.9009C8.97626 21.966 10.4153 22 12 22C13.5847 22 15.0237 21.966 16.4403 21.9009C18.1239 21.8235 19.5073 20.515 19.7322 18.8447C19.8789 17.7547 20 16.6376 20 15.5C20 14.3624 19.8789 13.2453 19.7322 12.1553C19.5073 10.485 18.1239 9.17649 16.4403 9.09909C15.0237 9.03397 13.5847 9 12 9C10.4153 9 8.97626 9.03397 7.55965 9.09909C5.87612 9.17649 4.49268 10.485 4.2678 12.1553C4.12104 13.2453 3.99999 14.3624 3.99999 15.5C3.99999 16.6376 4.12104 17.7547 4.2678 18.8447Z" stroke="currentColor" stroke-width="1.5" />
                                            <path d="M7.5 9V6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <h1 className="text-[1rem] font-medium">No-Log Policy</h1>
                                    <p className="text-zinc-400 text-[0.8rem]">We value your privacy. Our strict no-log policy means your browsing history and data are never tracked, stored, or shared, giving you complete online anonymity.</p>
                                </div>
                            </div>

                            <div className="border rounded-2xl h-1/2 w-full md:flex hidden flex-col items-start gap-6 p-6">
                                <video src={video} className="h-full w-full object-cover rounded-2xl" autoPlay muted loop></video>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl h-full lg:w-[30%] md:w-1/2 w-[85%] flex flex-col items-start gap-4">
                    <div className="border rounded-2xl h-3/5 w-full flex flex-col items-start gap-6 p-6">
                        <div className="dark:bg-white bg-black rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-black text-white m-3" viewBox="0 0 24 24" width="20" height="20" fill="none">
                                <path d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M11 19H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h1 className="text-[1rem] font-medium">Multi-Device Compatibility</h1>
                        <p className="text-zinc-400 text-[0.8rem]">Connect multiple devices simultaneously with ease. Our VPN supports smartphones, laptops, and tablets, keeping all your devices protected on one account.</p>

                        <div className="flex flex-col gap-12 items-center justify-center w-full mt-6">
                            <div className="dark:flex hidden">
                                <Marquee className="dark:flex hidden"
                                    pauseOnHover={true}
                                    gradient={true}
                                    gradientColor="#111214"
                                >
                                    {marquee.map((logo, idx) => (
                                        <img
                                            src={logo}
                                            key={idx}
                                            width={'60px'}
                                            className="ml-6 cursor-pointer brightness-75 hover:brightness-100 transition-all"
                                            alt=""
                                        />
                                    ))}
                                </Marquee>
                            </div>
                            <div className="dark:flex hidden">
                                <Marquee className="dark:flex hidden"
                                    pauseOnHover={true}
                                    gradient={true}
                                    gradientColor="#111214"
                                    direction="right"
                                >
                                    {marquee.map((logo, idx) => (
                                        <img
                                            src={logo}
                                            key={idx}
                                            width={'60px'}
                                            className="ml-6 cursor-pointer brightness-75 hover:brightness-100 transition-all"
                                            alt=""
                                        />
                                    ))}
                                </Marquee>
                            </div>
                            <div className="dark:flex hidden">
                                <Marquee className="dark:flex hidden"
                                    pauseOnHover={true}
                                    gradient={true}
                                    gradientColor="#111214"
                                >
                                    {marquee.map((logo, idx) => (
                                        <img
                                            src={logo}
                                            key={idx}
                                            width={'60px'}
                                            className="ml-6 cursor-pointer brightness-75 hover:brightness-100 transition-all"
                                            alt=""
                                        />
                                    ))}
                                </Marquee>
                            </div>
                            <div className="dark:hidden flex">
                                <Marquee className="dark:flex hidden"
                                    pauseOnHover={true}
                                    gradient={true}
                                    gradientColor="white"
                                >
                                    {marquee.map((logo, idx) => (
                                        <img
                                            src={logo}
                                            key={idx}
                                            width={'60px'}
                                            className="ml-6 cursor-pointer brightness-50 hover:brightness-0 transition-all"
                                            alt=""
                                        />
                                    ))}
                                </Marquee>
                            </div>
                            <div className="dark:hidden flex">
                                <Marquee className="dark:flex hidden"
                                    pauseOnHover={true}
                                    gradient={true}
                                    gradientColor="white"
                                    direction="right"
                                >
                                    {marquee.map((logo, idx) => (
                                        <img
                                            src={logo}
                                            key={idx}
                                            width={'60px'}
                                            className="ml-6 cursor-pointer brightness-50 hover:brightness-0 transition-all"
                                            alt=""
                                        />
                                    ))}
                                </Marquee>
                            </div>
                            <div className="dark:hidden flex">
                                <Marquee className="dark:flex hidden"
                                    pauseOnHover={true}
                                    gradient={true}
                                    gradientColor="white"
                                >
                                    {marquee.map((logo, idx) => (
                                        <img
                                            src={logo}
                                            key={idx}
                                            width={'60px'}
                                            className="ml-6 cursor-pointer brightness-50 hover:brightness-0 transition-all"
                                            alt=""
                                        />
                                    ))}
                                </Marquee>
                            </div>
                        </div>

                    </div>

                    <div className="border rounded-2xl h-2/5 w-full flex flex-col items-start gap-6 p-9">
                        <div className="flex flex-col items-start gap-6 flex-grow">
                            <div className="dark:bg-white bg-black rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-black text-white m-3" viewBox="0 0 24 24" width="20" height="20" fill="none">
                                    <path d="M11.8013 6.48949L13.2869 5.00392C14.9596 3.3312 17.1495 2.63737 19.4671 2.52399C20.3686 2.47989 20.8193 2.45784 21.1807 2.81928C21.5422 3.18071 21.5201 3.63143 21.476 4.53289C21.3626 6.8505 20.6688 9.04042 18.9961 10.7131L17.5105 12.1987C16.2871 13.4221 15.9393 13.77 16.1961 15.097C16.4496 16.1107 16.6949 17.0923 15.9578 17.8294C15.0637 18.7235 14.2481 18.7235 13.354 17.8294L6.17058 10.646C5.27649 9.75188 5.27646 8.9363 6.17058 8.04219C6.90767 7.30509 7.88929 7.55044 8.90297 7.80389C10.23 8.06073 10.5779 7.71289 11.8013 6.48949Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M16.9959 7H17.0049" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 21.5L7.5 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M8.5 21.5L10.5 19.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                    <path d="M2.5 15.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                </svg>
                            </div>
                            <h1 className="text-[1rem] font-medium">High-Speed Connections</h1>
                            <p className="text-zinc-400 text-[0.8rem]">Experience ultra-fast, uninterrupted VPN speeds optimized for streaming, gaming, and large downloads, delivering high performance without buffering or lag.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCards