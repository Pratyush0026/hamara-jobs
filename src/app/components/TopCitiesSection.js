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
//             textColor: "#002DA5",
//             arrowColor: "#002DA5",
//             buttonColor: "#002DA5",
//             image: "/assets/newdelhi.png", // Add your city image path
//         },
//         {
//             name: "Bengaluru",
//             bgColor: "bg-gradient-to-r from-orange-400 to-orange-500",
//             textColor: "#001242",
//             arrowColor: "#001242",
//             buttonColor: "#001242",
//             image: "/assets/bengaluru.png", // Add your city image path
//         },
//         {
//             name: "Pune",
//             bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
//             textColor: "#FFFFFF",
//             arrowColor: "#FFFFFF",
//             buttonColor: "#FFFFFF",
//             image: "/assets/pune.png", // Add your city image path
//         },
//         {
//             name: "Mumbai",
//             bgColor: "bg-gradient-to-r from-gray-700 to-gray-800",
//             textColor: "#F5C545",
//             arrowColor: "#F5C545",
//             buttonColor: "#F5C545",
//             image: "/assets/mumbai.png", // Add your city image path
//         },
//         {
//             name: "Jaipur",
//             bgColor: "bg-gradient-to-r from-pink-400 to-pink-500",
//             textColor: "#FFFFFF",
//             arrowColor: "#FFFFFF",
//             buttonColor: "#FFFFFF",
//             image: "/assets/jaipur.png", // Add your city image path
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
//                     Find jobs in India&apos;s top cities
//                 </h2>
//             </div>

//             {/* Cities Grid */}
//             <div className="w-full">
//                 {cities.map((city, index) => (
//                     <div
//                         key={city.name}
//                         ref={(el) => (cityRefs.current[index] = el)}
//                         className={`w-full h-[280px] md:h-[350px] lg:h-[380px] relative overflow-hidden ${city.bgColor} flex items-center px-6 md:px-24 lg:px-24`}
//                     >
//                         {/* Background Image */}
//                         <div className="absolute inset-0">
//                             <Image
//                                 src={city.image}
//                                 alt={`${city.name} cityscape`}
//                                 fill
//                                 className="object-cover"
//                                 style={{
//                                     backgroundBlendMode: "overlay",
//                                 }}
//                             />
//                         </div>

//                         {/* Gradient overlay for better text visibility */}
//                         <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        
//                         {/* Gradient overlay that matches the city's theme color */}
//                         <div className={`absolute inset-0 ${city.bgColor} opacity-60`}></div>

//                         {/* Content */}
//                         <div className="relative z-10 flex flex-col justify-center h-full">
//                             <div className="flex items-center gap-4 md:gap-8 mb-6">
//                                 {/* Double Arrow Icon */}
//                                 <div className="flex">
//                                     <div 
//                                         className="w-[41px] h-[74px]"
//                                         style={{
//                                             backgroundColor: city.arrowColor,
//                                             maskImage: "url(/assets/city-arrow-icon.png)",
//                                             maskSize: "contain",
//                                             maskRepeat: "no-repeat",
//                                             maskPosition: "center",
//                                             WebkitMaskImage: "url(/assets/city-arrow-icon.png)",
//                                             WebkitMaskSize: "contain",
//                                             WebkitMaskRepeat: "no-repeat",
//                                             WebkitMaskPosition: "center",
//                                         }}
//                                     />
//                                     <div 
//                                         className="w-[41px] h-[74px]"
//                                         style={{
//                                             backgroundColor: city.arrowColor,
//                                             marginLeft: "-15px",
//                                             maskImage: "url(/assets/city-arrow-icon.png)",
//                                             maskSize: "contain",
//                                             maskRepeat: "no-repeat",
//                                             maskPosition: "center",
//                                             WebkitMaskImage: "url(/assets/city-arrow-icon.png)",
//                                             WebkitMaskSize: "contain",
//                                             WebkitMaskRepeat: "no-repeat",
//                                             WebkitMaskPosition: "center",
//                                         }}
//                                     />
//                                 </div>

//                                 {/* City Name */}
//                                 <h3
//                                     className="font-bold leading-none"
//                                     style={{
//                                         fontFamily: "Poppins, sans-serif",
//                                         fontSize: "clamp(40px, 8vw, 100px)",
//                                         color: city.textColor,
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
//                                         borderColor: city.buttonColor,
//                                         color: city.buttonColor,
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
//                                     <div
//                                         className="flex-shrink-0"
//                                         style={{
//                                             width: "clamp(16px, 1.5vw, 20px)",
//                                             height: "clamp(16px, 1.5vw, 20px)",
//                                             backgroundColor: city.buttonColor,
//                                             maskImage: "url(/assets/blue_arrow_icon.png)",
//                                             maskSize: "contain",
//                                             maskRepeat: "no-repeat",
//                                             maskPosition: "center",
//                                             WebkitMaskImage: "url(/assets/blue_arrow_icon.png)",
//                                             WebkitMaskSize: "contain",
//                                             WebkitMaskRepeat: "no-repeat",
//                                             WebkitMaskPosition: "center",
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
//                     className="flex items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                     style={{
//                         width: "472px",
//                         height: "120px",
//                         borderColor: "#002DA5",
//                         color: "#002DA5",
//                         borderRadius: "100px",
//                         gap: "10px",
//                         padding: "10px",
//                     }}
//                 >
//                     <span 
//                         className="font-normal"
//                         style={{ 
//                             fontFamily: "Sarabun, sans-serif",
//                             fontSize: "24px",
//                             lineHeight: "100%",
//                             letterSpacing: "0px",
//                             color: "#002DA5"
//                         }}
//                     >
//                         More cities
//                     </span>
//                     <div
//                         style={{
//                             width: "20px",
//                             height: "20px",
//                             backgroundColor: "#002DA5",
//                             maskImage: "url(/assets/blue_arrow_icon.png)",
//                             maskSize: "contain",
//                             maskRepeat: "no-repeat",
//                             maskPosition: "center",
//                             WebkitMaskImage: "url(/assets/blue_arrow_icon.png)",
//                             WebkitMaskSize: "contain",
//                             WebkitMaskRepeat: "no-repeat",
//                             WebkitMaskPosition: "center",
//                         }}
//                     />
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default CitiesSection

