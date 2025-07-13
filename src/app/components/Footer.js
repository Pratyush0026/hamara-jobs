'use client';

import Image from 'next/image';

const FooterSection = () => {
    const jobCategories = [
        'BPO / Customer Care',
        'Data Entry / Back Office',
        'Delivery',
        'Field Sales',
        'Retail / Counter Sales',
        'Admin',
        'House Keeping',
        'Driver',
        'Security / Guard',
        'Warehouse & Logistics',
        'Business Development',
        'Finance',
        'Engineer (Civil/Mechanical etc)',
        'Human Resource',
        'Hospitality/Cook/ Baker',
        'Technician'
    ];

    const cities = [
        'Delhi',
        'Bengaluru',
        'Mumbai',
        'Pune',
        'Hyderabad',
        'New Delhi',
        'Chennai',
        'Kolkata',
        'Noida',
        'Ghaziabad',
        'Gurugram',
        'Ahmedabad',
        'Faridabad',
        'Navi Mumbai',
        'Thane',
        'Greater Noida'
    ];

    const socialIcons = [
        { name: 'Facebook', icon: '/assets/facebook_icon.png', url: '#' },
        { name: 'Twitter', icon: '/assets/twitter_icon.png', url: '#' },
        { name: 'LinkedIn', icon: '/assets/linkedin_icon.png', url: '#' }
    ];

    return (
        <>
            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');
        
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          
          .category-heading,
          .city-heading {
            font-size: 20px !important;
          }
          
          .view-all-text {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          .bottom-section {
            flex-direction: column !important;
            gap: 1.5rem !important;
            text-align: center !important;
          }
          
          .app-download-section {
            order: 1;
          }
          
          .social-section {
            order: 2;
          }
          
          .copyright-section {
            order: 3;
          }
          
          .powered-section {
            order: 4;
          }
        }
        
        @media (max-width: 480px) {
          .category-heading,
          .city-heading {
            font-size: 18px !important;
          }
          
          .category-item,
          .city-item {
            font-size: 14px !important;
            line-height: 28px !important;
          }
          
          .download-text {
            font-size: 14px !important;
          }
          
          .copyright-text {
            font-size: 12px !important;
          }
        }
      `}</style>

            <footer className="w-full bg-[#002DA5] py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Jobs by Category Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h3
                            className="category-heading"
                            style={{
                                fontFamily: 'Sarabun, sans-serif',
                                fontWeight: '700',
                                fontSize: '24px',
                                lineHeight: '100%',
                                letterSpacing: '0px',
                                color: '#F5C545'
                            }}
                        >
                            Jobs by Category
                        </h3>
                        <button
                            className="view-all-text"
                            style={{
                                fontFamily: 'Sarabun, sans-serif',
                                fontWeight: '700',
                                fontSize: '16px',
                                lineHeight: '100%',
                                letterSpacing: '0px',
                                color: '#FFFFFF',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            View All
                        </button>
                    </div>

                    {/* Jobs by Category Grid */}
                    <div className="footer-grid grid grid-cols-4 gap-8 mb-12">
                        {[0, 1, 2, 3].map(colIndex => (
                            <div key={colIndex}>
                                <ul className="space-y-2">
                                    {jobCategories.slice(colIndex * 4, (colIndex + 1) * 4).map((category, index) => (
                                        <li key={index}>
                                            <a
                                                href="#"
                                                className="category-item block"
                                                style={{
                                                    fontFamily: 'Sarabun, sans-serif',
                                                    fontWeight: '500',
                                                    fontSize: '16px',
                                                    lineHeight: '31px',
                                                    letterSpacing: '0px',
                                                    color: '#FFFFFF',
                                                    textDecoration: 'none'
                                                }}
                                            >
                                                • {category}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Jobs by City Section */}
                    <div className="mb-16">
                        <div className="flex justify-between items-center mb-6">
                            <h3
                                className="city-heading"
                                style={{
                                    fontFamily: 'Sarabun, sans-serif',
                                    fontWeight: '700',
                                    fontSize: '24px',
                                    lineHeight: '100%',
                                    letterSpacing: '0px',
                                    color: '#F5C545'
                                }}
                            >
                                Jobs by City
                            </h3>
                            <button
                                className="view-all-text"
                                style={{
                                    fontFamily: 'Sarabun, sans-serif',
                                    fontWeight: '700',
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '0px',
                                    color: '#FFFFFF',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                View All
                            </button>
                        </div>

                        <div className="grid grid-cols-4 gap-8">
                            {[0, 1, 2, 3].map(colIndex => (
                                <div key={colIndex}>
                                    <ul className="space-y-2">
                                        {cities.slice(colIndex * 4, (colIndex + 1) * 4).map((city, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    className="city-item block"
                                                    style={{
                                                        fontFamily: 'Sarabun, sans-serif',
                                                        fontWeight: '500',
                                                        fontSize: '16px',
                                                        lineHeight: '31px',
                                                        letterSpacing: '0px',
                                                        color: '#FFFFFF',
                                                        textDecoration: 'none'
                                                    }}
                                                >
                                                    • {city}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="bottom-section flex justify-between items-start">
                        {/* Left Section */}
                        <div className="left-section">
                            {/* App Download Section */}
                            <div className="app-download-section flex items-center gap-10 mb-6">
                                <Image
                                    src="/assets/qjobs_logo_white.png"
                                    alt="QJobs Logo"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />

                                {/* Vertical stack: Text + Play Store button */}
                                <div className="flex flex-col gap-4">
                                    <span
                                        className="download-text"
                                        style={{
                                            fontFamily: 'Sarabun, sans-serif',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '100%',
                                            letterSpacing: '0px',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        Download the app now
                                    </span>

                                    <a href="#" className="inline-block">
                                        <Image
                                            src="/assets/google_play_icon.png"
                                            alt="Get it on Google Play"
                                            width={130}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </a>
                                </div>
                            </div>



                            {/* Copyright */}
                            <p
                                className="copyright-text"
                                style={{
                                    fontFamily: 'Sarabun, sans-serif',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    lineHeight: '100%',
                                    letterSpacing: '0px',
                                    color: '#FFFFFF'
                                }}
                            >
                                Copyright© Quess Corp Limited 2020. All rights reserved
                            </p>
                        </div>

                        {/* Right Section - Vertical Stack */}
                        <div className="right-section flex flex-col items-end gap-4">
                            {/* Privacy Policy */}
                            <a
                                href="#"
                                style={{
                                    fontFamily: 'Sarabun, sans-serif',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '0px',
                                    color: '#FFFFFF',
                                    textDecoration: 'none'
                                }}
                            >
                                Privacy policy
                            </a>

                            {/* Social Icons - Same Size */}
                            <div className="social-section flex items-center gap-4">
                               {socialIcons.map((social, index) => (
  <a key={index} href={social.url} className="inline-block">
    <Image
      src={social.icon}
      alt={social.name}
      width={social.name === 'Facebook' ? 20 : 32}
      height={social.name === 'Facebook' ? 20 : 32}
      className="object-contain hover:opacity-80 transition-opacity"
    />
  </a>
))}
                            </div>

                            {/* Powered by Quess */}
                            <div className="powered-section flex items-center gap-2">
                                <span
                                    style={{
                                        fontFamily: 'Roboto, sans-serif',
                                        fontWeight: '500',
                                        fontSize: '18px',
                                        lineHeight: '100%',
                                        letterSpacing: '0px',
                                        color: '#F5C545'
                                    }}
                                >
                                    Powered by
                                </span>
                                <Image
                                    src="/assets/quess_logo_white.png"
                                    alt="Quess"
                                    width={100}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterSection;