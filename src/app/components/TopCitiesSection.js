// "use client"

// import { useEffect, useRef } from "react"
// import { ChevronRight } from "lucide-react"
// import Image from "next/image"

// const CitiesSection = () => {
//     const sectionRef = useRef(null)
//     const cityRefs = useRef([])

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!sectionRef.current) return

//             const scrollY = window.scrollY
//             const sectionTop = sectionRef.current.offsetTop
//             const sectionHeight = sectionRef.current.offsetHeight
//             const windowHeight = window.innerHeight

//             // Check if section is in viewport
//             if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
//                 const progress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight)

//                 // Apply parallax effect to city cards
//                 cityRefs.current.forEach((cityRef, index) => {
//                     if (cityRef) {
//                         const speed = 0.5 + index * 0.1 // Different speeds for each city
//                         const yPos = -(progress * 100 * speed)
//                         cityRef.style.transform = `translateY(${yPos}px)`
//                     }
//                 })
//             }
//         }

//         window.addEventListener("scroll", handleScroll)
//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [])

//     const cities = [
//         {
//             name: "New Delhi",
//             bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-500",
//             textColor: "text-blue-900",
//             arrowColor: "text-blue-900",
//         },
//         {
//             name: "Bengaluru",
//             bgColor: "bg-gradient-to-r from-orange-400 to-orange-500",
//             textColor: "text-blue-900",
//             arrowColor: "text-blue-900",
//         },
//         {
//             name: "Pune",
//             bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
//             textColor: "text-white",
//             arrowColor: "text-white",
//         },
//         {
//             name: "Mumbai",
//             bgColor: "bg-gradient-to-r from-gray-700 to-gray-800",
//             textColor: "text-white",
//             arrowColor: "text-white",
//         },
//         {
//             name: "Jaipur",
//             bgColor: "bg-gradient-to-r from-pink-400 to-pink-500",
//             textColor: "text-white",
//             arrowColor: "text-white",
//         },
//     ]

//     return (
//         <section ref={sectionRef} className="w-full overflow-hidden">
//             {/* Header Section */}
//             <div
//                 className="w-full h-[141px] flex items-center justify-start px-6 md:px-24 lg:px-24"
//                 style={{ backgroundColor: "#002DA5" }}
//             >
//                 <h2
//                     className="text-2xl md:text-4xl lg:text-5xl font-bold leading-none"
//                     style={{
//                         fontFamily: "Poppins, sans-serif",
//                         color: "#F5C545",
//                         fontSize: "clamp(24px, 4vw, 48px)",
//                     }}
//                 >
//                     Find jobs in India's top cities
//                 </h2>
//             </div>

//             {/* Cities Grid */}
//             <div className="w-full">
//                 {cities.map((city, index) => (
//                     <div
//                         key={city.name}
//                         ref={(el) => (cityRefs.current[index] = el)}
//                         className={`w-full h-[280px] md:h-[350px] lg:h-[380px] relative overflow-hidden ${city.bgColor} flex items-center px-6 md:px-24 lg:px-24`}
//                         style={{
//                             backgroundImage: "url(/placeholder.svg?height=380&width=1440)",
//                             backgroundSize: "cover",
//                             backgroundPosition: "center",
//                             backgroundBlendMode: "overlay",
//                         }}
//                     >
//                         {/* Background overlay for better text visibility */}
//                         <div className="absolute inset-0 bg-black bg-opacity-20"></div>

//                         {/* Content */}
//                         <div className="relative z-10 flex flex-col justify-center h-full">
//                             <div className="flex items-center gap-4 md:gap-8 mb-6">
//                                 {/* Double Arrow Icon */}
//                                 <div className="flex">
//                                     <img
//                                         src="/assets/city-arrow-icon.png"
//                                         alt="arrow"
//                                         className="w-[41px] h-[74px]"
//                                         style={{
//                                             opacity: 1,
//                                         }}
//                                     />
//                                     <img
//                                         src="/assets/city-arrow-icon.png"
//                                         alt="arrow"
//                                         className="w-[41px] h-[74px]"
//                                         style={{
//                                             opacity: 1,
//                                             marginLeft: "-15px", // Adjust this value as needed
//                                         }}
//                                     />
//                                 </div>

