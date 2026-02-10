import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

/* ================= BRAND SYSTEM ================= */
const brand = {
  primary: "#16a34a",
  primarySoft: "#dcfce7",
  background: "#f9fdfb",
  textDark: "#052e16",
  textBody: "#475569",
  font: "Inter, system-ui, sans-serif",
};

/* ================= LANDING PAGE ================= */
export default function LandingPage() {
  return (
    <div style={{ fontFamily: brand.font, background: brand.background }}>
      <Header />

      {/* HERO */}
      <section style={heroSection}>
        <div style={heroOverlay} />

        <div style={heroContent}>
          <h1 style={heroTitle}>Welcome to Nnasly Farms</h1>
          <p style={heroText}>
            Fresh livestock, premium meat, and organic eggs raised responsibly
            and delivered fresh from our farm.
          </p>

          <div style={{ marginTop: 40, display: "flex", gap: 20, justifyContent: "center" }}>
            <Link to="/shop" style={ctaButton}>Shop Now</Link>
            <Link to="/about-us" style={secondaryButton}>Learn More</Link>
          </div>
        </div>
      </section>

      {/* PRODUCT IMAGE PREVIEW */}
      <section style={sectionWrap}>
        <h2 style={sectionTitle}>Our Farm Categories</h2>

        <div style={imageGrid}>
          <CategoryCard
            title="Livestock"
            img="https://images.unsplash.com/photo-1516467508483-a7212febe31a"
            link="/livestock"
          />

          <CategoryCard
            title="Fresh Meat"
            img="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f"
            link="/meat"
          />

          <CategoryCard
            title="Organic Eggs"
            img="https://images.unsplash.com/photo-1506976785307-8732e854ad03"
            link="/eggs"
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={testimonialSection}>
        <h2 style={sectionTitle}>What Our Customers Say</h2>

        <div style={testimonialGrid}>
          <Testimonial
            text="Best farm meat quality I've ever purchased. Fresh and clean every time."
            author="Local Restaurant Owner"
          />

          <Testimonial
            text="Eggs are always fresh and taste way better than grocery store eggs."
            author="Los Angeles Customer"
          />

          <Testimonial
            text="Professional service and very healthy livestock. Highly recommend."
            author="Farm Buyer"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= SHOP PAGE ================= */
export function ShopPage() {
  return (
    <div style={{ background: brand.background, minHeight: "100vh" }}>
      <Header />

      <section style={sectionWrap}>
        <h1 style={sectionTitle}>Shop Farm Products</h1>

        <div style={imageGrid}>
          <CategoryCard
            title="Livestock"
            img="https://images.unsplash.com/photo-1516467508483-a7212febe31a"
            link="/livestock"
          />

          <CategoryCard
            title="Fresh Meat"
            img="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f"
            link="/meat"
          />

          <CategoryCard
            title="Organic Eggs"
            img="https://images.unsplash.com/photo-1506976785307-8732e854ad03"
            link="/eggs"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= ABOUT ================= */
export function AboutPage() {
  return (
    <div style={{ background: brand.background }}>
      <Header />

      <section style={{ ...sectionWrap, maxWidth: 900 }}>
        <h1 style={sectionTitle}>About Nnasly Farms</h1>

        <p style={bodyText}>
          Nnasly Farms is committed to ethical farming, animal wellness, and
          delivering high quality farm products to families and businesses.
        </p>

        <p style={bodyText}>
          We combine modern farming standards with traditional care methods to
          produce livestock, meat, and eggs you can trust.
        </p>
      </section>

      <Footer />
    </div>
  );
}

/* ================= CONTACT ================= */
export function ContactPage() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending message...");

    emailjs
      .sendForm("service_nq5ebrb", "template_s8jtmb9", e.target, "N8CG5vp80Y6GOCZYy")
      .then(() => {
        setStatus("Message sent successfully ✅");
        e.target.reset();
      })
      .catch(() => setStatus("Failed to send message ❌"));
  };

  return (
    <div style={{ background: brand.background }}>
      <Header />

      <section style={{ ...sectionWrap, maxWidth: 800 }}>
        <h1 style={sectionTitle}>Contact Us</h1>

        <p style={{ textAlign: "center", color: brand.textBody }}>
          📞 +1 (888) 377-7633
          <br />
          📍 543 S Spring St Suite 400/1533, Los Angeles, CA 90013
        </p>

        <form onSubmit={sendEmail} style={formStyle}>
          <input name="user_name" placeholder="Your Name" required style={inputStyle} />
          <input name="user_email" placeholder="Your Email" required style={inputStyle} />
          <textarea name="message" placeholder="Message" required style={textareaStyle} />

          <button type="submit" style={ctaButton}>Send Message</button>
        </form>

        {status && <p style={{ textAlign: "center", marginTop: 20 }}>{status}</p>}
      </section>

      <Footer />
    </div>
  );
}

/* ================= COMPONENTS ================= */
function CategoryCard({ title, img, link }) {
  return (
    <Link to={link} style={categoryCard}>
      <img src={img} alt={title} style={categoryImg} />
      <div style={{ padding: 20 }}>
        <h3 style={{ color: brand.textDark }}>{title}</h3>
      </div>
    </Link>
  );
}

function Testimonial({ text, author }) {
  return (
    <div style={testimonialCard}>
      <p style={{ fontStyle: "italic" }}>{text}</p>
      <strong style={{ marginTop: 12, display: "block" }}>— {author}</strong>
    </div>
  );
}

function Header() {
  return (
    <header style={headerStyle}>
      <h2 style={{ color: brand.primary }}><Link to="/">Nnasly Farms</Link></h2>

      <nav style={{ display: "flex", gap: 24 }}>
       
        <Link to="/shop" style={navLink}>Shop</Link>
        <Link to="/about-us" style={navLink}>About</Link>
        <Link to="/contact" style={navLink}>Contact</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Nnasly Farms. All rights reserved.</p>
    </footer>
  );
}

/* ================= STYLES ================= */
const heroSection = {
  position: "relative",
  minHeight: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  backgroundImage: "url('https://images.unsplash.com/photo-1500595046743-ee9c7e9f6a6f')",
  backgroundSize: "cover",
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.5))",
};

const heroContent = { position: "relative", maxWidth: 800, padding: 20 };

const heroTitle = { fontSize: "clamp(42px,6vw,64px)", fontWeight: 800 };

const heroText = { fontSize: 20, marginTop: 20 };

const sectionWrap = {
  padding: "80px 20px",
  maxWidth: 1200,
  margin: "0 auto",
};

const sectionTitle = {
  textAlign: "center",
  fontSize: 40,
  fontWeight: 700,
  color: brand.textDark,
};

const imageGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 30,
  marginTop: 40,
};

const testimonialSection = {
  background: brand.primarySoft,
  padding: "80px 20px",
};

const testimonialGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: 30,
  maxWidth: 1100,
  margin: "40px auto 0",
};

const testimonialCard = {
  background: "white",
  padding: 30,
  borderRadius: 18,
  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
};

const categoryCard = {
  background: "white",
  borderRadius: 18,
  overflow: "hidden",
  textDecoration: "none",
  boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
};

const categoryImg = {
  width: "100%",
  height: 220,
  objectFit: "cover",
};

const ctaButton = {
  background: brand.primary,
  color: "white",
  padding: "14px 32px",
  borderRadius: 40,
  textDecoration: "none",
  border: "none",
};

const secondaryButton = {
  background: "white",
  color: brand.primary,
  padding: "14px 32px",
  borderRadius: 40,
  textDecoration: "none",
  border: `2px solid ${brand.primary}`,
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 30px",
  background: "white",
  borderBottom: "1px solid #ecfdf5",
};

const navLink = { textDecoration: "none", color: brand.textDark, fontWeight: 600 };

const footerStyle = {
  padding: 30,
  textAlign: "center",
  background: "#f0fdf4",
  marginTop: 60,
};

const bodyText = {
  fontSize: 18,
  lineHeight: 1.8,
  color: brand.textBody,
  marginTop: 20,
};

const formStyle = { display: "flex", flexDirection: "column", gap: 16, marginTop: 30 };

const inputStyle = { padding: 14, borderRadius: 12, border: "1px solid #e2e8f0" };

const textareaStyle = {
  padding: 14,
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  minHeight: 140,
};
