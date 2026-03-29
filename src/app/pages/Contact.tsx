import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const BUSINESS_NAME = "BL Construction and Design";
const CONTACT_EMAIL = "blconstructionanddesign@gmail.com";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/BL+Construction+and+design/@12.8948897,79.127065,16.38z/data=!4m10!1m2!2m1!1sBL+Construction+and+design+Kuppam!3m6!1s0x3bad3900361f4713:0x191e58f4cda78c23!8m2!3d12.8946557!4d79.1314407!15sCiFCTCBDb25zdHJ1Y3Rpb24gYW5kIGRlc2lnbiBLdXBwYW1aIyIhYmwgY29uc3RydWN0aW9uIGFuZCBkZXNpZ24ga3VwcGFtkgEUY29uc3RydWN0aW9uX2NvbXBhbnmaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnRPTWxGc1JqTmFSa0poVkVjNE1sSlZiRVpPUmxWNFZEQnNNbUZJWXhBQuABAPoBBAgAEEw!16s%2Fg%2F11y54zscr0?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDMxNywIKXMDSoASAFQAw%3D%3D";
const CONTACT_NUMBER = "8778387924";
const DISPLAY_CONTACT_NUMBER = "+91 87783 87924";
const WHATSAPP_URL = "https://wa.me/918778387924";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const PROJECT_TYPES = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Remodeling",
  "Interior Design",
  "Architecture & Planning",
  "Project Management",
  "Other",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitError("Add your Web3Forms access key in VITE_WEB3FORMS_ACCESS_KEY to enable email delivery.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Consultation Request - ${BUSINESS_NAME}`,
          from_name: BUSINESS_NAME,
          replyto: form.email || undefined,
          to: CONTACT_EMAIL,
          name: form.name,
          phone: form.phone,
          email: form.email || "Not provided",
          projectType: form.projectType,
          budget: form.budget || "Not provided",
          message: form.message || "Not provided",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your request right now.");
      }

      setSubmitted(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send your request right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    padding: "0.875rem 1.25rem",
    borderRadius: "0.75rem",
    backgroundColor: "#FFFDF9",
    border: `1.5px solid ${focused === field ? "#B88A52" : "rgba(92,71,43,0.12)"}`,
    color: "#1F2933",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
    boxShadow: focused === field ? "0 0 0 3px rgba(184,138,82,0.1)" : "none",
  });

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      lines: [BUSINESS_NAME, "Kuppam area"],
      linkLabel: "Open location",
      linkHref: GOOGLE_MAPS_URL,
    },
    {
      icon: Phone,
      title: "Call or WhatsApp",
      lines: [DISPLAY_CONTACT_NUMBER, "Available for calls and WhatsApp"],
      linkLabel: "Call",
      linkHref: `tel:${CONTACT_NUMBER}`,
    },
    {
      icon: Mail,
      title: "Email & WhatsApp",
      lines: [CONTACT_EMAIL, "Use the form, call, or WhatsApp"],
      linkLabel: "WhatsApp",
      linkHref: WHATSAPP_URL,
    },
    {
      icon: Clock,
      title: "Working Hours",
      lines: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    },
  ];

  return (
    <div style={{ backgroundColor: "#F8F3EA" }}>
      {/* Page Hero */}
      <div
        className="pt-32 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F8F3EA 0%, #F2ECE1 48%, #F8F3EA 100%)" }}
      >
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(184,138,82,0.16) 0%, transparent 30%), radial-gradient(circle at 80% 10%, rgba(205,185,155,0.4) 0%, transparent 28%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(184,138,82,0.3), transparent)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-end">
            <div>
              <div style={{ color: "#B88A52", fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: "1rem" }}>
                Start The Conversation
              </div>
              <h1 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5vw, 4.2rem)", color: "#1F2933", lineHeight: 1.08, marginBottom: "1rem", maxWidth: "12ch" }}>
                Let's Build Something Exceptional
              </h1>
              <p style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.95rem, 1.8vw, 1rem)", maxWidth: "34rem", lineHeight: 1.75 }}>
                Tell us what you're planning and our team will turn it into a clear next step. Share the project type, budget range, and timeline, and we'll follow up with practical guidance.
              </p>
            </div>

            <div
              className="p-5 sm:p-6 rounded-3xl"
              style={{ backgroundColor: "#FFFDF9", border: "1px solid rgba(92,71,43,0.08)", boxShadow: "0 22px 55px rgba(31,41,51,0.08)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: "24/7", label: "Support available" },
                  { value: "500+", label: "Projects completed" },
                  { value: "30+", label: "Years experience" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl p-3.5 sm:p-4" style={{ backgroundColor: "#F8F3EA", border: "1px solid rgba(92,71,43,0.08)" }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.2rem, 2vw, 1.45rem)", color: "#B88A52", lineHeight: 1, marginBottom: "0.4rem" }}>
                      {item.value}
                    </div>
                    <div style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", lineHeight: 1.45 }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div
                className="p-6 rounded-3xl"
                style={{ background: "linear-gradient(180deg, rgba(184,138,82,0.08) 0%, #FFFDF9 100%)", border: "1px solid rgba(92,71,43,0.08)", boxShadow: "0 14px 36px rgba(31,41,51,0.06)" }}
              >
                <div style={{ color: "#B88A52", fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 700, marginBottom: "0.9rem" }}>
                  Why Reach Out
                </div>
                <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#1F2933", fontSize: "clamp(1.35rem, 2.4vw, 1.6rem)", lineHeight: 1.15, marginBottom: "0.85rem" }}>
                  Clear answers before construction starts
                </h2>
                <p style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                  We help homeowners, developers, and commercial teams move from idea to action with realistic scopes, timelines, and pricing direction.
                </p>
                <div className="flex flex-col gap-3">
                  {["Free initial consultation", "Budget-aligned recommendations", `Call or WhatsApp: ${DISPLAY_CONTACT_NUMBER}`].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#B88A52" }} />
                      <span style={{ color: "#334155", fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href={`tel:${CONTACT_NUMBER}`}
                    style={{
                      backgroundColor: "#B88A52",
                      color: "#FFFDF9",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      padding: "0.8rem 1.1rem",
                      borderRadius: "0.85rem",
                      textDecoration: "none",
                    }}
                  >
                    Call Now
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      border: "1px solid rgba(92,71,43,0.12)",
                      color: "#334155",
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      padding: "0.8rem 1.1rem",
                      borderRadius: "0.85rem",
                      textDecoration: "none",
                      backgroundColor: "#F8F3EA",
                    }}
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Info Cards */}
              {contactCards.map(({ icon: Icon, title, lines, linkLabel, linkHref }) => (
                <div
                  key={title}
                  className="flex gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{ backgroundColor: "#FFFDF9", border: "1px solid rgba(92,71,43,0.08)", boxShadow: "0 14px 36px rgba(31,41,51,0.06)" }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(184,138,82,0.12)", marginTop: "0.1rem" }}>
                    <Icon size={22} style={{ color: "#B88A52" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1F2933", fontSize: "0.96rem", marginBottom: "0.35rem" }}>{title}</div>
                    {lines.map((l, i) => (
                      <div key={i} style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", lineHeight: 1.6 }}>{l}</div>
                    ))}
                    {linkLabel && linkHref && (
                      <div className="mt-3">
                        <a
                          href={linkHref}
                          target={linkHref.startsWith("http") ? "_blank" : undefined}
                          rel={linkHref.startsWith("http") ? "noreferrer" : undefined}
                          style={{ color: "#B88A52", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", textDecoration: "none", fontWeight: 700 }}
                        >
                          {linkLabel} {"->"}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div
                className="p-6 sm:p-8 rounded-3xl"
                style={{ backgroundColor: "#FFFDF9", border: "1px solid rgba(92,71,43,0.08)", boxShadow: "0 28px 65px rgba(31,41,51,0.08)", position: "relative", overflow: "hidden" }}
              >
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(184,138,82,0.35), transparent)" }} />
                {submitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "#22C55E18" }}>
                      <CheckCircle size={40} style={{ color: "#22C55E" }} />
                    </div>
                    <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#1F2933", fontSize: "1.8rem", marginBottom: "1rem" }}>
                      Request Submitted!
                    </h3>
                    <p style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", lineHeight: 1.7, maxWidth: "28rem", marginBottom: "2rem" }}>
                      Thank you for reaching out. Our team will review your request and contact you within 24 hours with a detailed quote.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", projectType: "", budget: "", message: "" }); }}
                      style={{
                        backgroundColor: "#B88A52",
                        color: "#FFFDF9",
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        padding: "0.875rem 2rem",
                        borderRadius: "0.75rem",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["1. Tell us the scope", "2. Share budget range", "3. We reply with next steps"].map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: "#F8F3EA", border: "1px solid rgba(184,138,82,0.16)", color: "#334155", fontFamily: "'Inter', sans-serif", fontSize: "0.78rem" }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#1F2933", fontSize: "clamp(1.65rem, 2.8vw, 2.15rem)", lineHeight: 1.12, marginBottom: "0.45rem", maxWidth: "24rem" }}>
                        Request a <span style={{ color: "#B88A52" }}>Consultation</span>
                      </h2>
                      <p style={{ color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", lineHeight: 1.65, maxWidth: "36rem" }}>
                        Fill out the form and we'll get back to you with thoughtful recommendations, likely costs, and the best next move for your project. You can also call or WhatsApp us at {DISPLAY_CONTACT_NUMBER}.
                      </p>
                      {submitError && (
                        <p style={{ color: "#FCA5A5", fontFamily: "'Inter', sans-serif", fontSize: "0.84rem", lineHeight: 1.6, marginTop: "0.9rem" }}>
                          {submitError}
                        </p>
                      )}
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label style={{ display: "block", color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            placeholder="John Smith"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused(null)}
                            style={inputStyle("name")}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            placeholder={DISPLAY_CONTACT_NUMBER}
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            onFocus={() => setFocused("phone")}
                            onBlur={() => setFocused(null)}
                            style={inputStyle("phone")}
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label style={{ display: "block", color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          style={inputStyle("email")}
                        />
                      </div>

                      {/* Project Type */}
                      <div>
                          <label style={{ display: "block", color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                            Project Type *
                          </label>
                        <select
                          required
                          value={form.projectType}
                          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                          onFocus={() => setFocused("projectType")}
                          onBlur={() => setFocused(null)}
                          style={{ ...inputStyle("projectType"), appearance: "none" as const }}
                        >
                          <option value="" disabled>Select project type</option>
                          {PROJECT_TYPES.map((t) => <option key={t} value={t} style={{ backgroundColor: "#131F35" }}>{t}</option>)}
                        </select>
                      </div>

                      {/* Budget */}
                      <div>
                        <label style={{ display: "block", color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                          Estimated Budget
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your budget or budget range"
                          value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })}
                          onFocus={() => setFocused("budget")}
                          onBlur={() => setFocused(null)}
                          style={inputStyle("budget")}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ display: "block", color: "#5E6770", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 500, marginBottom: "0.5rem" }}>
                          Project Description
                        </label>
                        <textarea
                          rows={5}
                          placeholder="Tell us about your project: location, size, target timeline, and any special requirements."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          style={{ ...inputStyle("message"), resize: "vertical" as const }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 py-4 rounded-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
                        style={{
                          backgroundColor: "#B88A52",
                          color: "#FFFDF9",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.96rem",
                          border: "none",
                          cursor: "pointer",
                          boxShadow: "0 18px 45px rgba(184,138,82,0.18)",
                          opacity: isSubmitting ? 0.8 : 1,
                        }}
                        disabled={isSubmitting}
                      >
                        <Send size={18} /> {isSubmitting ? "Sending..." : "Send Project Request"}
                      </button>
                      <p style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", lineHeight: 1.6, textAlign: "center" }}>
                        Your details are used only to respond to your project inquiry.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
