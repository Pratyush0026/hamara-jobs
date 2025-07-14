// 'use client';

// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// const TestimonialsSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       rating: 4.2,
//       text: "Helpful app, you will find everything which is related to your interest towards particular job profile for which you are looking for job.",
//       name: "Kamesh Kumar",
//       location: "Mumbai",
//       avatar: "/assets/avatar1.png"
//     },
//     {
//       rating: 4.7,
//       text: "This is the best way to find a job without stuck in any fraud because it's safe to use and certified with Quess corporation that was India's biggest employment agency and they provide trusted service.",
//       name: "Indu Sharma",
//       location: "Bengaluru",
//       avatar: "/assets/avatar2.png"
//     },
//     {
//       rating: 4.7,
//       text: "User friendly Interface understand job description in Hinglish. Good app for job",
//       name: "Anil Singha",
//       location: "Mumbai",
//       avatar: "/assets/avatar3.png"
//     }
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;
//     const stars = [];

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <Image
//           key={i}
//           src="/assets/star_icon.png"
//           alt="Star"
//           width={22}
//           height={22}
//           className="object-contain"
//         />
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(
//         <Image
//           key="half"
//           src="/assets/star_icon.png"
//           alt="Half Star"
//           width={22}
//           height={22}
//           className="object-contain opacity-50"
//         />
//       );
//     }

//     return stars;
//   };

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600&display=swap');
        
//         .testimonial-slide {
//           transform: translateX(-${currentSlide * 100}%);
//           transition: transform 0.5s ease-in-out;
//         }
        
//         @media (max-width: 1024px) {
//           .testimonials-container {
//             flex-direction: column;
//             align-items: center;
//             gap: 2rem;
//           }
          
//           .rating-box {
//             order: 2;
//           }
          
//           .testimonials-carousel {
//             order: 1;
//             width: 100% !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .header-content {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//             gap: 1.5rem;
//           }
          
//           .main-heading {
//             font-size: 48px !important;
//           }
          
//           .view-all-btn {
//             width: 200px !important;
//             height: 70px !important;
//             padding: 20px 40px !important;
//           }
          
//           .view-all-text {
//             font-size: 18px !important;
//           }
          
//           .rating-box {
//             width: 280px !important;
//             height: 280px !important;
//           }
          
//           .rating-number {
//             font-size: 80px !important;
//           }
          
//           .testimonials-carousel {
//             padding: 30px !important;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .main-heading {
//             font-size: 36px !important;
//           }
          
//           .rating-box {
//             width: 250px !important;
//             height: 250px !important;
//           }
          
//           .rating-number {
//             font-size: 60px !important;
//           }
          
//           .testimonials-carousel {
//             padding: 20px !important;
//           }
          
//           .testimonial-text {
//             font-size: 14px !important;
//           }
//         }
//       `}</style>

//       <section className="w-full bg-[#F5F5F5] py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-16 header-content">
//             <h2 
//               className="main-heading"
//               style={{
//                 fontFamily: 'Poppins, sans-serif',
//                 fontWeight: '700',
//                 fontSize: '80px',
//                 lineHeight: '100%',
//                 letterSpacing: '0px',
//                 color: '#001242'
//               }}
//             >
//               What <span style={{ color: '#002DA5' }}>candidates</span> say
//             </h2>
            
//             <button 
//               className="view-all-btn flex items-center justify-center gap-2"
//               style={{
//                 width: '240px',
//                 height: '95px',
//                 padding: '32px 60px',
//                 borderRadius: '100px',
//                 border: '2px solid #002DA5',
//                 backgroundColor: 'transparent'
//               }}
//             >
//               <span 
//                 className="view-all-text"
//                 style={{
//                   fontFamily: 'IBM Plex Sans, sans-serif',
//                   fontWeight: '400',
//                   fontSize: '24px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   color: '#002DA5'
//                 }}
//               >
//                 View all
//               </span>
//               <Image
//                 src="/assets/blue_arrow_icon.png"
//                 alt="Arrow"
//                 width={20}
//                 height={20}
//                 className="object-contain"
//               />
//             </button>
//           </div>

//           {/* Content */}
//           <div className="flex gap-8 items-center testimonials-container">
//             {/* Left Rating Box */}
//             <div 
//               className="rating-box flex flex-col items-center justify-center bg-white flex-shrink-0"
//               style={{
//                 width: '350px',
//                 height: '350px',
//                 borderRadius: '60px',
//                 gap: '5px'
//               }}
//             >
//               <div 
//                 className="rating-number"
//                 style={{
//                   fontFamily: 'Roboto, sans-serif',
//                   fontWeight: '700',
//                   fontSize: '100px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   textAlign: 'center',
//                   color: '#979797'
//                 }}
//               >
//                 4.5
//               </div>
              
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, index) => (
//                   <Image
//                     key={index}
//                     src="/assets/star_icon.png"
//                     alt="Star"
//                     width={22}
//                     height={22}
//                     className="object-contain"
//                   />
//                 ))}
//               </div>
              
//               <div 
//                 style={{
//                   fontFamily: 'Sarabun, sans-serif',
//                   fontWeight: '400',
//                   fontSize: '16px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   textAlign: 'center',
//                   color: '#001242'
//                 }}
//               >
//                 500+ reviews
//               </div>
//             </div>

//             {/* Right Testimonials Carousel */}
//             <div 
//               className="testimonials-carousel bg-white overflow-hidden flex-1"
//               style={{
//                 width: '1118px',
//                 height: '350px',
//                 borderRadius: '60px',
//                 padding: '40px'
//               }}
//             >
//               <div 
//                 className="flex testimonial-slide"
//                 style={{ width: `${testimonials.length * 100}%` }}
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <div 
//                     key={index} 
//                     className="w-full flex-shrink-0 flex flex-col justify-between h-full"
//                   >
//                     {/* Quote Icon */}
//                     <div className="mb-4">
//                       <Image
//                         src="/assets/quote_icon.png"
//                         alt="Quote"
//                         width={26}
//                         height={25}
//                         className="object-contain"
//                         style={{
//                           width: '26.318359375px',
//                           height: '24.9306640625px'
//                         }}
//                       />
//                     </div>

//                     {/* Rating */}
//                     <div className="flex items-center gap-2 mb-4">
//                       <span 
//                         style={{
//                           fontFamily: 'Sarabun, sans-serif',
//                           fontWeight: '600',
//                           fontSize: '18px',
//                           color: '#001242'
//                         }}
//                       >
//                         {testimonial.rating}
//                       </span>
//                       <div className="flex gap-1">
//                         {renderStars(testimonial.rating)}
//                       </div>
//                     </div>

//                     {/* Testimonial Text */}
//                     <p 
//                       className="testimonial-text mb-6 flex-1"
//                       style={{
//                         fontFamily: 'Sarabun, sans-serif',
//                         fontWeight: '400',
//                         fontSize: '16px',
//                         lineHeight: '150%',
//                         color: '#666666'
//                       }}
//                     >
//                       <span style={{ fontWeight: '600', color: '#001242' }}>
//                         {testimonial.text.split(' ').slice(0, 2).join(' ')}
//                       </span>{' '}
//                       {testimonial.text.split(' ').slice(2).join(' ')}
//                     </p>

//                     {/* User Info */}
//                     <div className="flex items-center gap-3">
//                       <Image
//                         src={testimonial.avatar}
//                         alt={testimonial.name}
//                         width={40}
//                         height={40}
//                         className="rounded-full object-cover"
//                       />
//                       <div>
//                         <div 
//                           style={{
//                             fontFamily: 'Sarabun, sans-serif',
//                             fontWeight: '600',
//                             fontSize: '16px',
//                             color: '#001242'
//                           }}
//                         >
//                           {testimonial.name}
//                         </div>
//                         <div 
//                           style={{
//                             fontFamily: 'Sarabun, sans-serif',
//                             fontWeight: '400',
//                             fontSize: '14px',
//                             color: '#666666'
//                           }}
//                         >
//                           {testimonial.location}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TestimonialsSection;


// 'use client';

// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// const TestimonialsSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       rating: 4.2,
//       text: "Helpful app, you will find everything which is related to your interest towards particular job profile for which you are looking for job.",
//       highlightedText: "<strong style='color: #001242; font-weight: 600;'>Helpful app</strong>, you will find everything which is <strong style='color: #001242; font-weight: 600;'>related to your interest</strong> towards particular job profile for which you are looking for job.",
//       name: "Kamesh Kumar",
//       location: "Mumbai",
//       avatar: "/assets/avatar1.png"
//     },
//     {
//       rating: 4.7,
//       text: "This is the best way to find a job without stuck in any fraud because it's safe to use and certified with Quess corporation that was India's biggest employment agency and they provide trusted service.",
//       highlightedText: "This is the <strong style='color: #001242; font-weight: 600;'>best way to find a job</strong> without stuck in any fraud because it's <strong style='color: #001242; font-weight: 600;'>safe to use and certified</strong> with Quess corporation that was India's biggest employment agency and <strong style='color: #001242; font-weight: 600;'>they provide trusted service</strong>.",
//       name: "Indu Sharma",
//       location: "Bengaluru",
//       avatar: "/assets/avatar2.png"
//     },
//     {
//       rating: 4.7,
//       text: "User friendly Interface understand job description in Hinglish. Good app for job",
//       highlightedText: "<strong style='color: #001242; font-weight: 600;'>User friendly Interface</strong> understand job description in Hinglish. <strong style='color: #001242; font-weight: 600;'>Good app for job</strong>",
//       name: "Anil Singha",
//       location: "Mumbai",
//       avatar: "/assets/avatar3.png"
//     }
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;
//     const stars = [];

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <Image
//           key={i}
//           src="/assets/star_icon.png"
//           alt="Star"
//           width={22}
//           height={22}
//           className="object-contain"
//         />
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(
//         <Image
//           key="half"
//           src="/assets/star_icon.png"
//           alt="Half Star"
//           width={22}
//           height={22}
//           className="object-contain opacity-50"
//         />
//       );
//     }

//     return stars;
//   };

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600&display=swap');
        
//         .testimonial-slide {
//           transform: translateX(-${currentSlide * 60}%);
//           transition: transform 0.5s ease-in-out;
//         }
        
//         @media (max-width: 1024px) {
//           .testimonials-container {
//             flex-direction: column;
//             align-items: center;
//             gap: 2rem;
//           }
          
//           .rating-box {
//             order: 2;
//           }
          
//           .testimonials-carousel {
//             order: 1;
//             width: 100% !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .header-content {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//             gap: 1.5rem;
//           }
          
//           .main-heading {
//             font-size: 48px !important;
//           }
          
//           .view-all-btn {
//             width: 200px !important;
//             height: 70px !important;
//             padding: 20px 40px !important;
//           }
          
//           .view-all-text {
//             font-size: 18px !important;
//           }
          
//           .rating-box {
//             width: 280px !important;
//             height: 280px !important;
//           }
          
//           .rating-number {
//             font-size: 80px !important;
//           }
          
//           .testimonials-carousel {
//             padding: 30px !important;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .main-heading {
//             font-size: 36px !important;
//           }
          
//           .rating-box {
//             width: 250px !important;
//             height: 250px !important;
//           }
          
//           .rating-number {
//             font-size: 60px !important;
//           }
          
//           .testimonials-carousel {
//             padding: 20px !important;
//           }
          
//           .testimonial-text {
//             font-size: 14px !important;
//           }
//         }
//       `}</style>

//       <section className="w-full bg-[#F5F5F5] py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-16 header-content">
//             <h2 
//               className="main-heading"
//               style={{
//                 fontFamily: 'Poppins, sans-serif',
//                 fontWeight: '700',
//                 fontSize: '80px',
//                 lineHeight: '100%',
//                 letterSpacing: '0px',
//                 color: '#001242'
//               }}
//             >
//               What <span style={{ color: '#002DA5' }}>candidates</span> say
//             </h2>
            
//             <button 
//               className="view-all-btn flex items-center justify-center gap-2"
//               style={{
//                 width: '240px',
//                 height: '95px',
//                 padding: '32px 60px',
//                 borderRadius: '100px',
//                 border: '2px solid #002DA5',
//                 backgroundColor: 'transparent'
//               }}
//             >
//               <span 
//                 className="view-all-text"
//                 style={{
//                   fontFamily: 'IBM Plex Sans, sans-serif',
//                   fontWeight: '400',
//                   fontSize: '24px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   color: '#002DA5'
//                 }}
//               >
//                 View all
//               </span>
//               <Image
//                 src="/assets/blue_arrow_icon.png"
//                 alt="Arrow"
//                 width={20}
//                 height={20}
//                 className="object-contain"
//               />
//             </button>
//           </div>

//           {/* Content */}
//           <div className="flex gap-8 items-center testimonials-container">
//             {/* Left Rating Box */}
//             <div 
//               className="rating-box flex flex-col items-center justify-center bg-white flex-shrink-0"
//               style={{
//                 width: '350px',
//                 height: '350px',
//                 borderRadius: '60px',
//                 gap: '5px'
//               }}
//             >
//               <div 
//                 className="rating-number"
//                 style={{
//                   fontFamily: 'Roboto, sans-serif',
//                   fontWeight: '700',
//                   fontSize: '100px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   textAlign: 'center',
//                   color: '#979797'
//                 }}
//               >
//                 4.5
//               </div>
              
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, index) => (
//                   <Image
//                     key={index}
//                     src="/assets/star_icon.png"
//                     alt="Star"
//                     width={22}
//                     height={22}
//                     className="object-contain"
//                   />
//                 ))}
//               </div>
              
//               <div 
//                 style={{
//                   fontFamily: 'Sarabun, sans-serif',
//                   fontWeight: '400',
//                   fontSize: '16px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   textAlign: 'center',
//                   color: '#001242'
//                 }}
//               >
//                 500+ reviews
//               </div>
//             </div>

//             {/* Right Testimonials Carousel */}
//             <div 
//               className="testimonials-carousel bg-white overflow-hidden flex-1"
//               style={{
//                 width: '1118px',
//                 height: '350px',
//                 borderRadius: '60px',
//                 padding: '40px'
//               }}
//             >
//               <div 
//                 className="flex testimonial-slide gap-8"
//                 style={{ width: `${testimonials.length * 60}%` }}
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <div 
//                     key={index} 
//                     className="flex-shrink-0 flex flex-col justify-between h-full"
//                     style={{ width: '320px' }}
//                   >
//                     {/* Quote Icon */}
//                     <div className="mb-4">
//                       <Image
//                         src="/assets/quote_icon.png"
//                         alt="Quote"
//                         width={26}
//                         height={25}
//                         className="object-contain"
//                         style={{
//                           width: '26.318359375px',
//                           height: '24.9306640625px'
//                         }}
//                       />
//                     </div>

//                     {/* Rating */}
//                     <div className="flex items-center gap-2 mb-4">
//                       <span 
//                         style={{
//                           fontFamily: 'Sarabun, sans-serif',
//                           fontWeight: '600',
//                           fontSize: '18px',
//                           color: '#001242'
//                         }}
//                       >
//                         {testimonial.rating}
//                       </span>
//                       <div className="flex gap-1">
//                         {renderStars(testimonial.rating)}
//                       </div>
//                     </div>

//                     {/* Testimonial Text */}
//                     <p 
//                       className="testimonial-text mb-6 flex-1"
//                       style={{
//                         fontFamily: 'Sarabun, sans-serif',
//                         fontWeight: '400',
//                         fontSize: '16px',
//                         lineHeight: '150%',
//                         color: '#666666'
//                       }}
//                       dangerouslySetInnerHTML={{ __html: testimonial.highlightedText }}
//                     />

//                     {/* User Info */}
//                     <div className="flex items-center gap-3">
//                       <Image
//                         src={testimonial.avatar}
//                         alt={testimonial.name}
//                         width={40}
//                         height={40}
//                         className="rounded-full object-cover"
//                       />
//                       <div>
//                         <div 
//                           style={{
//                             fontFamily: 'Sarabun, sans-serif',
//                             fontWeight: '600',
//                             fontSize: '16px',
//                             color: '#001242'
//                           }}
//                         >
//                           {testimonial.name}
//                         </div>
//                         <div 
//                           style={{
//                             fontFamily: 'Sarabun, sans-serif',
//                             fontWeight: '400',
//                             fontSize: '14px',
//                             color: '#666666'
//                           }}
//                         >
//                           {testimonial.location}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TestimonialsSection;

// 'use client';

// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// const TestimonialsSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);


//   const testimonials = [
//     {
//       rating: 4.2,
//       text: "Helpful app, you will find everything which is related to your interest towards particular job profile for which you are looking for job.",
//       highlightedText: "<strong style='color: #001242; font-weight: 600;'>Helpful app</strong>, you will find everything which is <strong style='color: #001242; font-weight: 600;'>related to your interest</strong> towards particular job profile for which you are looking for job.",
//       name: "Kamesh Kumar",
//       location: "Mumbai",
//       avatar: "/assets/avatar1.png"
//     },
//     {
//       rating: 4.7,
//       text: "This is the best way to find a job without stuck in any fraud because it's safe to use and certified with Quess corporation that was India's biggest employment agency and they provide trusted service.",
//       highlightedText: "This is the <strong style='color: #001242; font-weight: 600;'>best way to find a job</strong> without stuck in any fraud because it's <strong style='color: #001242; font-weight: 600;'>safe to use and certified</strong> with Quess corporation that was India's biggest employment agency and <strong style='color: #001242; font-weight: 600;'>they provide trusted service</strong>.",
//       name: "Indu Sharma",
//       location: "Bengaluru",
//       avatar: "/assets/avatar2.png"
//     },
//     {
//       rating: 4.7,
//       text: "User friendly Interface understand job description in Hinglish. Good app for job seekers looking for opportunities.",
//       highlightedText: "<strong style='color: #001242; font-weight: 600;'>User friendly Interface</strong> understand job description in Hinglish. <strong style='color: #001242; font-weight: 600;'>Good app for job</strong> seekers looking for opportunities.",
//       name: "Anil Singha",
//       location: "Mumbai",
//       avatar: "/assets/avatar3.png"
//     },
//       {
//       rating: 4.7,
//       text: "User friendly Interface understand job description in Hinglish. Good app for job seekers looking for opportunities.",
//       highlightedText: "<strong style='color: #001242; font-weight: 600;'>User friendly Interface</strong> understand job description in Hinglish. <strong style='color: #001242; font-weight: 600;'>Good app for job</strong> seekers looking for opportunities.",
//       name: "Anil Singha",
//       location: "Mumbai",
//       avatar: "/assets/avatar3.png"
//     },
//       {
//       rating: 4.7,
//       text: "User friendly Interface understand job description in Hinglish. Good app for job seekers looking for opportunities.",
//       highlightedText: "<strong style='color: #001242; font-weight: 600;'>User friendly Interface</strong> understand job description in Hinglish. <strong style='color: #001242; font-weight: 600;'>Good app for job</strong> seekers looking for opportunities.",
//       name: "Anil Singha",
//       location: "Mumbai",
//       avatar: "/assets/avatar3.png"
//     },
//       {
//       rating: 4.7,
//       text: "User friendly Interface understand job description in Hinglish. Good app for job seekers looking for opportunities.",
//       highlightedText: "<strong style='color: #001242; font-weight: 600;'>User friendly Interface</strong> understand job description in Hinglish. <strong style='color: #001242; font-weight: 600;'>Good app for job</strong> seekers looking for opportunities.",
//       name: "Anil Singha",
//       location: "Mumbai",
//       avatar: "/assets/avatar3.png"
//     }
//   ];

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;
//     const stars = [];

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(
//         <Image
//           key={i}
//           src="/assets/star_icon.png"
//           alt="Star"
//           width={22}
//           height={22}
//           className="object-contain"
//         />
//       );
//     }

//     if (hasHalfStar) {
//       stars.push(
//         <Image
//           key="half"
//           src="/assets/star_icon.png"
//           alt="Half Star"
//           width={22}
//           height={22}
//           className="object-contain opacity-50"
//         />
//       );
//     }

//     return stars;
//   };

//   return (
//     <>
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600&display=swap');
        
//         .testimonial-slide {
//           transform: translateX(-${currentSlide * 33}%);
//           transition: transform 0.5s ease-in-out;
//         }
        
//         @media (max-width: 1024px) {
//           .testimonials-container {
//             flex-direction: column;
//             align-items: center;
//             gap: 2rem;
//           }
          
//           .rating-box {
//             order: 2;
//           }
          
//           .testimonials-carousel {
//             order: 1;
//             width: 100% !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .header-content {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//             gap: 1.5rem;
//           }
          
//           .main-heading {
//             font-size: 48px !important;
//           }
          
//           .view-all-btn {
//             width: 200px !important;
//             height: 70px !important;
//             padding: 20px 40px !important;
//           }
          
//           .view-all-text {
//             font-size: 18px !important;
//           }
          
//           .rating-box {
//             width: 280px !important;
//             height: 280px !important;
//           }
          
//           .rating-number {
//             font-size: 80px !important;
//           }
          
//           .testimonials-carousel {
//             padding: 30px !important;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .main-heading {
//             font-size: 36px !important;
//           }
          
//           .rating-box {
//             width: 250px !important;
//             height: 250px !important;
//           }
          
//           .rating-number {
//             font-size: 60px !important;
//           }
          
//           .testimonials-carousel {
//             padding: 20px !important;
//           }
          
//           .testimonial-text {
//             font-size: 14px !important;
//           }
//         }
//       `}</style>

//       <section className="w-full bg-[#F5F5F5] py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-16 header-content">
//             <h2 
//               className="main-heading"
//               style={{
//                 fontFamily: 'Poppins, sans-serif',
//                 fontWeight: '700',
//                 fontSize: '80px',
//                 lineHeight: '100%',
//                 letterSpacing: '0px',
//                 color: '#001242'
//               }}
//             >
//               What <span style={{ color: '#002DA5' }}>candidates</span> say
//             </h2>
            
//             <button 
//               className="view-all-btn flex items-center justify-center gap-2"
//               style={{
//                 width: '240px',
//                 height: '95px',
//                 padding: '32px 60px',
//                 borderRadius: '100px',
//                 border: '2px solid #002DA5',
//                 backgroundColor: 'transparent'
//               }}
//             >
//               <span 
//                 className="view-all-text"
//                 style={{
//                   fontFamily: 'IBM Plex Sans, sans-serif',
//                   fontWeight: '400',
//                   fontSize: '24px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   color: '#002DA5'
//                 }}
//               >
//                 View all
//               </span>
//               <Image
//                 src="/assets/blue_arrow_icon.png"
//                 alt="Arrow"
//                 width={20}
//                 height={20}
//                 className="object-contain"
//               />
//             </button>
//           </div>

//           {/* Content */}
//           <div className="flex gap-8 items-center testimonials-container">
//             {/* Left Rating Box */}
//             <div 
//               className="rating-box flex flex-col items-center justify-center bg-white flex-shrink-0"
//               style={{
//                 width: '350px',
//                 height: '350px',
//                 borderRadius: '60px',
//                 gap: '5px'
//               }}
//             >
//               <div 
//                 className="rating-number"
//                 style={{
//                   fontFamily: 'Roboto, sans-serif',
//                   fontWeight: '700',
//                   fontSize: '100px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   textAlign: 'center',
//                   color: '#979797'
//                 }}
//               >
//                 4.5
//               </div>
              
//               <div className="flex gap-1 mb-4">
//                 {[...Array(5)].map((_, index) => (
//                   <Image
//                     key={index}
//                     src="/assets/star_icon.png"
//                     alt="Star"
//                     width={22}
//                     height={22}
//                     className="object-contain"
//                   />
//                 ))}
//               </div>
              
//               <div 
//                 style={{
//                   fontFamily: 'Sarabun, sans-serif',
//                   fontWeight: '400',
//                   fontSize: '16px',
//                   lineHeight: '100%',
//                   letterSpacing: '0px',
//                   textAlign: 'center',
//                   color: '#001242'
//                 }}
//               >
//                 500+ reviews
//               </div>
//             </div>

//             {/* Right Testimonials Carousel */}
//             <div 
//               className="testimonials-carousel bg-white overflow-hidden flex-1"
//               style={{
//                 width: '1118px',
//                 height: '350px',
//                 borderRadius: '60px',
//                 padding: '40px'
//               }}
//             >
//               <div 
//                 className="flex testimonial-slide"
//                 style={{ width: `${testimonials.length * 33}%` }}
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <div key={index} className="flex flex-shrink-0">
//                     <div 
//                       className="flex flex-col justify-between h-full"
//                       style={{ width: '300px' }}
//                     >
//                       {/* Quote Icon */}
//                       <div className="mb-4">
//                         <Image
//                           src="/assets/quote_icon.png"
//                           alt="Quote"
//                           width={26}
//                           height={25}
//                           className="object-contain"
//                           style={{
//                             width: '26.318359375px',
//                             height: '24.9306640625px'
//                           }}
//                         />
//                       </div>

//                       {/* Rating */}
//                       <div className="flex items-center gap-2 mb-4">
//                         <span 
//                           style={{
//                             fontFamily: 'Sarabun, sans-serif',
//                             fontWeight: '600',
//                             fontSize: '18px',
//                             color: '#001242'
//                           }}
//                         >
//                           {testimonial.rating}
//                         </span>
//                         <div className="flex gap-1">
//                           {renderStars(testimonial.rating)}
//                         </div>
//                       </div>

//                       {/* Testimonial Text */}
//                       <p 
//                         className="testimonial-text mb-6"
//                         style={{
//                           fontFamily: 'Sarabun, sans-serif',
//                           fontWeight: '400',
//                           fontSize: '16px',
//                           lineHeight: '150%',
//                           color: '#666666',
//                           height: '120px',
//                           overflow: 'hidden'
//                         }}
//                         dangerouslySetInnerHTML={{ __html: testimonial.highlightedText }}
//                       />

//                       {/* User Info */}
//                       <div className="flex items-center gap-3">
//                         <Image
//                           src={testimonial.avatar}
//                           alt={testimonial.name}
//                           width={40}
//                           height={40}
//                           className="rounded-full object-cover"
//                         />
//                         <div>
//                           <div 
//                             style={{
//                               fontFamily: 'Sarabun, sans-serif',
//                               fontWeight: '600',
//                               fontSize: '16px',
//                               color: '#001242'
//                             }}
//                           >
//                             {testimonial.name}
//                           </div>
//                           <div 
//                             style={{
//                               fontFamily: 'Sarabun, sans-serif',
//                               fontWeight: '400',
//                               fontSize: '14px',
//                               color: '#666666'
//                             }}
//                           >
//                             {testimonial.location}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
                    
//                     {/* Divider between testimonials */}
//                     {index < testimonials.length - 1 && (
//                       <div 
//                         className="flex-shrink-0 mx-6"
//                         style={{
//                           width: '1px',
//                           height: '270px',
//                           backgroundColor: '#E6E6E6',
//                           alignSelf: 'center'
//                         }}
//                       />
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TestimonialsSection;


'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      rating: 4.2,
      text: "Helpful app, you will find everything which is related to your interest towards particular job profile for which you are looking for job.",
      highlightedText: "<strong style='color: #001242; font-weight: 800;'>Helpful app</strong>, you will find everything which is <strong style='color: #001242; font-weight: 600;'>related to your interest</strong> towards particular job profile for which you are looking for job.",
      name: "Kamesh Kumar",
      location: "Mumbai",
      avatar: "/assets/avatar1.png"
    },
    {
      rating: 4.7,
      text: "This is the best way to find a job without stuck in any fraud because it's safe to use and certified with Quess corporation that was India's biggest employment agency and they provide trusted service.",
      highlightedText: "This is the <strong style='color: #001242; font-weight: 800;'>best way to find a job</strong> without stuck in any fraud because it's <strong style='color: #001242; font-weight: 600;'>safe to use and certified</strong> with Quess corporation that was India's biggest employment agency and <strong style='color: #001242; font-weight: 600;'>they provide trusted service</strong>.",
      name: "Indu Sharma",
      location: "Bengaluru",
      avatar: "/assets/avatar2.png"
    },
    {
      rating: 4.7,
      text: "User friendly Interface understand job description in Hinglish. Good app for job seekers looking for opportunities.",
      highlightedText: "<strong style='color: #001242; font-weight: 800;'>User friendly Interface</strong> understand job description in Hinglish. <strong style='color: #001242; font-weight: 600;'>Good app for job</strong> seekers looking for opportunities.",
      name: "Anil Singha",
      location: "Mumbai",
      avatar: "/assets/avatar3.png"
    },
    {
      rating: 4.2,
      text: "Helpful app, you will find everything which is related to your interest towards particular job profile for which you are looking for job.",
      highlightedText: "<strong style='color: #001242; font-weight: 800;'>Helpful app</strong>, you will find everything which is <strong style='color: #001242; font-weight: 600;'>related to your interest</strong> towards particular job profile for which you are looking for job.",
      name: "Kamesh Kumar",
      location: "Mumbai",
      avatar: "/assets/avatar1.png"
    },
    {
      rating: 4.7,
      text: "This is the best way to find a job without stuck in any fraud because it's safe to use and certified with Quess corporation that was India's biggest employment agency and they provide trusted service.",
      highlightedText: "This is the <strong style='color: #001242; font-weight: 800;'>best way to find a job</strong> without stuck in any fraud because it's <strong style='color: #001242; font-weight: 600;'>safe to use and certified</strong> with Quess corporation that was India's biggest employment agency and <strong style='color: #001242; font-weight: 600;'>they provide trusted service</strong>.",
      name: "Indu Sharma",
      location: "Bengaluru",
      avatar: "/assets/avatar2.png"
    },
    {
      rating: 4.7,
      text: "User friendly Interface understand job description in Hinglish. Good app for job seekers looking for opportunities.",
      highlightedText: "<strong style='color: #001242; font-weight: 800;'>User friendly Interface</strong> understand job description in Hinglish. <strong style='color: #001242; font-weight: 600;'>Good app for job</strong> seekers looking for opportunities.",
      name: "Anil Singha",
      location: "Mumbai",
      avatar: "/assets/avatar3.png"
    }
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  // Auto-slide functionality with seamless loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = prev + 1;
        // Reset to 0 when we've shown all original testimonials
        return nextSlide >= testimonials.length ? 0 : nextSlide;
      });
    }, 4000);
    return () => clearInterval(interval);
 }, [testimonials.length]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image
          key={i}
          src="/assets/star_icon.png"
          alt="Star"
          width={22}
          height={22}
          className="object-contain"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Image
          key="half"
          src="/assets/star_icon.png"
          alt="Half Star"
          width={22}
          height={22}
          className="object-contain opacity-50"
        />
      );
    }

    return stars;
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600&display=swap');
        
        .testimonial-slide {
          transform: translateX(-${currentSlide * 16.67}%);
          transition: transform 0.5s ease-in-out;
        }
        
        @media (max-width: 1024px) {
          .testimonials-container {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          
          .rating-box {
            order: 2;
          }
          
          .testimonials-carousel {
            order: 1;
            width: 100% !important;
          }
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
          }
          
          .main-heading {
            font-size: 48px !important;
          }
          
          .view-all-btn {
            width: 200px !important;
            height: 70px !important;
            padding: 20px 40px !important;
          }
          
          .view-all-text {
            font-size: 18px !important;
          }
          
          .rating-box {
            width: 280px !important;
            height: 280px !important;
          }
          
          .rating-number {
            font-size: 80px !important;
          }
          
          .testimonials-carousel {
            padding: 30px !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-heading {
            font-size: 36px !important;
          }
          
          .rating-box {
            width: 250px !important;
            height: 250px !important;
          }
          
          .rating-number {
            font-size: 60px !important;
          }
          
          .testimonials-carousel {
            padding: 20px !important;
          }
          
          .testimonial-text {
            font-size: 14px !important;
          }
        }
      `}</style>

      <section className="w-full bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-16 header-content">
            <h2 
              className="main-heading"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '700',
                fontSize: '80px',
                lineHeight: '100%',
                letterSpacing: '0px',
                color: '#001242'
              }}
            >
              What <span style={{ color: '#002DA5' }}>candidates</span> say
            </h2>
            
            <button 
              className="view-all-btn flex items-center justify-center gap-2"
              style={{
                width: '240px',
                height: '95px',
                padding: '32px 60px',
                borderRadius: '100px',
                border: '2px solid #002DA5',
                backgroundColor: 'transparent'
              }}
            >
              <span 
                className="view-all-text"
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  color: '#002DA5'
                }}
              >
                View all
              </span>
              <Image
                src="/assets/blue_arrow_icon.png"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain"
              />
            </button>
          </div>

          {/* Content */}
          <div className="flex gap-8 items-center testimonials-container">
            {/* Left Rating Box */}
            <div 
              className="rating-box flex flex-col items-center justify-center bg-white flex-shrink-0"
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '60px',
                gap: '5px'
              }}
            >
              <div 
                className="rating-number"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontWeight: '700',
                  fontSize: '100px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#979797'
                }}
              >
                4.5
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src="/assets/star_icon.png"
                    alt="Star"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                ))}
              </div>
              
              <div 
                style={{
                  fontFamily: 'Sarabun, sans-serif',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  textAlign: 'center',
                  color: '#001242'
                }}
              >
                500+ reviews
              </div>
            </div>

            {/* Right Testimonials Carousel */}
            <div 
              className="testimonials-carousel bg-white overflow-hidden flex-1"
              style={{
                width: '1118px',
                height: '350px',
                borderRadius: '60px',
                padding: '40px'
              }}
            >
              <div 
                className="flex testimonial-slide"
                style={{ width: `${duplicatedTestimonials.length * 16.67}%` }}
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div key={index} className="flex flex-shrink-0">
                    <div 
                      className="flex flex-col justify-between h-full"
                      style={{ width: '300px' }}
                    >
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Image
                          src="/assets/quote_icon.png"
                          alt="Quote"
                          width={26}
                          height={25}
                          className="object-contain"
                          style={{
                            width: '26.318359375px',
                            height: '24.9306640625px'
                          }}
                        />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <span 
                          style={{
                            fontFamily: 'Sarabun, sans-serif',
                            fontWeight: '600',
                            fontSize: '18px',
                            color: '#001242'
                          }}
                        >
                          {testimonial.rating}
                        </span>
                        <div className="flex gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p 
                        className="testimonial-text mb-6"
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: '800',
                          fontSize: '16px',
                          lineHeight: '150%',
                          color: '#979797',
                          height: '120px',
                          overflow: 'hidden'
                        }}
                        dangerouslySetInnerHTML={{ __html: testimonial.highlightedText }}
                      />

                      {/* User Info */}
                      <div className="flex items-center gap-3">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                        <div>
                          <div 
                            style={{
                              fontFamily: 'Sarabun, sans-serif',
                              fontWeight: '600',
                              fontSize: '16px',
                              color: '#001242'
                            }}
                          >
                            {testimonial.name}
                          </div>
                          <div 
                            style={{
                              fontFamily: 'Sarabun, sans-serif',
                              fontWeight: '400',
                              fontSize: '14px',
                              color: '#666666'
                            }}
                          >
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Divider between testimonials */}
                    {index < duplicatedTestimonials.length - 1 && (
                      <div 
                        className="flex-shrink-0 mx-6"
                        style={{
                          width: '1px',
                          height: '270px',
                          backgroundColor: '#E6E6E6',
                          alignSelf: 'center'
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;