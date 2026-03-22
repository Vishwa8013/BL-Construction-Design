import { useState } from "react";
import { Home, Building2, Wrench, Palette, HardHat, Layers, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";

const SERVICES = [
  {
    icon: Home,
    title: "Residential Construction",
    desc: "Custom homes, villas, and residential complexes built to the highest standards of quality and craftsmanship.",
    features: ["Custom floor plans", "Luxury finishes", "Smart home integration", "Energy-efficient design"],
    badge: "Most Popular",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    desc: "Commercial building work delivered with practical planning, steady execution, and attention to site quality.",
    features: ["Structural work", "Site coordination", "Quality-focused execution", "Timely delivery"],
    badge: null,
  },
  {
    icon: Wrench,
    title: "Renovation & Remodeling",
    desc: "Expert renovation services that transform aging structures into modern, functional, and beautiful spaces.",
    features: ["Full gut renovation", "Structural upgrades", "Historic preservation", "Minimal disruption"],
    badge: null,
  },
  {
    icon: Palette,
    title: "Interior Design",
    desc: "Interior design support that balances style, comfort, and practical use for modern living spaces.",
    features: ["3D visualization", "Material sourcing", "Furniture design", "Lighting solutions"],
    badge: "New",
  },
  {
    icon: HardHat,
    title: "Project Management",
    desc: "End-to-end project management with budget control, proactive coordination, and transparent communication.",
    features: ["Milestone planning", "Risk management", "Vendor coordination", "Weekly reporting"],
    badge: null,
  },
  {
    icon: Layers,
    title: "Architecture & Planning",
    desc: "Smart planning support that helps clients move from idea to execution with more clarity and confidence.",
    features: ["Concept design", "Feasibility studies", "Permit management", "Site analysis"],
    badge: null,
  },
];

const PROCESS = [
  { step: "01", title: "Initial Consultation", desc: "We discuss your vision, requirements, timeline, and budget in detail." },
  { step: "02", title: "Design & Planning", desc: "Our architects and engineers create detailed plans and 3D visualizations." },
  { step: "03", title: "Proposal & Contract", desc: "We present a transparent proposal with fixed costs and clear timelines." },
  { step: "04", title: "Construction Phase", desc: "Expert teams execute the build with disciplined coordination and regular client communication." },
  { step: "05", title: "Quality Inspection", desc: "Rigorous quality checks ensure every detail meets our high standards." },
  { step: "06", title: "Handover & Support", desc: "We deliver your project and provide ongoing support and warranties." },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "#0F172A" }}>
      {/* Page Hero */}
      <div
        className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #0B1527, #0F172A)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #FBBF24 0%, transparent 70%)" }} />
        <div style={{ color: "#FBBF24", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "0.75rem" }}>
          What We Offer
        </div>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "white", lineHeight: 1.1, marginBottom: "1.25rem" }}>
          Our <span style={{ color: "#FBBF24" }}>Services</span>
        </h1>
        <p style={{ color: "#64748B", fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.7 }}>
          Practical construction and design services for residential and commercial projects, delivered with quality workmanship and clear communication.
        </p>
      </div>

      {/* SERVICES GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map(({ icon: Icon, title, desc, features, badge }, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl cursor-pointer relative overflow-hidden transition-all duration-400"
                style={{
                  backgroundColor: hovered === i ? "#131F35" : "#111827",
                  border: hovered === i ? "1px solid rgba(251,191,36,0.5)" : "1px solid rgba(255,255,255,0.07)",
                  transform: hovered === i ? "translateY(-8px)" : "translateY(0)",
                  boxShadow: hovered === i ? "0 24px 70px rgba(0,0,0,0.5), 0 0 40px rgba(251,191,36,0.08)" : "none",
                  transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {badge && (
                  <div
                    className="absolute top-5 right-5 px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#FBBF24", color: "#0F172A", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.7rem" }}
                  >
                    {badge}
                  </div>
                )}

                {/* Glow effect on hover */}
                {hovered === i && (
                  <div
                    className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)" }}
                  />
                )}

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: hovered === i ? "#FBBF24" : "rgba(251,191,36,0.1)",
                  }}
                >
                  <Icon size={28} style={{ color: hovered === i ? "#0F172A" : "#FBBF24" }} />
                </div>

                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "white", fontSize: "1.2rem", marginBottom: "0.75rem" }}>
                  {title}
                </h3>
                <p style={{ color: "#64748B", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  {desc}
                </p>

                <ul className="flex flex-col gap-2.5 mb-6">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle size={15} style={{ color: "#FBBF24", flexShrink: 0 }} />
                      <span style={{ color: "#94A3B8", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem" }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 transition-all"
                  style={{
                    color: "#FBBF24",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                  }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#0B1527" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div style={{ color: "#FBBF24", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "0.75rem" }}>
              How We Work
            </div>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "white" }}>
              Our <span style={{ color: "#FBBF24" }}>Process</span>
            </h2>
            <p style={{ color: "#64748B", fontFamily: "'Inter', sans-serif", maxWidth: "36rem", margin: "1rem auto 0", lineHeight: 1.7 }}>
              A proven 6-step process that ensures every project is delivered with excellence, transparency, and precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS.map(({ step, title, desc }) => (
              <div
                key={step}
                className="p-8 rounded-2xl relative"
                style={{ backgroundColor: "#0F172A", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(251,191,36,0.1)" }}
                >
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#FBBF24", fontSize: "1rem" }}>{step}</span>
                </div>
                <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "white", fontSize: "1.05rem", marginBottom: "0.6rem" }}>{title}</h4>
                <p style={{ color: "#64748B", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 text-center"
        style={{ borderTop: "1px solid rgba(251,191,36,0.1)" }}
      >
        <div className="max-w-2xl mx-auto">
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", marginBottom: "1rem" }}>
              Ready to Get <span style={{ color: "#FBBF24" }}>Started?</span>
            </h2>
          <p style={{ color: "#64748B", fontFamily: "'Inter', sans-serif", lineHeight: 1.7, marginBottom: "2rem" }}>
            Contact our team for a free consultation and clear guidance for your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl transition-all hover:scale-105"
            style={{
              backgroundColor: "#FBBF24",
              color: "#0F172A",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(251,191,36,0.3)",
            }}
          >
            Request a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
