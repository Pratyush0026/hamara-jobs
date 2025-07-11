import Image from 'next/image';

const HamaraJobsSection = () => {
    return (
        <section className="w-full bg-gray-50 py-16 px-4">
            <div className="max-w-8xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left side - GIF placeholder */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <div className="w-full h-96 lg:h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center">
                            {/* Placeholder for GIF - replace with your actual GIF */}
                            <div className="text-gray-500 text-lg">GIF will go here</div>
                        </div>
                    </div>

                    {/* Right side - Info box */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:px-[60px] lg:py-12 shadow-lg h-auto lg:h-[443px] flex flex-col justify-center gap-6 lg:gap-[38px]">
                            {/* Main heading */}
                            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold leading-none text-[#001242]">
                                Download 'Hamara Jobs' app
                            </h2>

                            {/* Feature list */}
                            <div className="space-y-4 lg:space-y-6">
                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/assets/blue_arrow_icon.png"
                                        alt="Arrow"
                                        width={20}
                                        height={20}
                                        className="mt-1 flex-shrink-0"
                                    />
                                    <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-none text-[#002DA5]">
                                        Find high paying jobs near you
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/assets/blue_arrow_icon.png"
                                        alt="Arrow"
                                        width={20}
                                        height={20}
                                        className="mt-1 flex-shrink-0"
                                    />
                                    <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-none text-[#002DA5]">
                                        Apply for jobs and talk to HR directly
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Image
                                        src="/assets/blue_arrow_icon.png"
                                        alt="Arrow"
                                        width={20}
                                        height={20}
                                        className="mt-1 flex-shrink-0"
                                    />
                                    <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-none text-[#002DA5]">
                                        Receive updates about your applied jobs
                                    </p>
                                </div>
                            </div>

                            {/* Download section */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/assets/google_play_icon.png"
                                        alt="Get it on Google Play"
                                        width={150}
                                        height={45}
                                        className="cursor-pointer hover:opacity-80 transition-opacity"
                                    />

                                </div>
                                <Image
                                    src="/assets/qr_code.png"
                                    alt="QR Code"
                                    width={80}
                                    height={80}
                                    className="border-2 border-gray-200 rounded-lg p-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HamaraJobsSection;