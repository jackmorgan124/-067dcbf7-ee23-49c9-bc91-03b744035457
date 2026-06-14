import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import GalleryBeforeAfter from "@/components/blocks/gallery-before-after";
import Gallery from "@/components/blocks/gallery";
import CtaBanner from "@/components/blocks/cta-banner";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Project Gallery | Harris Landscaping & Gardens",
  description:
    "Browse the Harris Landscaping & Gardens project gallery featuring before-and-after transformations across South-West Sydney. See our paving, turf, retaining wall, decking, and garden design work.",
};

export default function ProjectGalleryPage() {
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
      <GalleryBeforeAfter
        pairs={[
          { after: "/images/after-1.jpg", label: "Driveway Paving — Campbelltown", before: "/images/before-1.jpg" },
          { after: "/images/after-2.jpg", label: "Full Lawn Turf Install — Camden", before: "/images/before-2.jpg" },
          { after: "/images/after-3.jpg", label: "Retaining Wall & Garden — Narellan", before: "/images/before-3.jpg" },
          { after: "/images/after-4.jpg", label: "Timber Deck — Picton", before: "/images/before-4.jpg" },
          { after: "/images/after-5.jpg", label: "Complete Outdoor Transformation — Macarthur", before: "/images/before-5.jpg" },
        ]}
        heading="Before & After Transformations"
        subheading="See the dramatic difference Harris Landscaping & Gardens makes. Browse our before-and-after project showcase from across South-West Sydney."
      />
      <Gallery
        images={[
          { alt: "Paving project completed in Campbelltown", src: "/images/gallery-1.jpg" },
          { alt: "Turf installation in Camden", src: "/images/gallery-2.jpg" },
          { alt: "Retaining wall build in Narellan", src: "/images/gallery-3.jpg" },
          { alt: "Custom deck construction in Picton", src: "/images/gallery-4.jpg" },
          { alt: "Garden makeover in South-West Sydney", src: "/images/gallery-5.jpg" },
          { alt: "Full outdoor transformation in Macarthur", src: "/images/gallery-6.jpg" },
          { alt: "Entertaining area paving in Campbelltown", src: "/images/gallery-7.jpg" },
          { alt: "Lawn and garden design in Camden", src: "/images/gallery-8.jpg" },
        ]}
        heading="Our Work Speaks for Itself"
        subheading="Browse our project gallery and see the quality and craftsmanship we bring to every outdoor transformation across South-West Sydney."
      />
      <CtaBanner
        cta="Start Your Own Transformation"
        ctaHref="/contact"
        heading="Start Your Own Transformation"
        subheading="Inspired by what you see? Get in touch with our team today for a free, detailed quote on your outdoor project."
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
