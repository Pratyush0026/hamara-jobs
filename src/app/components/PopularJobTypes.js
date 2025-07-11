// 'use client';

// import Image from 'next/image';

// const PopularJobTypes = () => {
//     const jobTypes = [
//         {
//             id: 1,
//             title: "Work from home jobs",
//             description: "Join remotely within our own convenience",
//             icon: "/assets/home_icon.png", // Replace with your actual icon path
//             buttonStyle: "filled" // First card has filled button
//         },
//         {
//             id: 2,
//             title: "10th pass jobs",
//             description: "Join remotely within our own convenience",
//             icon: "/assets/education_icon.png", // Replace with your actual icon path
//             buttonStyle: "outline"
//         },
//         {
//             id: 3,
//             title: "12th pass jobs",
//             description: "Join remotely within our own convenience",
//             icon: "/assets/graduation_icon.png", // Replace with your actual icon path
//             buttonStyle: "outline"
//         },
//         {
//             id: 4,
//             title: "Fresher jobs",
//             description: "Join remotely within our own convenience",
//             icon: "/assets/fresher_icon.png", // Replace with your actual icon path
//             buttonStyle: "outline"
//         },
//         {
//             id: 5,
//             title: "Jobs for women",
//             description: "Join remotely within our own convenience",
//             icon: "/assets/women_icon.png", // Replace with your actual icon path
//             buttonStyle: "outline"
//         },
//         {
//             id: 6,
//             title: "Part-time jobs",
//             description: "Join remotely within our own convenience",
//             icon: "/assets/parttime_icon.png", // Replace with your actual icon path
//             buttonStyle: "outline"
//         }
//     ];

//     return (
//         <section 
//             className="py-16 lg:py-24"
//             style={{
//                 backgroundColor: '#F5F5F5'
//             }}
//         >
//             <style jsx>{`
//                 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
//                 @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600&display=swap');
                
//                 /* Large screens (1200px and up) */
//                 @media (min-width: 1200px) {
//                     .job-cards-grid {
//                         grid-template-columns: repeat(3, 1fr) !important;
//                         gap: 24px !important;
//                     }
//                     .job-card {
//                         width: 392px !important;
//                         height: 187px !important;
//                     }
//                     .section-title {
//                         font-size: 60px !important;
//                     }
//                 }
                
//                 /* Medium-Large screens (992px - 1199px) */
//                 @media (min-width: 992px) and (max-width: 1199px) {
//                     .job-cards-grid {
//                         grid-template-columns: repeat(3, 1fr) !important;
//                         gap: 20px !important;
//                     }
//                     .job-card {
//                         width: 100% !important;
//                         max-width: 360px !important;
//                         height: 180px !important;
//                     }
//                     .section-title {
//                         font-size: 52px !important;
//                     }
//                 }
                
//                 /* Medium screens (768px - 991px) */
//                 @media (min-width: 768px) and (max-width: 991px) {
//                     .job-cards-grid {
//                         grid-template-columns: repeat(2, 1fr) !important;
//                         gap: 18px !important;
//                     }
//                     .job-card {
//                         width: 100% !important;
//                         height: 175px !important;
//                     }
//                     .section-title {
//                         font-size: 44px !important;
//                     }
//                     .job-card-title {
//                         font-size: 16px !important;
//                     }
//                     .job-card-description {
//                         font-size: 13px !important;
//                     }
//                     .view-button {
//                         width: 120px !important;
//                         height: 44px !important;
//                         font-size: 13px !important;
//                     }
//                 }
                
