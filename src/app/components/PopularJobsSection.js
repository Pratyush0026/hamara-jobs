import Image from 'next/image';

const PopularJobsSection = () => {
  const jobCategories = [
    "BPO & telecaller",
    "Sales & retail", 
    "Office & admin",
    "Logistics & warehouse",
    "Safety & security",
    "Engineering",
    "Construction & utility",
    "IT & technology",
    "Delivery & driver"
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-full mx-auto">
        <div className="bg-[#002DA5] rounded-[100px] p-8 sm:p-12 lg:p-16">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-bold leading-none text-white text-start mb-12 lg:mb-16">
            Popular and high demand jobs
          </h2>

          {/* Job Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {jobCategories.map((job, index) => (
              <div
                key={index}
                className="group relative bg-[#1A42AE] rounded-[24px] p-6 lg:px-[24px] lg:py-[12px] h-[109px] flex items-center justify-between cursor-pointer overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#F5C545]"
              >
                {/* Sliding background effect */}
                <div className="absolute inset-0 bg-[#F5C545] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-[24px]"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <p className="text-lg sm:text-xl lg:text-[24px] font-medium leading-none text-[#F5C545] group-hover:text-[#002DA5] transition-colors duration-500 ease-in-out max-w-[280px]">
                    {job}
                  </p>
                  
                  <div className="flex-shrink-0 ml-4">
                    {/* Yellow arrow - visible by default, hidden on hover */}
                    <Image
                      src="/assets/yellow_arrow_icon.png"
                      alt="Arrow"
                      width={24}
                      height={24}
                      className="object-contain group-hover:opacity-0 transition-opacity duration-300 ease-in-out absolute"
                    />
                    {/* Blue arrow - hidden by default, visible on hover */}
                    <Image
                      src="/assets/blue_arrow_icon.png"
                      alt="Arrow"
                      width={24}
                      height={24}
                      className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularJobsSection;