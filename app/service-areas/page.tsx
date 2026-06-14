import type { Metadata } from 'next'
import Navbar from '@/components/blocks/navbar'
import FooterColumns from '@/components/blocks/footer-columns'
import ServiceAreaGrid from '@/components/blocks/service-area-grid'
import ImageTextSplit from '@/components/blocks/image-text-split'
import CtaSplit from '@/components/blocks/cta-split'

export const metadata: Metadata = {
  title: 'Service Areas | Harris Landscaping & Gardens',
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
      <ServiceAreaGrid
        areas={[
          { href: '/service-areas/campbelltown', name: 'Campbelltown' },
          { href: '/service-areas/camden', name: 'Camden' },
          { href: '/service-areas/narellan', name: 'Narellan' },
          { href: '/service-areas/picton', name: 'Picton' },
          { href: '/service-areas/macarthur', name: 'Macarthur Region' },
          { href: '/service-areas/south-west-sydney', name: 'South-West Sydney' },
        ]}
        heading="Landscaping Across South-West Sydney"
        subheading="We proudly service homeowners and property owners throughout the South-West Sydney region. Whether you're in Campbelltown, Camden, or anywhere in between, Harris Landscaping & Gardens is your local team."
      />
      <ImageTextSplit
        cta="Get a Free Quote"
        body="We are based in the Campbelltown area and have spent over 15 years building relationships with homeowners right across the South-West Sydney region. Our local knowledge means we understand the soil conditions, climate, and council requirements unique to this area — giving your project the best possible foundation for long-term success."
        image="/images/service-areas.jpg"
        ctaHref="/contact"
        heading="Your Local South-West Sydney Landscapers"
        imageAlt="Harris Landscaping team servicing South-West Sydney"
        imagePosition="right"
      />
      <CtaSplit
        cta="Get a Free Quote"
        image="/images/cta-areas.jpg"
        ctaHref="/contact"
        heading="Ready to Get Started in Your Area?"
        imageAlt="Landscaping project completed in South-West Sydney"
        subheading="No matter where you are in South-West Sydney, Harris Landscaping & Gardens is ready to deliver a premium result for your outdoor space."
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