//                 /* Small-Medium screens (576px - 767px) */
//                 @media (min-width: 576px) and (max-width: 767px) {
//                     .job-cards-grid {
//                         grid-template-columns: repeat(2, 1fr) !important;
//                         gap: 16px !important;
//                     }
//                     .job-card {
//                         width: 100% !important;
//                         height: 170px !important;
//                         padding: 16px 20px !important;
//                     }
//                     .section-title {
//                         font-size: 36px !important;
//                         line-height: 1.1 !important;
//                     }
//                     .job-card-title {
//                         font-size: 15px !important;
//                     }
//                     .job-card-description {
//                         font-size: 12px !important;
//                     }
//                     .view-button {
//                         width: 110px !important;
//                         height: 40px !important;
//                         font-size: 12px !important;
//                     }
//                     .icon-circle {
//                         width: 44px !important;
//                         height: 44px !important;
//                     }
//                 }
                
//                 /* Small screens (480px - 575px) */
//                 @media (min-width: 480px) and (max-width: 575px) {
//                     .job-cards-grid {
//                         grid-template-columns: 1fr !important;
//                         gap: 16px !important;
//                     }
//                     .job-card {
//                         width: 100% !important;
//                         height: 160px !important;
//                         padding: 16px 20px !important;
//                     }
//                     .section-title {
//                         font-size: 32px !important;
//                         line-height: 1.1 !important;
//                     }
//                     .job-card-title {
//                         font-size: 16px !important;
//                     }
//                     .job-card-description {
//                         font-size: 13px !important;
//                     }
//                     .view-button {
//                         width: 120px !important;
//                         height: 42px !important;
//                         font-size: 13px !important;
//                     }
//                 }
                
//                 /* Extra small screens (below 480px) */
//                 @media (max-width: 479px) {
//                     .job-cards-grid {
//                         grid-template-columns: 1fr !important;
//                         gap: 14px !important;
//                     }
//                     .job-card {
//                         width: 100% !important;
//                         height: 150px !important;
//                         padding: 14px 18px !important;
//                     }
//                     .section-title {
//                         font-size: 28px !important;
//                         line-height: 1.1 !important;
//                         text-align: center !important;
//                     }
//                     .job-card-title {
//                         font-size: 15px !important;
//                     }
//                     .job-card-description {
//                         font-size: 12px !important;
//                         line-height: 1.2 !important;
//                     }
//                     .view-button {
//                         width: 100px !important;
//                         height: 38px !important;
//                         font-size: 12px !important;
//                     }
//                     .icon-circle {
//                         width: 40px !important;
//                         height: 40px !important;
//                     }
//                 }
                
//                 .view-button:hover {
//                     background-color: #001A33 !important;
//                     transform: translateY(-1px) !important;
//                 }
                
//                 .job-card:hover {
//                     transform: translateY(-2px) !important;
//                     box-shadow: 0 8px 25px rgba(0, 18, 66, 0.1) !important;
//                 }
//             `}</style>
            
//             <div className="max-w-7xl mx-auto px-5">
//                 {/* Section Title */}
//                 <div className="text-start mb-12 lg:mb-16">
//                     <h2 
//                         className="section-title"
//                         style={{
//                             fontFamily: 'Poppins, sans-serif',
//                             fontWeight: '700',
//                             fontSize: '60px',
//                             lineHeight: '100%',
//                             letterSpacing: '0px',
//                             color: '#001242',
//                             opacity: 1
//                         }}
//                     >
//                         Popular job types
//                     </h2>
//                 </div>

//                 {/* Job Cards Grid */}
//                 <div className="job-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {jobTypes.map((job) => (
//                         <div
//                             key={job.id}
//                             className="job-card bg-white rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-lg"
//                             style={{
//                                 width: '392px',
//                                 height: '187px',
//                                 borderRadius: '24px',
//                                 paddingTop: '12px',
//                                 paddingRight: '24px',
//                                 paddingBottom: '12px',
//                                 paddingLeft: '24px',
//                                 gap: '16px',
//                                 backgroundColor: '#FFFFFF',
//                                 opacity: 1
//                             }}
//                         >
//                             {/* Icon and Content Container */}
//                             <div className="flex flex-col gap-4">
//                                 {/* Icon Circle */}
//                                 <div 
//                                     className="icon-circle flex items-center justify-center"
//                                     style={{
//                                         width: '48px',
//                                         height: '48px',
//                                         borderRadius: '40px',
//                                         backgroundColor: '#002DA5',
//                                         opacity: 1
//                                     }}
//                                 >
//                                     <Image
//                                         src={job.icon}
//                                         alt={job.title}
//                                         width={16}
//                                         height={16}
//                                         className="object-contain"
//                                         style={{
//                                             filter: 'brightness(0) saturate(100%) invert(77%) sepia(65%) saturate(445%) hue-rotate(359deg) brightness(97%) contrast(94%)'
//                                         }}
//                                     />
//                                 </div>

