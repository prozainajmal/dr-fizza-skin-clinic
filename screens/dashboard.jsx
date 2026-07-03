/* Patient dashboard */
function Dashboard({ go, booking, user }) {
  const hasName = Boolean(user && user.name && user.name !== "Guest");
  const firstName = hasName ? user.name.split(" ")[0] : null;

  const past = [
    { date: "Mar 14, 2026", clinic: "Lahore — Gulberg III", doc: "Dr. Fizza Ahmed", type: "Laser — pigmentation" },
    { date: "Jan 9, 2026", clinic: "Lahore — Gulberg III", doc: "Dr. Sana Riaz", type: "Acne consultation" },
  ];
  const reports = [
    { name: "lab-report-march.pdf", verified: true },
    { name: "skin-biopsy.pdf", verified: true },
    { name: "prescription-jan.jpg", verified: false },
  ];

  return (
    <div className="screen wrap" style={{ padding: "40px 28px 70px" }}>
      {/* header */}
      <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-end", marginBottom: 38, flexWrap: "wrap", gap: 16 }}>
        <div>
          <span className="eyebrow">Patient portal</span>
          <h1 className="display" style={{ fontSize: 42, margin: "8px 0 0" }}>{firstName ? `Welcome back, ${firstName}` : "Welcome back"}</h1>
        </div>
      </div>

      <div className="grid dash-grid" style={{ gridTemplateColumns: "1.4fr 1fr", gap: 22, alignItems: "start" }}>
          {/* upcoming */}
          <div className="card" style={{ padding: 0, overflow: "hidden", gridColumn: "1 / -1" }}>
            <div className="row" style={{ background: "linear-gradient(160deg,var(--rose-tint),var(--cream-2))" }}>
              <div style={{ padding: "28px 30px", flex: 1 }}>
                <span className="badge badge-rose"><Icon name="calendar-clock" size={12} /> Upcoming</span>
                <h2 className="serif" style={{ fontSize: 30, fontWeight: 600, margin: "14px 0 4px" }}>
                  {booking.city ? booking.city.name : "Islamabad — F-6 Markaz"}
                </h2>
                <p className="muted" style={{ fontSize: 15, margin: 0 }}>
                  {booking.date ? fmtDate(booking.date) : "Tuesday, June 23, 2026"}{booking.time ? ` · ${booking.time}` : " · 4:30 PM"}
                </p>
                <div className="row" style={{ gap: 10, marginTop: 20, flexWrap: "wrap" }}>
                  <button className="btn btn-dark btn-sm" onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(booking.city ? (booking.city.name + " " + booking.city.address) : "Dr Fizza Skin Clinic Islamabad F-6"), "_blank", "noopener")}><Icon name="navigation" size={15} /> Directions</button>
                  <button className="btn btn-ghost btn-sm" onClick={() => go("calendar")}><Icon name="calendar-x" size={15} /> Reschedule</button>
                  {booking.ref && <span className="chip"><Icon name="hash" size={13} /> {booking.ref}</span>}
                </div>
              </div>
              <div style={{ width: 200, alignSelf: "stretch" }} className="hide-sm">
                <Img src="assets/dr-fizza.jpg" style={{ height: "100%", objectPosition: "center top" }} />
              </div>
            </div>
          </div>

          {/* past visits */}
          <div className="card card-pad">
            <h3 className="serif" style={{ fontSize: 22, fontWeight: 600, margin: "0 0 16px" }}>Past visits</h3>
            <div className="grid" style={{ gap: 12 }}>
              {past.map((p, i) => (
                <div key={i} className="row" style={{ gap: 13, padding: "13px 0", borderTop: i ? "1px solid var(--line)" : "none", alignItems: "center" }}>
                  <span style={{ width: 42, height: 42, borderRadius: 11, background: "var(--cream-2)", color: "var(--ink-soft)", display: "grid", placeItems: "center", flex: "none" }}>
                    <Icon name="stethoscope" size={19} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 14.5 }}>{p.type}</div>
                    <div className="faint" style={{ fontSize: 13 }}>{p.clinic} · {p.doc}</div>
                  </div>
                  <div className="faint" style={{ fontSize: 13, fontWeight: 600 }}>{p.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* medical + reports */}
          <div className="grid" style={{ gap: 22 }}>
            <div className="card card-pad">
              <h3 className="serif" style={{ fontSize: 22, fontWeight: 600, margin: "0 0 14px" }}>Medical summary</h3>
              {[["Allergies", "Penicillin"], ["Medications", "None"], ["Skin type", "Combination · sensitive"]].map(([k, v]) => (
                <div key={k} className="row" style={{ justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
                  <span className="faint" style={{ fontSize: 14 }}>{k}</span><span style={{ fontWeight: 600, fontSize: 14 }}>{v}</span>
                </div>
              ))}
            </div>
            <div className="card card-pad">
              <h3 className="serif" style={{ fontSize: 22, fontWeight: 600, margin: "0 0 14px" }}>Reports</h3>
              <div className="grid" style={{ gap: 10 }}>
                {reports.map((r, i) => (
                  <div key={i} className="file-chip">
                    <span style={{ width: 34, height: 34, borderRadius: 9, background: "var(--gold-tint)", color: "var(--gold)", display: "grid", placeItems: "center" }}>
                      <Icon name="file-text" size={16} />
                    </span>
                    <span style={{ flex: 1, fontWeight: 600, fontSize: 13.5 }}>{r.name}</span>
                    {r.verified
                      ? <span className="badge badge-sage"><Icon name="badge-check" size={12} /> Verified</span>
                      : <span className="badge" style={{ background: "var(--cream-2)", color: "var(--ink-faint)" }}>Pending</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
Object.assign(window, { Dashboard });
