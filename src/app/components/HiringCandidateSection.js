import Image from 'next/image';

const HiringCandidatesSection = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-bold leading-none text-[#001242] mb-14">
            Hiring Candidates?
          </h2>
          <p className="text-xl sm:text-2xl lg:text-[40px] font-normal leading-none text-[#979797]">
            Over <span className="font-semibold text-[#FF9046]">5 Million</span> active job seekers
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-[24px] p-6 lg:px-[24px] lg:py-[12px] h-[140px] flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-[#002DA5] rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/assets/instant_verified_leads_icon.png"
                alt="Instant and verified leads"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-none text-[#002DA5]">
              Instant and verified <br /> leads
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-[24px] p-6 lg:px-[24px] lg:py-[12px] h-[140px] flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-[#002DA5] rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/assets/candidates_india_icon.png"
                alt="Candidates across India"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-none text-[#002DA5]">
              Candidates across <br /> India
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-[24px] p-6 lg:px-[24px] lg:py-[12px] h-[140px] flex items-center gap-4">
            <div className="w-[60px] h-[60px] bg-[#002DA5] rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src="/assets/productivity_tools_icon.png"
                alt="Advance productivity tools"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <p className="text-base sm:text-lg lg:text-[20px] font-medium leading-none text-[#002DA5]">
              Advance productivity <br /> tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringCandidatesSection;