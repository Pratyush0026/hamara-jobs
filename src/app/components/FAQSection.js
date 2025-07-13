'use client';

import Image from 'next/image';
import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default

  const faqs = [
    {
      question: "How to use Qjobs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque neque id purus congue lobortis. Nulla quis mollis purus, vitae consectetur est. Morbi imperdiet at nisl in imperdiet. Sed rhoncus bibendum tempor. Quisque lobortis metus quis tellus malesuada, ut cursus sapien finibus. Curabitur tempor, eros ac congue feugiat, quam nunc aliquet augue, nec dignissim leo ante quis justo. Donec semper diam at enim faucibus, id bibendum arcu sagittis. Phasellus quis sodales sapien, at facilisis augue. Suspendisse venenatis finibus ultricies."
    },
    {
      question: "In how many cities is Qjobs app present?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque neque id purus congue lobortis. Nulla quis mollis purus, vitae consectetur est. Morbi imperdiet at nisl in imperdiet."
    },
    {
      question: "What type of jobs are present in Qjobs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque neque id purus congue lobortis. Nulla quis mollis purus, vitae consectetur est."
    },
    {
      question: "How can an employer/recruiter post a job in Qjobs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque neque id purus congue lobortis. Nulla quis mollis purus, vitae consectetur est. Morbi imperdiet at nisl in imperdiet."
    },
    {
      question: "How do I get a job using Qjobs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque neque id purus congue lobortis. Nulla quis mollis purus, vitae consectetur est."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }
        
        .faq-answer.open {
          max-height: 200px;
          transition: max-height 0.3s ease-in-out;
        }
        
        @media (max-width: 1024px) {
          .header-content {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
          }
          
          .main-heading {
            font-size: 60px !important;
          }
          
          .reach-out-btn {
            width: 300px !important;
            height: 70px !important;
            padding: 20px 40px !important;
          }
          
          .reach-out-text {
            font-size: 18px !important;
          }
          
          .faq-container {
            width: 100% !important;
            padding: 16px 24px !important;
          }
        }
        
        @media (max-width: 768px) {
          .main-heading {
            font-size: 48px !important;
          }
          
          .reach-out-btn {
            width: 280px !important;
            height: 60px !important;
            padding: 16px 32px !important;
          }
          
          .reach-out-text {
            font-size: 16px !important;
          }
          
          .faq-container {
            height: auto !important;
            min-height: 60px !important;
            padding: 12px 20px !important;
          }
          
          .faq-question {
            font-size: 14px !important;
          }
          
          .faq-answer-text {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-heading {
            font-size: 36px !important;
          }
          
          .reach-out-btn {
            width: 100% !important;
            max-width: 280px !important;
          }
          
          .faq-container {
            padding: 10px 16px !important;
          }
        }
      `}</style>

      <section className="w-full bg-[#F8F9FA] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-16 header-content">
            <h2 
              className="main-heading"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '800',
                fontSize: '80px',
                lineHeight: '100%',
                letterSpacing: '0px',
                color: '#001242'
              }}
            >
              Frequently asked<br />
              questions (<span style={{ color: '#FF9046' }}>FAQs</span>)
            </h2>
            
            <button 
              className="reach-out-btn flex items-center justify-center gap-3"
              style={{
                width: '351px',
                height: '95px',
                padding: '32px 60px',
                borderRadius: '100px',
                border: '2px solid #002DA5',
                backgroundColor: 'transparent'
              }}
            >
              <span 
                className="reach-out-text"
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontWeight: '400',
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0px',
                  color: '#002DA5'
                }}
              >
                Reach out directly
              </span>
              <Image
                src="/assets/blue_arrow_icon.png"
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain"
                style={{
                  width: '20.00507926940918px',
                  height: '20px'
                }}
              />
            </button>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full">
                {/* FAQ Question Container */}
                <div 
                  className="faq-container bg-white flex items-center justify-between cursor-pointer"
                  style={{
                    width: '1248px',
                    maxWidth: '100%',
                    height: '72px',
                    padding: '20px 32px',
                    borderRadius: '20px'
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 
                    className="faq-question"
                    style={{
                      fontFamily: 'Sarabun, sans-serif',
                      fontWeight: '600',
                      fontSize: '16px',
                      lineHeight: '100%',
                      letterSpacing: '0px',
                      color: '#1A42AE'
                    }}
                  >
                    {faq.question}
                  </h3>
                  
                  {/* Plus/Cross Icon */}
                  <div className="flex items-center justify-center w-6 h-6">
                    {openFAQ === index ? (
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none"
                        style={{ transform: 'rotate(45deg)' }}
                      >
                        <path 
                          d="M8 1V15M1 8H15" 
                          stroke="#001242" 
                          strokeWidth="2.5" 
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 16 16" 
                        fill="none"
                      >
                        <path 
                          d="M8 1V15M1 8H15" 
                          stroke="#001242" 
                          strokeWidth="2.5" 
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* FAQ Answer */}
                {openFAQ === index && (
                  <div 
                    className="bg-[#F5F5F5]"
                    style={{
                      width: '1248px',
                      maxWidth: '100%',
                      borderRadius: '20px',
                      padding: '24px 32px',
                      marginTop: '0px'
                    }}
                  >
                    <p 
                      className="faq-answer-text"
                      style={{
                        fontFamily: 'Sarabun, sans-serif',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '150%',
                        letterSpacing: '0px',
                        textAlign: 'justify',
                        color: '#1A42AE'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;