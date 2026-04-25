"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Coffee, Gift, Palette } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmall"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Menu", id: "menu" },
        { name: "Gallery", id: "gallery" },
        { name: "Events", id: "events" }
      ]}
      brandName="La Casa Bakery & Café"
      button={{
        text: "Book Table",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "gradient-bars" }}
      title="Where Every Visit Becomes a Memory"
      description="Indulge in our cozy atmosphere, signature Nutella shakes, and artisanal pizzas. Whether it's a game night, birthday, or creative painting session, La Casa is your community space."
      tag="Cozy Café & Bakery"
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/person-cafe-enjoying-book_23-2150064701.jpg", imageAlt: "Bakery interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/chocolate-fondue-with-sugar-dust-vanilla-ice-cream-image_114579-2313.jpg", imageAlt: "Fresh cafe food" }
      ]}
      rating={5}
      ratingText="Loved by local foodies"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Artisanal Pizza", price: "$12", variant: "Salty/Savory", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-pizza-ingredients_23-2148357190.jpg" },
        { id: "p2", name: "Nutella Shake", price: "$8", variant: "Signature Drink", imageSrc: "http://img.b2bpic.net/free-photo/coffee-with-cinnamon-side-view_141793-3253.jpg" },
        { id: "p3", name: "Cheesecake", price: "$7", variant: "Dessert", imageSrc: "http://img.b2bpic.net/free-photo/slice-blueberry-cheesecake_1232-2701.jpg" },
        { id: "p4", name: "Avocado Milkshake", price: "$9", variant: "Healthy", imageSrc: "http://img.b2bpic.net/free-photo/closeup-lemonade-chocolate-cake-female-hands_169016-38991.jpg" },
        { id: "p5", name: "Crispy Fries", price: "$5", variant: "Appetizer", imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-little-cake-with-chocolate-bars-sweet-crackers-white-background-cracker-sweet-biscuit-cake-pie-tea_140725-116273.jpg" },
        { id: "p6", name: "Signature Coffee", price: "$4", variant: "Beverage", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-fresh-relax-morning-coffee-cup-set_1150-7037.jpg" }
      ]}
      title="Customer Favorites"
      description="Our signature recipes handcrafted with love."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { title: "Birthday Celebrations", description: "Custom decor packages for your special day.", icon: Gift, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/high-angle-cotillion-arrangement_23-2149298537.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/green-bottle-with-confetti-white-balloons_23-2148092557.jpg" }] },
        { title: "Creative Painting", description: "Join our weekly creative sessions.", icon: Palette, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/person-cafe-enjoying-book_23-2150064697.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/creative-composition-paper-planets_23-2148874923.jpg" }] },
        { title: "Cozy Hangouts", description: "Perfect nooks for gaming or studying.", icon: Coffee, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/fresh-cookies-with-chocolate-are-ready-be-removed-from-oven-bakery-shop_613910-17461.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/person-cafe-enjoying-book_23-2150064692.jpg" }] }
      ]}
      title="Experience La Casa"
      description="More than just a café, we are a creative space for friends and families."
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Story"
      description={[
        "Founded on a love for community and creative expression, La Casa is where local art meets artisanal baking.",        "We believe every guest deserves a memory to take home."
      ]}
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="split"
      useInvertedBackground={true}
      names={[
        "Google Maps", "TripAdvisor", "Yelp", "Zomato", "Instagram", "Facebook", "Local Food Guide"
      ]}
      title="Recognized by"
      description="Trusted by hundreds of happy diners."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The best cafe in town! The Nutella shakes are legendary and the birthday decor was absolutely stunning. Highly recommend for any celebration."
      rating={5}
      author="Sarah Miller"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/two-young-beautiful-smiling-hipster-girls-trendy-summer-clothes-carefree-women-chatting-veranda-terrace-cafe-drinking-coffee-positive-models-having-fun-communicating_158538-15930.jpg", alt: "Sarah" },
        { src: "http://img.b2bpic.net/free-photo/medium-shot-man-painting-indoors_23-2150182597.jpg", alt: "John" },
        { src: "http://img.b2bpic.net/free-photo/couple-browsing-smartphones-date_23-2147744393.jpg", alt: "Emily" },
        { src: "http://img.b2bpic.net/free-photo/father-spending-time-together-with-his-girl-outdoors_23-2149032217.jpg", alt: "Mark" },
        { src: "http://img.b2bpic.net/free-photo/young-beautiful-hispanic-woman-artist-smiling-confident-holding-paintbrush-palette-art-studio_839833-25796.jpg", alt: "Alex" }
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "1", title: "Do you offer birthday packages?", content: "Yes, we provide custom decorations and seating for all group sizes." },
        { id: "2", title: "Do you need a reservation?", content: "Walk-ins are welcome, but booking ahead ensures your spot for events." },
        { id: "3", title: "Is your space pet-friendly?", content: "Yes, our outdoor seating area is happy to welcome your furry friends." }
      ]}
      title="Common Questions"
      description="Planning your visit?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      tag="Get in touch"
      title="Book Your Spot Today"
      description="Call us directly or use this form to inquire about event bookings and table reservations."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Menu", href: "#menu" }, { label: "Events", href: "#events" }, { label: "Gallery", href: "#gallery" }] },
        { items: [{ label: "Contact", href: "#contact" }, { label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
      ]}
      logoText="La Casa Bakery & Café"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}