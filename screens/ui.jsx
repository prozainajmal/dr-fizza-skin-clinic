/* Shared UI primitives — Dr. Fizza Skin Clinic */

/* ---------- Lucide icon ---------- */
function Icon({ name, size = 18, strokeWidth = 1.9, className = "", style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (el && window.lucide) {
      el.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      el.appendChild(i);
      try {
        window.lucide.createIcons({
          nameAttr: "data-lucide",
          attrs: { width: size, height: size, "stroke-width": strokeWidth },
        });
      } catch (e) {}
    }
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      className={"icon " + className}
      style={{
        width: size, height: size, fontSize: size, lineHeight: 0,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        ...style,
      }}
    />
  );
}

/* ---------- Image with graceful gradient fallback ---------- */
function Img({ src, alt = "", className = "", style, children }) {
  const [ok, setOk] = React.useState(true);
  return (
    <div className={"photo " + className} style={style}>
      {ok && (
        <img
          src={src}
          alt={alt}
          onError={() => setOk(false)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            borderRadius: "inherit",
          }}
        />
      )}
      {children}
    </div>
  );
}

/* ---------- Brand mark / logo ---------- */
function Logo({ onClick }) {
  return (
    <div className="brand" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <div className="brand-mark">
        <Icon name="stethoscope" size={22} strokeWidth={2} style={{ fontSize: 22, alignItems: "center", justifyContent: "center" }} />
      </div>
      <div>
        <div className="brand-name">Dr. Fizza</div>
        <div className="brand-sub">Skin &amp; Aesthetics</div>
      </div>
    </div>
  );
}

