import React from 'react'
import AboutSection from './AboutSection'
import MultiIndustrySection from './MultiIndustrySection'
import Services from './Services'

const Homepage = () => {
  return (
    <main>
      <section className='services'>
        <Services />
      </section>
      <section className='about'>
          <AboutSection />
      </section>
      <section className='mutliIndusDiv'>
          <MultiIndustrySection />
      </section>
    </main>

  )
}

export default Homepage