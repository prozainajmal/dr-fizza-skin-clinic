/* ============================================================
   Standalone Login page (Patient / Staff)
   Reached from the header "Log in" button.
   Patient  -> dashboard
   Staff     -> admin panel
   ============================================================ */
function LoginPage({ go, setUser, notify }) {
  const [role, setRole] = React.useState("patient"); // 'patient' | 'staff'
  const [mode, setMode] = React.useState("login");    // 'login' | 'register' (patient only)
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [name, setName] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState({});

  const isStaff = role === "staff";
  const clr = (k) => { if (err[k]) setErr((x) => ({ ...x, [k]: null })); };

  const submit = () => {
    const e = {};
    if (!isStaff && mode === "register" && !name.trim()) e.name = "Please enter your full name";
    const v = email.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const isPhone = /^[+]?[\d\s-]{10,}$/.test(v);
    if (!v) e.email = isStaff ? "Work email is required" : "Email or phone is required";
    else if (isStaff ? !isEmail : (!isEmail && !isPhone)) e.email = isStaff ? "Enter a valid email" : "Enter a valid email or phone";
    if (!pw) e.pw = "Password is required";
    else if (pw.length < 6) e.pw = "Password must be at least 6 characters";
    setErr(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (isStaff) {
        setUser({ name: "Dr. Fizza Ahmed", email: email || "admin@drfizza.clinic", role: "Admin", staff: true });
        notify && notify("Signed in as Staff");
        go("admin");
      } else if (mode === "register") {
        setUser({ name: name || "New Patient", email, role: "Patient", firstTime: true });
        notify && notify("Account created — welcome!");
        go("dashboard");
      } else {
        setUser({ name: "Ayesha Khan", email: email || "ayesha@email.com", role: "Patient", returning: true });
        notify && notify("Signed in — welcome back!");
        go("dashboard");
      }
    }, 1100);
  };

  const heroImg = isStaff
    ? "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=900&q=80"
    : "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80";

  return (
    <div className="screen login-grid" style={{ minHeight: "100vh", display: "grid", gridTemplateColumns: "1.05fr 1fr" }}>
      {/* ---------------- left: brand / reassurance ---------------- */}
      <div className="hide-sm" style={{ position: "relative", overflow: "hidden" }}>
        <Img src={heroImg} style={{ position: "absolute", inset: 0, height: "100%", width: "100%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(150deg, rgba(175,103,109,.72), rgba(42,42,42,.62))" }} />
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px 52px", color: "#fff" }}>
          <div className="brand" style={{ cursor: "pointer" }} onClick={() => go("landing")}>
            <div className="brand-mark" style={{ background: "rgba(255,255,255,.16)", backdropFilter: "blur(6px)", boxShadow: "none" }}>
              <Icon name="stethoscope" size={22} strokeWidth={2} style={{ fontSize: 22, alignItems: "center", justifyContent: "center" }} />
            </div>
            <div>
              <div className="brand-name" style={{ color: "#fff" }}>Dr. Fizza</div>
              <div className="brand-sub" style={{ color: "rgba(255,255,255,.7)" }}>Skin &amp; Aesthetics</div>
            </div>
          </div>

          <div>
            <span className="pill-tag" style={{ background: "rgba(255,255,255,.16)", color: "#fff", backdropFilter: "blur(6px)" }}>
              <Icon name={isStaff ? "shield-check" : "heart"} size={14} /> {isStaff ? "Staff & Moderator access" : "Patient portal"}
            </span>
            <h1 className="display" style={{ fontSize: 46, color: "#fff", margin: "20px 0 14px" }}>
              {isStaff ? "Run your clinic, calmly." : "Your skin journey, in one place."}
            </h1>
            <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "rgba(255,255,255,.85)", maxWidth: 420, margin: 0 }}>
              {isStaff
                ? "See today's schedule, manage availability, review patient files and verify uploaded reports — all from one console."
                : "Track upcoming visits, review your medical history, and manage reports across all our clinics."}
            </p>
            <div className="row" style={{ gap: 26, marginTop: 34 }}>
              {(isStaff
                ? [["calendar-check", "Live schedule"], ["clock", "Set availability"], ["badge-check", "Verify reports"]]
                : [["calendar-heart", "Easy booking"], ["file-text", "Your records"], ["shield", "Private & secure"]]
              ).map(([ic, l]) => (
                <div key={l} className="row" style={{ gap: 9, alignItems: "center" }}>
                  <span style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,255,255,.16)", display: "grid", placeItems: "center", flex: "none" }}>
                    <Icon name={ic} size={16} />
                  </span>
                  <span style={{ fontSize: 13.5, fontWeight: 600 }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- right: form ---------------- */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 40px", background: "var(--cream)" }}>
        <div style={{ width: "100%", maxWidth: 400, animation: "riseUp .5s var(--ease) both" }}>
          {/* role switch */}
          <div className="row" style={{ background: "var(--cream-2)", borderRadius: "var(--r-pill)", padding: 4, marginBottom: 30 }}>
            {[["patient", "Patient", "user-round"], ["staff", "Staff / Admin", "shield"]].map(([k, l, ic]) => (
              <button key={k} onClick={() => { setRole(k); setMode("login"); setErr({}); }} className="btn-sm"
                style={{ flex: 1, border: "none", borderRadius: "var(--r-pill)", fontWeight: 600, fontSize: 13.5,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
                  background: role === k ? "var(--white)" : "transparent",
                  color: role === k ? "var(--ink)" : "var(--ink-faint)",
                  boxShadow: role === k ? "var(--sh-sm)" : "none", padding: "11px 0", transition: ".2s" }}>
                <Icon name={ic} size={15} /> {l}
              </button>
            ))}
          </div>

          <span className="eyebrow">{isStaff ? "Staff console" : mode === "register" ? "New patient" : "Welcome back"}</span>
          <h2 className="display" style={{ fontSize: 34, margin: "10px 0 6px" }}>
            {isStaff ? "Sign in to your console" : mode === "register" ? "Create your account" : "Sign in to your portal"}
          </h2>
          <p className="muted" style={{ fontSize: 14.5, marginTop: 0, marginBottom: 26 }}>
            {isStaff ? "For clinic doctors, moderators & front-desk staff." : "Access your appointments and records."}
          </p>

          <div className="grid" style={{ gap: 16 }}>
            {!isStaff && mode === "register" && (
              <Field label="Full name" error={err.name}>
                <input className="input" placeholder="e.g. Ayesha Khan" value={name} onChange={(e) => { setName(e.target.value); clr("name"); }} />
              </Field>
            )}
            <Field label={isStaff ? "Work email" : "Email or phone"} error={err.email}>
              <input className="input" placeholder={isStaff ? "you@drfizza.clinic" : "you@email.com"} value={email} onChange={(e) => { setEmail(e.target.value); clr("email"); }} />
            </Field>
            <Field label="Password" error={err.pw}>
              <div style={{ position: "relative" }}>
                <input className="input" type={show ? "text" : "password"} placeholder="••••••••" value={pw}
                  onChange={(e) => { setPw(e.target.value); clr("pw"); }} style={{ paddingRight: 44 }} />
                <button onClick={() => setShow((s) => !s)} type="button"
                  style={{ position: "absolute", right: 6, top: "50%", transform: "translateY(-50%)", background: "transparent", border: "none", padding: 8, color: "var(--ink-faint)", display: "grid", placeItems: "center" }}>
                  <Icon name={show ? "eye-off" : "eye"} size={17} />
                </button>
              </div>
            </Field>

            <div className="row" style={{ justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
              <label className="row" style={{ gap: 8, alignItems: "center", cursor: "pointer", color: "var(--ink-soft)" }}>
                <input type="checkbox" defaultChecked style={{ accentColor: "var(--rose-deep)", width: 15, height: 15 }} /> Remember me
              </label>
              {!isStaff && <a className="nav-link" style={{ color: "var(--rose-deep)", fontWeight: 600, cursor: "pointer" }} onClick={() => notify && notify("Password reset link sent to your email")}>Forgot password?</a>}
            </div>

            <button className="btn btn-primary btn-block btn-lg" onClick={submit} disabled={loading}>
              {loading ? <><Icon name="loader-circle" size={18} className="spin" /> Signing in…</>
                : isStaff ? <><Icon name="shield-check" size={17} /> Enter console</>
                : mode === "register" ? "Create account" : "Sign in"}
            </button>

            {isStaff ? (
              <div className="row" style={{ gap: 9, alignItems: "flex-start", padding: "12px 14px", background: "var(--rose-tint)", borderRadius: "var(--r)", fontSize: 12.5, color: "var(--rose-deeper)" }}>
                <Icon name="info" size={15} style={{ marginTop: 1, flex: "none" }} />
                <span>Demo: any email &amp; password opens the staff console. Role-based access is mocked.</span>
              </div>
            ) : (
              <>
                <div className="row" style={{ alignItems: "center", gap: 12, margin: "2px 0" }}>
                  <hr className="divider" style={{ flex: 1 }} /><span className="faint" style={{ fontSize: 12 }}>or</span><hr className="divider" style={{ flex: 1 }} />
                </div>
                <button className="btn btn-ghost btn-block" onClick={() => go("location")}>
                  <Icon name="calendar-plus" size={17} /> Book without an account
                </button>
                <p className="center faint" style={{ fontSize: 13.5, margin: "6px 0 0" }}>
                  {mode === "register" ? "Already have an account?" : "New patient?"}{" "}
                  <a onClick={() => { setMode(mode === "register" ? "login" : "register"); setErr({}); }}
                    style={{ color: "var(--rose-deep)", fontWeight: 700, cursor: "pointer" }}>
                    {mode === "register" ? "Sign in" : "Create one"}
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { LoginPage });
