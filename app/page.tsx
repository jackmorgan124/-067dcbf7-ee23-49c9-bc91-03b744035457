import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import HeroSplit from "@/components/blocks/hero-split";
import ServicesGrid from "@/components/blocks/services-grid";
import GalleryBeforeAfter from "@/components/blocks/gallery-before-after";
import ReviewsCarousel from "@/components/blocks/reviews-carousel";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Harris Landscaping & Gardens | Premium Landscaping Across South-West Sydney",
  description:
    "Transform your outdoor space with Harris Landscaping & Gardens. Over 15 years of premium landscaping, paving, turf, decking, and outdoor transformations across Campbelltown, Camden, Narellan, Picton, and South-West Sydney.",
};

export default function HomePage() {
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
      <HeroSplit
        cta="Get a Free Quote"
        image="/images/hero.jpg"
        ctaHref="/contact"
        headline="Premium Landscaping Across South-West Sydney"
        imageAlt="Premium landscaping transformation in South-West Sydney"
        trustBadge="Trusted by 500+ homeowners across South-West Sydney"
        subheadline="Transform your outdoor space with a team that has delivered stunning results for homeowners across Campbelltown, Camden, Narellan, Picton, and beyond for over 15 years."
      />
      <ServicesGrid
        items={[
          "Paving — Durable, beautifully finished paving for driveways, paths, and entertaining areas",
          "Turf Installation — Lush, professionally laid turf that transforms your lawn instantly",
          "Retaining Walls — Structurally sound retaining walls built to last and enhance your yard",
          "Decking — Custom timber and composite decks designed for your lifestyle and space",
          "Garden Design — Tailored garden makeovers that bring colour, structure, and life to your property",
          "Full Outdoor Transformations — End-to-end landscaping packages that completely reimagine your outdoor area",
        ]}
        heading="Everything Your Outdoor Space Needs"
        subheading="From concept to completion, we handle every aspect of your landscaping project with skill, care, and clear communication every step of the way."
      />
      <GalleryBeforeAfter
        pairs={[
          { after: "/images/after-1.jpg", label: "Driveway Paving Transformation", before: "/images/before-1.jpg" },
          { after: "/images/after-2.jpg", label: "Turf Installation Result", before: "/images/before-2.jpg" },
          { after: "/images/after-3.jpg", label: "Retaining Wall & Garden Makeover", before: "/images/before-3.jpg" },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our before-and-after project showcase and see the quality and craftsmanship we bring to every outdoor transformation across South-West Sydney."
      />
      <ReviewsCarousel
        items={[
          {
            name: "Sarah M.",
            review: "Harris Landscaping completely transformed our backyard. The team was professional, communicative, and the result exceeded our expectations.",
            location: "Campbelltown",
          },
          {
            name: "James T.",
            review: "Outstanding workmanship on our driveway paving. Finished on time and on budget. Highly recommend to anyone in South-West Sydney.",
            location: "Camden",
          },
          {
            name: "Lisa R.",
            review: "We had a full outdoor makeover done and couldn't be happier. The team kept us informed every step of the way and the quality is brilliant.",
            location: "Narellan",
          },
        ]}
        heading="What Our Clients Say"
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
