import Image from 'next/image';
import React from 'react';

const KnowAboutJobsSection = () => {
  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2
          className="font-bold leading-none"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 60px)",
            lineHeight: "100%",
            letterSpacing: "0px",
            color: "#001242"
          }}
        >
          Know about{" "}
          <span style={{ color: "#FF9046" }}>how</span>
          {" "}to find jobs
        </h2>
      </div>

      {/* Content Box */}
      <div className="flex justify-center">
        <div
          className="bg-white flex flex-col lg:flex-row items-center justify-between max-w-full lg:max-w-[1248px] w-full mx-auto"
          style={{
            borderRadius: "60px",
            padding: "24px 24px 24px 24px",
            minHeight: "510px"
          }}
        >
          {/* Left Side - Image/Video */}
          <div
            className="relative w-full lg:w-[609px] mb-6 lg:mb-0 flex-shrink-0"
            style={{
              height: "462px",

            }}
          >
            <div
              className="w-full h-full  relative overflow-hidden"
              style={{
                borderRadius: "48px",
                backgroundImage: "url(/assets/job-finding-preview.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Video Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className=" rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "80.5px",
                    height: "80.5px"
                  }}
                >
                  <Image
                    src="/assets/video_icon.png"
                    alt="Play Video"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            className="flex-1 lg:ml-8"
            style={{
              paddingRight: "clamp(20px, 4vw, 80px)"
            }}
          >
            <h3
              className="font-bold mb-4 md:mb-6"
              style={{
                fontFamily: "Sarabun, sans-serif",
                fontSize: "clamp(24px, 3vw, 32px)",
                lineHeight: "40px",
                letterSpacing: "0px",
                color: "#001242"
              }}
            >
              Find jobs in your city on{" "} <br />
              <span style={{ color: "#002DA5" }}>Hamara Jobs</span>
              {" "}app
            </h3>

            <p
              className="text-justify"
              style={{
                fontFamily: "Sarabun, sans-serif",
                fontWeight: "400",
                fontSize: "clamp(14px, 1.2vw, 16px)",
                lineHeight: "23px",
                letterSpacing: "0px",
                color: "#001242"
              }}
            >
             If you&apos;re ready for a new challenging job, Browse Jobs on Qjobs App and look at our Popular Job Locations and Job Titles. Whatever type of job you&apos;re looking for, you can find it on Qjobs & skip the hassle of endless interviews and the troubles of relocating with Qjobs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowAboutJobsSection;