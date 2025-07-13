


// 'use client';

// import Image from 'next/image';
// import { useState } from 'react';

// const HeroSection = () => {
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [selectedLocation, setSelectedLocation] = useState('');

//     const popularSearchTerms = ['Technician', 'Sales', 'Labourer', 'Driver', 'Retail'];

//     return (
//         <section
//             className="relative w-full min-h-screen overflow-hidden hero-section -mt-20"
//             style={{
//                 backgroundImage: 'linear-gradient(180deg, rgba(0, 45, 165, 0.9) 0%, rgba(0, 17, 63, 0.9) 100%), url(/assets/grid.png)',
//                 backgroundSize: 'cover, cover',
//                 backgroundPosition: 'center, center',
//                 backgroundRepeat: 'no-repeat, no-repeat'
//             }}
//         >
//             <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
//         @media (max-width: 768px) {
//           .hero-section .absolute-positioning {
//             position: relative !important;
//             left: auto !important;
//             right: auto !important;
//             top: auto !important;
//             bottom: auto !important;
//             transform: none !important;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             margin: 2rem 0;
//           }
//           .hero-section .search-bar-container {
//             margin-top: 2rem !important;
//           }
//           .hero-section .man-image-container {
//             order: 2;
//             margin: 2rem 0;
//           }
//           .hero-section .left-box-container {
//             order: 1;
//             margin-bottom: 2rem;
//           }
//           .hero-section .right-box-container {
//             order: 3;
//             margin-top: 2rem;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .hero-section .search-bar-inner {
//             width: 100% !important;
//             padding: 5px 8px !important;
//             flex-direction: column !important;
//             gap: 10px !important;
//           }
//           .hero-section .search-button {
//             width: 150px !important;
//             height: 60px !important;
//             font-size: 14px !important;
//           }
//           .hero-section .dropdown-section {
//             width: 100% !important;
//           }
//         }
//       `}</style>
//             <div className="max-w-7xl mx-auto px-5 py-16 lg:py-24">
//                 {/* Main Heading with Underline */}
//                 <div className="text-center mb-16 lg:mb-20 relative">
//                     <h1 className="text-white relative inline-block mb-8 px-4">
//                         <span
//                             style={{
//                                 fontFamily: 'Poppins, sans-serif',
//                                 fontWeight: '400',
//                                 fontSize: 'clamp(48px, 7vw, 90px)',
//                                 lineHeight: '110px',
//                                 letterSpacing: '0px',
//                                 textAlign: 'center',
//                                 opacity: 1
//                             }}
//                         >
//                             Jobs for the{' '}
//                         </span>
//                         <span
//                             className="relative"
//                             style={{
//                                 fontFamily: 'Poppins, sans-serif',
//                                 fontWeight: '700',
//                                 fontSize: 'clamp(48px, 7vw, 90px)',
//                                 lineHeight: '110px',
//                                 letterSpacing: '0px',
//                                 textAlign: 'center',
//                                 color: '#FF9B59',
//                                 opacity: 1
//                             }}
//                         >
//                             NEXT BILLION
//                             {/* Orange underline from NEXT to second L of BILLION */}
//                             <div
//                                 className="absolute bottom-0"
//                                 style={{
//                                     left: '0px', // Start from NEXT
//                                     right: '0px', // End at BILLION
//                                     height: '14px',
//                                     width: '413px',
//                                     backgroundColor: '#FF9B59',
//                                     borderRadius: '4px'
//                                 }}
//                             />
//                         </span>
//                     </h1>
//                 </div>

//                 {/* Main Content Area - Positioned relative to heading */}
//                 <div className="relative mb-16">
//                     {/* Left Features Box - Positioned below "Jobs" */}
//                     <div
//                         className="absolute"
//                         style={{
//                             left: '80px',
//                             bottom: '180px',
//                             zIndex: 5
//                         }}
//                     >
//                         <div
//                             className="flex flex-col text-white justify-center"
//                             style={{
//                                 width: '266px',
//                                 height: '150px',
//                                 gap: '14px',
//                                 borderRadius: '24px',
//                                 paddingTop: '16px',
//                                 paddingRight: '32px',
//                                 paddingBottom: '16px',
//                                 paddingLeft: '32px',
//                                 backgroundColor: '#22326E',
//                                 opacity: 1
//                             }}
//                         >
//                             <div className="flex items-center gap-3">
//                                 <Image
//                                     src="/assets/arrow_icon.png"
//                                     alt="Arrow"
//                                     width={19}
//                                     height={18}
//                                     className="object-contain"
//                                     style={{
//                                         width: '19.082151412963867px',
//                                         height: '18px',
//                                         opacity: 1
//                                     }}
//                                 />
//                                 <span
//                                     className="text-white"
//                                     style={{
//                                         fontFamily: 'Poppins, sans-serif',
//                                         fontSize: '20px',
//                                         fontWeight: '400',
//                                         lineHeight: '100%',
//                                         letterSpacing: '0px'
//                                     }}
//                                 >
//                                     Zero charges
//                                 </span>
//                             </div>
//                             <div className="flex items-center gap-3">
//                                 <Image
//                                     src="/assets/arrow_icon.png"
//                                     alt="Arrow"
//                                     width={19}
//                                     height={18}
//                                     className="object-contain"
//                                     style={{
//                                         width: '19.082151412963867px',
//                                         height: '18px',
//                                         opacity: 1
//                                     }}
//                                 />
//                                 <span
//                                     className="text-white"
//                                     style={{
//                                         fontFamily: 'Poppins, sans-serif',
//                                         fontSize: '20px',
//                                         fontWeight: '400',
//                                         lineHeight: '100%',
//                                         letterSpacing: '0px'
//                                     }}
//                                 >
//                                     Verified jobs
//                                 </span>
//                             </div>
//                             <div className="flex items-center gap-3">
//                                 <Image
//                                     src="/assets/arrow_icon.png"
//                                     alt="Arrow"
//                                     width={19}
//                                     height={18}
//                                     className="object-contain"
//                                     style={{
//                                         width: '19.082151412963867px',
//                                         height: '18px',
//                                         opacity: 1
//                                     }}
//                                 />
//                                 <span
//                                     className="text-white"
//                                     style={{
//                                         fontFamily: 'Poppins, sans-serif',
//                                         fontSize: '20px',
//                                         fontWeight: '400',
//                                         lineHeight: '100%',
//                                         letterSpacing: '0px'
//                                     }}
//                                 >
//                                     No fake postings
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Center Man Image - Head touching "N" of NEXT and covering the line */}
//                     <div
//                         className="absolute left-[50%] transform -translate-x-1/2"
//                         style={{
//                             top: '-150px',
//                             zIndex: 20
//                         }}
//                     >
//                         <Image
//                             src="/assets/man.png"
//                             alt="Job seeker using mobile app"
//                             width={275}
//                             height={375}
//                             priority
//                             className="object-contain"
//                             style={{
//                                 width: '275px',
//                                 height: '375px',
//                                 opacity: 1
//                             }}
//                         />

//                         {/* Floating notification badges - matching the image */}
//                         <div className="absolute top-32 left-52 h-[44px] w-[64px] bg-white rounded-2xl p-1 shadow-lg">
//                             <div className="flex items-center gap-2 px-3 py-1">
//                                 <span className="text-white text-2xl ">🥰</span>
//                             </div>
//                         </div>

//                         <div className="absolute bottom-32 -left-6 h-[44px] w-[64px] bg-white rounded-2xl p-2 shadow-lg">
//                             <div className="flex items-center gap-2 px-2 ">
//                                 <span className="text-white text-2xl">📩</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Trust Badge - Positioned below "BILLION" */}
//                     <div
//                         className="absolute-positioning right-box-container"
//                         style={{
//                             position: 'absolute',
//                             right: '80px',
//                             top: '-40px',
//                             zIndex: 5
//                         }}
//                     >
//                         <div
//                             className="flex flex-col justify-center"
//                             style={{
//                                 width: '275px',
//                                 height: '80px',
//                                 gap: '10px',
//                                 borderRadius: '24px',
//                                 paddingTop: '10px',
//                                 paddingRight: '16px',
//                                 paddingBottom: '10px',
//                                 paddingLeft: '16px',
//                                 backgroundColor: '#22326E',
//                                 opacity: 1
//                             }}
//                         >
//                             <p
//                                 className="text-white"
//                                 style={{
//                                     fontFamily: 'Poppins, sans-serif',
//                                     fontSize: '20px',
//                                     fontWeight: '400',
//                                     lineHeight: '25px',
//                                     letterSpacing: '0px',
//                                     color: 'white'
//                                 }}
//                             >
//                                 Trusted by <span
//                                     style={{
//                                         fontWeight: '600',
//                                         color: '#FF9B59'
//                                     }}
//                                 >
//                                     10 million+
//                                 </span> candidates across India
//                             </p>
//                         </div>
//                     </div>

//                     {/* Spacer to maintain layout height */}
//                     <div style={{ height: '300px' }}></div>
//                 </div>

//                 {/* Job Search Bar - Positioned so man image goes INTO it */}
//                 <div className="flex justify-center mb-12" style={{ marginTop: '-140px', position: 'relative', zIndex: 10 }}>
//                     <div
//                         className="bg-white flex items-center justify-between shadow-lg"
//                         style={{
//                             width: 'min(948px, 100%)',
//                             height: '100px',
//                             gap: '10px',
//                             borderRadius: '100px',
//                             paddingTop: '10px',
//                             paddingRight: '16px',
//                             paddingBottom: '10px',
//                             paddingLeft: '16px',
//                             opacity: 1
//                         }}
//                     >
//                         {/* Job Category Dropdown */}
//                         <div className="flex items-center gap-3 flex-1 px-4 py-2 min-w-0">
//                             <div className="flex-shrink-0">
//                                 <Image
//                                     src="/assets/bag_icon.png"
//                                     alt="Job Category"
//                                     width={19}
//                                     height={18}
//                                     className="object-contain"
//                                     style={{
//                                         width: '19px',
//                                         height: '18px',
//                                         opacity: 1
//                                     }}
//                                 />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                                 <select
//                                     className="w-full bg-transparent border-none outline-none text-[#002DA5] cursor-pointer"
//                                     style={{
//                                         fontFamily: 'Poppins, sans-serif',
//                                         fontWeight: '500',
//                                         fontSize: '16px',
//                                         lineHeight: '24px',
//                                         letterSpacing: '-0.2px'
//                                     }}
//                                     value={selectedCategory}
//                                     onChange={(e) => setSelectedCategory(e.target.value)}
//                                 >
//                                     <option value="">Choose your job category</option>
//                                     <option value="technician">Technician</option>
//                                     <option value="sales">Sales</option>
//                                     <option value="labourer">Labourer</option>
//                                     <option value="driver">Driver</option>
//                                     <option value="retail">Retail</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Divider */}
//                         <div className="w-px h-8 bg-gray-200 flex-shrink-0"></div>

//                         {/* Location Dropdown */}
//                         <div className="flex items-center gap-3 flex-1 px-4 py-2 min-w-0">
//                             <div className="flex-shrink-0">
//                                 <Image
//                                     src="/assets/location.png"
//                                     alt="Location"
//                                     width={15}
//                                     height={20}
//                                     className="object-contain"
//                                     style={{
//                                         width: '15px',
//                                         height: '20px',
//                                         opacity: 1
//                                     }}
//                                 />
//                             </div>
//                             <div className="flex-1 min-w-0">
//                                 <select
//                                     className="w-full bg-transparent border-none outline-none text-[#002DA5] cursor-pointer"
//                                     style={{
//                                         fontFamily: 'Poppins, sans-serif',
//                                         fontWeight: '500',
//                                         fontSize: '16px',
//                                         lineHeight: '24px',
//                                         letterSpacing: '-0.2px'
//                                     }}
//                                     value={selectedLocation}
//                                     onChange={(e) => setSelectedLocation(e.target.value)}
//                                 >
//                                     <option value="">Choose your location</option>
//                                     <option value="delhi">Delhi</option>
//                                     <option value="mumbai">Mumbai</option>
//                                     <option value="bangalore">Bangalore</option>
//                                     <option value="hyderabad">Hyderabad</option>
//                                     <option value="pune">Pune</option>
//                                 </select>
//                             </div>
//                         </div>

