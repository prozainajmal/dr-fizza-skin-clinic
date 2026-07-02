/* ============================================================
   Floating assistant — "Ask Fizza"
   Bottom-left launcher that opens a small popup chat window.
   Hardcoded guided flow: click a suggestion → bot replies,
   some replies deep-link into the booking screens or WhatsApp.
   ============================================================ */

const KB = {
  book: {
    q: "How do I book?",
    a: "Booking takes under a minute — pick a clinic, choose an open date & time, add a few details, then pay the consultation fee to confirm. You don't need an account until checkout.",
    cta: { label: "Start booking", screen: "location" },
  },
  clinics: {
    q: "Where are your clinics?",
    a: "We're in Islamabad (F-6), Lahore (Gulberg III), Karachi (Clifton) and Dubai (Al Wasl & Jumeirah) — plus online video consultations.",
    cta: { label: "See locations", screen: "location" },
  },
  fees: {
    q: "What are the fees?",
    a: "In-clinic consultations are PKR 5,000 (AED 350 in Dubai). Online video visits are PKR 3,500. The booking fee is free, and consultations are fully refundable up to 24 hours before.",
  },
  cancel: {
    q: "Cancellation policy",
    a: "You can reschedule or cancel for a full refund up to 24 hours before your appointment. Within 24 hours the consultation fee may not be refundable.",
  },
  hours: {
    q: "Opening hours",
    a: "Our clinics are open Monday–Saturday, 10 AM – 6 PM. Online consultations are available every day.",
  },
  human: {
    q: "Talk to a human",
    a: "Of course! Reach our front desk at +92 51 000 0000, or tap below to message us on WhatsApp — we'll get right back to you.",
    cta: { label: "WhatsApp us", href: "https://wa.me/92510000000" },
  },
};

const QUICK = ["book", "clinics", "fees", "cancel", "hours", "human"];

function Assistant({ go }) {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([
    { from: "bot", text: "Hi! I'm Fizza's assistant 🌿 How can I help you today?" },
  ]);
  const [typing, setTyping] = React.useState(false);
  const bodyRef = React.useRef(null);

  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing, open]);

  const ask = (key) => {
    const item = KB[key];
    if (!item) return;
    setMsgs((m) => [...m, { from: "user", text: item.q }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "bot", text: item.a, cta: item.cta }]);
    }, 650);
  };

  const runCta = (cta) => {
    if (cta.href) {
      window.open(cta.href, "_blank", "noopener,noreferrer");
    } else if (cta.screen && go) {
      go(cta.screen);
      setOpen(false);
    }
  };

  return (
    <>
      {/* launcher */}
      <button className="chat-fab" onClick={() => setOpen((o) => !o)} aria-label="Open assistant">
        <Icon name={open ? "x" : "message-circle"} size={24} strokeWidth={2} />
        {!open && <span className="chat-fab-dot" />}
      </button>

      {/* window */}
      {open && (
        <div className="chat-win" role="dialog" aria-label="Fizza assistant">
          <div className="chat-head">
            <span className="chat-avatar"><Icon name="stethoscope" size={20} strokeWidth={2} /></span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#fff", lineHeight: 1.2 }}>Ask Fizza</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.8)", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#8fd39a", display: "inline-block" }} />
                Online · replies instantly
              </div>
            </div>
            <button className="chat-x" onClick={() => setOpen(false)} aria-label="Close"><Icon name="x" size={18} /></button>
          </div>

          <div className="chat-body" ref={bodyRef}>
            {msgs.map((m, i) => (
              <div key={i} className={"chat-msg " + m.from}>
                <div className="chat-bubble">{m.text}</div>
                {m.cta && (
                  <button className="chat-cta" onClick={() => runCta(m.cta)}>
                    {m.cta.href ? <Icon name="message-circle" size={14} /> : <Icon name="arrow-right" size={14} />} {m.cta.label}
                  </button>
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <div className="chat-bubble chat-typing"><span /><span /><span /></div>
              </div>
            )}
          </div>

          <div className="chat-quick">
            {QUICK.map((k) => (
              <button key={k} className="chat-chip" onClick={() => ask(k)}>{KB[k].q}</button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { Assistant });