//                                 {/* City Name */}
//                                 <h3
//                                     className={`font-bold leading-none ${city.textColor}`}
//                                     style={{
//                                         fontFamily: "Poppins, sans-serif",
//                                         fontSize: "clamp(40px, 8vw, 100px)",
//                                     }}
//                                 >
//                                     {city.name}
//                                 </h3>
//                             </div>

//                             {/* Explore Button - positioned below the arrow and city name */}
//                             <div className="mt-14">
//                                 <button
//                                     className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-transparent"
//                                     style={{
//                                         borderColor: "#002DA5",
//                                         color: "#002DA5",
//                                         width: "clamp(150px, 15vw, 200px)",
//                                         height: "clamp(60px, 6vw, 80px)",
//                                     }}
//                                 >
//                                     <span
//                                         className="font-medium text-center flex-shrink-0"
//                                         style={{
//                                             fontFamily: "Poppins, sans-serif",
//                                             fontSize: "clamp(14px, 1.2vw, 18px)"
//                                         }}
//                                     >
//                                         Explore
//                                     </span>
//                                     <Image
//                                         src="/assets/blue_arrow_icon.png"
//                                         alt="Arrow"
//                                         width={0}
//                                         height={0}
//                                         className="flex-shrink-0"
//                                         style={{
//                                             width: "clamp(16px, 1.5vw, 20px)",
//                                             height: "clamp(16px, 1.5vw, 20px)"
//                                         }}
//                                     />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* More Cities Button */}
//             <div className="w-full flex justify-center py-12 bg-gray-50">
//                 <button
//                     className="flex items-center gap-2 px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                     style={{
//                         borderColor: "#002DA5",
//                         color: "#002DA5",
//                     }}
//                 >
//                     <span className="font-medium text-base" style={{ fontFamily: "Poppins, sans-serif" }}>
//                         More cities
//                     </span>
//                     <ChevronRight className="w-4 h-4" />
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default CitiesSection


"use client"

import { useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

const CitiesSection = () => {
    const sectionRef = useRef(null)
    const cityRefs = useRef([])

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return

            const scrollY = window.scrollY
            const sectionTop = sectionRef.current.offsetTop
            const sectionHeight = sectionRef.current.offsetHeight
            const windowHeight = window.innerHeight

            // Check if section is in viewport
            if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
                const progress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight)

                // Apply parallax effect to city cards
                cityRefs.current.forEach((cityRef, index) => {
                    if (cityRef) {
                        const speed = 0.5 + index * 0.1 // Different speeds for each city
                        const yPos = -(progress * 100 * speed)
                        cityRef.style.transform = `translateY(${yPos}px)`
                    }
                })
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const cities = [
        {
            name: "New Delhi",
            bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-500",
            textColor: "#002DA5",
            arrowColor: "#002DA5",
            buttonColor: "#002DA5",
        },
        {
            name: "Bengaluru",
            bgColor: "bg-gradient-to-r from-orange-400 to-orange-500",
            textColor: "#001242",
            arrowColor: "#001242",
            buttonColor: "#001242",
        },
        {
            name: "Pune",
            bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
            textColor: "#FFFFFF",
            arrowColor: "#FFFFFF",
            buttonColor: "#FFFFFF",
        },
        {
            name: "Mumbai",
            bgColor: "bg-gradient-to-r from-gray-700 to-gray-800",
            textColor: "#F5C545",
            arrowColor: "#F5C545",
            buttonColor: "#F5C545",
        },
        {
            name: "Jaipur",
            bgColor: "bg-gradient-to-r from-pink-400 to-pink-500",
            textColor: "#FFFFFF",
            arrowColor: "#FFFFFF",
            buttonColor: "#FFFFFF",
        },
    ]

    return (
        <section ref={sectionRef} className="w-full overflow-hidden">
            {/* Header Section */}
            <div
                className="w-full h-[141px] flex items-center justify-start px-6 md:px-24 lg:px-24"
                style={{ backgroundColor: "#002DA5" }}
            >
                <h2
                    className="text-2xl md:text-4xl lg:text-5xl font-bold leading-none"
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        color: "#F5C545",
                        fontSize: "clamp(24px, 4vw, 48px)",
                    }}
                >
                    Find jobs in India&apos;s top cities
                </h2>
            </div>

            {/* Cities Grid */}
            <div className="w-full">
                {cities.map((city, index) => (
                    <div
                        key={city.name}
                        ref={(el) => (cityRefs.current[index] = el)}
                        className={`w-full h-[280px] md:h-[350px] lg:h-[380px] relative overflow-hidden ${city.bgColor} flex items-center px-6 md:px-24 lg:px-24`}
                        style={{
                            backgroundImage: "url(/placeholder.svg?height=380&width=1440)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundBlendMode: "overlay",
                        }}
                    >
                        {/* Background overlay for better text visibility */}
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center h-full">
                            <div className="flex items-center gap-4 md:gap-8 mb-6">
                                {/* Double Arrow Icon */}
                                <div className="flex">
                                    <div 
                                        className="w-[41px] h-[74px]"
                                        style={{
                                            backgroundColor: city.arrowColor,
                                            maskImage: "url(/assets/city-arrow-icon.png)",
                                            maskSize: "contain",
                                            maskRepeat: "no-repeat",
                                            maskPosition: "center",
                                            WebkitMaskImage: "url(/assets/city-arrow-icon.png)",
                                            WebkitMaskSize: "contain",
                                            WebkitMaskRepeat: "no-repeat",
                                            WebkitMaskPosition: "center",
                                        }}
                                    />
                                    <div 
                                        className="w-[41px] h-[74px]"
                                        style={{
                                            backgroundColor: city.arrowColor,
                                            marginLeft: "-15px",
                                            maskImage: "url(/assets/city-arrow-icon.png)",
                                            maskSize: "contain",
                                            maskRepeat: "no-repeat",
                                            maskPosition: "center",
                                            WebkitMaskImage: "url(/assets/city-arrow-icon.png)",
                                            WebkitMaskSize: "contain",
                                            WebkitMaskRepeat: "no-repeat",
                                            WebkitMaskPosition: "center",
                                        }}
                                    />
                                </div>

                                {/* City Name */}
                                <h3
                                    className="font-bold leading-none"
                                    style={{
                                        fontFamily: "Poppins, sans-serif",
                                        fontSize: "clamp(40px, 8vw, 100px)",
                                        color: city.textColor,
                                    }}
                                >
                                    {city.name}
                                </h3>
                            </div>

                            {/* Explore Button - positioned below the arrow and city name */}
                            <div className="mt-14">
                                <button
                                    className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-transparent"
                                    style={{
                                        borderColor: city.buttonColor,
                                        color: city.buttonColor,
                                        width: "clamp(150px, 15vw, 200px)",
                                        height: "clamp(60px, 6vw, 80px)",
                                    }}
                                >
                                    <span
                                        className="font-medium text-center flex-shrink-0"
                                        style={{
                                            fontFamily: "Poppins, sans-serif",
                                            fontSize: "clamp(14px, 1.2vw, 18px)"
                                        }}
                                    >
                                        Explore
                                    </span>
                                    <div
                                        className="flex-shrink-0"
                                        style={{
                                            width: "clamp(16px, 1.5vw, 20px)",
                                            height: "clamp(16px, 1.5vw, 20px)",
                                            backgroundColor: city.buttonColor,
                                            maskImage: "url(/assets/blue_arrow_icon.png)",
                                            maskSize: "contain",
                                            maskRepeat: "no-repeat",
                                            maskPosition: "center",
                                            WebkitMaskImage: "url(/assets/blue_arrow_icon.png)",
                                            WebkitMaskSize: "contain",
                                            WebkitMaskRepeat: "no-repeat",
                                            WebkitMaskPosition: "center",
                                        }}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* More Cities Button */}
            <div className="w-full flex justify-center py-12 bg-gray-50">
             <button
    className="flex items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    style={{
        width: "472px",
        height: "120px",
        borderColor: "#002DA5",
        color: "#002DA5",
        borderRadius: "100px",
        gap: "10px",
        padding: "10px",
    }}
>
    <span 
        className="font-normal"
        style={{ 
            fontFamily: "Sarabun, sans-serif",
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0px",
            color: "#002DA5"
        }}
    >
        More cities
    </span>
    <div
        style={{
            width: "20px",
            height: "20px",
            backgroundColor: "#002DA5",
            maskImage: "url(/assets/blue_arrow_icon.png)",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: "url(/assets/blue_arrow_icon.png)",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
        }}
    />
</button>
            </div>
        </section>
    )
}

export default CitiesSection