//                         {/* Search Button */}
//                         <button
//                             className="text-white rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
//                             style={{
//                                 width: '200px',
//                                 height: '80px',
//                                 gap: '8px',
//                                 borderRadius: '100px',
//                                 backgroundColor: '#F5C545',
//                                 fontFamily: 'Poppins, sans-serif',
//                                 fontWeight: '500',
//                                 fontSize: '16px',
//                                 lineHeight: '24px',
//                                 letterSpacing: '-0.2px',
//                                 color: '#002DA5',
//                                 opacity: 1
//                             }}
//                             onMouseEnter={(e) => e.target.style.backgroundColor = '#E5B63D'}
//                             // onMouseLeave={(e) => e.target.style.backgroundColor = '#F5C545'}
//                         >
//                             <span>Search jobs</span>
//                             <Image
//                                 src="/assets/blue_arrow_icon.png"
//                                 alt="Arrow"
//                                 width={14}
//                                 height={14}
//                                 className="object-contain"
//                             />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Popular Search */}
//                 <div className="text-center">
//                     <h3
//                         className="text-white mb-6"
//                         style={{
//                             fontFamily: 'Poppins, sans-serif',
//                             fontSize: '20px',
//                             fontWeight: '500',
//                             lineHeight: '100%',
//                             letterSpacing: '0px',
//                             textAlign: 'center',
//                             color: '#FFFFFF'
//                         }}
//                     >
//                         Popular search
//                     </h3>
//                     <div className="flex flex-wrap justify-center gap-4">
//                         {popularSearchTerms.map((term, index) => (
//                             <button
//                                 key={index}
//                                 className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors duration-200"
//                                 style={{
//                                     fontFamily: 'Poppins, sans-serif',
//                                     fontSize: '14px',
//                                     fontWeight: '400'
//                                 }}
//                             >
//                                 {term}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HeroSection;





'use client';

import Image from 'next/image';
import { useState } from 'react';

const HeroSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const popularSearchTerms = ['Technician', 'Sales', 'Labourer', 'Driver', 'Retail'];

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden hero-section -mt-20"
            style={{
                backgroundImage: 'linear-gradient(180deg, rgba(0, 45, 165, 0.9) 0%, rgba(0, 17, 63, 0.9) 100%), url(/assets/grid.png)',
                backgroundSize: 'cover, cover',
                backgroundPosition: 'center, center',
                backgroundRepeat: 'no-repeat, no-repeat'
            }}
        >
           <style jsx>{`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');
        
        @media (max-width: 768px) {
          .hero-section .absolute-positioning {
            position: relative !important;
            left: auto !important;
            right: auto !important;
            top: auto !important;
            bottom: auto !important;
            transform: none !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 2rem 0;
          }
          .hero-section .search-bar-container {
            margin-top: 2rem !important;
          }
          .hero-section .man-image-container {
            order: 2;
            margin: 2rem 0;
          }
          .hero-section .left-box-container {
            order: 1;
            margin-bottom: 2rem;
          }
          .hero-section .right-box-container {
            order: 3;
            margin-top: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section .search-bar-inner {
            width: 100% !important;
            padding: 5px 8px !important;
            flex-direction: column !important;
            gap: 10px !important;
          }
          .hero-section .search-button {
            width: 150px !important;
            height: 60px !important;
            font-size: 14px !important;
          }
          .hero-section .dropdown-section {
            width: 100% !important;
          }
        }
      `}</style>
            <div className="max-w-7xl mx-auto px-5 py-16 lg:py-24">
                {/* Main Heading with Underline */}
                <div className="text-center mb-16 lg:mb-20 relative">
                    <h1 className="text-white relative inline-block mb-8 px-4">
                        <span
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: '400',
                                fontSize: 'clamp(48px, 7vw, 90px)',
                                lineHeight: '110px',
                                letterSpacing: '0px',
                                textAlign: 'center',
                                opacity: 1
                            }}
                        >
                            Jobs for the{' '}
                        </span>
                        <span
                            className="relative"
                            style={{
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: '700',
                                fontSize: 'clamp(48px, 7vw, 90px)',
                                lineHeight: '110px',
                                letterSpacing: '0px',
                                textAlign: 'center',
                                color: '#FF9B59',
                                opacity: 1
                            }}
                        >
                            NEXT BILLION
                            {/* Orange underline from NEXT to second L of BILLION */}
                            <div
                                className="absolute bottom-0"
                                style={{
                                    left: '0px', // Start from NEXT
                                    right: '0px', // End at BILLION
                                    height: '14px',
                                    width: '413px',
                                    backgroundColor: '#FF9B59',
                                    borderRadius: '4px'
                                }}
                            />
                        </span>
                    </h1>
                </div>

                {/* Main Content Area - Positioned relative to heading */}
                <div className="relative mb-16">
                    {/* Left Features Box - Positioned below "Jobs" */}
                    <div
                        className="absolute"
                        style={{
                            left: '80px',
                            bottom: '180px',
                            zIndex: 5
                        }}
                    >
                        <div
                            className="flex flex-col text-white justify-center"
                            style={{
                                width: '266px',
                                height: '150px',
                                gap: '14px',
                                borderRadius: '24px',
                                paddingTop: '16px',
                                paddingRight: '32px',
                                paddingBottom: '16px',
                                paddingLeft: '32px',
                                backgroundColor: '#22326E',
                                opacity: 1
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/assets/arrow_icon.png"
                                    alt="Arrow"
                                    width={19}
                                    height={18}
                                    className="object-contain"
                                    style={{
                                        width: '19.082151412963867px',
                                        height: '18px',
                                        opacity: 1
                                    }}
                                />
                                <span
                                    className="text-white"
                                      style={{
        fontFamily: 'Sarabun, sans-serif', // Changed from Poppins
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '100%',
        letterSpacing: '0px'
    }}
                                >
                                    Zero charges
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/assets/arrow_icon.png"
                                    alt="Arrow"
                                    width={19}
                                    height={18}
                                    className="object-contain"
                                    style={{
                                        width: '19.082151412963867px',
                                        height: '18px',
                                        opacity: 1
                                    }}
                                />
                                <span
                                    className="text-white"
                                      style={{
        fontFamily: 'Sarabun, sans-serif', 
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '100%',
        letterSpacing: '0px'
    }}
                                >
                                    Verified jobs
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/assets/arrow_icon.png"
                                    alt="Arrow"
                                    width={19}
                                    height={18}
                                    className="object-contain"
                                    style={{
                                        width: '19.082151412963867px',
                                        height: '18px',
                                        opacity: 1
                                    }}
                                />
                                <span
                                    className="text-white"
                                       style={{
        fontFamily: 'Sarabun, sans-serif', 
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '100%',
        letterSpacing: '0px'
    }}
                                >
                                    No fake postings
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Center Man Image - Head touching "N" of NEXT and covering the line */}
                    <div
                        className="absolute left-[50%] transform -translate-x-1/2"
                        style={{
                            top: '-150px',
                            zIndex: 20
                        }}
                    >
                        <Image
                            src="/assets/man.png"
                            alt="Job seeker using mobile app"
                            width={275}
                            height={375}
                            priority
                            className="object-contain"
                            style={{
                                width: '275px',
                                height: '375px',
                                opacity: 1
                            }}
                        />

                        {/* Floating notification badges - matching the image */}
                        <div className="absolute top-32 left-52 h-[44px] w-[64px] bg-white rounded-2xl p-1 shadow-lg">
                            <div className="flex items-center gap-2 px-3 py-1">
                                <span className="text-white text-2xl ">🥰</span>
                            </div>
                        </div>

                        <div className="absolute bottom-32 -left-6 h-[44px] w-[64px] bg-white rounded-2xl p-2 shadow-lg">
                            <div className="flex items-center gap-2 px-2 ">
                                <span className="text-white text-2xl">📩</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Trust Badge - Positioned below "BILLION" */}
                    <div
                        className="absolute-positioning right-box-container"
                        style={{
                            position: 'absolute',
                            right: '80px',
                            top: '-40px',
                            zIndex: 5
                        }}
                    >
                        <div
                            className="flex flex-col justify-center"
                            style={{
                                width: '275px',
                                height: '80px',
                                gap: '10px',
                                borderRadius: '24px',
                                paddingTop: '10px',
                                paddingRight: '16px',
                                paddingBottom: '10px',
                                paddingLeft: '16px',
                                backgroundColor: '#22326E',
                                opacity: 1
                            }}
                        >
                            <p
                                className="text-white"
                                style={{
                                   fontFamily: 'Sarabun, sans-serif',
                                    fontSize: '20px',
                                    fontWeight: '400',
                                    lineHeight: '25px',
                                    letterSpacing: '0px',
                                    color: 'white'
                                }}
                            >
                                Trusted by <span
                                    style={{
                                        fontWeight: '600',
                                        color: '#FF9B59'
                                    }}
                                >
                                    10 million+
                                </span> candidates across India
                            </p>
                        </div>
                    </div>

                    {/* Spacer to maintain layout height */}
                    <div style={{ height: '300px' }}></div>
                </div>

                {/* Job Search Bar - Positioned so man image goes INTO it */}
                <div className="flex justify-center mb-12" style={{ marginTop: '-140px', position: 'relative', zIndex: 10 }}>
                    <div
                        className="bg-white flex items-center justify-between shadow-lg"
                        style={{
                            width: 'min(948px, 100%)',
                            height: '100px',
                            gap: '10px',
                            borderRadius: '100px',
                            paddingTop: '10px',
                            paddingRight: '16px',
                            paddingBottom: '10px',
                            paddingLeft: '16px',
                            opacity: 1
                        }}
                    >
                        {/* Job Category Dropdown */}
                        <div className="flex items-center gap-3 flex-1 px-4 py-2 min-w-0">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assets/bag_icon.png"
                                    alt="Job Category"
                                    width={19}
                                    height={18}
                                    className="object-contain"
                                    style={{
                                        width: '19px',
                                        height: '18px',
                                        opacity: 1
                                    }}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <select
                                    className="w-full bg-transparent border-none outline-none text-[#002DA5] cursor-pointer"
                                    style={{
                                      fontFamily: 'Sarabun, sans-serif',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '-0.2px'
                                    }}
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="">Choose your job category</option>
                                    <option value="technician">Technician</option>
                                    <option value="sales">Sales</option>
                                    <option value="labourer">Labourer</option>
                                    <option value="driver">Driver</option>
                                    <option value="retail">Retail</option>
                                </select>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="w-px h-8 bg-gray-200 flex-shrink-0"></div>

                        {/* Location Dropdown */}
                        <div className="flex items-center gap-3 flex-1 px-4 py-2 min-w-0">
                            <div className="flex-shrink-0">
                                <Image
                                    src="/assets/location.png"
                                    alt="Location"
                                    width={15}
                                    height={20}
                                    className="object-contain"
                                    style={{
                                        width: '15px',
                                        height: '20px',
                                        opacity: 1
                                    }}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <select
                                    className="w-full bg-transparent border-none outline-none text-[#002DA5] cursor-pointer"
                                    style={{
                                       fontFamily: 'Sarabun, sans-serif',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        lineHeight: '24px',
                                        letterSpacing: '-0.2px'
                                    }}
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                >
                                    <option value="">Choose your location</option>
                                    <option value="delhi">Delhi</option>
                                    <option value="mumbai">Mumbai</option>
                                    <option value="bangalore">Bangalore</option>
                                    <option value="hyderabad">Hyderabad</option>
                                    <option value="pune">Pune</option>
                                </select>
                            </div>
                        </div>

                        {/* Search Button */}
                        <button
                            className="text-white rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 flex-shrink-0"
                            style={{
                                width: '200px',
                                height: '80px',
                                gap: '8px',
                                borderRadius: '100px',
                                backgroundColor: '#F5C545',
                               fontFamily: 'Sarabun, sans-serif',
                                fontWeight: '500',
                                fontSize: '16px',
                                lineHeight: '24px',
                                letterSpacing: '-0.2px',
                                color: '#002DA5',
                                opacity: 1
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#E5B63D'}
                            // onMouseLeave={(e) => e.target.style.backgroundColor = '#F5C545'}
                        >
                            <span>Search jobs</span>
                            <Image
                                src="/assets/blue_arrow_icon.png"
                                alt="Arrow"
                                width={14}
                                height={14}
                                className="object-contain"
                            />
                        </button>
                    </div>
                </div>

                {/* Popular Search */}
                <div className="text-center">
                    <h3
                        className="text-white mb-6"
                        style={{
                          fontFamily: 'Sarabun, sans-serif',
                            fontSize: '20px',
                            fontWeight: '500',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            textAlign: 'center',
                            color: '#FFFFFF'
                        }}
                    >
                        Popular search
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {popularSearchTerms.map((term, index) => (
                            <button
                                key={index}
                                className="px-6 py-3 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors duration-200"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontSize: '14px',
                                    fontWeight: '400'
                                }}
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;