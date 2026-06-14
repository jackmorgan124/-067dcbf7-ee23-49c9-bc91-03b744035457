import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import ServicesAlternating from "@/components/blocks/services-alternating";
import CtaBanner from "@/components/blocks/cta-banner";
import TrustBadges from "@/components/blocks/trust-badges";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Our Services | Harris Landscaping & Gardens",
  description:
    "Explore the full range of landscaping services from Harris Landscaping & Gardens — paving, turf installation, retaining walls, decking, garden design, and complete outdoor transformations across South-West Sydney.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar
        cta="Get a Free Quote"
        logo="Harris Landscaping & Gardens"
        links={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/services", label: "Services" },
          { href: "/project-gallery", label: "Project Gallery" },
          { href: "/service-areas", label: "Service Areas" },
          { href: "/contact", label: "Contact" },
        ]}
        ctaHref="/contact"
        logoHref="/"
      />
      <ServicesAlternating
        items={[
          {
            image: "/images/services-paving.jpg",
            title: "Paving",
            imageAlt: "Paving services by Harris Landscaping",
            description: "From driveways to entertaining areas, we lay high-quality pavers that are as durable as they are visually impressive.",
          },
          {
            image: "/images/services-turf.jpg",
            title: "Turf Installation",
            imageAlt: "Turf installation by Harris Landscaping",
            description: "We supply and install premium turf varieties suited to South-West Sydney conditions, giving you a lush lawn that lasts.",
          },
          {
            image: "/images/services-retaining.jpg",
            title: "Retaining Walls",
            imageAlt: "Retaining wall construction by Harris Landscaping",
            description: "Our retaining walls are engineered for stability and built to complement your landscape, handling sloped blocks with ease.",
          },
          {
            image: "/images/services-decking.jpg",
            title: "Decking",
            imageAlt: "Custom decking by Harris Landscaping",
            description: "We design and build custom timber and composite decks that extend your living space and add significant value to your home.",
          },
          {
            image: "/images/services-garden.jpg",
            title: "Garden Design & Makeovers",
            imageAlt: "Garden design and makeover by Harris Landscaping",
            description: "Our garden transformations combine planting, edging, mulching, and design to create outdoor spaces you will love spending time in.",
          },
          {
            image: "/images/services-outdoor.jpg",
            title: "Full Outdoor Transformations",
            imageAlt: "Full outdoor transformation by Harris Landscaping",
            description: "Need everything done? We manage complete outdoor renovations from initial design through to the finishing touches, all under one roof.",
          },
        ]}
        heading="Our Landscaping Services"
      />
      <CtaBanner
        cta="Request a Free Quote"
        ctaHref="/contact"
        heading="Ready to Transform Your Outdoor Space?"
        subheading="Get in touch today for a free, no-obligation quote. We service all of South-West Sydney and are ready to bring your vision to life."
      />
      <TrustBadges
        items={[
          { icon: "/icons/experience.svg", label: "15+ Years Experience" },
          { icon: "/icons/insured.svg", label: "Fully Insured" },
          { icon: "/icons/projects.svg", label: "500+ Projects Completed" },
          { icon: "/icons/quote.svg", label: "Free Detailed Quotes" },
          { icon: "/icons/local.svg", label: "Local South-West Sydney Team" },
        ]}
      />
      <FooterColumns
        logo="Harris Landscaping & Gardens"
        blurb="Harris Landscaping & Gardens delivers premium landscaping, paving, turf, and outdoor transformations to homeowners across South-West Sydney. Quality craftsmanship backed by 15-plus years of local experience."
        email="info@harrislandscaping.com.au"
        phone="0400 000 000"
        columns={[
          {
            heading: "Services",
            links: [
              { href: "/services#paving", label: "Paving" },
              { href: "/services#turf", label: "Turf Installation" },
              { href: "/services#retaining-walls", label: "Retaining Walls" },
              { href: "/services#decking", label: "Decking" },
              { href: "/services#garden-design", label: "Garden Design" },
              { href: "/services#outdoor-transformations", label: "Full Outdoor Transformations" },
            ],
          },
          {
            heading: "Service Areas",
            links: [
              { href: "/service-areas/campbelltown", label: "Campbelltown" },
              { href: "/service-areas/camden", label: "Camden" },
              { href: "/service-areas/narellan", label: "Narellan" },
              { href: "/service-areas/picton", label: "Picton" },
              { href: "/service-areas/macarthur", label: "Macarthur Region" },
              { href: "/service-areas/south-west-sydney", label: "South-West Sydney" },
            ],
          },
          {
            heading: "Company",
            links: [
              { href: "/about", label: "About Us" },
              { href: "/project-gallery", label: "Project Gallery" },
              { href: "/contact", label: "Contact" },
              { href: "/contact", label: "Get a Free Quote" },
            ],
          },
        ]}
        copyright="© 2026 Harris Landscaping & Gardens. All rights reserved."
      />
    </>
  );
}
