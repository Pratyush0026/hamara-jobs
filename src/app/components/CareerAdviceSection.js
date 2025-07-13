
"use client"
import React, { useState } from 'react';

const CareerAdviceSection = () => {
    const [activeCard, setActiveCard] = useState(0); // Default to first card (01)

    const careerCards = [
        {
            id: "01",
            title: "Types Of Part-Time Jobs For Students",
            description: "Types of part-time jobs for students what does a part-time job offer a student? One of the biggest problems faced by students is a lack of funds.",
            image: "/assets/career-advice-01.png" // Replace with actual image path
        },
        {
            id: "02",
            title: "How To Build Your Professional Network",
            description: "Building a strong professional network is crucial for career growth. Learn effective networking strategies and tips to expand your connections.",
            image: "/assets/career-advice-02.jpg" // Replace with actual image path
        },
        {
            id: "03",
            title: "Resume Writing Tips For Freshers",
            description: "Craft an impressive resume that stands out to employers. Essential tips and guidelines for creating your first professional resume.",
            image: "/assets/career-advice-03.jpg" // Replace with actual image path
        },
        {
            id: "04",
            title: "Interview Preparation Strategies",
            description: "Master the art of job interviews with proven preparation techniques. Boost your confidence and increase your chances of success.",
            image: "/assets/career-advice-04.jpg" // Replace with actual image path
        }
    ];

    return (
        // <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12">
        //     <div className="max-w-[1440px] mx-auto">

        <section className="w-full py-12 md:py-16 lg:py-20 px-4">
            <div className="w-full">
                {/* Main Blue Container */}
                <div
                    className="w-full relative"
                    style={{
                        backgroundColor: "#002DA5",
                        borderRadius: "100px",
                        padding: "60px 10px",
                        minHeight: "850px"
                    }}
                >
                    {/* Header Section */}
                    <div className="text-start mb-12 md:mb-16 px-4 md:px-40">
                        <h2
                            className="font-bold mb-6 text-start"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "clamp(36px, 5vw, 60px)",
                                lineHeight: "100%",
                                letterSpacing: "0px",
                                color: "#F5C545"
                            }}
                        >
                            Career advice
                        </h2>
                        <p
                            className="text-white text-start"
                            style={{
                                fontFamily: "Sarabun, sans-serif",
                                fontWeight: "500",
                                fontSize: "clamp(18px, 2.5vw, 24px)",
                                lineHeight: "100%",
                                maxWidth: "800px"
                            }}
                        >
                            Keep yourself updated with the latest job opportunities, skills & job trends.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 px-4 md:px-8 mb-12">
                        {careerCards.map((card, index) => (
                            <div
                                key={card.id}
                                className="relative cursor-pointer transition-all duration-500 ease-in-out"
                                style={{
                                    width: activeCard === index ? "min(472px, 90vw)" : "min(200px, 40vw)",
                                    height: "424px",
                                    backgroundColor: "#1A42AE",
                                    borderRadius: "40px",
                                    padding: "20px",
                                    flexShrink: 0
                                }}
                                onMouseEnter={() => setActiveCard(index)}
                            >
                                {/* Card Content */}
                                <div className="h-full flex flex-col overflow-hidden">
                                    {activeCard === index ? (
                                        // Expanded Content
                                        <div className="h-full flex gap-4">
                                            {/* Left Side - Image */}
                                            <div
                                                className="flex-shrink-0"
                                                style={{
                                                    width: "195px",
                                                    height: "384px",
                                                    borderRadius: "20px",
                                                    backgroundImage: `url(${card.image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                            />

                                            {/* Right Side - Content */}
                                            <div className="flex-1 flex flex-col justify-between min-w-0 mt-10">
                                                {/* Number */}
                                                <div
                                                    className="text-left mb-8"
                                                    style={{
                                                        fontFamily: "Roboto, sans-serif",
                                                        fontWeight: "700",
                                                        fontSize: "60px",
                                                        lineHeight: "100%",
                                                        color: "#F5C545"
                                                    }}
                                                >
                                                    {card.id}
                                                </div>

                                                {/* Title */}
                                                <h3
                                                    className="mb-3"
                                                    style={{
                                                        fontFamily: "Sarabun, sans-serif",
                                                        fontWeight: "800",
                                                        fontSize: "18px",
                                                        lineHeight: "23px",
                                                        color: "#FFFFFF"
                                                    }}
                                                >
                                                    {card.title}
                                                </h3>

                                                {/* Description */}
                                                <p
                                                    className="text-white text-justify flex-1 mb-3"
                                                    style={{
                                                        fontFamily: "Roboto, sans-serif",
                                                        fontWeight: "400",
                                                        fontSize: "14px",
                                                        lineHeight: "15px",
                                                        overflow: "hidden",
                                                        letterSpacing:"1px"
                                                    }}
                                                >
                                                    {card.description}
                                                </p>

                                                {/* Arrow Icon */}
                                                <div className="flex justify-end">
                                                    <div
                                                        className="rounded-full border-2 flex items-center justify-center"
                                                        style={{
                                                            width: "60px",
                                                            height: "60px",
                                                            borderRadius: "100px",
                                                            borderColor: "#F5C545",
                                                            gap: "10px"
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                width: "20px",
                                                                height: "20px",
                                                                backgroundColor: "#F5C545",
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        // Collapsed Content - Just Number
                                        <div className="h-full flex items-start justify-center">
                                            <div
                                                style={{
                                                    fontFamily: "Roboto, sans-serif",
                                                    fontWeight: "700",
                                                    fontSize: "60px",
                                                    lineHeight: "100%",
                                                    color: "#F5C545"
                                                }}
                                            >
                                                {card.id}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Blogs Button */}
                    <div className="flex justify-center px-4 md:px-8">
                        <button
                            className="flex items-center justify-center gap-4 text-white transition-all duration-300 hover:scale-105"
                            style={{
                                width: "min(1238px, 90vw)",
                                height: "100px",
                                backgroundColor: "#1A42AE",
                                borderRadius: "200px",
                                padding: "10px"
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "IBM Plex Sans, sans-serif",
                                    fontWeight: "400",
                                    fontSize: "clamp(18px, 2vw, 24px)",
                                    lineHeight: "100%"
                                }}
                            >
                                View all blogs
                            </span>
                            <div
                                style={{
                                    width: "24px",
                                    height: "24px",
                                    backgroundColor: "#FFFFFF",
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
        </section>
    );
};

export default CareerAdviceSection;