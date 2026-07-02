/* Payment + Confirmation */
function Payment({ go, booking, setBooking }) {
  const [num, setNum] = React.useState("");
  const [exp, setExp] = React.useState("");
  const [cvc, setCvc] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [easypaisa, setEasypaisa] = React.useState("");
  const [method, setMethod] = React.useState("Card");
  const [err, setErr] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const fee = booking.city ? booking.city.feeNum : 5000;
  const cur = booking.city ? booking.city.cur : "PKR";
  const fmtMoney = (n) => `${cur} ${n.toLocaleString()}`;
  const clr = (k) => { if (err[k]) setErr((x) => ({ ...x, [k]: null })); };

  const validate = () => {
    const e = {};
    if (method === "Card") {
      const digits = num.replace(/\s/g, "");
      if (!digits) e.num = "Card number is required";
      else if (digits.length < 16) e.num = "Enter a valid 16-digit card number";
      if (!exp) e.exp = "Required";
      else if (!/^\d{2}\s*\/\s*\d{2}$/.test(exp)) e.exp = "Use MM / YY";
      if (!cvc) e.cvc = "Required";
      else if (!/^\d{3,4}$/.test(cvc)) e.cvc = "3–4 digits";
      if (!cardName.trim()) e.cardName = "Name on card is required";
    } else if (method === "Easypaisa") {
      if (!easypaisa) e.easypaisa = "Mobile account number is required";
      else if (!/^0?3\d{9}$/.test(easypaisa.replace(/\s/g, ""))) e.easypaisa = "Enter a valid mobile number";
    }
    setErr(e);
    return Object.keys(e).length === 0;
  };

  const pay = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      const ref = "DF-" + Math.random().toString(36).slice(2, 7).toUpperCase();
      setBooking((b) => ({ ...b, ref, paid: true }));
      go("confirmation");
    }, 1500);
  };
  const fmtCard = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const fmtExp = (v) => { const d = v.replace(/\D/g, "").slice(0, 4); return d.length > 2 ? d.slice(0, 2) + " / " + d.slice(2) : d; };

  return (
    <div className="screen wrap" style={{ padding: "40px 28px 70px", maxWidth: 980 }}>
      <div className="center" style={{ marginBottom: 34 }}><Stepper current="payment" /></div>
      <div className="grid split" style={{ gridTemplateColumns: "1fr 360px", gap: 30, alignItems: "start" }}>
        <div>
          <span className="eyebrow">Step 4</span>
          <h1 className="display" style={{ fontSize: 42, margin: "10px 0 4px" }}>Secure your slot</h1>
          <p className="muted" style={{ fontSize: 16, marginBottom: 24 }}>Pay the consultation fee to confirm. Fully refundable up to 24 hours before.</p>

          <div className="card card-pad grid" style={{ gap: 18 }}>
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center" }}>
              <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, margin: 0 }}>Payment details</h3>
              <div className="row" style={{ gap: 6, color: "var(--ink-faint)" }}>
                <Icon name="lock" size={13} /> <span style={{ fontSize: 12.5 }}>Encrypted</span>
              </div>
            </div>

            <div className="row" style={{ gap: 10 }}>
              {[["credit-card", "Card"], ["smartphone", "Easypaisa"], ["building-2", "Bank"]].map(([ic, l]) => {
                const on = method === l;
                return (
                  <button key={l} type="button" className="chip" onClick={() => { setMethod(l); setErr({}); }} style={{ flex: 1, justifyContent: "center", padding: "12px", cursor: "pointer",
                    borderColor: on ? "var(--rose-deep)" : "var(--line-2)", color: on ? "var(--rose-deep)" : "var(--ink-soft)",
                    background: on ? "var(--rose-tint)" : "var(--white)", fontWeight: on ? 700 : 500 }}>
                    <Icon name={ic} size={16} /> {l}
                  </button>
                );
              })}
            </div>

            {method === "Card" && (
              <>
                <Field label="Card number" error={err.num}>
                  <input className="input" placeholder="4242 4242 4242 4242" value={num} onChange={(e) => { setNum(fmtCard(e.target.value)); clr("num"); }} inputMode="numeric" />
                </Field>
                <div className="grid cols-2" style={{ gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Field label="Expiry" error={err.exp}><input className="input" placeholder="MM / YY" value={exp} onChange={(e) => { setExp(fmtExp(e.target.value)); clr("exp"); }} inputMode="numeric" /></Field>
                  <Field label="CVC" error={err.cvc}><input className="input" placeholder="123" value={cvc} onChange={(e) => { setCvc(e.target.value.replace(/\D/g, "").slice(0, 4)); clr("cvc"); }} inputMode="numeric" /></Field>
                </div>
                <Field label="Name on card" error={err.cardName}><input className="input" placeholder="Ayesha Khan" value={cardName} onChange={(e) => { setCardName(e.target.value); clr("cardName"); }} /></Field>
              </>
            )}
            {method === "Easypaisa" && (
              <Field label="Mobile account number" error={err.easypaisa}><input className="input" placeholder="03XX XXXXXXX" value={easypaisa} onChange={(e) => { setEasypaisa(e.target.value); clr("easypaisa"); }} inputMode="numeric" /></Field>
            )}
            {method === "Bank" && (
              <div className="row" style={{ gap: 9, alignItems: "flex-start", padding: "14px 16px", background: "var(--cream-2)", borderRadius: "var(--r)", fontSize: 13.5, color: "var(--ink-soft)" }}>
                <Icon name="building-2" size={16} style={{ marginTop: 1, flex: "none" }} />
                <span>Transfer to <strong>Dr. Fizza Clinic · Meezan Bank</strong> · IBAN PK00 0000 0000 0000. Your slot is held for 30 minutes.</span>
              </div>
            )}

            <button className="btn btn-primary btn-block btn-lg" onClick={pay} disabled={loading}>
              {loading ? <><Icon name="loader-circle" size={18} className="spin" /> Processing…</> : <><Icon name="lock" size={17} /> Pay {fmtMoney(fee)}</>}
            </button>
            <p className="faint center" style={{ fontSize: 12, margin: 0 }}>Demo only — no real charge is made.</p>
          </div>
        </div>

        <div style={{ position: "sticky", top: 96 }} className="sticky-side">
          <BookingSummary booking={booking} footer={
            <div>
              <div className="row" style={{ justifyContent: "space-between", padding: "4px 2px 12px", fontSize: 14 }}>
                <span className="muted">Consultation</span><span style={{ fontWeight: 600 }}>{fmtMoney(fee)}</span>
              </div>
              <div className="row" style={{ justifyContent: "space-between", padding: "0 2px 14px", fontSize: 14 }}>
                <span className="muted">Booking fee</span><span className="badge badge-sage">Free</span>
              </div>
              <hr className="divider" />
              <div className="row" style={{ justifyContent: "space-between", padding: "14px 2px 2px" }}>
                <strong>Total today</strong><strong className="serif" style={{ fontSize: 22 }}>{fmtMoney(fee)}</strong>
              </div>
            </div>
          } />
          <button className="btn btn-quiet btn-block" style={{ marginTop: 12 }} onClick={() => go("details")}>
            <Icon name="arrow-left" size={16} /> Back
          </button>
        </div>
      </div>
    </div>
  );
}

function Confirmation({ go, booking, user }) {
  const city = booking.city;

  const addToCalendar = () => {
    const d = booking.date instanceof Date ? new Date(booking.date) : new Date();
    // parse "4:30 PM" into hours/minutes
    let hh = 16, mm = 30;
    if (booking.time) {
      const m = booking.time.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (m) {
        hh = parseInt(m[1]) % 12 + (m[3].toUpperCase() === "PM" ? 12 : 0);
        mm = parseInt(m[2]);
      }
    }
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm);
    const end = new Date(start.getTime() + 30 * 60000);
    const fmt = (x) => x.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Dr Fizza Skin Clinic//Booking//EN",
      "BEGIN:VEVENT",
      "UID:" + (booking.ref || "DF") + "@drfizza.clinic",
      "DTSTAMP:" + fmt(new Date()),
      "DTSTART:" + fmt(start),
      "DTEND:" + fmt(end),
      "SUMMARY:Dr. Fizza Skin Clinic — Consultation",
      "LOCATION:" + (city ? (city.name + ", " + city.address).replace(/,/g, "\\,") : "Dr. Fizza Skin Clinic"),
      "DESCRIPTION:Booking reference " + (booking.ref || "DF-XXXXX"),
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dr-fizza-appointment.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="screen" style={{ display: "grid", placeItems: "center", padding: "60px 20px 80px" }}>
      <div className="card center" style={{ maxWidth: 560, width: "100%", padding: 0, overflow: "hidden", animation: "pop .5s var(--ease) both" }}>
        <div style={{ background: "linear-gradient(165deg,var(--sage-tint),var(--cream-2))", padding: "44px 40px 30px" }}>
          <span style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--sage)", color: "#fff", display: "grid", placeItems: "center", margin: "0 auto 20px", boxShadow: "0 12px 30px rgba(143,166,142,.5)", animation: "pop .6s .15s var(--ease) both" }}>
            <Icon name="check" size={38} strokeWidth={2.5} />
          </span>
          <h1 className="display" style={{ fontSize: 38, margin: "0 0 8px" }}>You're all booked!</h1>
          <p className="muted" style={{ fontSize: 16, margin: 0 }}>
            A confirmation was sent via <strong>Email</strong> &amp; <strong>WhatsApp</strong>.
          </p>
        </div>
        <div style={{ padding: "30px 40px 36px" }}>
          <div className="row" style={{ justifyContent: "center", gap: 8, marginBottom: 22 }}>
            <span className="badge badge-rose" style={{ fontSize: 13, padding: "8px 16px" }}>
              <Icon name="hash" size={13} /> Ref {booking.ref || "DF-XXXXX"}
            </span>
          </div>
          <div className="grid" style={{ gap: 0, textAlign: "left", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", overflow: "hidden" }}>
            {[
              ["map-pin", "Clinic", city ? city.name : "—", city ? city.address : ""],
              ["calendar", "Date & time", booking.date ? fmtDate(booking.date) : "—", booking.time || ""],
              ["user-round", "Patient", user ? user.name : "Guest", user && user.email ? user.email : "Patient"],
            ].map(([ic, k, v, sub], i) => (
              <div key={k} className="row" style={{ gap: 13, padding: "15px 18px", borderTop: i ? "1px solid var(--line)" : "none", alignItems: "center" }}>
                <span className="summary-ico"><Icon name={ic} size={17} /></span>
                <div>
                  <div className="summary-k">{k}</div>
                  <div className="summary-v">{v}</div>
                  {sub && <div className="faint" style={{ fontSize: 13 }}>{sub}</div>}
                </div>
              </div>
            ))}
          </div>
          <div className="grid" style={{ gap: 10, marginTop: 24 }}>
            <button className="btn btn-primary btn-block btn-lg" onClick={() => go("dashboard")}>
              Go to my dashboard <Icon name="arrow-right" size={18} />
            </button>
            <button className="btn btn-ghost btn-block" onClick={addToCalendar}>
              <Icon name="calendar-plus" size={17} /> Add to calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Payment, Confirmation });
