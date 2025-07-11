import CompaniesCarouselSection from './components/CompaniesCarouselSection'
import HamaraJobsSection from './components/HamaraJobsSection'
import HeroSection from './components/Hero'
import HiringCandidatesSection from './components/HiringCandidateSection'
import Navbar from './components/Navbar'
import PopularJobsSection from './components/PopularJobsSection'
import PopularJobTypes from './components/PopularJobTypes'
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
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}