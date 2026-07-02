/* ============================================================
   Patient Profile — view & edit account, then log out
   ============================================================ */
function Profile({ go, user, setUser, notify }) {
  const base = user || { name: "Guest", email: "", phone: "" };
  const [name, setName] = React.useState(base.name && base.name !== "Guest" ? base.name : "");
  const [email, setEmail] = React.useState(base.email || "");
  const [phone, setPhone] = React.useState(base.phone || "");
  const [dob, setDob] = React.useState(base.dob || "");
  const [gender, setGender] = React.useState(base.gender || "");
  const [notifs, setNotifs] = React.useState(base.notifs !== false);
  const [saved, setSaved] = React.useState(false);
  const [err, setErr] = React.useState({});
  const clr = (k) => { if (err[k]) setErr((x) => ({ ...x, [k]: null })); };

  const initials = (name || "P").trim().split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();

  const save = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email";
    if (phone.trim() && !/^[+]?[\d\s-]{10,}$/.test(phone.trim())) e.phone = "Enter a valid phone number";
    setErr(e);
    if (Object.keys(e).length) return;
    setUser((u) => ({ ...(u || {}), name: name || "Guest", email, phone, dob, gender, notifs, guest: false }));
    setSaved(true);
    notify && notify("Profile updated");
    setTimeout(() => setSaved(false), 2000);
  };

  const logout = () => {
    setUser(null);
    notify && notify("You've been logged out");
    go("landing");
  };

  return (
    <div className="screen wrap" style={{ padding: "40px 28px 80px", maxWidth: 860 }}>
      <button className="btn btn-quiet btn-sm" onClick={() => go("dashboard")} style={{ marginBottom: 22 }}>
        <Icon name="arrow-left" size={16} /> Back to dashboard
      </button>

      {/* header card */}
      <div className="card" style={{ padding: 0, overflow: "hidden", marginBottom: 22 }}>
        <div style={{ height: 96, background: "linear-gradient(120deg, var(--rose) 0%, var(--rose-deep) 100%)" }} />
        <div className="profile-head" style={{ padding: "0 28px 24px", marginTop: -44, display: "flex", alignItems: "flex-end", gap: 18, flexWrap: "wrap" }}>
          <span style={{ width: 88, height: 88, borderRadius: "50%", background: "var(--rose-deeper)", color: "#fff",
            display: "grid", placeItems: "center", fontSize: 32, fontWeight: 700, border: "4px solid var(--white)",
            boxShadow: "var(--sh-sm)", flex: "none", fontFamily: "var(--serif)" }}>{initials}</span>
          <div style={{ flex: 1, minWidth: 180, paddingBottom: 4 }}>
            <div className="serif" style={{ fontSize: 27, fontWeight: 600 }}>{name || "Your profile"}</div>
            <div className="faint" style={{ fontSize: 14, marginTop: 2 }}>{email || "Add your contact details below"}</div>
          </div>
          <button className="btn btn-danger btn-sm" onClick={logout} style={{ marginBottom: 4 }}>
            <Icon name="log-out" size={16} /> Log out
          </button>
        </div>
      </div>

      {/* details */}
      <div className="card card-pad" style={{ marginBottom: 22 }}>
        <h3 className="serif" style={{ fontSize: 20, fontWeight: 600, margin: "0 0 18px" }}>Personal details</h3>
        <div className="grid cols-2" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <Field label="Full name" error={err.name}><input className="input" value={name} onChange={(e) => { setName(e.target.value); clr("name"); }} placeholder="Ayesha Khan" /></Field>
          <Field label="Email" error={err.email}><input className="input" value={email} onChange={(e) => { setEmail(e.target.value); clr("email"); }} placeholder="you@email.com" type="email" /></Field>
          <Field label="Phone" error={err.phone}><input className="input" value={phone} onChange={(e) => { setPhone(e.target.value); clr("phone"); }} placeholder="03XX XXXXXXX" /></Field>
          <Field label="Date of birth"><input className="input" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="DD / MM / YYYY" /></Field>
          <Field label="Gender">
            <select className="input" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Prefer not to say</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </Field>
        </div>
      </div>

      {/* preferences */}
      <div className="card card-pad" style={{ marginBottom: 26 }}>
        <h3 className="serif" style={{ fontSize: 20, fontWeight: 600, margin: "0 0 4px" }}>Preferences</h3>
        <label className="row" style={{ justifyContent: "space-between", alignItems: "center", cursor: "pointer", padding: "14px 0 4px" }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Appointment reminders</div>
            <div className="faint" style={{ fontSize: 13.5 }}>Get Email &amp; WhatsApp reminders before each visit.</div>
          </div>
          <span onClick={() => setNotifs((v) => !v)} style={{ width: 46, height: 27, borderRadius: 20, flex: "none",
            background: notifs ? "var(--rose-deep)" : "var(--line-2)", position: "relative", transition: ".2s var(--ease)" }}>
            <span style={{ position: "absolute", top: 3, left: notifs ? 22 : 3, width: 21, height: 21, borderRadius: "50%",
              background: "#fff", transition: ".2s var(--ease)", boxShadow: "var(--sh-sm)" }} />
          </span>
        </label>
      </div>

      <div className="row" style={{ justifyContent: "flex-end", gap: 12 }}>
        <button className="btn btn-quiet" onClick={() => go("dashboard")}>Cancel</button>
        <button className="btn btn-primary" onClick={save}>
          <Icon name={saved ? "check" : "save"} size={17} /> {saved ? "Saved" : "Save changes"}
        </button>
      </div>
    </div>
  );
}

Object.assign(window, { Profile });
