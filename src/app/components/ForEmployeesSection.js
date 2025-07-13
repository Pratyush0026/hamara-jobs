'use client';

import Image from 'next/image';

const ForEmployeesSection = () => {
  const features = [
    {
      icon: "/assets/candidate_leads_icon.png",
      title: "Instant Candidate Leads",
      description: "Get direct calls from interested candidates"
    },
    {
      icon: "/assets/pre_screened_icon.png", 
      title: "Pre-Screened Candidates",
      description: "Role based pre-screening helps filter the right candidates"
    },
    {
      icon: "/assets/identity_verified_icon.png",
      title: "Identity verified candidates", 
      description: "Get candidates with identity and address pre-verified"
    },
    {
      icon: "/assets/hiring_india_icon.png",
      title: "Hiring across India",
      description: "Post jobs and hire candidates across India"
    }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&display=swap');
        
        @media (max-width: 1024px) {
          .main-container {
            flex-direction: column;
            gap: 3rem;
            align-items: center;
            text-align: center;
          }
          
          .content-image {
            order: 1;
            width: 100% !important;
            max-width: 600px !important;
          }
          
          .features-content {
            order: 2;
            align-items: center;
          }
          
          .main-heading {
            font-size: 48px !important;
          }
          
          .sub-heading {
            font-size: 24px !important;
          }
        }
        
        @media (max-width: 768px) {
          .main-heading {
            font-size: 40px !important;
          }
          
          .sub-heading {
            font-size: 20px !important;
          }
          
          .content-image {
            width: 100% !important;
            height: 400px !important;
          }
          
          .feature-item {
            text-align: left !important;
          }
          
          .feature-title {
            font-size: 16px !important;
          }
          
          .feature-description {
            font-size: 12px !important;
          }
          
          .start-hiring-btn {
            width: 100% !important;
            max-width: 400px !important;
            height: 70px !important;
            padding: 20px 40px !important;
          }
          
          .start-hiring-text {
            font-size: 18px !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-heading {
            font-size: 32px !important;
          }
          
          .sub-heading {
            font-size: 18px !important;
          }
          
          .content-image {
            height: 300px !important;
          }
          
          .feature-icon {
            width: 40px !important;
            height: 40px !important;
          }
          
          .feature-title {
            font-size: 14px !important;
          }
          
          .feature-description {
            font-size: 11px !important;
          }
          
          .start-hiring-btn {
            height: 60px !important;
            padding: 16px 32px !important;
          }
          
          .start-hiring-text {
            font-size: 16px !important;
          }
        }
      `}</style>

      <section className="w-full bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className="main-heading mb-6"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '700',
                fontSize: '60px',
                lineHeight: '100%',
                letterSpacing: '0px',
                color: '#001242'
              }}
            >
              For employees
            </h2>
            
            <p 
              className="sub-heading"
              style={{
                fontFamily: 'Sarabun, sans-serif',
                fontWeight: '400',
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '0px',
                color: '#001242'
              }}
            >
              Leverage the expertise of{' '}
              <span style={{ color: '#1A98FF' }}>Quess Corp</span>{' '}
              to power your hiring
            </p>
          </div>

          {/* Main Content */}
          <div className="flex gap-12 items-center main-container">
            {/* Left Image */}
            <div className="flex-shrink-0">
              <Image
                src="/assets/employees_hiring.png"
                alt="Hiring process with candidate management"
                width={704}
                height={536}
                className="content-image object-cover"
                style={{
                  width: '704px',
                  height: '536px',
                  borderRadius: '60px'
                }}
                priority
              />
            </div>

            {/* Right Features */}
            <div className="flex-1 features-content">
              <div className="space-y-8 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 feature-item">
                    <div className="flex-shrink-0">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={60}
                        height={60}
                        className="feature-icon object-contain"
                        style={{
                          width: '60px',
                          height: '60px'
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="feature-title mb-2"
                        style={{
                          fontFamily: 'Sarabun, sans-serif',
                          fontWeight: '700',
                          fontSize: '18px',
                          lineHeight: '23px',
                          letterSpacing: '0px',
                          color: '#001242'
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p 
                        className="feature-description"
                        style={{
                          fontFamily: 'Sarabun, sans-serif',
                          fontWeight: '400',
                          fontSize: '14px',
                          lineHeight: '23px',
                          letterSpacing: '0px',
                          color: '#001242'
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Start Hiring Button */}
              <button 
                className="start-hiring-btn flex items-center justify-center gap-3"
                style={{
                  width: '495px',
                  height: '95px',
                  padding: '32px 60px',
                  borderRadius: '100px',
                  border: '2px solid #002DA5',
                  backgroundColor: 'transparent'
                }}
              >
                <span 
                  className="start-hiring-text"
                  style={{
                    fontFamily: 'IBM Plex Sans, sans-serif',
                    fontWeight: '400',
                    fontSize: '24px',
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    color: '#002DA5'
                  }}
                >
                  Start hiring
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
          </div>
        </div>
      </section>
    </>
  );
};

export default ForEmployeesSection;