/* ============================================================
   Admin / Staff panel — standalone sidebar app
   Sections: Overview · Appointments · Availability · Patients
   ============================================================ */

const ADMIN_APPTS = [
  { id: 1, t: "10:00 AM", p: "Hira Malik", city: "Islamabad — F-6", doc: "Dr. Fizza Ahmed", type: "Acne consult", status: "Confirmed", phone: "+92 300 1234567" },
  { id: 2, t: "10:30 AM", p: "Zoya Ahmed", city: "Islamabad — F-6", doc: "Dr. Fizza Ahmed", type: "Laser — follow up", status: "Confirmed", phone: "+92 321 9988776" },
  { id: 3, t: "11:30 AM", p: "Sana Tariq", city: "Islamabad — F-6", doc: "Dr. Sana Riaz", type: "Pigmentation", status: "Checked in", phone: "+92 333 4567890" },
  { id: 4, t: "12:00 PM", p: "Ayesha Khan", city: "Islamabad — F-6", doc: "Dr. Fizza Ahmed", type: "First visit", status: "Pending", phone: "+92 345 1112223", firstTime: true },
  { id: 5, t: "02:00 PM", p: "Mahnoor Sheikh", city: "Lahore — Gulberg", doc: "Dr. Sana Riaz", type: "Anti-aging", status: "Confirmed", phone: "+92 300 5566778" },
  { id: 6, t: "03:30 PM", p: "Emaan Raza", city: "Online", doc: "Dr. Fizza Ahmed", type: "Video consult", status: "Pending", phone: "+92 311 2233445", online: true },
];

const STATUS_STYLE = {
  Confirmed: { background: "var(--sage-tint)", color: "#4d6650" },
  "Checked in": { background: "var(--rose-tint)", color: "var(--rose-deeper)" },
  Pending: { background: "var(--gold-tint)", color: "#8a6a2c" },
  Cancelled: { background: "var(--cream-2)", color: "var(--ink-faint)" },
  Open: { background: "var(--cream-2)", color: "var(--ink-faint)" },
};

function StatusBadge({ s }) {
  return <span className="badge" style={STATUS_STYLE[s] || STATUS_STYLE.Open}>{s}</span>;
}

