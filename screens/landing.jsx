/* Landing page */
function Landing({ go, cities }) {
  const why = [
    { icon: "badge-check", t: "Board-certified care", d: "Consultations led by certified dermatologists and aesthetic specialists." },
    { icon: "map-pin", t: "Six clinics, two countries", d: "Premium locations across Pakistan and the UAE — plus online video visits." },
    { icon: "sparkles", t: "Book in under a minute", d: "Browse, pick a slot and reserve. No account needed until you confirm." },
  ];
  return (
    <div className="screen">
      {/* hero */}
      <section className="wrap hero-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 56, alignItems: "center", padding: "70px 28px 80px" }}>
        <div style={{ animation: "riseUp .6s var(--ease) both" }}>
          <span className="pill-tag"><Icon name="leaf" size={14} /> Dermatology &amp; Aesthetics</span>
          <h1 className="display hero-title" style={{ fontSize: 68, margin: "22px 0 0" }}>
            Beautiful skin,<br />
            <span style={{ fontStyle: "italic", color: "var(--rose-deep)" }}>thoughtfully</span> cared for.
          </h1>
          <p className="muted" style={{ fontSize: 18.5, lineHeight: 1.6, maxWidth: 480, marginTop: 22 }}>
            Premium dermatology across Islamabad, Lahore, Karachi and Dubai. Reserve a consultation
            with our specialists in just a few taps — explore everything before you ever sign in.
          </p>
          <div className="row" style={{ gap: 14, marginTop: 34, flexWrap: "wrap" }}>
            <button className="btn btn-primary btn-lg" onClick={() => go("location")}>
              Book an appointment <Icon name="arrow-right" size={18} />
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => go("location")}>
              <Icon name="map-pin" size={17} /> See locations
            </button>
          </div>
          <div className="row" style={{ gap: 26, marginTop: 38, alignItems: "center" }}>
            <div className="row" style={{ marginLeft: 6 }}>
              {[
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=96&h=96&q=80",
                "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=96&h=96&q=80",
                "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=96&h=96&q=80",
                "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=96&h=96&q=80",
              ].map((u, i) => (
                <span key={i} style={{
                  width: 38, height: 38, borderRadius: "50%", marginLeft: -10, flex: "none",
                  border: "2.5px solid var(--cream)", overflow: "hidden",
                  background: ["#E8B4B8", "#D9A7A2", "#C9B79A", "#B9C2B0"][i],
                }}>
                  <img src={u} alt="" onError={(e) => { e.currentTarget.style.display = "none"; }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </span>
              ))}
            </div>
            <div>
              <div className="row" style={{ gap: 3, color: "var(--gold)" }}>
                {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" size={15} strokeWidth={0} style={{ fill: "var(--gold)" }} />)}
              </div>
              <div className="faint" style={{ fontSize: 13.5, marginTop: 3 }}>4.9 from 2,400+ patients</div>
            </div>
          </div>
        </div>

        {/* hero image stack */}
        <div style={{ position: "relative", animation: "pop .7s var(--ease) both" }}>
          <Img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=820&q=80"
            className=""
            style={{ width: "100%", aspectRatio: "4/5", borderRadius: "140px 140px 24px 24px", boxShadow: "var(--sh-lg)" }}
          />
          <div className="card card-pad" style={{ position: "absolute", left: -34, bottom: 48, padding: 18, display: "flex", alignItems: "center", gap: 13, animation: "riseUp .9s var(--ease) both" }}>
            <span style={{ width: 42, height: 42, borderRadius: 12, background: "var(--sage-tint)", color: "#4d6650", display: "grid", placeItems: "center" }}>
              <Icon name="calendar-check" size={20} />
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Next available</div>
              <div className="faint" style={{ fontSize: 13 }}>Today · 4:30 PM</div>
            </div>
          </div>
          <div className="card" style={{ position: "absolute", right: -22, top: 40, padding: "12px 16px", display: "flex", alignItems: "center", gap: 9, animation: "riseUp 1.05s var(--ease) both" }}>
            <span className="badge badge-sage"><Icon name="shield-check" size={13} /> Verified clinic</span>
          </div>
        </div>
      </section>

      {/* why us */}
      <section className="wrap" style={{ padding: "10px 28px 30px" }}>
        <div className="grid cols-3 why-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}>
          {why.map((w, i) => (
            <div key={i} className="card card-pad why-card" style={{ animation: `riseUp ${.5 + i * .1}s var(--ease) both` }}>
              <span className="why-ico" style={{ width: 50, height: 50, borderRadius: 14, background: "var(--rose-tint)", color: "var(--rose-deep)", display: "grid", placeItems: "center", flex: "none" }}>
                <Icon name={w.icon} size={24} />
              </span>
              <div className="why-text">
                <h3 className="serif" style={{ fontSize: 24, fontWeight: 600, margin: "16px 0 8px" }}>{w.t}</h3>
                <p className="muted" style={{ fontSize: 15, lineHeight: 1.55, margin: 0 }}>{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* city teaser */}
      <section className="wrap" style={{ padding: "44px 28px 80px" }}>
        <div className="card split-media" style={{ padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: ".9fr 1.1fr" }}>
          <Img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80"
            className="teaser-media"
            style={{ minHeight: 320 }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%,rgba(42,42,42,.55))", borderRadius: "inherit" }} />
            <div className="teaser-cap" style={{ position: "absolute", left: 28, bottom: 26, color: "#fff" }}>
              <div className="eyebrow" style={{ color: "#fff", opacity: .85 }}>Now open</div>
              <div className="serif" style={{ fontSize: 30, fontWeight: 600 }}>Dubai — Al Wasl &amp; Jumeirah</div>
            </div>
          </Img>
          <div className="teaser-body" style={{ padding: "36px 38px" }}>
            <h2 className="display teaser-h" style={{ fontSize: 38, margin: 0 }}>Find a clinic near you</h2>
            <p className="muted" style={{ fontSize: 16, marginTop: 12, maxWidth: 420 }}>
              Live availability across all our locations. Pick a city to see open dates.
            </p>
            <div className="grid cols-2" style={{ gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 24 }}>
              {cities.filter((c) => c.active).slice(0, 6).map((c) => (
                <button key={c.id} className="chip" onClick={() => go("location")} style={{ justifyContent: "space-between", padding: "13px 16px", cursor: "pointer" }}>
                  <span className="row" style={{ gap: 9, alignItems: "center" }}>
                    <Icon name="map-pin" size={15} style={{ color: "var(--rose-deep)" }} /> {c.name}
                  </span>
                  <span className="badge badge-sage" style={{ fontSize: 10.5, padding: "3px 8px" }}>{c.open}</span>
                </button>
              ))}
            </div>
            <button className="btn btn-dark btn-block" style={{ marginTop: 22 }} onClick={() => go("location")}>
              Start booking <Icon name="arrow-right" size={17} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { Landing });
