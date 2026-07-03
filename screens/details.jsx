/* Visit details + medical history + uploads */
function VisitDetails({ go, booking, setBooking, user }) {
  const [reason, setReason] = React.useState(booking.reason || "");
  const [allergies, setAllergies] = React.useState("");
  const [meds, setMeds] = React.useState("");
  const [history, setHistory] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const firstTime = !user || user.firstTime || user.guest;

  const concerns = ["Acne", "Pigmentation", "Anti-aging", "Laser", "Hair loss", "General check-up"];
  const [picked, setPicked] = React.useState([]);
  const [err, setErr] = React.useState({});
  const toggle = (c) => { setPicked((p) => p.includes(c) ? p.filter((x) => x !== c) : [...p, c]); if (err.concerns) setErr((x) => ({ ...x, concerns: null })); };

  const next = () => {
    const e = {};
    if (picked.length === 0) e.concerns = "Please select at least one reason for your visit";
    setErr(e);
    if (Object.keys(e).length) return;
    setBooking((b) => ({ ...b, reason, concerns: picked }));
    go("payment");
  };
  const addFile = () => setFiles((f) => [...f, { name: `report-${f.length + 1}.jpg`, size: "1.2 MB" }]);

  return (
    <div className="screen wrap" style={{ padding: "40px 28px 70px" }}>
      <div className="center" style={{ marginBottom: 34 }}><Stepper current="details" /></div>
      <div className="grid split" style={{ gridTemplateColumns: "1fr 360px", gap: 30, alignItems: "start" }}>
        <div className="grid" style={{ gap: 20 }}>
          <div>
            <span className="eyebrow">Step 3</span>
            <h1 className="display" style={{ fontSize: 42, margin: "10px 0 4px" }}>Tell us about your visit</h1>
            <p className="muted" style={{ fontSize: 16 }}>A few quick details help our specialists prepare for you.</p>
          </div>

          {/* reason */}
          <div className="card card-pad grid" style={{ gap: 18 }}>
            <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, margin: 0 }}>Reason for visit</h3>
            <div className="row" style={{ gap: 9, flexWrap: "wrap" }}>
              {concerns.map((c) => (
                <button key={c} onClick={() => toggle(c)}
                  className="chip" style={{ cursor: "pointer",
                    background: picked.includes(c) ? "var(--rose-deep)" : "var(--white)",
                    color: picked.includes(c) ? "#fff" : "var(--ink-soft)",
                    borderColor: picked.includes(c) ? "var(--rose-deep)" : "var(--line-2)" }}>
                  {picked.includes(c) && <Icon name="check" size={13} />} {c}
                </button>
              ))}
            </div>
            {err.concerns && <span className="field-err"><Icon name="alert-circle" size={13} /> {err.concerns}</span>}
            <Field label="Anything you'd like us to know? (optional)">
              <textarea className="textarea" placeholder="Describe your concern, symptoms, or goals…"
                value={reason} onChange={(e) => setReason(e.target.value)} />
            </Field>
          </div>

          {/* medical history */}
          <div className="card card-pad grid" style={{ gap: 18 }}>
            <div className="row" style={{ alignItems: "center", gap: 10 }}>
              <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, margin: 0 }}>Medical history</h3>
              {firstTime && <span className="badge badge-gold"><Icon name="sparkles" size={12} /> First visit</span>}
            </div>
            <p className="faint" style={{ fontSize: 13.5, margin: "-6px 0 0" }}>Kept private and shared only with your treating doctor.</p>
            <div className="grid cols-2" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <Field label="Known allergies">
                <input className="input" placeholder="e.g. penicillin, none" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
              </Field>
              <Field label="Current medications">
                <input className="input" placeholder="e.g. isotretinoin" value={meds} onChange={(e) => setMeds(e.target.value)} />
              </Field>
            </div>
            <Field label="Past skin conditions or treatments">
              <textarea className="textarea" style={{ minHeight: 72 }} placeholder="e.g. eczema, previous chemical peel…"
                value={history} onChange={(e) => setHistory(e.target.value)} />
            </Field>
          </div>

          {/* upload */}
          <div className="card card-pad grid" style={{ gap: 16 }}>
            <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, margin: 0 }}>Reports &amp; prescriptions <span className="faint" style={{ fontSize: 14, fontWeight: 400 }}>(optional)</span></h3>
            <div className="drop" onClick={addFile}>
              <span style={{ width: 48, height: 48, borderRadius: 14, background: "var(--rose-tint)", color: "var(--rose-deep)", display: "grid", placeItems: "center", margin: "0 auto 12px" }}>
                <Icon name="upload-cloud" size={24} />
              </span>
              <div style={{ fontWeight: 600, fontSize: 15 }}>Drag &amp; drop or click to upload</div>
              <div className="faint" style={{ fontSize: 13, marginTop: 3 }}>PDF, JPG or PNG · up to 10 MB</div>
            </div>
            {files.map((f, i) => (
              <div key={i} className="file-chip">
                <span style={{ width: 36, height: 36, borderRadius: 9, background: "var(--gold-tint)", color: "var(--gold)", display: "grid", placeItems: "center" }}>
                  <Icon name="file-text" size={17} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{f.name}</div>
                  <div className="faint" style={{ fontSize: 12 }}>{f.size} · uploaded</div>
                </div>
                <span className="badge badge-sage"><Icon name="check" size={12} /> Ready</span>
                <button className="chip" style={{ padding: 7, cursor: "pointer" }} onClick={(e) => { e.stopPropagation(); setFiles((arr) => arr.filter((_, j) => j !== i)); }}>
                  <Icon name="x" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* summary */}
        <div style={{ position: "sticky", top: 96 }} className="sticky-side">
          <BookingSummary booking={booking} footer={
            <button className="btn btn-primary btn-block btn-lg" onClick={next}>
              Continue to payment <Icon name="arrow-right" size={18} />
            </button>
          } />
          <button className="btn btn-quiet btn-block" style={{ marginTop: 12 }} onClick={() => go("calendar")}>
            <Icon name="arrow-left" size={16} /> Back
          </button>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { VisitDetails });
