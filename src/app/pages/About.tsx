import { Award, Users, Target, Eye } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import aboutPhoto from "../../assets/about-photo.jpeg";

const ABOUT_IMG = aboutPhoto;

const VALUES = [
  { icon: Award, title: "Quality First", desc: "We never compromise on materials, workmanship, or safety. Every project meets or exceeds industry standards." },
  { icon: Users, title: "Client-Centric", desc: "Your vision drives everything. We maintain transparent communication throughout every phase." },
  { icon: Target, title: "On-Time Delivery", desc: "We respect your timeline. 97% of our projects are delivered on or before the scheduled date." },
  { icon: Eye, title: "Transparency", desc: "No hidden costs and no surprises. We keep communication clear from kickoff to handover." },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: "#FBBF24", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "0.75rem" }}>
      {children}
    </div>
  );
}

export function About() {
  return (
    <div style={{ backgroundColor: "#F8F3EA" }}>
      {/* Page Hero */}
      <div
        className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #F8F3EA, #F2ECE1)" }}
      >
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(184,138,82,0.14) 0%, transparent 70%)" }} />
        <SectionLabel>Who We Are</SectionLabel>
        <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#1F2933", lineHeight: 1.1, marginBottom: "1.25rem" }}>
          About <span style={{ color: "#B88A52" }}>BL Construction and Design</span>
        </h1>
        <p style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "1.1rem", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.7 }}>
          Reliable construction and design solutions built on experience, practical execution, and strong client relationships.
        </p>
      </div>

      {/* INTRO SPLIT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <ImageWithFallback
                src={ABOUT_IMG}
                alt="BL Construction and Design team"
                className="w-full h-[500px] object-cover rounded-2xl"
                style={{ boxShadow: "0 24px 60px rgba(31,41,51,0.12)" }}
              />
              <div
                className="absolute top-6 -right-6 px-6 py-4 rounded-xl"
                style={{ backgroundColor: "#FFFDF9", boxShadow: "0 16px 38px rgba(31,41,51,0.12)", border: "1px solid rgba(92,71,43,0.1)" }}
              >
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#B88A52", lineHeight: 1 }}>500+</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "#5E6770", fontWeight: 600 }}>Projects Built</div>
              </div>
            </div>
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1F2933", lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Built on Experience,<br /><span style={{ color: "#B88A52" }}>Focused on Results</span>
              </h2>
              <p style={{ color: "#5E6770", lineHeight: 1.8, fontFamily: "'Inter', sans-serif", marginBottom: "1.25rem" }}>
                BL Construction and Design is built on a simple belief: every client deserves honest guidance, dependable site work, and a final result that truly reflects their needs. From local residential jobs to larger commercial work, our approach stays practical, transparent, and quality-focused.
              </p>
              <p style={{ color: "#5E6770", lineHeight: 1.8, fontFamily: "'Inter', sans-serif", marginBottom: "2rem" }}>
                We work across residential construction, commercial projects, renovations, interiors, and planning support. Clients choose BL not just for execution, but for the confidence that comes from clear communication and committed follow-through from start to finish.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "500+", label: "Projects Completed" },
                  { val: "300+", label: "Happy Clients" },
                  { val: "30 yrs", label: "Of Experience" },
                  { val: "24/7", label: "Support Available" },
                ].map(({ val, label }) => (
                  <div key={label} className="p-5 rounded-xl" style={{ backgroundColor: "#FFFDF9", border: "1px solid rgba(92,71,43,0.08)", boxShadow: "0 10px 24px rgba(31,41,51,0.05)" }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#B88A52", lineHeight: 1 }}>{val}</div>
                    <div style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", marginTop: "0.25rem" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F2ECE1" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl" style={{ backgroundColor: "#FFFDF9", border: "1px solid rgba(92,71,43,0.08)", boxShadow: "0 12px 28px rgba(31,41,51,0.05)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(184,138,82,0.12)" }}>
                <Target size={26} style={{ color: "#B88A52" }} />
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1F2933", fontSize: "1.5rem", marginBottom: "1rem" }}>Our Mission</h3>
              <p style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
                To deliver dependable construction and design services with strong workmanship, clear communication, and practical solutions that help clients build with confidence.
              </p>
            </div>
            <div className="p-10 rounded-2xl" style={{ backgroundColor: "#FFFDF9", border: "1px solid rgba(92,71,43,0.08)", boxShadow: "0 12px 28px rgba(31,41,51,0.05)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(184,138,82,0.12)" }}>
                <Eye size={26} style={{ color: "#B88A52" }} />
              </div>
              <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1F2933", fontSize: "1.5rem", marginBottom: "1rem" }}>Our Vision</h3>
              <p style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
                To be a trusted name in construction and design for families, businesses, and developers looking for long-term quality, reliable service, and thoughtful execution.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <SectionLabel>What Drives Us</SectionLabel>
              <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1F2933" }}>
                Our Core <span style={{ color: "#B88A52" }}>Values</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-7 rounded-2xl text-center" style={{ backgroundColor: "#FFFDF9", border: "1px solid rgba(92,71,43,0.08)", boxShadow: "0 10px 24px rgba(31,41,51,0.05)" }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(184,138,82,0.12)" }}>
                    <Icon size={24} style={{ color: "#B88A52" }} />
                  </div>
                  <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1F2933", fontSize: "1rem", marginBottom: "0.75rem" }}>{title}</h4>
                  <p style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
