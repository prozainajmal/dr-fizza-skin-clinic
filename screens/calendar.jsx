/* Calendar & time slots */
const TODAY = new Date(2026, 5, 21); // June 21, 2026 (demo "today")
TODAY.setHours(0, 0, 0, 0);

function sameDay(a, b) {
  return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isAvailable(d, city) {
  if (!city) return false;
  if (d < TODAY) return false;
  const dow = d.getDay();
  // online open every day; clinics closed Sundays
  if (!city.online && dow === 0) return false;
  // deterministic ~25% closed for variety
  const seed = (d.getDate() * 7 + city.id.length * 3 + d.getMonth()) % 9;
  return seed > 1;
}
function slotsFor(d, city) {
  const times = [];
  for (let h = 10; h < 18; h++) for (let m = 0; m < 60; m += 30) {
    const label = `${h > 12 ? h - 12 : h}:${m === 0 ? "00" : "30"} ${h >= 12 ? "PM" : "AM"}`;
    const seed = (d.getDate() + h * 2 + m / 30 + city.id.length) % 5;
    times.push({ label, booked: seed === 0 });
  }
  return times;
}

function Calendar({ go, booking, setBooking }) {
  const city = booking.city;
  const [month, setMonth] = React.useState(new Date(TODAY.getFullYear(), TODAY.getMonth(), 1));
  const date = booking.date;

  const y = month.getFullYear(), m = month.getMonth();
  const first = new Date(y, m, 1);
  const startPad = first.getDay();
  const daysIn = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(new Date(y, m, d));

  const canPrev = new Date(y, m, 1) > new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
  const slots = date && city ? slotsFor(date, city) : null;

  const pickDate = (d) => {
    setBooking((b) => ({ ...b, date: d, time: null }));
  };

  return (
    <div className="screen wrap" style={{ padding: "40px 28px 70px" }}>
      <div className="center" style={{ marginBottom: 34 }}><Stepper current="calendar" /></div>
      <div className="grid split" style={{ gridTemplateColumns: "1fr 360px", gap: 30, alignItems: "start" }}>
        {/* left */}
        <div>
          <span className="eyebrow">Step 2</span>
          <h1 className="display" style={{ fontSize: 42, margin: "10px 0 4px" }}>Choose a date &amp; time</h1>
          <p className="muted" style={{ fontSize: 16, marginBottom: 26 }}>
            Showing availability for <strong style={{ color: "var(--ink)" }}>{city ? city.name : "—"}</strong>.
          </p>

          {/* calendar card */}
          <div className="card card-pad">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <h3 className="serif" style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>
                {month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </h3>
              <div className="row" style={{ gap: 8 }}>
                <button className="chip" disabled={!canPrev} style={{ padding: 9, opacity: canPrev ? 1 : .4 }}
                  onClick={() => setMonth(new Date(y, m - 1, 1))}><Icon name="chevron-left" size={16} /></button>
                <button className="chip" style={{ padding: 9 }} onClick={() => setMonth(new Date(y, m + 1, 1))}>
                  <Icon name="chevron-right" size={16} /></button>
              </div>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(7,1fr)", gap: 6, marginBottom: 6 }}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="faint center" style={{ fontSize: 12, fontWeight: 600, padding: "4px 0" }}>{d}</div>
              ))}
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}>
              {cells.map((d, i) => {
                if (!d) return <div key={i} />;
                const avail = isAvailable(d, city);
                const on = sameDay(d, date);
                const isToday = sameDay(d, TODAY);
                return (
                  <button key={i} disabled={!avail} onClick={() => pickDate(d)}
                    style={{
                      aspectRatio: "1", borderRadius: 12, border: "1.5px solid",
                      borderColor: on ? "var(--rose-deep)" : avail ? "var(--line)" : "transparent",
                      background: on ? "var(--rose-deep)" : avail ? "var(--white)" : "transparent",
                      color: on ? "#fff" : avail ? "var(--ink)" : "var(--ink-faint)",
                      fontSize: 15, fontWeight: on ? 700 : 500, cursor: avail ? "pointer" : "default",
                      opacity: avail ? 1 : .35, position: "relative",
                      boxShadow: on ? "var(--sh-rose)" : "none", transition: ".15s var(--ease)",
                    }}>
                    {d.getDate()}
                    {avail && !on && <span style={{ position: "absolute", bottom: 7, left: "50%", transform: "translateX(-50%)", width: 4, height: 4, borderRadius: "50%", background: "var(--sage)" }} />}
                    {isToday && !on && <span style={{ position: "absolute", top: 5, right: 6, fontSize: 8, fontWeight: 700, color: "var(--rose-deep)" }}>•</span>}
                  </button>
                );
              })}
            </div>
            <div className="row" style={{ gap: 18, marginTop: 16, fontSize: 12.5 }} >
              <span className="row faint" style={{ gap: 6, alignItems: "center" }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--sage)" }} /> Available</span>
              <span className="row faint" style={{ gap: 6, alignItems: "center" }}><span style={{ width: 12, height: 12, borderRadius: 4, background: "var(--rose-deep)" }} /> Selected</span>
              <span className="faint">Faded = unavailable</span>
            </div>
          </div>

          {/* slots */}
          {date && (
            <div className="card card-pad" style={{ marginTop: 20, animation: "riseUp .4s var(--ease) both" }}>
              <div className="row" style={{ alignItems: "center", gap: 9, marginBottom: 16 }}>
                <Icon name="clock" size={18} style={{ color: "var(--rose-deep)" }} />
                <h3 className="serif" style={{ fontSize: 21, fontWeight: 600, margin: 0 }}>
                  {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                </h3>
              </div>
              <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(96px,1fr))", gap: 10 }}>
                {slots.map((s, i) => (
                  <button key={i} className={"slot " + (s.booked ? "booked" : "") + (booking.time === s.label ? " on" : "")}
                    onClick={() => setBooking((b) => ({ ...b, time: s.label }))}>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* right summary */}
        <div style={{ position: "sticky", top: 96 }} className="sticky-side">
          <BookingSummary booking={booking} footer={
            <button className="btn btn-primary btn-block btn-lg" disabled={!booking.time} onClick={() => go("auth")}>
              Continue <Icon name="arrow-right" size={18} />
            </button>
          } />
          <button className="btn btn-quiet btn-block" style={{ marginTop: 12 }} onClick={() => go("location")}>
            <Icon name="arrow-left" size={16} /> Change location
          </button>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Calendar, TODAY });
