import { SITE, brandInitials, brandTop, brandBottom, phoneTel } from "@/config/site";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Our Story" },
  { href: "#spaces", label: "The Venue" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reserve", label: "Check Availability" },
];

const hours = [
  { label: "Tours & Inquiries", time: "By appointment" },
  { label: "Private Events", time: "Year-round" },
];

export default function Footer() {
  return (
    <footer className="bg-[#17100c] text-white/70 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/[.08]">
          {/* Brand */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-brown-deep font-bold font-serif text-xl shadow-md mb-4">
              {brandInitials}
            </div>
            <p className="font-serif text-lg text-white mb-2 leading-tight">
              {brandTop}<br />{brandBottom}
            </p>
            <p className="text-sm leading-relaxed">
              {SITE.address.street}<br />
              {SITE.address.city}, {SITE.address.state} {SITE.address.zip}<br />
              <a href={`tel:${phoneTel}`} className="text-gold-light hover:text-gold transition-colors">
                {SITE.phone}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-gold-light sm:hover:pl-1 transition-all">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-white mb-5">Hours</h4>
            <ul className="space-y-2.5">
              {hours.map((s) => (
                <li key={s.label} className="text-sm text-white/60">
                  <strong className="text-white/85 font-semibold">{s.label}</strong> — {s.time}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-white mb-5">Connect With Us</h4>
            <div className="flex gap-3 mb-6 justify-center sm:justify-start">
              <a
                href={SITE.facebookUrl || "#"}
                aria-label="Facebook"
                target={SITE.facebookUrl ? "_blank" : undefined}
                rel={SITE.facebookUrl ? "noopener noreferrer" : undefined}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[.08] text-white/70 hover:bg-gold hover:text-brown-deep hover:-translate-y-0.5 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <p className="text-sm italic text-white/40 leading-relaxed">
              Formerly {SITE.formerName} — reintroduced as {SITE.name}.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center py-6 text-sm text-white/30">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