//                                 {/* Text Content */}
//                                 <div className="flex flex-col gap-2">
//                                     <h3 
//                                         className="job-card-title"
//                                         style={{
//                                             fontFamily: 'Sarabun, sans-serif',
//                                             fontWeight: '600',
//                                             fontSize: '18px',
//                                             lineHeight: '100%',
//                                             letterSpacing: '0px',
//                                             color: '#001242'
//                                         }}
//                                     >
//                                         {job.title}
//                                     </h3>
//                                     <p 
//                                         className="job-card-description"
//                                         style={{
//                                             fontFamily: 'Sarabun, sans-serif',
//                                             fontWeight: '400',
//                                             fontSize: '14px',
//                                             lineHeight: '100%',
//                                             letterSpacing: '0px',
//                                             color: '#001242'
//                                         }}
//                                     >
//                                         {job.description}
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* View Button */}
//                             <button
//                                 className={`view-button flex items-center justify-center gap-2 rounded-full transition-all duration-200 ${
//                                     job.buttonStyle === 'filled' 
//                                         ? 'text-white' 
//                                         : 'text-[#002DA5] border-2 border-[#002DA5] bg-transparent hover:text-white'
//                                 }`}
//                                 style={{
//                                     width: '140px',
//                                     height: '48px',
//                                     borderRadius: '100px',
//                                     gap: '8px',
//                                     backgroundColor: job.buttonStyle === 'filled' ? '#002DA5' : 'transparent',
//                                     fontFamily: 'Sarabun, sans-serif',
//                                     fontWeight: '500',
//                                     fontSize: '14px',
//                                     opacity: 1
//                                 }}
//                             >
//                                 <span>View</span>
//                                 <Image
//                                     src="/assets/blue_arrow_icon.png"
//                                     alt="Arrow"
//                                     width={12}
//                                     height={12}
//                                     className="object-contain"
//                                     style={{
//                                         filter: job.buttonStyle === 'filled' 
//                                             ? 'brightness(0) saturate(100%) invert(100%)' 
//                                             : 'none'
//                                     }}
//                                 />
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PopularJobTypes;



'use client';

import Image from 'next/image';

const PopularJobTypes = () => {
    const jobTypes = [
        {
            id: 1,
            title: "Work from home jobs",
            description: "Join remotely within our own convenience",
            icon: "/assets/fresher_icon.png", // Replace with your actual icon path
            buttonStyle: "filled" // First card has filled button
        },
        {
            id: 2,
            title: "10th pass jobs",
            description: "Join remotely within our own convenience",
            icon: "/assets/education_icon.png", // Replace with your actual icon path
            buttonStyle: "outline"
        },
        {
            id: 3,
            title: "12th pass jobs",
            description: "Join remotely within our own convenience",
            icon: "/assets/graduation_icon.png", // Replace with your actual icon path
            buttonStyle: "outline"
        },
        {
            id: 4,
            title: "Fresher jobs",
            description: "Join remotely within our own convenience",
            icon: "/assets/fresher_icon.png", // Replace with your actual icon path
            buttonStyle: "outline"
        },
        {
            id: 5,
            title: "Jobs for women",
            description: "Join remotely within our own convenience",
            icon: "/assets/women_icon.png", // Replace with your actual icon path
            buttonStyle: "outline"
        },
        {
            id: 6,
            title: "Part-time jobs",
            description: "Join remotely within our own convenience",
            icon: "/assets/parttime_icon.png", // Replace with your actual icon path
            buttonStyle: "outline"
        }
    ];

    return (
        <section 
            className="py-16 lg:py-24"
            style={{
                backgroundColor: '#F5F5F5'
            }}
        >
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600&display=swap');
                
                /* Large screens (1200px and up) */
                @media (min-width: 1200px) {
                    .job-cards-grid {
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 24px !important;
                    }
                    .job-card {
                        width: 392px !important;
                        height: 187px !important;
                    }
                    .section-title {
                        font-size: 60px !important;
                    }
                }
                
                /* Medium-Large screens (992px - 1199px) */
                @media (min-width: 992px) and (max-width: 1199px) {
                    .job-cards-grid {
                        grid-template-columns: repeat(3, 1fr) !important;
                        gap: 20px !important;
                    }
                    .job-card {
                        width: 100% !important;
                        max-width: 360px !important;
                        height: 180px !important;
                    }
                    .section-title {
                        font-size: 52px !important;
                    }
                }
                
                /* Medium screens (768px - 991px) */
                @media (min-width: 768px) and (max-width: 991px) {
                    .job-cards-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 18px !important;
                    }
                    .job-card {
                        width: 100% !important;
                        height: 175px !important;
                    }
                    .section-title {
                        font-size: 44px !important;
                    }
                    .job-card-title {
                        font-size: 16px !important;
                    }
                    .job-card-description {
                        font-size: 13px !important;
                    }
                    .view-button {
                        width: 120px !important;
                        height: 44px !important;
                        font-size: 13px !important;
                    }
                }
                
                /* Small-Medium screens (576px - 767px) */
                @media (min-width: 576px) and (max-width: 767px) {
                    .job-cards-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 16px !important;
                    }
                    .job-card {
                        width: 100% !important;
                        height: 170px !important;
                        padding: 16px 20px !important;
                    }
                    .section-title {
                        font-size: 36px !important;
                        line-height: 1.1 !important;
                    }
                    .job-card-title {
                        font-size: 15px !important;
                    }
                    .job-card-description {
                        font-size: 12px !important;
                    }
                    .view-button {
                        width: 110px !important;
                        height: 40px !important;
                        font-size: 12px !important;
                    }
                    .icon-circle {
                        width: 44px !important;
                        height: 44px !important;
                    }
                }
                
                /* Small screens (480px - 575px) */
                @media (min-width: 480px) and (max-width: 575px) {
                    .job-cards-grid {
                        grid-template-columns: 1fr !important;
                        gap: 16px !important;
                    }
                    .job-card {
                        width: 100% !important;
                        height: 160px !important;
                        padding: 16px 20px !important;
                    }
                    .section-title {
                        font-size: 32px !important;
                        line-height: 1.1 !important;
                    }
                    .job-card-title {
                        font-size: 16px !important;
                    }
                    .job-card-description {
                        font-size: 13px !important;
                    }
                    .view-button {
                        width: 120px !important;
                        height: 42px !important;
                        font-size: 13px !important;
                    }
                }
                
                /* Extra small screens (below 480px) */
                @media (max-width: 479px) {
                    .job-cards-grid {
                        grid-template-columns: 1fr !important;
                        gap: 14px !important;
                    }
                    .job-card {
                        width: 100% !important;
                        height: 150px !important;
                        padding: 14px 18px !important;
                    }
                    .section-title {
                        font-size: 28px !important;
                        line-height: 1.1 !important;
                        text-align: center !important;
                    }
                    .job-card-title {
                        font-size: 15px !important;
                    }
                    .job-card-description {
                        font-size: 12px !important;
                        line-height: 1.2 !important;
                    }
                    .view-button {
                        width: 100px !important;
                        height: 38px !important;
                        font-size: 12px !important;
                    }
                    .icon-circle {
                        width: 40px !important;
                        height: 40px !important;
                    }
                }
                
                /* Fixed button hover styles */
                .view-button-filled {
                    background-color: #002DA5 !important;
                    color: white !important;
                    border: 2px solid #002DA5 !important;
                }
                
                .view-button-filled:hover {
                    background-color: #001A33 !important;
                    border-color: #001A33 !important;
                    transform: translateY(-1px) !important;
                }
                
                .view-button-outline {
                    background-color: white !important;
                    color: #002DA5 !important;
                    border: 2px solid #002DA5 !important;
                }
                
                .view-button-outline:hover {
                    background-color: #002DA5 !important;
                    color: white !important;
                    transform: translateY(-1px) !important;
                }
                
                .job-card:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 8px 25px rgba(0, 18, 66, 0.1) !important;
                }
            `}</style>
            
            <div className="max-w-7xl mx-auto px-5">
                {/* Section Title */}
                <div className="text-start mb-12 lg:mb-16">
                    <h2 
                        className="section-title"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '700',
                            fontSize: '60px',
                            lineHeight: '100%',
                            letterSpacing: '0px',
                            color: '#001242',
                            opacity: 1
                        }}
                    >
                        Popular job types
                    </h2>
                </div>

                {/* Job Cards Grid */}
                <div className="job-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobTypes.map((job) => (
                        <div
                            key={job.id}
                            className="job-card bg-white rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-lg"
                            style={{
                                width: '392px',
                                height: '187px',
                                borderRadius: '24px',
                                paddingTop: '12px',
                                paddingRight: '24px',
                                paddingBottom: '12px',
                                paddingLeft: '24px',
                                gap: '16px',
                                backgroundColor: '#FFFFFF',
                                opacity: 1
                            }}
                        >
                            {/* Icon and Content Container */}
                            <div className="flex flex-col gap-4">
                                {/* Icon Circle */}
                                <div 
                                    className="icon-circle flex items-center justify-center"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '40px',
                                        backgroundColor: '#002DA5',
                                        opacity: 1
                                    }}
                                >
                                    <Image
                                        src={job.icon}
                                        alt={job.title}
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                        style={{
                                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(65%) saturate(445%) hue-rotate(359deg) brightness(97%) contrast(94%)'
                                        }}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-2">
                                    <h3 
                                        className="job-card-title"
                                        style={{
                                            fontFamily: 'Sarabun, sans-serif',
                                            fontWeight: '600',
                                            fontSize: '18px',
                                            lineHeight: '100%',
                                            letterSpacing: '0px',
                                            color: '#001242'
                                        }}
                                    >
                                        {job.title}
                                    </h3>
                                    <p 
                                        className="job-card-description"
                                        style={{
                                            fontFamily: 'Sarabun, sans-serif',
                                            fontWeight: '400',
                                            fontSize: '14px',
                                            lineHeight: '100%',
                                            letterSpacing: '0px',
                                            color: '#001242'
                                        }}
                                    >
                                        {job.description}
                                    </p>
                                </div>
                            </div>

                            {/* View Button */}
                            <button
                                className={`view-button flex items-center justify-center gap-2 rounded-full transition-all duration-200 ${
                                    job.buttonStyle === 'filled' 
                                        ? 'view-button-filled' 
                                        : 'view-button-outline'
                                }`}
                                style={{
                                    width: '140px',
                                    height: '48px',
                                    borderRadius: '100px',
                                    gap: '8px',
                                    fontFamily: 'Sarabun, sans-serif',
                                    fontWeight: '500',
                                    fontSize: '14px',
                                    opacity: 1
                                }}
                            >
                                <span>View</span>
                               <Image
    src="/assets/blue_arrow_icon.png"
    alt="Arrow"
    width={12}
    height={12}
    className={`object-contain button-arrow`}
    style={{
        filter: job.buttonStyle === 'filled' 
            ? 'brightness(0) saturate(100%) invert(100%)' 
            : 'none'
    }}
/>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularJobTypes;