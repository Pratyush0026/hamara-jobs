'use client';

import Image from 'next/image';

const CompaniesCarouselSection = () => {
  // Company logos array - only companies visible in the image
  const companies = [
    'ultratech',
    'quess', 
    'rapido',
    'hdfc',
    'lic'
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
       <div className="text-center mb-12 lg:mb-16">
  <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold leading-none text-[#001242]">
    Find jobs in India{"'"}s <span className="text-[#FF9046]">top</span> companies
  </h2>
</div>

        {/* Carousel Container */}
        <div className="relative mt-32">
          {/* Carousel Track */}
          <div className="flex animate-scroll hover:animate-paused">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex-shrink-0 mx-4 lg:mx-6"
              >
                <div className="bg-white rounded-[60px] p-[10px] w-[250px] h-[280px] sm:w-[280px] sm:h-[300px] lg:w-[333px] lg:h-[341px] flex items-center justify-center shadow-sm">
                  <div className="w-[200px] h-[120px] sm:w-[220px] sm:h-[130px] lg:w-[240px] lg:h-[151px] flex items-center justify-center">
                    <Image
                      src={`/assets/${company}.png`}
                      alt={`${company} logo`}
                      width={240}
                      height={151}
                      className="object-contain max-w-full max-h-full"
                      priority={index < 5}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-paused {
          animation-play-state: paused;
        }

        /* Responsive animation speed */
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }

        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default CompaniesCarouselSection;