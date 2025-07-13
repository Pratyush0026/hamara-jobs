'use client';

import Image from 'next/image';

const TrustedCompaniesSection = () => {
  const companies = [
    {
      name: 'Swiggy',
      logo: '/assets/swiggy.png'
    },
    {
      name: 'Rapido',
      logo: '/assets/rapido.png'
    },
    {
      name: 'UltraTech',
      logo: '/assets/ultratech.png'
    },
    {
      name: 'NobrokerHood',
      logo: '/assets/nobroker.png'
    },
    {
      name: 'Amazon',
      logo: '/assets/amazon.png'
    }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        @media (max-width: 1024px) {
          .main-heading {
            font-size: 48px !important;
          }
          
          .companies-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .main-heading {
            font-size: 36px !important;
          }
          
          .companies-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .main-heading {
            font-size: 28px !important;
          }
          
          .companies-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .company-logo {
            height: 36px !important;
          }
        }
      `}</style>

      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-28">
            <h2 
              className="main-heading"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: '700',
                fontSize: '60px',
                lineHeight: '100%',
                letterSpacing: '0px',
                textAlign: 'center',
                color: '#001242'
              }}
            >
              Trusted by <span style={{ color: '#FF9046' }}>Top</span> Companies
            </h2>
          </div>

          {/* Companies Grid */}
          <div 
            className="companies-grid grid grid-cols-5 gap-8 items-center justify-items-center"
          >
            {companies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center w-full group cursor-pointer"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={200}
                  height={48}
                  className="company-logo object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                  style={{
                    height: '48px',
                    width: 'auto',
                    maxWidth: '200px'
                  }}
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedCompaniesSection;