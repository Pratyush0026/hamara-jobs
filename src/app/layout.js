import CareerAdviceSection from './components/CareerAdviceSection'
import CompaniesCarouselSection from './components/CompaniesCarouselSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import ForEmployeesSection from './components/ForEmployeesSection'
import HamaraJobsSection from './components/HamaraJobsSection'
import HeroSection from './components/Hero'
import HiringCandidatesSection from './components/HiringCandidateSection'
import KnowAboutJobsSection from './components/KnowAboutJobsSection'
import Navbar from './components/Navbar'
import PopularJobsSection from './components/PopularJobsSection'
import PopularJobTypes from './components/PopularJobTypes'
import TestimonialsSection from './components/TestimonialSection'
import TopCitiesSection from './components/TopCitiesSection'
import TrustedCompaniesSection from './components/TrustedCompaniesSection'
import './globals.css'

export const metadata = {
  title: 'Hamara Jobs - Find Your Dream Job',
  description: 'Discover thousands of job opportunities across India. Your career journey starts here.',
  keywords: 'jobs, careers, employment, India, job search',
  authors: [{ name: 'Hamara Jobs Team' }],
  creator: 'Hamara Jobs',
  publisher: 'Hamara Jobs',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <HeroSection/>
        <PopularJobTypes/>
        <HamaraJobsSection/>
        <HiringCandidatesSection/>
        <PopularJobsSection/>
        <CompaniesCarouselSection/>
       <TopCitiesSection/>
       <KnowAboutJobsSection/>
       <CareerAdviceSection/>
       <TestimonialsSection/>
       <ForEmployeesSection/>
       <TrustedCompaniesSection/>
       <FAQSection/>
       <Footer/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}