/* Auth checkpoint — the "login later" moment */
function AuthCheckpoint({ go, booking, setUser }) {
  const [tab, setTab] = React.useState("register");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [err, setErr] = React.useState({});

  const validate = () => {
    const e = {};
    if (tab === "register" && !name.trim()) e.name = "Please enter your full name";
    const v = email.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const isPhone = /^[+]?[\d\s-]{10,}$/.test(v);
    if (!v) e.email = "Email or phone is required";
    else if (!isEmail && !isPhone) e.email = "Enter a valid email or phone number";
    if (!pw) e.pw = "Password is required";
    else if (pw.length < 6) e.pw = "Password must be at least 6 characters";
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const proceed = (asGuest) => {
    if (asGuest) {
      setUser({ name: "Guest", guest: true, role: "Patient" });
      go("details");
      return;
    }
    if (!validate()) return;
    if (tab === "register") {
      setUser({ name: name || "New Patient", email, role: "Patient", firstTime: true });
    } else {
      setUser({ name: "Ayesha Khan", email: email || "ayesha@email.com", role: "Patient", returning: true });
    }
    go("details");
  };

  return (
    <div className="screen" style={{ display: "grid", placeItems: "center", padding: "50px 20px 70px" }}>
      <div className="center" style={{ marginBottom: 28 }}><Stepper current="auth" /></div>
      <div className="card cols-2-card" style={{ width: "100%", maxWidth: 940, padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", animation: "pop .5s var(--ease) both" }}>
        {/* left: reassurance */}
        <div style={{ padding: "44px 42px", background: "linear-gradient(165deg,var(--rose-tint),var(--cream-2))", display: "flex", flexDirection: "column" }}>
          <span className="pill-tag" style={{ alignSelf: "flex-start" }}><Icon name="lock-keyhole" size={13} /> Almost there</span>
          <h1 className="display" style={{ fontSize: 40, margin: "20px 0 12px" }}>Sign in to confirm your booking</h1>
          <p className="muted" style={{ fontSize: 16, lineHeight: 1.6 }}>
            We only ask now so we can send your confirmation and keep your medical history safe.
            Prefer not to? You can continue as a guest.
          </p>
          <div className="card" style={{ marginTop: "auto", padding: 18, boxShadow: "var(--sh-sm)" }}>
            <div className="summary-k" style={{ marginBottom: 10 }}>You're reserving</div>
            <div className="row" style={{ gap: 10, alignItems: "center", marginBottom: 8 }}>
              <Icon name="map-pin" size={16} style={{ color: "var(--rose-deep)" }} />
              <strong style={{ fontSize: 14.5 }}>{booking.city ? booking.city.name : "—"}</strong>
            </div>
            <div className="row" style={{ gap: 10, alignItems: "center" }}>
              <Icon name="calendar-clock" size={16} style={{ color: "var(--rose-deep)" }} />
              <strong style={{ fontSize: 14.5 }}>
                {booking.date ? fmtDate(booking.date) : "—"}{booking.time ? ` · ${booking.time}` : ""}
              </strong>
            </div>
          </div>
        </div>

        {/* right: form */}
        <div style={{ padding: "40px 42px" }}>
          <div className="row" style={{ background: "var(--cream-2)", borderRadius: "var(--r-pill)", padding: 4, marginBottom: 26 }}>
            {[["register", "Register"], ["login", "Log in"]].map(([k, l]) => (
              <button key={k} onClick={() => { setTab(k); setErr({}); }} className="btn-sm"
                style={{ flex: 1, border: "none", borderRadius: "var(--r-pill)", fontWeight: 600, fontSize: 14,
                  background: tab === k ? "var(--white)" : "transparent", color: tab === k ? "var(--ink)" : "var(--ink-faint)",
                  boxShadow: tab === k ? "var(--sh-sm)" : "none", padding: "10px 0", transition: ".2s" }}>
                {l}
              </button>
            ))}
          </div>

          <div className="grid" style={{ gap: 16 }}>
            {tab === "register" && (
              <Field label="Full name" error={err.name}>
                <input className="input" placeholder="e.g. Ayesha Khan" value={name} onChange={(e) => { setName(e.target.value); if (err.name) setErr((x) => ({ ...x, name: null })); }} />
              </Field>
            )}
            <Field label="Email or phone" error={err.email}>
              <input className="input" placeholder="you@email.com" value={email} onChange={(e) => { setEmail(e.target.value); if (err.email) setErr((x) => ({ ...x, email: null })); }} />
            </Field>
            <Field label="Password" error={err.pw}>
              <input className="input" type="password" placeholder="••••••••" value={pw} onChange={(e) => { setPw(e.target.value); if (err.pw) setErr((x) => ({ ...x, pw: null })); }} />
            </Field>
            {tab === "register" && (
              <div className="row" style={{ gap: 9, alignItems: "center", fontSize: 13 }}>
                <span className="badge badge-rose"><Icon name="user-check" size={12} /> Patient role</span>
                <span className="faint">assigned automatically</span>
              </div>
            )}
            <button className="btn btn-primary btn-block btn-lg" onClick={() => proceed(false)}>
              {tab === "register" ? "Create account & continue" : "Log in & continue"}
            </button>
            <div className="row" style={{ alignItems: "center", gap: 12, margin: "2px 0" }}>
              <hr className="divider" style={{ flex: 1 }} /><span className="faint" style={{ fontSize: 12 }}>or</span><hr className="divider" style={{ flex: 1 }} />
            </div>
            <button className="btn btn-ghost btn-block" onClick={() => proceed(true)}>
              <Icon name="user-round" size={17} /> Continue as guest
            </button>
            <p className="faint center" style={{ fontSize: 12, margin: "6px 0 0", lineHeight: 1.5 }}>
              By continuing you agree to our Terms &amp; Privacy Policy. This is a demo — no real account is created.
            </p>
          </div>
        </div>
      </div>
      <button className="btn btn-quiet" style={{ marginTop: 18 }} onClick={() => go("calendar")}>
        <Icon name="arrow-left" size={16} /> Back to calendar
      </button>
    </div>
  );
}
Object.assign(window, { AuthCheckpoint });