/* ---------------- Overview ---------------- */
function AdminOverview({ appts, setSection, verifyCount }) {
  const stats = [
    { n: appts.length, l: "Appointments today", ic: "calendar-days", bg: "var(--rose-tint)", fg: "var(--rose-deep)" },
    { n: appts.filter((a) => a.status === "Pending").length, l: "Pending confirmation", ic: "clock-alert", bg: "var(--gold-tint)", fg: "var(--gold)" },
    { n: verifyCount, l: "Reports to verify", ic: "file-badge", bg: "var(--sage-tint)", fg: "#4d6650" },
    { n: "86%", l: "Slot utilization", ic: "trending-up", bg: "var(--cream-2)", fg: "var(--ink-soft)" },
  ];
  return (
    <div style={{ animation: "riseUp .4s var(--ease) both" }}>
      <div className="grid cols-4" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <span className="stat-ico" style={{ background: s.bg, color: s.fg }}><Icon name={s.ic} size={21} /></span>
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid split-even" style={{ gridTemplateColumns: "1.6fr 1fr", gap: 20, alignItems: "start" }}>
        <div className="card table-scroll" style={{ padding: 0, overflow: "hidden" }}>
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center", padding: "18px 22px", borderBottom: "1px solid var(--line)" }}>
            <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, margin: 0 }}>Today's schedule</h3>
            <button className="btn btn-quiet btn-sm" onClick={() => setSection("appointments")}>View all <Icon name="arrow-right" size={15} /></button>
          </div>
          <table className="atable">
            <thead><tr><th>Time</th><th>Patient</th><th>Type</th><th>Status</th></tr></thead>
            <tbody>
              {appts.slice(0, 5).map((a) => (
                <tr key={a.id}>
                  <td style={{ fontWeight: 700 }}>{a.t}</td>
                  <td>{a.p}</td>
                  <td className="muted">{a.type}</td>
                  <td><StatusBadge s={a.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid" style={{ gap: 20 }}>
          <div className="card card-pad">
            <h3 className="serif" style={{ fontSize: 20, fontWeight: 600, margin: "0 0 14px" }}>Quick actions</h3>
            <div className="grid" style={{ gap: 10 }}>
              <button className="btn btn-ghost btn-block" onClick={() => setSection("availability")} style={{ justifyContent: "flex-start" }}>
                <Icon name="calendar-cog" size={17} /> Set availability
              </button>
              <button className="btn btn-ghost btn-block" onClick={() => setSection("patients")} style={{ justifyContent: "flex-start" }}>
                <Icon name="folder-open" size={17} /> Open patient files
              </button>
              <button className="btn btn-ghost btn-block" onClick={() => setSection("appointments")} style={{ justifyContent: "flex-start" }}>
                <Icon name="calendar-plus" size={17} /> Add walk-in
              </button>
            </div>
          </div>
          <div className="card card-pad" style={{ background: "linear-gradient(160deg,var(--rose-tint),var(--cream-2))", border: "none" }}>
            <span className="badge badge-rose"><Icon name="bell" size={12} /> Reminder</span>
            <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: "12px 0 0", fontWeight: 500 }}>
              2 first-visit patients today need their medical history reviewed before consultation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Appointments ---------------- */
function AdminAppointments({ appts, setAppts, notify }) {
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Confirmed", "Pending", "Checked in", "Cancelled"];
  const shown = filter === "All" ? appts : appts.filter((a) => a.status === filter);

  const setStatus = (id, status) => {
    setAppts((arr) => arr.map((a) => (a.id === id ? { ...a, status } : a)));
    notify(status === "Cancelled" ? "Appointment cancelled" : `Marked ${status.toLowerCase()}`);
  };

  return (
    <div style={{ animation: "riseUp .4s var(--ease) both" }}>
      <div className="row" style={{ gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button key={f} className="chip" onClick={() => setFilter(f)} style={{ cursor: "pointer",
            background: filter === f ? "var(--ink)" : "var(--white)", color: filter === f ? "#fff" : "var(--ink-soft)",
            borderColor: filter === f ? "var(--ink)" : "var(--line-2)" }}>
            {f}{f !== "All" && <span style={{ opacity: .7 }}>· {appts.filter((a) => a.status === f).length}</span>}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button className="btn btn-primary btn-sm" onClick={() => notify("New appointment form opened")}><Icon name="plus" size={16} /> New appointment</button>
      </div>

      <div className="card table-scroll" style={{ padding: 0, overflow: "hidden" }}>
        <table className="atable">
          <thead><tr><th>Time</th><th>Patient</th><th>Clinic</th><th>Doctor</th><th>Type</th><th>Status</th><th style={{ textAlign: "right" }}>Actions</th></tr></thead>
          <tbody>
            {shown.map((a) => (
              <tr key={a.id}>
                <td style={{ fontWeight: 700, whiteSpace: "nowrap" }}>{a.t}</td>
                <td>
                  <div style={{ fontWeight: 600 }}>{a.p} {a.firstTime && <span className="badge badge-gold" style={{ fontSize: 10, padding: "2px 7px", marginLeft: 4 }}>New</span>}</div>
                  <div className="faint" style={{ fontSize: 12.5 }}>{a.phone}</div>
                </td>
                <td className="muted" style={{ whiteSpace: "nowrap" }}>{a.online ? <span className="row" style={{ gap: 5, alignItems: "center" }}><Icon name="video" size={14} /> Online</span> : a.city}</td>
                <td className="muted" style={{ whiteSpace: "nowrap" }}>{a.doc}</td>
                <td className="muted">{a.type}</td>
                <td><StatusBadge s={a.status} /></td>
                <td>
                  <div className="row" style={{ gap: 7, justifyContent: "flex-end" }}>
                    <button className="icon-btn ok" aria-label="Confirm" onClick={() => setStatus(a.id, "Confirmed")}><Icon name="check" size={16} /></button>
                    <button className="icon-btn" aria-label="Reschedule" onClick={() => notify("Reschedule link sent to patient")}><Icon name="calendar-sync" size={16} /></button>
                    <button className="icon-btn danger" aria-label="Cancel" onClick={() => setStatus(a.id, "Cancelled")}><Icon name="x" size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------------- Availability ---------------- */
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const ALL_SLOTS = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30"];

function AdminAvailability({ notify }) {
  const [clinic, setClinic] = React.useState("Islamabad — F-6 Markaz");
  const [day, setDay] = React.useState("Monday");
  const [dayOpen, setDayOpen] = React.useState(() => {
    const o = {}; DAYS.forEach((d) => (o[d] = d !== "Sunday")); return o;
  });
  const [slots, setSlots] = React.useState(() => {
    const s = {}; ALL_SLOTS.forEach((t) => (s[t] = true)); s["12:30"] = false; s["05:30"] = false; return s;
  });
  const clinics = ["Islamabad — F-6 Markaz", "Lahore — Gulberg III", "Karachi — Clifton", "Online", "Al Wasl — Dubai", "Jumeirah — Dubai"];
  const openCount = Object.values(slots).filter(Boolean).length;

  return (
    <div style={{ animation: "riseUp .4s var(--ease) both" }}>
      <div className="grid admin-split" style={{ gridTemplateColumns: "300px 1fr", gap: 22, alignItems: "start" }}>
        {/* clinic + days */}
        <div className="grid" style={{ gap: 18 }}>
          <div className="card card-pad">
            <div className="label" style={{ marginBottom: 8 }}>Clinic</div>
            <select className="select" value={clinic} onChange={(e) => setClinic(e.target.value)}>
              {clinics.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="card card-pad">
            <h3 className="serif" style={{ fontSize: 19, fontWeight: 600, margin: "0 0 6px" }}>Working days</h3>
            <p className="faint" style={{ fontSize: 12.5, margin: "0 0 14px" }}>Toggle the days this clinic accepts bookings.</p>
            <div className="grid" style={{ gap: 4 }}>
              {DAYS.map((d) => (
                <div key={d} className="row" style={{ justifyContent: "space-between", alignItems: "center", padding: "9px 10px", borderRadius: 10, cursor: "pointer",
                  background: day === d ? "var(--cream-2)" : "transparent" }} onClick={() => setDay(d)}>
                  <span style={{ fontSize: 14.5, fontWeight: day === d ? 700 : 500, color: dayOpen[d] ? "var(--ink)" : "var(--ink-faint)" }}>{d}</span>
                  <button className={"switch" + (dayOpen[d] ? " on" : "")} onClick={(e) => { e.stopPropagation(); setDayOpen((o) => ({ ...o, [d]: !o[d] })); }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* slot grid */}
        <div className="card card-pad">
          <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4, flexWrap: "wrap", gap: 12 }}>
            <div>
              <h3 className="serif" style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>{day} · time slots</h3>
              <p className="faint" style={{ fontSize: 13.5, margin: "4px 0 0" }}>{clinic} — {openCount} of {ALL_SLOTS.length} slots open. Click a slot to open or close it.</p>
            </div>
            <span className="badge badge-sage"><Icon name="clock" size={12} /> 30-min sessions</span>
          </div>

          {!dayOpen[day] ? (
            <div className="center" style={{ padding: "50px 20px", color: "var(--ink-faint)" }}>
              <Icon name="moon" size={30} /><div style={{ marginTop: 10, fontWeight: 600 }}>Closed on {day}s</div>
              <button className="btn btn-ghost btn-sm" style={{ marginTop: 14 }} onClick={() => setDayOpen((o) => ({ ...o, [day]: true }))}>Open this day</button>
            </div>
          ) : (
            <>
              <div className="grid slot-grid" style={{ gridTemplateColumns: "repeat(7,1fr)", gap: 9, margin: "20px 0 22px" }}>
                {ALL_SLOTS.map((t) => {
                  const hr = parseInt(t); const ap = hr < 10 || hr === 12 ? (hr === 12 ? "PM" : "AM") : hr < 6 ? "PM" : "AM";
                  return (
                    <button key={t} className={"avail-slot " + (slots[t] ? "open" : "closed")}
                      onClick={() => setSlots((s) => ({ ...s, [t]: !s[t] }))}>{t}<span style={{ fontSize: 10, opacity: .7 }}> {ap}</span></button>
                  );
                })}
              </div>
              <div className="row" style={{ gap: 18, fontSize: 12.5, marginBottom: 20 }}>
                <span className="row faint" style={{ gap: 6, alignItems: "center" }}><span style={{ width: 12, height: 12, borderRadius: 4, background: "var(--sage)" }} /> Open</span>
                <span className="row faint" style={{ gap: 6, alignItems: "center" }}><span style={{ width: 12, height: 12, borderRadius: 4, background: "var(--cream-2)", border: "1px solid var(--line-2)" }} /> Closed</span>
              </div>
            </>
          )}

          <hr className="divider" style={{ margin: "6px 0 18px" }} />
          <div className="row" style={{ justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div className="row" style={{ gap: 10 }}>
              <button className="btn btn-ghost btn-sm" onClick={() => setSlots((s) => { const n = {}; Object.keys(s).forEach((k) => (n[k] = true)); return n; })}><Icon name="check-check" size={15} /> Open all</button>
              <button className="btn btn-ghost btn-sm" onClick={() => notify("Select a date on the calendar to block")}><Icon name="calendar-x" size={15} /> Block a date</button>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => notify("Availability saved")}><Icon name="save" size={15} /> Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Patients ---------------- */
function AdminPatients({ notify }) {
  const patients = [
    { id: 1, name: "Ayesha Khan", tag: "New", visits: 1, allergies: "Penicillin", meds: "None", skin: "Combination · sensitive", report: "lab-report-march.pdf", verified: false },
    { id: 2, name: "Hira Malik", tag: "Returning", visits: 6, allergies: "None", meds: "Isotretinoin", skin: "Oily · acne-prone", report: "acne-history.pdf", verified: true },
    { id: 3, name: "Zoya Ahmed", tag: "Returning", visits: 3, allergies: "Sulfa drugs", meds: "None", skin: "Dry", report: "biopsy-result.pdf", verified: false },
    { id: 4, name: "Mahnoor Sheikh", tag: "VIP", visits: 12, allergies: "None", meds: "Tretinoin", skin: "Mature", report: "prescription-jun.jpg", verified: true },
  ];
  const [sel, setSel] = React.useState(patients[0]);
  const [verified, setVerified] = React.useState({});
  const [query, setQuery] = React.useState("");
  const isV = (p) => verified[p.id] ?? p.verified;
  const shown = patients.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="grid admin-split" style={{ gridTemplateColumns: "320px 1fr", gap: 22, alignItems: "start", animation: "riseUp .4s var(--ease) both" }}>
      {/* list */}
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--line)" }}>
          <div className="row" style={{ alignItems: "center", gap: 9, background: "var(--cream)", borderRadius: 10, padding: "9px 12px" }}>
            <Icon name="search" size={16} style={{ color: "var(--ink-faint)" }} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search patients…"
              style={{ border: "none", background: "transparent", outline: "none", fontSize: 14, flex: 1, color: "var(--ink)", fontFamily: "inherit" }} />
          </div>
        </div>
        {shown.length === 0 && <div className="faint center" style={{ padding: "28px 18px", fontSize: 14 }}>No patients found</div>}
        {shown.map((p) => (
          <button key={p.id} onClick={() => setSel(p)} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left",
            padding: "14px 18px", border: "none", borderBottom: "1px solid var(--line)", cursor: "pointer",
            background: sel.id === p.id ? "var(--rose-tint)" : "var(--white)", transition: ".15s" }}>
            <span style={{ width: 40, height: 40, borderRadius: "50%", background: sel.id === p.id ? "var(--rose-deep)" : "var(--cream-2)", color: sel.id === p.id ? "#fff" : "var(--ink-soft)", display: "grid", placeItems: "center", fontWeight: 700, flex: "none" }}>{p.name[0]}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 14.5 }}>{p.name}</div>
              <div className="faint" style={{ fontSize: 12.5 }}>{p.visits} visit{p.visits > 1 ? "s" : ""}</div>
            </div>
            {!isV(p) && <span title="Report pending" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />}
          </button>
        ))}
      </div>

      {/* detail */}
      <div className="grid" style={{ gap: 20 }}>
        <div className="card card-pad">
          <div className="row" style={{ alignItems: "center", gap: 14 }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--rose-deep)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 22 }}>{sel.name[0]}</span>
            <div style={{ flex: 1 }}>
              <div className="row" style={{ alignItems: "center", gap: 9 }}>
                <h2 className="serif" style={{ fontSize: 27, fontWeight: 600, margin: 0 }}>{sel.name}</h2>
                <span className="badge" style={sel.tag === "VIP" ? { background: "var(--gold-tint)", color: "#8a6a2c" } : sel.tag === "New" ? { background: "var(--rose-tint)", color: "var(--rose-deeper)" } : { background: "var(--sage-tint)", color: "#4d6650" }}>{sel.tag}</span>
              </div>
              <div className="faint" style={{ fontSize: 13.5, marginTop: 2 }}>{sel.visits} lifetime visit{sel.visits > 1 ? "s" : ""} · Patient ID #{1000 + sel.id}</div>
            </div>
            <button className="btn btn-ghost btn-sm" onClick={() => notify("Message sent to " + sel.name)}><Icon name="message-circle" size={15} /> Message</button>
          </div>
        </div>

        <div className="grid cols-2" style={{ gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div className="card card-pad">
            <h3 className="serif" style={{ fontSize: 19, fontWeight: 600, margin: "0 0 14px" }}>Medical history</h3>
            {[["Allergies", sel.allergies], ["Medications", sel.meds], ["Skin type", sel.skin]].map(([k, v]) => (
              <div key={k} className="row" style={{ justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--line)" }}>
                <span className="faint" style={{ fontSize: 14 }}>{k}</span><span style={{ fontWeight: 600, fontSize: 14, textAlign: "right", maxWidth: 160 }}>{v}</span>
              </div>
            ))}
          </div>

          <div className="card card-pad">
            <h3 className="serif" style={{ fontSize: 19, fontWeight: 600, margin: "0 0 14px" }}>Uploaded report</h3>
            <div className="file-chip" style={{ marginBottom: 16 }}>
              <span style={{ width: 38, height: 38, borderRadius: 10, background: "var(--gold-tint)", color: "var(--gold)", display: "grid", placeItems: "center" }}><Icon name="file-text" size={18} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{sel.report}</div>
                <div className="faint" style={{ fontSize: 12 }}>Uploaded by patient</div>
              </div>
              {isV(sel) && <span className="badge badge-sage"><Icon name="badge-check" size={12} /> Verified</span>}
            </div>
            <button className="btn btn-block" style={{ background: isV(sel) ? "var(--sage-tint)" : "var(--ink)", color: isV(sel) ? "#4d6650" : "#fff" }}
              onClick={() => { setVerified((v) => ({ ...v, [sel.id]: true })); notify("Report verified ✓"); }} disabled={isV(sel)}>
              {isV(sel) ? <><Icon name="check" size={16} /> Report verified</> : <><Icon name="shield-check" size={16} /> Verify report</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Shell ---------------- */
function AdminPanel({ go, notify, onLogout }) {
  const [section, setSection] = React.useState("overview");
  const [appts, setAppts] = React.useState(ADMIN_APPTS);
  const verifyCount = 2;

  const nav = [
    { k: "overview", l: "Overview", ic: "layout-dashboard" },
    { k: "appointments", l: "Appointments", ic: "calendar-days", n: appts.filter((a) => a.status === "Pending").length },
    { k: "availability", l: "Availability", ic: "calendar-cog" },
    { k: "patients", l: "Patients", ic: "users-round" },
  ];
  const titles = {
    overview: ["Overview", "Tuesday, 21 June 2026 · Islamabad F-6"],
    appointments: ["Appointments", "Manage bookings across all clinics"],
    availability: ["Availability", "Set working days and open time slots"],
    patients: ["Patient records", "Files, medical history and report verification"],
  };

  return (
    <div className="admin screen">
      {/* sidebar */}
      <aside className="aside">
        <div className="aside-brand">
          <div className="brand-mark"><Icon name="stethoscope" size={20} strokeWidth={2} style={{ fontSize: 20, alignItems: "center", justifyContent: "center" }} /></div>
          <div><div className="an">Dr. Fizza</div><div className="as">Staff Console</div></div>
        </div>
        <div className="aside-sec">Clinic management</div>
        {nav.map((n) => (
          <button key={n.k} className={"anav" + (section === n.k ? " on" : "")} onClick={() => setSection(n.k)}>
            <Icon name={n.ic} size={18} /> {n.l}
            {n.n > 0 && <span className="badge-n">{n.n}</span>}
          </button>
        ))}
        <div className="aside-foot">
          <span className="av">F</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#fff" }}>Dr. Fizza Ahmed</div>
            <div style={{ fontSize: 11.5, color: "rgba(232,221,216,.5)" }}>Administrator</div>
          </div>
          <button className="icon-btn" style={{ background: "transparent", borderColor: "rgba(255,255,255,.14)", color: "rgba(232,221,216,.7)" }} aria-label="Log out" onClick={() => onLogout ? onLogout() : go("landing")}><Icon name="log-out" size={15} /></button>
        </div>
      </aside>

      {/* main */}
      <main className="amain">
        <div className="abar">
          <div>
            <h1 className="display" style={{ fontSize: 34, margin: 0 }}>{titles[section][0]}</h1>
            <p className="faint" style={{ fontSize: 14, margin: "5px 0 0" }}>{titles[section][1]}</p>
          </div>
          <div className="row" style={{ gap: 10, alignItems: "center" }}>
            <button className="icon-btn" aria-label="Notifications" onClick={() => notify("No new notifications")}><Icon name="bell" size={17} /></button>
          </div>
        </div>

        {section === "overview" && <AdminOverview appts={appts} setSection={setSection} verifyCount={verifyCount} />}
        {section === "appointments" && <AdminAppointments appts={appts} setAppts={setAppts} notify={notify} />}
        {section === "availability" && <AdminAvailability notify={notify} />}
        {section === "patients" && <AdminPatients notify={notify} />}
      </main>
    </div>
  );
}

Object.assign(window, { AdminPanel });