"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const TopCitiesSection = () => {
    const sectionRef = useRef(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const cities = [
        {
            name: "New Delhi",
            bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-500",
            textColor: "#002DA5",
            arrowColor: "#002DA5",
            buttonColor: "#002DA5",
            image: "/assets/newdelhi.png",
        },
        {
            name: "Bengaluru",
            bgColor: "bg-gradient-to-r from-orange-400 to-orange-500",
            textColor: "#001242",
            arrowColor: "#001242",
            buttonColor: "#001242",
            image: "/assets/Bengaluru.png",
        },
        {
            name: "Pune",
            bgColor: "bg-gradient-to-r from-blue-600 to-blue-700",
            textColor: "#FFFFFF",
            arrowColor: "#FFFFFF",
            buttonColor: "#FFFFFF",
            image: "/assets/Pune.png",
        },
        {
            name: "Mumbai",
            bgColor: "bg-gradient-to-r from-gray-700 to-gray-800",
            textColor: "#F5C545",
            arrowColor: "#F5C545",
            buttonColor: "#F5C545",
            image: "/assets/Mumbai.png",
        },
        {
            name: "Jaipur",
            bgColor: "bg-gradient-to-r from-pink-400 to-pink-500",
            textColor: "#FFFFFF",
            arrowColor: "#FFFFFF",
            buttonColor: "#FFFFFF",
            image: "/assets/Jaipur.png",
        },
    ]

    const CityCard = ({ city, index }) => {
        const cardRef = useRef(null)
        const isInView = useInView(cardRef, { 
            once: true, 
            margin: "-100px",
            amount: 0.3
        })

        return (
            <motion.div
                ref={cardRef}
                className={`w-full h-[280px] md:h-[350px] lg:h-[380px] relative overflow-hidden ${city.bgColor} flex items-center px-6 md:px-24 lg:px-24 block`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                }}
                style={{
                    margin: 0,
                    padding: 0,
                    display: 'block',
                    verticalAlign: 'top'
                }}
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={city.image}
                        alt={`${city.name} cityscape`}
                        fill
                        className="object-cover"
                        priority={index < 2}
                        style={{
                            backgroundBlendMode: "overlay",
                        }}
                    />
                </div>

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className={`absolute inset-0 ${city.bgColor} opacity-60`}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24 lg:px-24">
                    <div className="flex items-center gap-4 md:gap-8 mb-6">
                        {/* Arrow Icons */}
                        <motion.div 
                            className="flex"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                        >
                            <div 
                                className="w-[41px] h-[74px] transition-transform duration-300 hover:scale-110"
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
                                className="w-[41px] h-[74px] transition-transform duration-300 hover:scale-110"
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
                        </motion.div>

                        {/* City Name */}
                        <motion.h3
                            className="font-bold leading-none"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "clamp(40px, 8vw, 100px)",
                                color: city.textColor,
                            }}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        >
                            {city.name}
                        </motion.h3>
                    </div>

                    {/* Explore Button */}
                    <motion.div 
                        className="mt-14"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    >
                        <button
                            className="group flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 bg-transparent"
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
                                className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
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
                    </motion.div>
                </div>
            </motion.div>
        )
    }

    return (
        <section 
            ref={sectionRef} 
            className="w-full overflow-hidden"
            style={{ 
                margin: 0, 
                padding: 0,
                lineHeight: 0
            }}
        >
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

            {/* Cities Grid - NO GAPS */}
            <div 
                className="w-full" 
                style={{ 
                    margin: 0, 
                    padding: 0,
                    lineHeight: 0,
                    fontSize: 0,
                    display: 'block'
                }}
            >
                {cities.map((city, index) => (
                    <CityCard key={city.name} city={city} index={index} />
                ))}
            </div>

            {/* More Cities Button */}
            <motion.div 
                className="w-full flex justify-center py-12 bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-50px" }}
                style={{ margin: 0 }}
            >
                <button
                    className="group flex items-center justify-center rounded-full border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-600 hover:text-white"
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
                        }}
                    >
                        More cities
                    </span>
                    <div
                        className="transition-transform duration-300 group-hover:translate-x-1"
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
            </motion.div>
        </section>
    )
}

export default TopCitiesSection