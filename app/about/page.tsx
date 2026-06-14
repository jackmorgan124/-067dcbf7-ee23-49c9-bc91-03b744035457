import type { Metadata } from 'next'
import Navbar from '@/components/blocks/navbar'
import FooterColumns from '@/components/blocks/footer-columns'
import AboutSplit from '@/components/blocks/about-split'
import AboutValues from '@/components/blocks/about-values'
import StatsCounter from '@/components/blocks/stats-counter'

export const metadata: Metadata = {
  title: 'About | Harris Landscaping & Gardens',
  description:
    'Harris Landscaping & Gardens delivers premium landscaping, paving, turf, and outdoor transformations to homeowners across South-West Sydney.',
}

export default function Page() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/project-gallery', label: 'Project Gallery' },
          { href: '/service-areas', label: 'Service Areas' },
          { href: '/contact', label: 'Contact' },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <AboutSplit
        body="Harris Landscaping & Gardens has been transforming outdoor spaces across South-West Sydney for over 15 years. We are a fully insured, locally based team that combines hands-on expertise with a genuine commitment to quality craftsmanship and honest client communication. Whether you need a simple turf install or a complete outdoor makeover, we treat every project with the same level of care and professionalism."
        image="/images/about.jpg"
        stats={['15+ Years Experience', '500+ Projects Completed', '100% Fully Insured']}
        heading="Local Landscapers Who Take Pride in Every Project"
        imageAlt="Harris Landscaping team working on a project in South-West Sydney"
      />
      <AboutValues
        items={[
          {
            title: 'Experience You Can Trust',
            description:
              'With 15-plus years working across South-West Sydney, we bring deep local knowledge and proven expertise to every job we take on.',
          },
          {
            title: 'Clear Communication',
            description:
              'We keep you informed at every stage — from your initial quote through to project completion — so there are never any surprises.',
          },
          {
            title: 'Quality That Lasts',
            description:
              'We use premium materials and proven techniques to ensure every project stands the test of time and adds real value to your property.',
          },
        ]}
        heading="Why Homeowners Choose Harris"
        subheading="We built our reputation on doing the job right, communicating clearly, and delivering results that speak for themselves."
      />
      <StatsCounter
        items={[
          { label: 'Years of Experience', value: '15', suffix: '+' },
          { label: 'Projects Completed', value: '500', suffix: '+' },
          { label: 'Fully Insured', value: '100', suffix: '%' },
        ]}
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium landscaping, paving, turf, and outdoor transformations to homeowners across South-West Sydney. Quality craftsmanship backed by 15-plus years of local experience."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          {
            links: [
              { href: '/services#paving', label: 'Paving' },
              { href: '/services#turf', label: 'Turf Installation' },
              { href: '/services#retaining-walls', label: 'Retaining Walls' },
              { href: '/services#decking', label: 'Decking' },
              { href: '/services#garden-design', label: 'Garden Design' },
              { href: '/services#outdoor-transformations', label: 'Full Outdoor Transformations' },
            ],
            heading: 'Services',
          },
          {
            links: [
              { href: '/service-areas/campbelltown', label: 'Campbelltown' },
              { href: '/service-areas/camden', label: 'Camden' },
              { href: '/service-areas/narellan', label: 'Narellan' },
              { href: '/service-areas/picton', label: 'Picton' },
              { href: '/service-areas/macarthur', label: 'Macarthur Region' },
              { href: '/service-areas/south-west-sydney', label: 'South-West Sydney' },
            ],
            heading: 'Service Areas',
          },
          {
            links: [
              { href: '/about', label: 'About Us' },
              { href: '/project-gallery', label: 'Project Gallery' },
              { href: '/contact', label: 'Contact' },
              { href: '/contact', label: 'Get a Free Quote' },
            ],
            heading: 'Company',
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  )
}