/* ---------- Top nav ---------- */
function Nav({ go, user, onLogin, onLogout, showLogin = true }) {
  const [menu, setMenu] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!menu) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setMenu(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [menu]);

  const nav = (s) => { setMenu(false); go(s); };
  const initials = user && user.name && user.name !== "Guest" ? user.name[0].toUpperCase() : "P";

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Logo onClick={() => go("landing")} />
        <div className="nav-links">
          <a className="nav-link hide-sm" onClick={() => go("location")}>Locations</a>
          <a className="nav-link hide-sm" onClick={() => go("landing")}>Treatments</a>
          {user ? (
            user.staff ? (
              <button className="chip" onClick={() => go("admin")} style={{ cursor: "pointer" }}>
                <span className="nav-ava">{initials}</span> Staff console
              </button>
            ) : (
              <div ref={ref} style={{ position: "relative" }}>
                <button className="chip" onClick={() => setMenu((m) => !m)} style={{ cursor: "pointer" }}>
                  <span className="nav-ava">{initials}</span>
                  {user.name ? user.name.split(" ")[0] : "My account"}
                  <Icon name="chevron-down" size={15} style={{ color: "var(--ink-faint)" }} />
                </button>
                {menu && (
                  <div className="nav-menu">
                    <div className="nav-menu-head">
                      <div style={{ fontWeight: 700, fontSize: 14 }}>{user.name || "Patient"}</div>
                      <div className="faint" style={{ fontSize: 12.5 }}>{user.email || "Signed in"}</div>
                    </div>
                    <button className="nav-menu-item" onClick={() => nav("profile")}><Icon name="user" size={16} /> My profile</button>
                    <button className="nav-menu-item" onClick={() => nav("dashboard")}><Icon name="calendar-check" size={16} /> My appointments</button>
                    <div className="nav-menu-sep" />
                    <button className="nav-menu-item danger" onClick={() => { setMenu(false); onLogout && onLogout(); }}><Icon name="log-out" size={16} /> Log out</button>
                  </div>
                )}
              </div>
            )
          ) : (
            showLogin && (
              <button className="btn btn-ghost btn-sm" onClick={onLogin}>
                <Icon name="log-in" size={16} /> Log in
              </button>
            )
          )}
          <button className="btn btn-primary btn-sm" onClick={() => go("location")}>
            Book appointment
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ---------- Stepper ---------- */
const STEPS = [
  { key: "location", label: "Location" },
  { key: "calendar", label: "Date & time" },
  { key: "details", label: "Details" },
  { key: "payment", label: "Payment" },
];
function Stepper({ current }) {
  // current may be 'auth' (between calendar & details) — map to calendar index+ .5
  let idx = STEPS.findIndex((s) => s.key === current);
  if (current === "auth") idx = 1.5;
  if (current === "confirmation") idx = 4;
  return (
    <div className="stepper" style={{ justifyContent: "center", flexWrap: "wrap", gap: 4 }}>
      {STEPS.map((s, i) => {
        const done = i < idx;
        const active = Math.floor(idx) === i && idx % 1 === 0;
        return (
          <React.Fragment key={s.key}>
            <div className={"step " + (done ? "done " : "") + (active ? "active" : "")}>
              <span className="step-dot">{done ? <Icon name="check" size={15} /> : i + 1}</span>
              <span className="step-label hide-sm">{s.label}</span>
            </div>
            {i < STEPS.length - 1 && <span className={"step-bar" + (i < idx - 0.5 ? " fill" : "")} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ---------- Booking summary panel ---------- */
function fmtDate(d) {
  if (!d) return null;
  return d.toLocaleDateString("en-US", { weekday: "short", month: "long", day: "numeric", year: "numeric" });
}
function BookingSummary({ booking, footer }) {
  const { city, date, time } = booking;
  return (
    <aside className="summary">
      <div className="summary-head">
        <div className="eyebrow" style={{ color: "var(--rose-deeper)" }}>Your appointment</div>
        <div className="display" style={{ fontSize: 26, marginTop: 6 }}>Booking summary</div>
      </div>
      <div className="summary-row">
        <span className="summary-ico"><Icon name="map-pin" size={17} /></span>
        <div>
          <div className="summary-k">Location</div>
          <div className={"summary-v" + (city ? "" : " summary-empty")}>
            {city ? city.name : "Not selected"}
          </div>
          {city && <div className="faint" style={{ fontSize: 13 }}>{city.address}</div>}
        </div>
      </div>
      <div className="summary-row">
        <span className="summary-ico"><Icon name="calendar" size={17} /></span>
        <div>
          <div className="summary-k">Date</div>
          <div className={"summary-v" + (date ? "" : " summary-empty")}>
            {date ? fmtDate(date) : "Not selected"}
          </div>
        </div>
      </div>
      <div className="summary-row">
        <span className="summary-ico"><Icon name="clock" size={17} /></span>
        <div>
          <div className="summary-k">Time</div>
          <div className={"summary-v" + (time ? "" : " summary-empty")}>
            {time || "Not selected"}
          </div>
        </div>
      </div>
      {city && (
        <div className="summary-row" style={{ background: "var(--cream-2)" }}>
          <span className="summary-ico" style={{ background: "var(--gold-tint)", color: "var(--gold)" }}>
            <Icon name="wallet" size={17} />
          </span>
          <div>
            <div className="summary-k">Consultation fee</div>
            <div className="summary-v">{city.fee}</div>
          </div>
        </div>
      )}
      {footer && <div style={{ padding: 18 }}>{footer}</div>}
    </aside>
  );
}

/* ---------- Field ---------- */
function Field({ label, children, hint, error }) {
  return (
    <label className={"field" + (error ? " field-invalid" : "")}>
      {label && <span className="label">{label}</span>}
      {children}
      {error
        ? <span className="field-err"><Icon name="alert-circle" size={13} /> {error}</span>
        : hint && <span className="faint" style={{ fontSize: 12 }}>{hint}</span>}
    </label>
  );
}

/* ---------- Toast ---------- */
function Toast({ msg, icon = "check-circle-2" }) {
  if (!msg) return null;
  return (
    <div className="toast">
      <Icon name={icon} size={18} /> {msg}
    </div>
  );
}

/* ---------- Legal modal (Terms / Privacy) ---------- */
const LEGAL_COPY = {
  terms: {
    title: "Terms & Conditions",
    updated: "Last updated 1 July 2026",
    body: [
      ["Appointments & bookings", "Consultation fees are payable at the time of booking to reserve your slot. Bookings are confirmed once payment is received and a reference number is issued via Email and WhatsApp."],
      ["Cancellations & refunds", "Appointments may be rescheduled or cancelled up to 24 hours before the scheduled time for a full refund. Cancellations within 24 hours may forfeit the consultation fee."],
      ["Medical disclaimer", "Information provided through this portal is for scheduling purposes and does not constitute medical advice. Always consult your treating dermatologist for diagnosis and treatment."],
      ["Use of the portal", "You agree to provide accurate personal and medical information. Misuse of the booking system, fraudulent payment, or abusive conduct toward staff may result in suspension of access."],
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated 1 July 2026",
    body: [
      ["Information we collect", "We collect your name, contact details, medical history and uploaded reports solely to provide dermatology care and manage your appointments."],
      ["How we use your data", "Your data is used to schedule visits, prepare your treating doctor, process payments and send appointment confirmations. We never sell your personal information."],
      ["Data security", "Records are encrypted in transit and at rest, and are accessible only to your treating clinicians and authorised clinic staff."],
      ["Your rights", "You may request a copy of your records, ask for corrections, or request deletion of your account at any time by contacting the clinic."],
    ],
  },
};

function LegalModal({ which, onClose }) {
  if (!which) return null;
  const doc = LEGAL_COPY[which];
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, zIndex: 210, background: "rgba(42,28,28,.5)", display: "grid", placeItems: "center", padding: 20, animation: "fade .2s ease both" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: "var(--white)", borderRadius: "var(--r-lg)", boxShadow: "0 30px 70px rgba(42,28,28,.35)", width: "100%", maxWidth: 640, maxHeight: "84vh", overflow: "auto", animation: "pop .3s var(--ease) both" }}
      >
        <div style={{ position: "sticky", top: 0, background: "var(--white)", padding: "26px 30px 16px", borderBottom: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
          <div>
            <div className="serif" style={{ fontSize: 27, fontWeight: 600 }}>{doc.title}</div>
            <div className="faint" style={{ fontSize: 13, marginTop: 4 }}>{doc.updated}</div>
          </div>
          <button className="icon-btn" aria-label="Close" onClick={onClose}><Icon name="x" size={17} /></button>
        </div>
        <div style={{ padding: "22px 30px 30px" }}>
          {doc.body.map(([h, p], i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h4 className="serif" style={{ fontSize: 17.5, fontWeight: 600, margin: "0 0 6px" }}>{h}</h4>
              <p className="muted" style={{ fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{p}</p>
            </div>
          ))}
          <p className="faint" style={{ fontSize: 12.5, lineHeight: 1.5, margin: "6px 0 0" }}>
            This is a demonstration portal. No real medical, payment or personal data is collected or stored.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
const SOCIALS = [
  { ic: "instagram", label: "Instagram", href: "https://instagram.com" },
  { ic: "facebook", label: "Facebook", href: "https://facebook.com" },
  { ic: "youtube", label: "YouTube", href: "https://youtube.com" },
  { ic: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
];

function SiteFooter({ go }) {
  const [legal, setLegal] = React.useState(null);
  const openLink = (href) => window.open(href, "_blank", "noopener,noreferrer");
  return (
    <footer className="footer">
      <div className="wrap footer-wrap" style={{ padding: "48px 0 0" }}>
        <div className="footer-grid">
          {/* brand + socials */}
          <div>
            <Logo onClick={go ? () => go("landing") : undefined} />
            <p className="faint" style={{ fontSize: 13.5, lineHeight: 1.6, margin: "16px 0 18px", maxWidth: 260 }}>
              Premium dermatology &amp; aesthetics across Pakistan and the UAE. Book a consultation in under a minute.
            </p>
            <div className="row" style={{ gap: 10 }}>
              {SOCIALS.map((s) => (
                <button key={s.label} className="social-btn" aria-label={s.label} onClick={() => openLink(s.href)}>
                  <Icon name={s.ic} size={17} />
                </button>
              ))}
            </div>
          </div>

          {/* clinics */}
          <div>
            <div className="footer-h">Clinics</div>
            <ul className="footer-list">
              {["Islamabad — F-6 Markaz", "Lahore — Gulberg III", "Karachi — Clifton", "Al Wasl — Dubai", "Jumeirah — Dubai"].map((c) => (
                <li key={c}><a onClick={() => go && go("location")}>{c}</a></li>
              ))}
            </ul>
          </div>

          {/* company */}
          <div>
            <div className="footer-h">Clinic</div>
            <ul className="footer-list">
              <li><a onClick={() => go && go("location")}>Book an appointment</a></li>
              <li><a onClick={() => go && go("login")}>Patient portal</a></li>
              <li><a onClick={() => go && go("admin")}>Staff login</a></li>
              <li><a onClick={() => setLegal("terms")}>Terms &amp; Conditions</a></li>
              <li><a onClick={() => setLegal("privacy")}>Privacy Policy</a></li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <div className="footer-h">Contact</div>
            <ul className="footer-list">
              <li><a href="tel:+92510000000"><Icon name="phone" size={14} /> +92 51 000 0000</a></li>
              <li><a href="mailto:hello@drfizza.clinic"><Icon name="mail" size={14} /> hello@drfizza.clinic</a></li>
              <li><a onClick={() => openLink("https://wa.me/92510000000")}><Icon name="message-circle" size={14} /> WhatsApp us</a></li>
              <li className="row" style={{ gap: 8, alignItems: "center" }}><Icon name="clock" size={14} /> Mon–Sat · 10 AM – 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Dr. Fizza Skin Clinic. All rights reserved.</span>
          <div className="row" style={{ gap: 18, flexWrap: "wrap" }}>
            <a onClick={() => setLegal("terms")}>Terms &amp; Conditions</a>
            <a onClick={() => setLegal("privacy")}>Privacy Policy</a>
            <a onClick={() => go && go("admin")}>Staff login</a>
          </div>
        </div>
      </div>
      <LegalModal which={legal} onClose={() => setLegal(null)} />
    </footer>
  );
}

Object.assign(window, {
  Icon, Img, Logo, Nav, Stepper, BookingSummary, Field, Toast, SiteFooter, LegalModal, fmtDate, STEPS,
});
