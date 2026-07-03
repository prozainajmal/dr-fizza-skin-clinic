/* Treatments — dedicated page, distinct from the homepage */
function Treatments({ go }) {
  const groups = [
    {
      icon: "sparkles",
      t: "Acne & Scarring",
      d: "Medical-grade peels, extractions and laser resurfacing to clear active breakouts and soften scarring.",
    },
    {
      icon: "zap",
      t: "Laser Hair Removal",
      d: "Diode and Nd:YAG laser sessions calibrated for all skin tones, with a plan sized to your area and coverage.",
    },
    {
      icon: "sun",
      t: "Pigmentation & Brightening",
      d: "Targeted treatment for melasma, sun damage and uneven tone using lasers, peels and topical protocols.",
    },
    {
      icon: "syringe",
      t: "Anti-Aging & Fillers",
      d: "Botox, dermal fillers and skin-boosters administered by board-certified physicians for natural results.",
    },
    {
      icon: "droplets",
      t: "Chemical Peels",
      d: "Layered peel protocols — from light refresh to deeper resurfacing — matched to your skin's tolerance.",
    },
    {
      icon: "gem",
      t: "Bridal & Pre-Event",
      d: "Multi-session prep plans that bring skin to its best for a wedding or major event, planned months ahead.",
    },
  ];

  return (
    <div className="screen wrap" style={{ padding: "56px 28px 80px" }}>
      <div style={{ marginBottom: 48 }}>
        <span className="pill-tag"><Icon name="stethoscope" size={14} /> Treatments</span>
        <h1 className="display" style={{ fontSize: 52, lineHeight: 1.15, margin: "20px 0 0" }}>Care built around your skin.</h1>
        <p className="muted" style={{ fontSize: 17, lineHeight: 1.6, marginTop: 22, maxWidth: 560 }}>
          Every treatment starts with a consultation — our specialists confirm the right protocol,
          timeline and cost before anything is scheduled.
        </p>
      </div>

      <div className="grid cols-3" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
        {groups.map((g, i) => (
          <div key={g.t} className="card card-pad" style={{ animation: `riseUp ${.4 + i * .06}s var(--ease) both` }}>
            <span style={{ width: 50, height: 50, borderRadius: 14, background: "var(--rose-tint)", color: "var(--rose-deep)", display: "grid", placeItems: "center" }}>
              <Icon name={g.icon} size={24} />
            </span>
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.3, margin: "18px 0 12px" }}>{g.t}</h3>
            <p className="muted" style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0 }}>{g.d}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: 40, padding: "34px 38px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, background: "linear-gradient(160deg,var(--rose-tint),var(--cream-2))", border: "none" }}>
        <div>
          <h2 className="display" style={{ fontSize: 30, margin: 0 }}>Not sure which treatment is right?</h2>
          <p className="muted" style={{ fontSize: 15, marginTop: 8, maxWidth: 440 }}>
            Book a consultation and a specialist will recommend a plan for you.
          </p>
        </div>
        <button className="btn btn-primary btn-lg" onClick={() => go("location")}>
          Book a consultation <Icon name="arrow-right" size={18} />
        </button>
      </div>
    </div>
  );
}
Object.assign(window, { Treatments });
