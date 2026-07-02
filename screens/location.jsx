/* Location selector */
function LocationSelector({ go, cities, booking, setBooking }) {
  const groups = [
    { id: "pk", country: "Pakistan", label: "Pakistan", ids: ["isb", "lhr", "khi"] },
    { id: "ae", country: "United Arab Emirates", label: "Dubai, UAE", ids: ["alwasl", "jumeirah"] },
  ];
  const [country, setCountry] = React.useState(
    booking.city ? (groups.find((g) => g.ids.includes(booking.city.id)) || groups[0]).id : "pk"
  );
  const active = groups.find((g) => g.id === country);
  const pick = (c) => {
    if (!c.active) return;
    setBooking((b) => ({ ...b, city: c, date: null, time: null }));
  };
  return (
    <div className="screen wrap" style={{ padding: "44px 28px 70px", maxWidth: 1000 }}>
      <div className="center" style={{ marginBottom: 36 }}>
        <Stepper current="location" />
      </div>
      <div className="center" style={{ marginBottom: 30 }}>
        <span className="eyebrow">Step 1</span>
        <h1 className="display" style={{ fontSize: 48, margin: "12px 0 10px" }}>Where would you like to visit?</h1>
        <p className="muted" style={{ fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
          Choose a country, then pick a clinic to see live availability.
        </p>
      </div>

      {/* country switcher */}
      <div className="row" style={{ background: "var(--cream-2)", borderRadius: "var(--r-pill)", padding: 5, gap: 5, marginBottom: 30, maxWidth: 460, marginInline: "auto" }}>
        {groups.map((g) => {
          const on = country === g.id;
          const n = g.ids.filter((id) => cities.find((c) => c.id === id && c.active)).length;
          return (
            <button key={g.id} onClick={() => setCountry(g.id)}
              style={{ flex: 1, border: "none", cursor: "pointer", borderRadius: "var(--r-pill)",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 0",
                fontWeight: 600, fontSize: 14.5, transition: ".2s var(--ease)",
                background: on ? "var(--white)" : "transparent", color: on ? "var(--ink)" : "var(--ink-faint)",
                boxShadow: on ? "var(--sh-sm)" : "none" }}>
              <Icon name="map-pin" size={16} style={{ color: on ? "var(--rose-deep)" : "var(--ink-faint)" }} />
              {g.label}
              <span className="badge" style={{ fontSize: 11, padding: "2px 8px",
                background: on ? "var(--rose-tint)" : "transparent", color: on ? "var(--rose-deep)" : "var(--ink-faint)" }}>{n}</span>
            </button>
          );
        })}
      </div>

      <div key={active.id} className="grid cols-3" style={{ gridTemplateColumns: "repeat(3,1fr)", gap: 16, animation: "fadeIn .3s var(--ease) both" }}>
        {active.ids.map((id) => {
          const c = cities.find((x) => x.id === id);
          if (!c) return null;
          const on = booking.city && booking.city.id === c.id;
          return (
            <button
              key={c.id}
              className={"sel " + (on ? "on " : "") + (c.active ? "" : "off")}
              onClick={() => pick(c)}
            >
              <span className="sel-check"><Icon name="check" size={14} /></span>
              <span style={{ width: 46, height: 46, borderRadius: 13, display: "grid", placeItems: "center",
                background: c.online ? "var(--sage-tint)" : "var(--rose-tint)",
                color: c.online ? "#4d6650" : "var(--rose-deep)" }}>
                <Icon name={c.online ? "video" : "map-pin"} size={22} />
              </span>
              <div className="serif" style={{ fontSize: 23, fontWeight: 600, marginTop: 14 }}>{c.name}</div>
              <div className="faint" style={{ fontSize: 13.5, marginTop: 3 }}>{c.address}</div>
              <div style={{ marginTop: 14 }}>
                {c.active
                  ? <span className="badge badge-sage"><Icon name="circle" size={9} strokeWidth={0} style={{ fill: "#5a8a5e" }} /> {c.open}</span>
                  : <span className="badge" style={{ background: "var(--cream-2)", color: "var(--ink-faint)" }}>Coming soon</span>}
              </div>
            </button>
          );
        })}
      </div>

      <div className="row" style={{ justifyContent: "space-between", marginTop: 34, alignItems: "center" }}>
        <button className="btn btn-quiet" onClick={() => go("landing")}>
          <Icon name="arrow-left" size={17} /> Back
        </button>
        <button className="btn btn-primary btn-lg" disabled={!booking.city} onClick={() => go("calendar")}>
          Continue to calendar <Icon name="arrow-right" size={18} />
        </button>
      </div>
    </div>
  );
}
Object.assign(window, { LocationSelector });
