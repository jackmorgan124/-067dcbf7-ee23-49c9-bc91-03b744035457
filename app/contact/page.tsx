import type { Metadata } from "next";
import Navbar from "@/components/blocks/navbar";
import ContactForm from "@/components/blocks/contact-form";
import ContactMap from "@/components/blocks/contact-map";
import FooterColumns from "@/components/blocks/footer-columns";

export const metadata: Metadata = {
  title: "Contact Us | Harris Landscaping & Gardens",
  description:
    "Get in touch with Harris Landscaping & Gardens for a free, no-obligation quote. We service Campbelltown, Camden, Narellan, Picton, and all of South-West Sydney. Call, email, or fill in our online form.",
};

export default function ContactPage() {
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
      <ContactForm
        formCta="Send My Quote Request"
        heading="Get in Touch With Our Team"
        subheading="Ready to transform your outdoor space? Fill in the form below and we will get back to you promptly with honest advice and a detailed quote."
      />
      <ContactMap
        email="info@harrislandscaping.com.au"
        hours={[
          "Monday – Friday: 6:30am – 4:30pm",
          "Saturday: By Appointment",
          "Sunday: Closed",
        ]}
        phone="0400 000 000"
        address="Campbelltown, NSW 2560"
        heading="Find Us"
        mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26596.0!2d150.8128!3d-34.0655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f0a0b0b0b0b0%3A0x0!2sCampbelltown+NSW+2560!5e0!3m2!1sen!2sau!4v1600000000000"
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
