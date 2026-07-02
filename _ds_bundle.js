/* @ds-bundle: {"format":3,"namespace":"DrFizzaSkinClinicBookingPortal_ea3cd1","components":[],"sourceHashes":{"screens/admin.jsx":"13667842a5e5","screens/app.jsx":"ac6bc425916b","screens/auth.jsx":"fb79d8a41fdb","screens/calendar.jsx":"a33e98b27400","screens/chatbot.jsx":"a52e0398e1a2","screens/dashboard.jsx":"1f2715d83bb2","screens/details.jsx":"788b85f57443","screens/landing.jsx":"3d5d62efd039","screens/location.jsx":"5ca5ccdeb160","screens/login.jsx":"108dfd3238a0","screens/payment.jsx":"938193df124f","screens/profile.jsx":"10a71ae59615","screens/ui.jsx":"2feab7dcf39c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DrFizzaSkinClinicBookingPortal_ea3cd1 = window.DrFizzaSkinClinicBookingPortal_ea3cd1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// screens/admin.jsx
try { (() => {
/* ============================================================
   Admin / Staff panel — standalone sidebar app
   Sections: Overview · Appointments · Availability · Patients
   ============================================================ */

const ADMIN_APPTS = [{
  id: 1,
  t: "10:00 AM",
  p: "Hira Malik",
  city: "Islamabad — F-6",
  doc: "Dr. Fizza Ahmed",
  type: "Acne consult",
  status: "Confirmed",
  phone: "+92 300 1234567"
}, {
  id: 2,
  t: "10:30 AM",
  p: "Zoya Ahmed",
  city: "Islamabad — F-6",
  doc: "Dr. Fizza Ahmed",
  type: "Laser — follow up",
  status: "Confirmed",
  phone: "+92 321 9988776"
}, {
  id: 3,
  t: "11:30 AM",
  p: "Sana Tariq",
  city: "Islamabad — F-6",
  doc: "Dr. Sana Riaz",
  type: "Pigmentation",
  status: "Checked in",
  phone: "+92 333 4567890"
}, {
  id: 4,
  t: "12:00 PM",
  p: "Ayesha Khan",
  city: "Islamabad — F-6",
  doc: "Dr. Fizza Ahmed",
  type: "First visit",
  status: "Pending",
  phone: "+92 345 1112223",
  firstTime: true
}, {
  id: 5,
  t: "02:00 PM",
  p: "Mahnoor Sheikh",
  city: "Lahore — Gulberg",
  doc: "Dr. Sana Riaz",
  type: "Anti-aging",
  status: "Confirmed",
  phone: "+92 300 5566778"
}, {
  id: 6,
  t: "03:30 PM",
  p: "Emaan Raza",
  city: "Online",
  doc: "Dr. Fizza Ahmed",
  type: "Video consult",
  status: "Pending",
  phone: "+92 311 2233445",
  online: true
}];
const STATUS_STYLE = {
  Confirmed: {
    background: "var(--sage-tint)",
    color: "#4d6650"
  },
  "Checked in": {
    background: "var(--rose-tint)",
    color: "var(--rose-deeper)"
  },
  Pending: {
    background: "var(--gold-tint)",
    color: "#8a6a2c"
  },
  Cancelled: {
    background: "var(--cream-2)",
    color: "var(--ink-faint)"
  },
  Open: {
    background: "var(--cream-2)",
    color: "var(--ink-faint)"
  }
};
function StatusBadge({
  s
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: STATUS_STYLE[s] || STATUS_STYLE.Open
  }, s);
}

/* ---------------- Overview ---------------- */
function AdminOverview({
  appts,
  setSection,
  verifyCount
}) {
  const stats = [{
    n: appts.length,
    l: "Appointments today",
    ic: "calendar-days",
    bg: "var(--rose-tint)",
    fg: "var(--rose-deep)"
  }, {
    n: appts.filter(a => a.status === "Pending").length,
    l: "Pending confirmation",
    ic: "clock-alert",
    bg: "var(--gold-tint)",
    fg: "var(--gold)"
  }, {
    n: verifyCount,
    l: "Reports to verify",
    ic: "file-badge",
    bg: "var(--sage-tint)",
    fg: "#4d6650"
  }, {
    n: "86%",
    l: "Slot utilization",
    ic: "trending-up",
    bg: "var(--cream-2)",
    fg: "var(--ink-soft)"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "riseUp .4s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid cols-4",
    style: {
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginBottom: 24
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-ico",
    style: {
      background: s.bg,
      color: s.fg
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic,
    size: 21
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "stat-l"
  }, s.l)))), /*#__PURE__*/React.createElement("div", {
    className: "grid split-even",
    style: {
      gridTemplateColumns: "1.6fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card table-scroll",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 22px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 21,
      fontWeight: 600,
      margin: 0
    }
  }, "Today's schedule"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-quiet btn-sm",
    onClick: () => setSection("appointments")
  }, "View all ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15
  }))), /*#__PURE__*/React.createElement("table", {
    className: "atable"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Time"), /*#__PURE__*/React.createElement("th", null, "Patient"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, appts.slice(0, 5).map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.id
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700
    }
  }, a.t), /*#__PURE__*/React.createElement("td", null, a.p), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, a.type), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    s: a.status
  }))))))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 20,
      fontWeight: 600,
      margin: "0 0 14px"
    }
  }, "Quick actions"), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-block",
    onClick: () => setSection("availability"),
    style: {
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-cog",
    size: 17
  }), " Set availability"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-block",
    onClick: () => setSection("patients"),
    style: {
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder-open",
    size: 17
  }), " Open patient files"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-block",
    onClick: () => setSection("appointments"),
    style: {
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-plus",
    size: 17
  }), " Add walk-in"))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad",
    style: {
      background: "linear-gradient(160deg,var(--rose-tint),var(--cream-2))",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-rose"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 12
  }), " Reminder"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      margin: "12px 0 0",
      fontWeight: 500
    }
  }, "2 first-visit patients today need their medical history reviewed before consultation.")))));
}

/* ---------------- Appointments ---------------- */
function AdminAppointments({
  appts,
  setAppts,
  notify
}) {
  const [filter, setFilter] = React.useState("All");
  const filters = ["All", "Confirmed", "Pending", "Checked in", "Cancelled"];
  const shown = filter === "All" ? appts : appts.filter(a => a.status === filter);
  const setStatus = (id, status) => {
    setAppts(arr => arr.map(a => a.id === id ? {
      ...a,
      status
    } : a));
    notify(status === "Cancelled" ? "Appointment cancelled" : `Marked ${status.toLowerCase()}`);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "riseUp .4s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8,
      marginBottom: 18,
      flexWrap: "wrap"
    }
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: "chip",
    onClick: () => setFilter(f),
    style: {
      cursor: "pointer",
      background: filter === f ? "var(--ink)" : "var(--white)",
      color: filter === f ? "#fff" : "var(--ink-soft)",
      borderColor: filter === f ? "var(--ink)" : "var(--line-2)"
    }
  }, f, f !== "All" && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, "\xB7 ", appts.filter(a => a.status === f).length))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => notify("New appointment form opened")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16
  }), " New appointment")), /*#__PURE__*/React.createElement("div", {
    className: "card table-scroll",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("table", {
    className: "atable"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Time"), /*#__PURE__*/React.createElement("th", null, "Patient"), /*#__PURE__*/React.createElement("th", null, "Clinic"), /*#__PURE__*/React.createElement("th", null, "Doctor"), /*#__PURE__*/React.createElement("th", null, "Type"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "right"
    }
  }, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, shown.map(a => /*#__PURE__*/React.createElement("tr", {
    key: a.id
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 700,
      whiteSpace: "nowrap"
    }
  }, a.t), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, a.p, " ", a.firstTime && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-gold",
    style: {
      fontSize: 10,
      padding: "2px 7px",
      marginLeft: 4
    }
  }, "New")), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 12.5
    }
  }, a.phone)), /*#__PURE__*/React.createElement("td", {
    className: "muted",
    style: {
      whiteSpace: "nowrap"
    }
  }, a.online ? /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 5,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "video",
    size: 14
  }), " Online") : a.city), /*#__PURE__*/React.createElement("td", {
    className: "muted",
    style: {
      whiteSpace: "nowrap"
    }
  }, a.doc), /*#__PURE__*/React.createElement("td", {
    className: "muted"
  }, a.type), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    s: a.status
  })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 7,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-btn ok",
    "aria-label": "Confirm",
    onClick: () => setStatus(a.id, "Confirmed")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    "aria-label": "Reschedule",
    onClick: () => notify("Reschedule link sent to patient")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-sync",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn danger",
    "aria-label": "Cancel",
    onClick: () => setStatus(a.id, "Cancelled")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  }))))))))));
}

/* ---------------- Availability ---------------- */
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const ALL_SLOTS = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "02:00", "02:30", "03:00", "03:30", "04:00", "04:30", "05:00", "05:30"];
function AdminAvailability({
  notify
}) {
  const [clinic, setClinic] = React.useState("Islamabad — F-6 Markaz");
  const [day, setDay] = React.useState("Monday");
  const [dayOpen, setDayOpen] = React.useState(() => {
    const o = {};
    DAYS.forEach(d => o[d] = d !== "Sunday");
    return o;
  });
  const [slots, setSlots] = React.useState(() => {
    const s = {};
    ALL_SLOTS.forEach(t => s[t] = true);
    s["12:30"] = false;
    s["05:30"] = false;
    return s;
  });
  const clinics = ["Islamabad — F-6 Markaz", "Lahore — Gulberg III", "Karachi — Clifton", "Online", "Al Wasl — Dubai", "Jumeirah — Dubai"];
  const openCount = Object.values(slots).filter(Boolean).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "riseUp .4s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid admin-split",
    style: {
      gridTemplateColumns: "300px 1fr",
      gap: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "label",
    style: {
      marginBottom: 8
    }
  }, "Clinic"), /*#__PURE__*/React.createElement("select", {
    className: "select",
    value: clinic,
    onChange: e => setClinic(e.target.value)
  }, clinics.map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 19,
      fontWeight: 600,
      margin: "0 0 6px"
    }
  }, "Working days"), /*#__PURE__*/React.createElement("p", {
    className: "faint",
    style: {
      fontSize: 12.5,
      margin: "0 0 14px"
    }
  }, "Toggle the days this clinic accepts bookings."), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 4
    }
  }, DAYS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 10px",
      borderRadius: 10,
      cursor: "pointer",
      background: day === d ? "var(--cream-2)" : "transparent"
    },
    onClick: () => setDay(d)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: day === d ? 700 : 500,
      color: dayOpen[d] ? "var(--ink)" : "var(--ink-faint)"
    }
  }, d), /*#__PURE__*/React.createElement("button", {
    className: "switch" + (dayOpen[d] ? " on" : ""),
    onClick: e => {
      e.stopPropagation();
      setDayOpen(o => ({
        ...o,
        [d]: !o[d]
      }));
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 4,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 22,
      fontWeight: 600,
      margin: 0
    }
  }, day, " \xB7 time slots"), /*#__PURE__*/React.createElement("p", {
    className: "faint",
    style: {
      fontSize: 13.5,
      margin: "4px 0 0"
    }
  }, clinic, " \u2014 ", openCount, " of ", ALL_SLOTS.length, " slots open. Click a slot to open or close it.")), /*#__PURE__*/React.createElement("span", {
    className: "badge badge-sage"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 12
  }), " 30-min sessions")), !dayOpen[day] ? /*#__PURE__*/React.createElement("div", {
    className: "center",
    style: {
      padding: "50px 20px",
      color: "var(--ink-faint)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "moon",
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontWeight: 600
    }
  }, "Closed on ", day, "s"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    style: {
      marginTop: 14
    },
    onClick: () => setDayOpen(o => ({
      ...o,
      [day]: true
    }))
  }, "Open this day")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "grid slot-grid",
    style: {
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 9,
      margin: "20px 0 22px"
    }
  }, ALL_SLOTS.map(t => {
    const hr = parseInt(t);
    const ap = hr < 10 || hr === 12 ? hr === 12 ? "PM" : "AM" : hr < 6 ? "PM" : "AM";
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      className: "avail-slot " + (slots[t] ? "open" : "closed"),
      onClick: () => setSlots(s => ({
        ...s,
        [t]: !s[t]
      }))
    }, t, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: .7
      }
    }, " ", ap));
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 18,
      fontSize: 12.5,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "row faint",
    style: {
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 4,
      background: "var(--sage)"
    }
  }), " Open"), /*#__PURE__*/React.createElement("span", {
    className: "row faint",
    style: {
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 4,
      background: "var(--cream-2)",
      border: "1px solid var(--line-2)"
    }
  }), " Closed"))), /*#__PURE__*/React.createElement("hr", {
    className: "divider",
    style: {
      margin: "6px 0 18px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => setSlots(s => {
      const n = {};
      Object.keys(s).forEach(k => n[k] = true);
      return n;
    })
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-check",
    size: 15
  }), " Open all"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => notify("Select a date on the calendar to block")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-x",
    size: 15
  }), " Block a date")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => notify("Availability saved")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "save",
    size: 15
  }), " Save changes")))));
}

/* ---------------- Patients ---------------- */
function AdminPatients({
  notify
}) {
  const patients = [{
    id: 1,
    name: "Ayesha Khan",
    tag: "New",
    visits: 1,
    allergies: "Penicillin",
    meds: "None",
    skin: "Combination · sensitive",
    report: "lab-report-march.pdf",
    verified: false
  }, {
    id: 2,
    name: "Hira Malik",
    tag: "Returning",
    visits: 6,
    allergies: "None",
    meds: "Isotretinoin",
    skin: "Oily · acne-prone",
    report: "acne-history.pdf",
    verified: true
  }, {
    id: 3,
    name: "Zoya Ahmed",
    tag: "Returning",
    visits: 3,
    allergies: "Sulfa drugs",
    meds: "None",
    skin: "Dry",
    report: "biopsy-result.pdf",
    verified: false
  }, {
    id: 4,
    name: "Mahnoor Sheikh",
    tag: "VIP",
    visits: 12,
    allergies: "None",
    meds: "Tretinoin",
    skin: "Mature",
    report: "prescription-jun.jpg",
    verified: true
  }];
  const [sel, setSel] = React.useState(patients[0]);
  const [verified, setVerified] = React.useState({});
  const [query, setQuery] = React.useState("");
  const isV = p => verified[p.id] ?? p.verified;
  const shown = patients.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  return /*#__PURE__*/React.createElement("div", {
    className: "grid admin-split",
    style: {
      gridTemplateColumns: "320px 1fr",
      gap: 22,
      alignItems: "start",
      animation: "riseUp .4s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 9,
      background: "var(--cream)",
      borderRadius: 10,
      padding: "9px 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    style: {
      color: "var(--ink-faint)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search patients\u2026",
    style: {
      border: "none",
      background: "transparent",
      outline: "none",
      fontSize: 14,
      flex: 1,
      color: "var(--ink)",
      fontFamily: "inherit"
    }
  }))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "faint center",
    style: {
      padding: "28px 18px",
      fontSize: 14
    }
  }, "No patients found"), shown.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => setSel(p),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      textAlign: "left",
      padding: "14px 18px",
      border: "none",
      borderBottom: "1px solid var(--line)",
      cursor: "pointer",
      background: sel.id === p.id ? "var(--rose-tint)" : "var(--white)",
      transition: ".15s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      background: sel.id === p.id ? "var(--rose-deep)" : "var(--cream-2)",
      color: sel.id === p.id ? "#fff" : "var(--ink-soft)",
      display: "grid",
      placeItems: "center",
      fontWeight: 700,
      flex: "none"
    }
  }, p.name[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 12.5
    }
  }, p.visits, " visit", p.visits > 1 ? "s" : "")), !isV(p) && /*#__PURE__*/React.createElement("span", {
    title: "Report pending",
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--gold)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--rose-deep)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontWeight: 700,
      fontSize: 22
    }
  }, sel.name[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      fontSize: 27,
      fontWeight: 600,
      margin: 0
    }
  }, sel.name), /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: sel.tag === "VIP" ? {
      background: "var(--gold-tint)",
      color: "#8a6a2c"
    } : sel.tag === "New" ? {
      background: "var(--rose-tint)",
      color: "var(--rose-deeper)"
    } : {
      background: "var(--sage-tint)",
      color: "#4d6650"
    }
  }, sel.tag)), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13.5,
      marginTop: 2
    }
  }, sel.visits, " lifetime visit", sel.visits > 1 ? "s" : "", " \xB7 Patient ID #", 1000 + sel.id)), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => notify("Message sent to " + sel.name)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 15
  }), " Message"))), /*#__PURE__*/React.createElement("div", {
    className: "grid cols-2",
    style: {
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 19,
      fontWeight: 600,
      margin: "0 0 14px"
    }
  }, "Medical history"), [["Allergies", sel.allergies], ["Medications", sel.meds], ["Skin type", sel.skin]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "row",
    style: {
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "faint",
    style: {
      fontSize: 14
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      textAlign: "right",
      maxWidth: 160
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 19,
      fontWeight: 600,
      margin: "0 0 14px"
    }
  }, "Uploaded report"), /*#__PURE__*/React.createElement("div", {
    className: "file-chip",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 10,
      background: "var(--gold-tint)",
      color: "var(--gold)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13.5
    }
  }, sel.report), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 12
    }
  }, "Uploaded by patient")), isV(sel) && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-sage"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 12
  }), " Verified")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-block",
    style: {
      background: isV(sel) ? "var(--sage-tint)" : "var(--ink)",
      color: isV(sel) ? "#4d6650" : "#fff"
    },
    onClick: () => {
      setVerified(v => ({
        ...v,
        [sel.id]: true
      }));
      notify("Report verified ✓");
    },
    disabled: isV(sel)
  }, isV(sel) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), " Report verified") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 16
  }), " Verify report"))))));
}

/* ---------------- Shell ---------------- */
function AdminPanel({
  go,
  notify,
  onLogout
}) {
  const [section, setSection] = React.useState("overview");
  const [appts, setAppts] = React.useState(ADMIN_APPTS);
  const verifyCount = 2;
  const nav = [{
    k: "overview",
    l: "Overview",
    ic: "layout-dashboard"
  }, {
    k: "appointments",
    l: "Appointments",
    ic: "calendar-days",
    n: appts.filter(a => a.status === "Pending").length
  }, {
    k: "availability",
    l: "Availability",
    ic: "calendar-cog"
  }, {
    k: "patients",
    l: "Patients",
    ic: "users-round"
  }];
  const titles = {
    overview: ["Overview", "Tuesday, 21 June 2026 · Islamabad F-6"],
    appointments: ["Appointments", "Manage bookings across all clinics"],
    availability: ["Availability", "Set working days and open time slots"],
    patients: ["Patient records", "Files, medical history and report verification"]
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "admin screen"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "aside-brand"
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "stethoscope",
    size: 20,
    strokeWidth: 2,
    style: {
      fontSize: 20,
      alignItems: "center",
      justifyContent: "center"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "an"
  }, "Dr. Fizza"), /*#__PURE__*/React.createElement("div", {
    className: "as"
  }, "Staff Console"))), /*#__PURE__*/React.createElement("div", {
    className: "aside-sec"
  }, "Clinic management"), nav.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.k,
    className: "anav" + (section === n.k ? " on" : ""),
    onClick: () => setSection(n.k)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n.ic,
    size: 18
  }), " ", n.l, n.n > 0 && /*#__PURE__*/React.createElement("span", {
    className: "badge-n"
  }, n.n))), /*#__PURE__*/React.createElement("div", {
    className: "aside-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "av"
  }, "F"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: "#fff"
    }
  }, "Dr. Fizza Ahmed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "rgba(232,221,216,.5)"
    }
  }, "Administrator")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    style: {
      background: "transparent",
      borderColor: "rgba(255,255,255,.14)",
      color: "rgba(232,221,216,.7)"
    },
    "aria-label": "Log out",
    onClick: () => onLogout ? onLogout() : go("landing")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 15
  })))), /*#__PURE__*/React.createElement("main", {
    className: "amain"
  }, /*#__PURE__*/React.createElement("div", {
    className: "abar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 34,
      margin: 0
    }
  }, titles[section][0]), /*#__PURE__*/React.createElement("p", {
    className: "faint",
    style: {
      fontSize: 14,
      margin: "5px 0 0"
    }
  }, titles[section][1])), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    "aria-label": "Notifications",
    onClick: () => notify("No new notifications")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 17
  })))), section === "overview" && /*#__PURE__*/React.createElement(AdminOverview, {
    appts: appts,
    setSection: setSection,
    verifyCount: verifyCount
  }), section === "appointments" && /*#__PURE__*/React.createElement(AdminAppointments, {
    appts: appts,
    setAppts: setAppts,
    notify: notify
  }), section === "availability" && /*#__PURE__*/React.createElement(AdminAvailability, {
    notify: notify
  }), section === "patients" && /*#__PURE__*/React.createElement(AdminPatients, {
    notify: notify
  })));
}
Object.assign(window, {
  AdminPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/admin.jsx", error: String((e && e.message) || e) }); }

// screens/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Main app — flow controller */
const CITIES = [{
  id: "isb",
  name: "Islamabad",
  address: "F-6 Markaz, Islamabad",
  active: true,
  open: "Open today",
  fee: "PKR 5,000",
  feeNum: 5000,
  cur: "PKR"
}, {
  id: "lhr",
  name: "Lahore",
  address: "Gulberg III, Lahore",
  active: true,
  open: "Open today",
  fee: "PKR 5,000",
  feeNum: 5000,
  cur: "PKR"
}, {
  id: "khi",
  name: "Karachi",
  address: "Clifton Block 5, Karachi",
  active: true,
  open: "Open today",
  fee: "PKR 5,000",
  feeNum: 5000,
  cur: "PKR"
}, {
  id: "alwasl",
  name: "Al Wasl — Dubai",
  address: "Al Wasl Road, Jumeirah 1",
  active: true,
  open: "Open today",
  fee: "AED 350",
  feeNum: 350,
  cur: "AED"
}, {
  id: "jumeirah",
  name: "Jumeirah — Dubai",
  address: "Jumeirah Beach Road",
  active: true,
  open: "Open today",
  fee: "AED 350",
  feeNum: 350,
  cur: "AED"
}];
const FLOW = ["location", "calendar", "auth", "details", "payment"];
function App() {
  const [screen, setScreen] = React.useState("landing");
  const [booking, setBooking] = React.useState({
    city: null,
    date: null,
    time: null
  });
  const [user, setUser] = React.useState(null);
  const [toast, setToast] = React.useState("");
  const go = s => {
    setScreen(s);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  // gentle toast on key milestones
  const prevScreen = React.useRef(screen);
  React.useEffect(() => {
    if (prevScreen.current !== screen) {
      if (screen === "details" && user) setToast(user.guest ? "Continuing as guest" : "Signed in — welcome!");
      if (screen === "confirmation") setToast("Confirmation sent via Email & WhatsApp");
      prevScreen.current = screen;
    }
  }, [screen, user]);
  const props = {
    go,
    cities: CITIES,
    booking,
    setBooking,
    user,
    setUser
  };
  const notify = m => setToast(m);
  const showFooter = ["landing", "location", "dashboard", "profile"].includes(screen);
  const showNav = !["auth", "confirmation", "admin", "login"].includes(screen);
  const showAssistant = !["admin", "login"].includes(screen);
  const logout = () => {
    setUser(null);
    setToast("You've been logged out");
    go("landing");
  };
  let body;
  switch (screen) {
    case "landing":
      body = /*#__PURE__*/React.createElement(Landing, props);
      break;
    case "location":
      body = /*#__PURE__*/React.createElement(LocationSelector, props);
      break;
    case "calendar":
      body = /*#__PURE__*/React.createElement(Calendar, props);
      break;
    case "auth":
      body = /*#__PURE__*/React.createElement(AuthCheckpoint, props);
      break;
    case "details":
      body = /*#__PURE__*/React.createElement(VisitDetails, props);
      break;
    case "payment":
      body = /*#__PURE__*/React.createElement(Payment, props);
      break;
    case "confirmation":
      body = /*#__PURE__*/React.createElement(Confirmation, props);
      break;
    case "dashboard":
      body = /*#__PURE__*/React.createElement(Dashboard, props);
      break;
    case "profile":
      body = /*#__PURE__*/React.createElement(Profile, _extends({}, props, {
        notify: notify
      }));
      break;
    case "login":
      body = /*#__PURE__*/React.createElement(LoginPage, {
        go: go,
        setUser: setUser,
        notify: notify
      });
      break;
    case "admin":
      body = /*#__PURE__*/React.createElement(AdminPanel, {
        go: go,
        notify: notify,
        onLogout: logout
      });
      break;
    default:
      body = /*#__PURE__*/React.createElement(Landing, props);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, showNav && /*#__PURE__*/React.createElement(Nav, {
    go: go,
    user: user,
    onLogin: () => go("login"),
    onLogout: logout
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, body), showFooter && /*#__PURE__*/React.createElement(SiteFooter, {
    go: go
  }), showAssistant && /*#__PURE__*/React.createElement(Assistant, {
    go: go
  }), /*#__PURE__*/React.createElement(Toast, {
    msg: toast
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/app.jsx", error: String((e && e.message) || e) }); }

// screens/auth.jsx
try { (() => {
/* Auth checkpoint — the "login later" moment */
function AuthCheckpoint({
  go,
  booking,
  setUser
}) {
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
    if (!v) e.email = "Email or phone is required";else if (!isEmail && !isPhone) e.email = "Enter a valid email or phone number";
    if (!pw) e.pw = "Password is required";else if (pw.length < 6) e.pw = "Password must be at least 6 characters";
    setErr(e);
    return Object.keys(e).length === 0;
  };
  const proceed = asGuest => {
    if (asGuest) {
      setUser({
        name: "Guest",
        guest: true,
        role: "Patient"
      });
      go("details");
      return;
    }
    if (!validate()) return;
    if (tab === "register") {
      setUser({
        name: name || "New Patient",
        email,
        role: "Patient",
        firstTime: true
      });
    } else {
      setUser({
        name: "Ayesha Khan",
        email: email || "ayesha@email.com",
        role: "Patient",
        returning: true
      });
    }
    go("details");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen",
    style: {
      display: "grid",
      placeItems: "center",
      padding: "50px 20px 70px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "center",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    current: "auth"
  })), /*#__PURE__*/React.createElement("div", {
    className: "card cols-2-card",
    style: {
      width: "100%",
      maxWidth: 940,
      padding: 0,
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      animation: "pop .5s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "44px 42px",
      background: "linear-gradient(165deg,var(--rose-tint),var(--cream-2))",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill-tag",
    style: {
      alignSelf: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock-keyhole",
    size: 13
  }), " Almost there"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 40,
      margin: "20px 0 12px"
    }
  }, "Sign in to confirm your booking"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 16,
      lineHeight: 1.6
    }
  }, "We only ask now so we can send your confirmation and keep your medical history safe. Prefer not to? You can continue as a guest."), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      marginTop: "auto",
      padding: 18,
      boxShadow: "var(--sh-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "summary-k",
    style: {
      marginBottom: 10
    }
  }, "You're reserving"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      alignItems: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    style: {
      color: "var(--rose-deep)"
    }
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 14.5
    }
  }, booking.city ? booking.city.name : "—")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-clock",
    size: 16,
    style: {
      color: "var(--rose-deep)"
    }
  }), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 14.5
    }
  }, booking.date ? fmtDate(booking.date) : "—", booking.time ? ` · ${booking.time}` : "")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 42px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      background: "var(--cream-2)",
      borderRadius: "var(--r-pill)",
      padding: 4,
      marginBottom: 26
    }
  }, [["register", "Register"], ["login", "Log in"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      setTab(k);
      setErr({});
    },
    className: "btn-sm",
    style: {
      flex: 1,
      border: "none",
      borderRadius: "var(--r-pill)",
      fontWeight: 600,
      fontSize: 14,
      background: tab === k ? "var(--white)" : "transparent",
      color: tab === k ? "var(--ink)" : "var(--ink-faint)",
      boxShadow: tab === k ? "var(--sh-sm)" : "none",
      padding: "10px 0",
      transition: ".2s"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 16
    }
  }, tab === "register" && /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    error: err.name
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "e.g. Ayesha Khan",
    value: name,
    onChange: e => {
      setName(e.target.value);
      if (err.name) setErr(x => ({
        ...x,
        name: null
      }));
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email or phone",
    error: err.email
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "you@email.com",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      if (err.email) setErr(x => ({
        ...x,
        email: null
      }));
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password",
    error: err.pw
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: pw,
    onChange: e => {
      setPw(e.target.value);
      if (err.pw) setErr(x => ({
        ...x,
        pw: null
      }));
    }
  })), tab === "register" && /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 9,
      alignItems: "center",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-rose"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-check",
    size: 12
  }), " Patient role"), /*#__PURE__*/React.createElement("span", {
    className: "faint"
  }, "assigned automatically")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-block btn-lg",
    onClick: () => proceed(false)
  }, tab === "register" ? "Create account & continue" : "Log in & continue"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 12,
      margin: "2px 0"
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "divider",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "faint",
    style: {
      fontSize: 12
    }
  }, "or"), /*#__PURE__*/React.createElement("hr", {
    className: "divider",
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-block",
    onClick: () => proceed(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-round",
    size: 17
  }), " Continue as guest"), /*#__PURE__*/React.createElement("p", {
    className: "faint center",
    style: {
      fontSize: 12,
      margin: "6px 0 0",
      lineHeight: 1.5
    }
  }, "By continuing you agree to our Terms & Privacy Policy. This is a demo \u2014 no real account is created.")))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-quiet",
    style: {
      marginTop: 18
    },
    onClick: () => go("calendar")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Back to calendar"));
}
Object.assign(window, {
  AuthCheckpoint
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/auth.jsx", error: String((e && e.message) || e) }); }

// screens/calendar.jsx
try { (() => {
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
    times.push({
      label,
      booked: seed === 0
    });
  }
  return times;
}
function Calendar({
  go,
  booking,
  setBooking
}) {
  const city = booking.city;
  const [month, setMonth] = React.useState(new Date(TODAY.getFullYear(), TODAY.getMonth(), 1));
  const date = booking.date;
  const y = month.getFullYear(),
    m = month.getMonth();
  const first = new Date(y, m, 1);
  const startPad = first.getDay();
  const daysIn = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(new Date(y, m, d));
  const canPrev = new Date(y, m, 1) > new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
  const slots = date && city ? slotsFor(date, city) : null;
  const pickDate = d => {
    setBooking(b => ({
      ...b,
      date: d,
      time: null
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen wrap",
    style: {
      padding: "40px 28px 70px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "center",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    current: "calendar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid split",
    style: {
      gridTemplateColumns: "1fr 360px",
      gap: 30,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Step 2"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 42,
      margin: "10px 0 4px"
    }
  }, "Choose a date & time"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 16,
      marginBottom: 26
    }
  }, "Showing availability for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, city ? city.name : "—"), "."), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 24,
      fontWeight: 600,
      margin: 0
    }
  }, month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric"
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "chip",
    disabled: !canPrev,
    style: {
      padding: 9,
      opacity: canPrev ? 1 : .4
    },
    onClick: () => setMonth(new Date(y, m - 1, 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "chip",
    style: {
      padding: 9
    },
    onClick: () => setMonth(new Date(y, m + 1, 1))
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 6,
      marginBottom: 6
    }
  }, ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "faint center",
    style: {
      fontSize: 12,
      fontWeight: 600,
      padding: "4px 0"
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 6
    }
  }, cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const avail = isAvailable(d, city);
    const on = sameDay(d, date);
    const isToday = sameDay(d, TODAY);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      disabled: !avail,
      onClick: () => pickDate(d),
      style: {
        aspectRatio: "1",
        borderRadius: 12,
        border: "1.5px solid",
        borderColor: on ? "var(--rose-deep)" : avail ? "var(--line)" : "transparent",
        background: on ? "var(--rose-deep)" : avail ? "var(--white)" : "transparent",
        color: on ? "#fff" : avail ? "var(--ink)" : "var(--ink-faint)",
        fontSize: 15,
        fontWeight: on ? 700 : 500,
        cursor: avail ? "pointer" : "default",
        opacity: avail ? 1 : .35,
        position: "relative",
        boxShadow: on ? "var(--sh-rose)" : "none",
        transition: ".15s var(--ease)"
      }
    }, d.getDate(), avail && !on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        bottom: 7,
        left: "50%",
        transform: "translateX(-50%)",
        width: 4,
        height: 4,
        borderRadius: "50%",
        background: "var(--sage)"
      }
    }), isToday && !on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 5,
        right: 6,
        fontSize: 8,
        fontWeight: 700,
        color: "var(--rose-deep)"
      }
    }, "\u2022"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 18,
      marginTop: 16,
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "row faint",
    style: {
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--sage)"
    }
  }), " Available"), /*#__PURE__*/React.createElement("span", {
    className: "row faint",
    style: {
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 4,
      background: "var(--rose-deep)"
    }
  }), " Selected"), /*#__PURE__*/React.createElement("span", {
    className: "faint"
  }, "Faded = unavailable"))), date && /*#__PURE__*/React.createElement("div", {
    className: "card card-pad",
    style: {
      marginTop: 20,
      animation: "riseUp .4s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 9,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 18,
    style: {
      color: "var(--rose-deep)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 21,
      fontWeight: 600,
      margin: 0
    }
  }, date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(auto-fill,minmax(96px,1fr))",
      gap: 10
    }
  }, slots.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "slot " + (s.booked ? "booked" : "") + (booking.time === s.label ? " on" : ""),
    onClick: () => setBooking(b => ({
      ...b,
      time: s.label
    }))
  }, s.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 96
    },
    className: "sticky-side"
  }, /*#__PURE__*/React.createElement(BookingSummary, {
    booking: booking,
    footer: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-block btn-lg",
      disabled: !booking.time,
      onClick: () => go("auth")
    }, "Continue ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }))
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-quiet btn-block",
    style: {
      marginTop: 12
    },
    onClick: () => go("location")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Change location"))));
}
Object.assign(window, {
  Calendar,
  TODAY
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/calendar.jsx", error: String((e && e.message) || e) }); }

// screens/chatbot.jsx
try { (() => {
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
    cta: {
      label: "Start booking",
      screen: "location"
    }
  },
  clinics: {
    q: "Where are your clinics?",
    a: "We're in Islamabad (F-6), Lahore (Gulberg III), Karachi (Clifton) and Dubai (Al Wasl & Jumeirah) — plus online video consultations.",
    cta: {
      label: "See locations",
      screen: "location"
    }
  },
  fees: {
    q: "What are the fees?",
    a: "In-clinic consultations are PKR 5,000 (AED 350 in Dubai). Online video visits are PKR 3,500. The booking fee is free, and consultations are fully refundable up to 24 hours before."
  },
  cancel: {
    q: "Cancellation policy",
    a: "You can reschedule or cancel for a full refund up to 24 hours before your appointment. Within 24 hours the consultation fee may not be refundable."
  },
  hours: {
    q: "Opening hours",
    a: "Our clinics are open Monday–Saturday, 10 AM – 6 PM. Online consultations are available every day."
  },
  human: {
    q: "Talk to a human",
    a: "Of course! Reach our front desk at +92 51 000 0000, or tap below to message us on WhatsApp — we'll get right back to you.",
    cta: {
      label: "WhatsApp us",
      href: "https://wa.me/92510000000"
    }
  }
};
const QUICK = ["book", "clinics", "fees", "cancel", "hours", "human"];
function Assistant({
  go
}) {
  const [open, setOpen] = React.useState(false);
  const [msgs, setMsgs] = React.useState([{
    from: "bot",
    text: "Hi! I'm Fizza's assistant 🌿 How can I help you today?"
  }]);
  const [typing, setTyping] = React.useState(false);
  const bodyRef = React.useRef(null);
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing, open]);
  const ask = key => {
    const item = KB[key];
    if (!item) return;
    setMsgs(m => [...m, {
      from: "user",
      text: item.q
    }]);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, {
        from: "bot",
        text: item.a,
        cta: item.cta
      }]);
    }, 650);
  };
  const runCta = cta => {
    if (cta.href) {
      window.open(cta.href, "_blank", "noopener,noreferrer");
    } else if (cta.screen && go) {
      go(cta.screen);
      setOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "chat-fab",
    onClick: () => setOpen(o => !o),
    "aria-label": "Open assistant"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "message-circle",
    size: 24,
    strokeWidth: 2
  }), !open && /*#__PURE__*/React.createElement("span", {
    className: "chat-fab-dot"
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "chat-win",
    role: "dialog",
    "aria-label": "Fizza assistant"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chat-avatar"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "stethoscope",
    size: 20,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: "#fff",
      lineHeight: 1.2
    }
  }, "Ask Fizza"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.8)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#8fd39a",
      display: "inline-block"
    }
  }), "Online \xB7 replies instantly")), /*#__PURE__*/React.createElement("button", {
    className: "chat-x",
    onClick: () => setOpen(false),
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "chat-body",
    ref: bodyRef
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "chat-msg " + m.from
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-bubble"
  }, m.text), m.cta && /*#__PURE__*/React.createElement("button", {
    className: "chat-cta",
    onClick: () => runCta(m.cta)
  }, m.cta.href ? /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 14
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  }), " ", m.cta.label))), typing && /*#__PURE__*/React.createElement("div", {
    className: "chat-msg bot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chat-bubble chat-typing"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: "chat-quick"
  }, QUICK.map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: "chat-chip",
    onClick: () => ask(k)
  }, KB[k].q)))));
}
Object.assign(window, {
  Assistant
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/chatbot.jsx", error: String((e && e.message) || e) }); }

// screens/dashboard.jsx
try { (() => {
/* Patient dashboard */
function Dashboard({
  go,
  booking,
  user
}) {
  const name = user && user.name && user.name !== "Guest" ? user.name : "Ayesha Khan";
  const past = [{
    date: "Mar 14, 2026",
    clinic: "Lahore — Gulberg III",
    doc: "Dr. Fizza Ahmed",
    type: "Laser — pigmentation"
  }, {
    date: "Jan 9, 2026",
    clinic: "Lahore — Gulberg III",
    doc: "Dr. Sana Riaz",
    type: "Acne consultation"
  }];
  const reports = [{
    name: "lab-report-march.pdf",
    verified: true
  }, {
    name: "skin-biopsy.pdf",
    verified: true
  }, {
    name: "prescription-jan.jpg",
    verified: false
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "screen wrap",
    style: {
      padding: "40px 28px 70px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 38,
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Patient portal"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 42,
      margin: "8px 0 0"
    }
  }, "Welcome back, ", name.split(" ")[0]))), /*#__PURE__*/React.createElement("div", {
    className: "grid dash-grid",
    style: {
      gridTemplateColumns: "1.4fr 1fr",
      gap: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden",
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      background: "linear-gradient(160deg,var(--rose-tint),var(--cream-2))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 30px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-rose"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-clock",
    size: 12
  }), " Upcoming"), /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      fontSize: 30,
      fontWeight: 600,
      margin: "14px 0 4px"
    }
  }, booking.city ? booking.city.name : "Islamabad — F-6 Markaz"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 15,
      margin: 0
    }
  }, booking.date ? fmtDate(booking.date) : "Tuesday, June 23, 2026", booking.time ? ` · ${booking.time}` : " · 4:30 PM"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10,
      marginTop: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark btn-sm",
    onClick: () => window.open("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(booking.city ? booking.city.name + " " + booking.city.address : "Dr Fizza Skin Clinic Islamabad F-6"), "_blank", "noopener")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "navigation",
    size: 15
  }), " Directions"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: () => go("calendar")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-x",
    size: 15
  }), " Reschedule"), booking.ref && /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hash",
    size: 13
  }), " ", booking.ref))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200,
      alignSelf: "stretch"
    },
    className: "hide-sm"
  }, /*#__PURE__*/React.createElement(Img, {
    src: "assets/dr-fizza.jpg",
    style: {
      height: "100%",
      objectPosition: "center top"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 22,
      fontWeight: 600,
      margin: "0 0 16px"
    }
  }, "Past visits"), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 12
    }
  }, past.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "row",
    style: {
      gap: 13,
      padding: "13px 0",
      borderTop: i ? "1px solid var(--line)" : "none",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 11,
      background: "var(--cream-2)",
      color: "var(--ink-soft)",
      display: "grid",
      placeItems: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "stethoscope",
    size: 19
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14.5
    }
  }, p.type), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13
    }
  }, p.clinic, " \xB7 ", p.doc)), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, p.date))))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 22,
      fontWeight: 600,
      margin: "0 0 14px"
    }
  }, "Medical summary"), [["Allergies", "Penicillin"], ["Medications", "None"], ["Skin type", "Combination · sensitive"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "row",
    style: {
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "faint",
    style: {
      fontSize: 14
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 22,
      fontWeight: 600,
      margin: "0 0 14px"
    }
  }, "Reports"), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 10
    }
  }, reports.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "file-chip"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 9,
      background: "var(--gold-tint)",
      color: "var(--gold)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontWeight: 600,
      fontSize: 13.5
    }
  }, r.name), r.verified ? /*#__PURE__*/React.createElement("span", {
    className: "badge badge-sage"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 12
  }), " Verified") : /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: {
      background: "var(--cream-2)",
      color: "var(--ink-faint)"
    }
  }, "Pending"))))))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/dashboard.jsx", error: String((e && e.message) || e) }); }

// screens/details.jsx
try { (() => {
/* Visit details + medical history + uploads */
function VisitDetails({
  go,
  booking,
  setBooking,
  user
}) {
  const [reason, setReason] = React.useState(booking.reason || "");
  const [allergies, setAllergies] = React.useState("");
  const [meds, setMeds] = React.useState("");
  const [history, setHistory] = React.useState("");
  const [files, setFiles] = React.useState([{
    name: "lab-report-march.pdf",
    size: "248 KB"
  }]);
  const firstTime = !user || user.firstTime || user.guest;
  const concerns = ["Acne", "Pigmentation", "Anti-aging", "Laser", "Hair loss", "General check-up"];
  const [picked, setPicked] = React.useState([]);
  const [err, setErr] = React.useState({});
  const toggle = c => {
    setPicked(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);
    if (err.concerns) setErr(x => ({
      ...x,
      concerns: null
    }));
  };
  const next = () => {
    const e = {};
    if (picked.length === 0) e.concerns = "Please select at least one reason for your visit";
    setErr(e);
    if (Object.keys(e).length) return;
    setBooking(b => ({
      ...b,
      reason,
      concerns: picked
    }));
    go("payment");
  };
  const addFile = () => setFiles(f => [...f, {
    name: `report-${f.length + 1}.jpg`,
    size: "1.2 MB"
  }]);
  return /*#__PURE__*/React.createElement("div", {
    className: "screen wrap",
    style: {
      padding: "40px 28px 70px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "center",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    current: "details"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid split",
    style: {
      gridTemplateColumns: "1fr 360px",
      gap: 30,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Step 3"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 42,
      margin: "10px 0 4px"
    }
  }, "Tell us about your visit"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 16
    }
  }, "A few quick details help our specialists prepare for you.")), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad grid",
    style: {
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 21,
      fontWeight: 600,
      margin: 0
    }
  }, "Reason for visit"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 9,
      flexWrap: "wrap"
    }
  }, concerns.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => toggle(c),
    className: "chip",
    style: {
      cursor: "pointer",
      background: picked.includes(c) ? "var(--rose-deep)" : "var(--white)",
      color: picked.includes(c) ? "#fff" : "var(--ink-soft)",
      borderColor: picked.includes(c) ? "var(--rose-deep)" : "var(--line-2)"
    }
  }, picked.includes(c) && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 13
  }), " ", c))), err.concerns && /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 13
  }), " ", err.concerns), /*#__PURE__*/React.createElement(Field, {
    label: "Anything you'd like us to know? (optional)"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    placeholder: "Describe your concern, symptoms, or goals\u2026",
    value: reason,
    onChange: e => setReason(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad grid",
    style: {
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 21,
      fontWeight: 600,
      margin: 0
    }
  }, "Medical history"), firstTime && /*#__PURE__*/React.createElement("span", {
    className: "badge badge-gold"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 12
  }), " First visit")), /*#__PURE__*/React.createElement("p", {
    className: "faint",
    style: {
      fontSize: 13.5,
      margin: "-6px 0 0"
    }
  }, "Kept private and shared only with your treating doctor."), /*#__PURE__*/React.createElement("div", {
    className: "grid cols-2",
    style: {
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Known allergies"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "e.g. penicillin, none",
    value: allergies,
    onChange: e => setAllergies(e.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Current medications"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "e.g. isotretinoin",
    value: meds,
    onChange: e => setMeds(e.target.value)
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Past skin conditions or treatments"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "textarea",
    style: {
      minHeight: 72
    },
    placeholder: "e.g. eczema, previous chemical peel\u2026",
    value: history,
    onChange: e => setHistory(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad grid",
    style: {
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 21,
      fontWeight: 600,
      margin: 0
    }
  }, "Reports & prescriptions ", /*#__PURE__*/React.createElement("span", {
    className: "faint",
    style: {
      fontSize: 14,
      fontWeight: 400
    }
  }, "(optional)")), /*#__PURE__*/React.createElement("div", {
    className: "drop",
    onClick: addFile
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: "var(--rose-tint)",
      color: "var(--rose-deep)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 12px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload-cloud",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Drag & drop or click to upload"), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13,
      marginTop: 3
    }
  }, "PDF, JPG or PNG \xB7 up to 10 MB")), files.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "file-chip"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 9,
      background: "var(--gold-tint)",
      color: "var(--gold)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 12
    }
  }, f.size, " \xB7 uploaded")), /*#__PURE__*/React.createElement("span", {
    className: "badge badge-sage"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 12
  }), " Ready"), /*#__PURE__*/React.createElement("button", {
    className: "chip",
    style: {
      padding: 7,
      cursor: "pointer"
    },
    onClick: e => {
      e.stopPropagation();
      setFiles(arr => arr.filter((_, j) => j !== i));
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 14
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 96
    },
    className: "sticky-side"
  }, /*#__PURE__*/React.createElement(BookingSummary, {
    booking: booking,
    footer: /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary btn-block btn-lg",
      onClick: next
    }, "Continue to payment ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }))
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-quiet btn-block",
    style: {
      marginTop: 12
    },
    onClick: () => go("calendar")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Back"))));
}
Object.assign(window, {
  VisitDetails
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/details.jsx", error: String((e && e.message) || e) }); }

// screens/landing.jsx
try { (() => {
/* Landing page */
function Landing({
  go,
  cities
}) {
  const why = [{
    icon: "badge-check",
    t: "Board-certified care",
    d: "Consultations led by certified dermatologists and aesthetic specialists."
  }, {
    icon: "map-pin",
    t: "Six clinics, two countries",
    d: "Premium locations across Pakistan and the UAE — plus online video visits."
  }, {
    icon: "sparkles",
    t: "Book in under a minute",
    d: "Browse, pick a slot and reserve. No account needed until you confirm."
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("section", {
    className: "wrap hero-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: 56,
      alignItems: "center",
      padding: "70px 28px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: "riseUp .6s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pill-tag"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "leaf",
    size: 14
  }), " Dermatology & Aesthetics"), /*#__PURE__*/React.createElement("h1", {
    className: "display hero-title",
    style: {
      fontSize: 68,
      margin: "22px 0 0"
    }
  }, "Beautiful skin,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--rose-deep)"
    }
  }, "thoughtfully"), " cared for."), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 18.5,
      lineHeight: 1.6,
      maxWidth: 480,
      marginTop: 22
    }
  }, "Premium dermatology across Islamabad, Lahore, Karachi and Dubai. Reserve a consultation with our specialists in just a few taps \u2014 explore everything before you ever sign in."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 14,
      marginTop: 34,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: () => go("location")
  }, "Book an appointment ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-lg",
    onClick: () => go("location")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 17
  }), " See locations")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 26,
      marginTop: 38,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      marginLeft: 6
    }
  }, ["https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=96&h=96&q=80", "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=96&h=96&q=80", "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=96&h=96&q=80", "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=96&h=96&q=80"].map((u, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      marginLeft: -10,
      flex: "none",
      border: "2.5px solid var(--cream)",
      overflow: "hidden",
      background: ["#E8B4B8", "#D9A7A2", "#C9B79A", "#B9C2B0"][i]
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: u,
    alt: "",
    onError: e => {
      e.currentTarget.style.display = "none";
    },
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 3,
      color: "var(--gold)"
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Icon, {
    key: i,
    name: "star",
    size: 15,
    strokeWidth: 0,
    style: {
      fill: "var(--gold)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13.5,
      marginTop: 3
    }
  }, "4.9 from 2,400+ patients")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      animation: "pop .7s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=820&q=80",
    className: "",
    style: {
      width: "100%",
      aspectRatio: "4/5",
      borderRadius: "140px 140px 24px 24px",
      boxShadow: "var(--sh-lg)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad",
    style: {
      position: "absolute",
      left: -34,
      bottom: 48,
      padding: 18,
      display: "flex",
      alignItems: "center",
      gap: 13,
      animation: "riseUp .9s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: "var(--sage-tint)",
      color: "#4d6650",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Next available"), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13
    }
  }, "Today \xB7 4:30 PM"))), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      position: "absolute",
      right: -22,
      top: 40,
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      gap: 9,
      animation: "riseUp 1.05s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-sage"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 13
  }), " Verified clinic")))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      padding: "10px 28px 30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid cols-3 why-grid",
    style: {
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 22
    }
  }, why.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "card card-pad why-card",
    style: {
      animation: `riseUp ${.5 + i * .1}s var(--ease) both`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "why-ico",
    style: {
      width: 50,
      height: 50,
      borderRadius: 14,
      background: "var(--rose-tint)",
      color: "var(--rose-deep)",
      display: "grid",
      placeItems: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: w.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "why-text"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 24,
      fontWeight: 600,
      margin: "16px 0 8px"
    }
  }, w.t), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      margin: 0
    }
  }, w.d)))))), /*#__PURE__*/React.createElement("section", {
    className: "wrap",
    style: {
      padding: "44px 28px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card split-media",
    style: {
      padding: 0,
      overflow: "hidden",
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
    className: "teaser-media",
    style: {
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,transparent 40%,rgba(42,42,42,.55))",
      borderRadius: "inherit"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "teaser-cap",
    style: {
      position: "absolute",
      left: 28,
      bottom: 26,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "#fff",
      opacity: .85
    }
  }, "Now open"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 30,
      fontWeight: 600
    }
  }, "Dubai \u2014 Al Wasl & Jumeirah"))), /*#__PURE__*/React.createElement("div", {
    className: "teaser-body",
    style: {
      padding: "36px 38px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "display teaser-h",
    style: {
      fontSize: 38,
      margin: 0
    }
  }, "Find a clinic near you"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 16,
      marginTop: 12,
      maxWidth: 420
    }
  }, "Live availability across all our locations. Pick a city to see open dates."), /*#__PURE__*/React.createElement("div", {
    className: "grid cols-2",
    style: {
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginTop: 24
    }
  }, cities.filter(c => c.active).slice(0, 6).map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    className: "chip",
    onClick: () => go("location"),
    style: {
      justifyContent: "space-between",
      padding: "13px 16px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "row",
    style: {
      gap: 9,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15,
    style: {
      color: "var(--rose-deep)"
    }
  }), " ", c.name), /*#__PURE__*/React.createElement("span", {
    className: "badge badge-sage",
    style: {
      fontSize: 10.5,
      padding: "3px 8px"
    }
  }, c.open)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark btn-block",
    style: {
      marginTop: 22
    },
    onClick: () => go("location")
  }, "Start booking ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 17
  }))))));
}
Object.assign(window, {
  Landing
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/landing.jsx", error: String((e && e.message) || e) }); }

// screens/location.jsx
try { (() => {
/* Location selector */
function LocationSelector({
  go,
  cities,
  booking,
  setBooking
}) {
  const groups = [{
    id: "pk",
    country: "Pakistan",
    label: "Pakistan",
    ids: ["isb", "lhr", "khi"]
  }, {
    id: "ae",
    country: "United Arab Emirates",
    label: "Dubai, UAE",
    ids: ["alwasl", "jumeirah"]
  }];
  const [country, setCountry] = React.useState(booking.city ? (groups.find(g => g.ids.includes(booking.city.id)) || groups[0]).id : "pk");
  const active = groups.find(g => g.id === country);
  const pick = c => {
    if (!c.active) return;
    setBooking(b => ({
      ...b,
      city: c,
      date: null,
      time: null
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen wrap",
    style: {
      padding: "44px 28px 70px",
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "center",
    style: {
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    current: "location"
  })), /*#__PURE__*/React.createElement("div", {
    className: "center",
    style: {
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Step 1"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 48,
      margin: "12px 0 10px"
    }
  }, "Where would you like to visit?"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 17,
      maxWidth: 520,
      margin: "0 auto"
    }
  }, "Choose a country, then pick a clinic to see live availability.")), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      background: "var(--cream-2)",
      borderRadius: "var(--r-pill)",
      padding: 5,
      gap: 5,
      marginBottom: 30,
      maxWidth: 460,
      marginInline: "auto"
    }
  }, groups.map(g => {
    const on = country === g.id;
    const n = g.ids.filter(id => cities.find(c => c.id === id && c.active)).length;
    return /*#__PURE__*/React.createElement("button", {
      key: g.id,
      onClick: () => setCountry(g.id),
      style: {
        flex: 1,
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--r-pill)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "12px 0",
        fontWeight: 600,
        fontSize: 14.5,
        transition: ".2s var(--ease)",
        background: on ? "var(--white)" : "transparent",
        color: on ? "var(--ink)" : "var(--ink-faint)",
        boxShadow: on ? "var(--sh-sm)" : "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 16,
      style: {
        color: on ? "var(--rose-deep)" : "var(--ink-faint)"
      }
    }), g.label, /*#__PURE__*/React.createElement("span", {
      className: "badge",
      style: {
        fontSize: 11,
        padding: "2px 8px",
        background: on ? "var(--rose-tint)" : "transparent",
        color: on ? "var(--rose-deep)" : "var(--ink-faint)"
      }
    }, n));
  })), /*#__PURE__*/React.createElement("div", {
    key: active.id,
    className: "grid cols-3",
    style: {
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16,
      animation: "fadeIn .3s var(--ease) both"
    }
  }, active.ids.map(id => {
    const c = cities.find(x => x.id === id);
    if (!c) return null;
    const on = booking.city && booking.city.id === c.id;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: "sel " + (on ? "on " : "") + (c.active ? "" : "off"),
      onClick: () => pick(c)
    }, /*#__PURE__*/React.createElement("span", {
      className: "sel-check"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: 13,
        display: "grid",
        placeItems: "center",
        background: c.online ? "var(--sage-tint)" : "var(--rose-tint)",
        color: c.online ? "#4d6650" : "var(--rose-deep)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.online ? "video" : "map-pin",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      className: "serif",
      style: {
        fontSize: 23,
        fontWeight: 600,
        marginTop: 14
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      className: "faint",
      style: {
        fontSize: 13.5,
        marginTop: 3
      }
    }, c.address), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, c.active ? /*#__PURE__*/React.createElement("span", {
      className: "badge badge-sage"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "circle",
      size: 9,
      strokeWidth: 0,
      style: {
        fill: "#5a8a5e"
      }
    }), " ", c.open) : /*#__PURE__*/React.createElement("span", {
      className: "badge",
      style: {
        background: "var(--cream-2)",
        color: "var(--ink-faint)"
      }
    }, "Coming soon")));
  })), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      marginTop: 34,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-quiet",
    onClick: () => go("landing")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 17
  }), " Back"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    disabled: !booking.city,
    onClick: () => go("calendar")
  }, "Continue to calendar ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  }))));
}
Object.assign(window, {
  LocationSelector
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/location.jsx", error: String((e && e.message) || e) }); }

// screens/login.jsx
try { (() => {
/* ============================================================
   Standalone Login page (Patient / Staff)
   Reached from the header "Log in" button.
   Patient  -> dashboard
   Staff     -> admin panel
   ============================================================ */
function LoginPage({
  go,
  setUser,
  notify
}) {
  const [role, setRole] = React.useState("patient"); // 'patient' | 'staff'
  const [mode, setMode] = React.useState("login"); // 'login' | 'register' (patient only)
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [name, setName] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState({});
  const isStaff = role === "staff";
  const clr = k => {
    if (err[k]) setErr(x => ({
      ...x,
      [k]: null
    }));
  };
  const submit = () => {
    const e = {};
    if (!isStaff && mode === "register" && !name.trim()) e.name = "Please enter your full name";
    const v = email.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const isPhone = /^[+]?[\d\s-]{10,}$/.test(v);
    if (!v) e.email = isStaff ? "Work email is required" : "Email or phone is required";else if (isStaff ? !isEmail : !isEmail && !isPhone) e.email = isStaff ? "Enter a valid email" : "Enter a valid email or phone";
    if (!pw) e.pw = "Password is required";else if (pw.length < 6) e.pw = "Password must be at least 6 characters";
    setErr(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (isStaff) {
        setUser({
          name: "Dr. Fizza Ahmed",
          email: email || "admin@drfizza.clinic",
          role: "Admin",
          staff: true
        });
        notify && notify("Signed in as Staff");
        go("admin");
      } else if (mode === "register") {
        setUser({
          name: name || "New Patient",
          email,
          role: "Patient",
          firstTime: true
        });
        notify && notify("Account created — welcome!");
        go("dashboard");
      } else {
        setUser({
          name: "Ayesha Khan",
          email: email || "ayesha@email.com",
          role: "Patient",
          returning: true
        });
        notify && notify("Signed in — welcome back!");
        go("dashboard");
      }
    }, 1100);
  };
  const heroImg = isStaff ? "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=900&q=80" : "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80";
  return /*#__PURE__*/React.createElement("div", {
    className: "screen login-grid",
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hide-sm",
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    src: heroImg,
    style: {
      position: "absolute",
      inset: 0,
      height: "100%",
      width: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(150deg, rgba(175,103,109,.72), rgba(42,42,42,.62))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "48px 52px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand",
    style: {
      cursor: "pointer"
    },
    onClick: () => go("landing")
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark",
    style: {
      background: "rgba(255,255,255,.16)",
      backdropFilter: "blur(6px)",
      boxShadow: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "stethoscope",
    size: 22,
    strokeWidth: 2,
    style: {
      fontSize: 22,
      alignItems: "center",
      justifyContent: "center"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "brand-name",
    style: {
      color: "#fff"
    }
  }, "Dr. Fizza"), /*#__PURE__*/React.createElement("div", {
    className: "brand-sub",
    style: {
      color: "rgba(255,255,255,.7)"
    }
  }, "Skin & Aesthetics"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pill-tag",
    style: {
      background: "rgba(255,255,255,.16)",
      color: "#fff",
      backdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: isStaff ? "shield-check" : "heart",
    size: 14
  }), " ", isStaff ? "Staff & Moderator access" : "Patient portal"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 46,
      color: "#fff",
      margin: "20px 0 14px"
    }
  }, isStaff ? "Run your clinic, calmly." : "Your skin journey, in one place."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,.85)",
      maxWidth: 420,
      margin: 0
    }
  }, isStaff ? "See today's schedule, manage availability, review patient files and verify uploaded reports — all from one console." : "Track upcoming visits, review your medical history, and manage reports across all our clinics."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 26,
      marginTop: 34
    }
  }, (isStaff ? [["calendar-check", "Live schedule"], ["clock", "Set availability"], ["badge-check", "Verify reports"]] : [["calendar-heart", "Easy booking"], ["file-text", "Your records"], ["shield", "Private & secure"]]).map(([ic, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "row",
    style: {
      gap: 9,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: "rgba(255,255,255,.16)",
      display: "grid",
      placeItems: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 40px",
      background: "var(--cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 400,
      animation: "riseUp .5s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      background: "var(--cream-2)",
      borderRadius: "var(--r-pill)",
      padding: 4,
      marginBottom: 30
    }
  }, [["patient", "Patient", "user-round"], ["staff", "Staff / Admin", "shield"]].map(([k, l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      setRole(k);
      setMode("login");
      setErr({});
    },
    className: "btn-sm",
    style: {
      flex: 1,
      border: "none",
      borderRadius: "var(--r-pill)",
      fontWeight: 600,
      fontSize: 13.5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      background: role === k ? "var(--white)" : "transparent",
      color: role === k ? "var(--ink)" : "var(--ink-faint)",
      boxShadow: role === k ? "var(--sh-sm)" : "none",
      padding: "11px 0",
      transition: ".2s"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15
  }), " ", l))), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, isStaff ? "Staff console" : mode === "register" ? "New patient" : "Welcome back"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: 34,
      margin: "10px 0 6px"
    }
  }, isStaff ? "Sign in to your console" : mode === "register" ? "Create your account" : "Sign in to your portal"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 14.5,
      marginTop: 0,
      marginBottom: 26
    }
  }, isStaff ? "For clinic doctors, moderators & front-desk staff." : "Access your appointments and records."), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 16
    }
  }, !isStaff && mode === "register" && /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    error: err.name
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "e.g. Ayesha Khan",
    value: name,
    onChange: e => {
      setName(e.target.value);
      clr("name");
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: isStaff ? "Work email" : "Email or phone",
    error: err.email
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: isStaff ? "you@drfizza.clinic" : "you@email.com",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      clr("email");
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Password",
    error: err.pw
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    type: show ? "text" : "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: pw,
    onChange: e => {
      setPw(e.target.value);
      clr("pw");
    },
    style: {
      paddingRight: 44
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShow(s => !s),
    type: "button",
    style: {
      position: "absolute",
      right: 6,
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      padding: 8,
      color: "var(--ink-faint)",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: show ? "eye-off" : "eye",
    size: 17
  })))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "row",
    style: {
      gap: 8,
      alignItems: "center",
      cursor: "pointer",
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    style: {
      accentColor: "var(--rose-deep)",
      width: 15,
      height: 15
    }
  }), " Remember me"), !isStaff && /*#__PURE__*/React.createElement("a", {
    className: "nav-link",
    style: {
      color: "var(--rose-deep)",
      fontWeight: 600,
      cursor: "pointer"
    },
    onClick: () => notify && notify("Password reset link sent to your email")
  }, "Forgot password?")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-block btn-lg",
    onClick: submit,
    disabled: loading
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "loader-circle",
    size: 18,
    className: "spin"
  }), " Signing in\u2026") : isStaff ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 17
  }), " Enter console") : mode === "register" ? "Create account" : "Sign in"), isStaff ? /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 9,
      alignItems: "flex-start",
      padding: "12px 14px",
      background: "var(--rose-tint)",
      borderRadius: "var(--r)",
      fontSize: 12.5,
      color: "var(--rose-deeper)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 15,
    style: {
      marginTop: 1,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Demo: any email & password opens the staff console. Role-based access is mocked.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      alignItems: "center",
      gap: 12,
      margin: "2px 0"
    }
  }, /*#__PURE__*/React.createElement("hr", {
    className: "divider",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "faint",
    style: {
      fontSize: 12
    }
  }, "or"), /*#__PURE__*/React.createElement("hr", {
    className: "divider",
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-block",
    onClick: () => go("location")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-plus",
    size: 17
  }), " Book without an account"), /*#__PURE__*/React.createElement("p", {
    className: "center faint",
    style: {
      fontSize: 13.5,
      margin: "6px 0 0"
    }
  }, mode === "register" ? "Already have an account?" : "New patient?", " ", /*#__PURE__*/React.createElement("a", {
    onClick: () => {
      setMode(mode === "register" ? "login" : "register");
      setErr({});
    },
    style: {
      color: "var(--rose-deep)",
      fontWeight: 700,
      cursor: "pointer"
    }
  }, mode === "register" ? "Sign in" : "Create one")))))));
}
Object.assign(window, {
  LoginPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/login.jsx", error: String((e && e.message) || e) }); }

// screens/payment.jsx
try { (() => {
/* Payment + Confirmation */
function Payment({
  go,
  booking,
  setBooking
}) {
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
  const fmtMoney = n => `${cur} ${n.toLocaleString()}`;
  const clr = k => {
    if (err[k]) setErr(x => ({
      ...x,
      [k]: null
    }));
  };
  const validate = () => {
    const e = {};
    if (method === "Card") {
      const digits = num.replace(/\s/g, "");
      if (!digits) e.num = "Card number is required";else if (digits.length < 16) e.num = "Enter a valid 16-digit card number";
      if (!exp) e.exp = "Required";else if (!/^\d{2}\s*\/\s*\d{2}$/.test(exp)) e.exp = "Use MM / YY";
      if (!cvc) e.cvc = "Required";else if (!/^\d{3,4}$/.test(cvc)) e.cvc = "3–4 digits";
      if (!cardName.trim()) e.cardName = "Name on card is required";
    } else if (method === "Easypaisa") {
      if (!easypaisa) e.easypaisa = "Mobile account number is required";else if (!/^0?3\d{9}$/.test(easypaisa.replace(/\s/g, ""))) e.easypaisa = "Enter a valid mobile number";
    }
    setErr(e);
    return Object.keys(e).length === 0;
  };
  const pay = () => {
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      const ref = "DF-" + Math.random().toString(36).slice(2, 7).toUpperCase();
      setBooking(b => ({
        ...b,
        ref,
        paid: true
      }));
      go("confirmation");
    }, 1500);
  };
  const fmtCard = v => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const fmtExp = v => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? d.slice(0, 2) + " / " + d.slice(2) : d;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen wrap",
    style: {
      padding: "40px 28px 70px",
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "center",
    style: {
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    current: "payment"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid split",
    style: {
      gridTemplateColumns: "1fr 360px",
      gap: 30,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Step 4"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 42,
      margin: "10px 0 4px"
    }
  }, "Secure your slot"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 16,
      marginBottom: 24
    }
  }, "Pay the consultation fee to confirm. Fully refundable up to 24 hours before."), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad grid",
    style: {
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 21,
      fontWeight: 600,
      margin: 0
    }
  }, "Payment details"), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 6,
      color: "var(--ink-faint)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 13
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5
    }
  }, "Encrypted"))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10
    }
  }, [["credit-card", "Card"], ["smartphone", "Easypaisa"], ["building-2", "Bank"]].map(([ic, l]) => {
    const on = method === l;
    return /*#__PURE__*/React.createElement("button", {
      key: l,
      type: "button",
      className: "chip",
      onClick: () => {
        setMethod(l);
        setErr({});
      },
      style: {
        flex: 1,
        justifyContent: "center",
        padding: "12px",
        cursor: "pointer",
        borderColor: on ? "var(--rose-deep)" : "var(--line-2)",
        color: on ? "var(--rose-deep)" : "var(--ink-soft)",
        background: on ? "var(--rose-tint)" : "var(--white)",
        fontWeight: on ? 700 : 500
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16
    }), " ", l);
  })), method === "Card" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    label: "Card number",
    error: err.num
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "4242 4242 4242 4242",
    value: num,
    onChange: e => {
      setNum(fmtCard(e.target.value));
      clr("num");
    },
    inputMode: "numeric"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid cols-2",
    style: {
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Expiry",
    error: err.exp
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "MM / YY",
    value: exp,
    onChange: e => {
      setExp(fmtExp(e.target.value));
      clr("exp");
    },
    inputMode: "numeric"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "CVC",
    error: err.cvc
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "123",
    value: cvc,
    onChange: e => {
      setCvc(e.target.value.replace(/\D/g, "").slice(0, 4));
      clr("cvc");
    },
    inputMode: "numeric"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Name on card",
    error: err.cardName
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "Ayesha Khan",
    value: cardName,
    onChange: e => {
      setCardName(e.target.value);
      clr("cardName");
    }
  }))), method === "Easypaisa" && /*#__PURE__*/React.createElement(Field, {
    label: "Mobile account number",
    error: err.easypaisa
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: "03XX XXXXXXX",
    value: easypaisa,
    onChange: e => {
      setEasypaisa(e.target.value);
      clr("easypaisa");
    },
    inputMode: "numeric"
  })), method === "Bank" && /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 9,
      alignItems: "flex-start",
      padding: "14px 16px",
      background: "var(--cream-2)",
      borderRadius: "var(--r)",
      fontSize: 13.5,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "building-2",
    size: 16,
    style: {
      marginTop: 1,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Transfer to ", /*#__PURE__*/React.createElement("strong", null, "Dr. Fizza Clinic \xB7 Meezan Bank"), " \xB7 IBAN PK00 0000 0000 0000. Your slot is held for 30 minutes.")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-block btn-lg",
    onClick: pay,
    disabled: loading
  }, loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "loader-circle",
    size: 18,
    className: "spin"
  }), " Processing\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 17
  }), " Pay ", fmtMoney(fee))), /*#__PURE__*/React.createElement("p", {
    className: "faint center",
    style: {
      fontSize: 12,
      margin: 0
    }
  }, "Demo only \u2014 no real charge is made."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 96
    },
    className: "sticky-side"
  }, /*#__PURE__*/React.createElement(BookingSummary, {
    booking: booking,
    footer: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        justifyContent: "space-between",
        padding: "4px 2px 12px",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "muted"
    }, "Consultation"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, fmtMoney(fee))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        justifyContent: "space-between",
        padding: "0 2px 14px",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "muted"
    }, "Booking fee"), /*#__PURE__*/React.createElement("span", {
      className: "badge badge-sage"
    }, "Free")), /*#__PURE__*/React.createElement("hr", {
      className: "divider"
    }), /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        justifyContent: "space-between",
        padding: "14px 2px 2px"
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Total today"), /*#__PURE__*/React.createElement("strong", {
      className: "serif",
      style: {
        fontSize: 22
      }
    }, fmtMoney(fee))))
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-quiet btn-block",
    style: {
      marginTop: 12
    },
    onClick: () => go("details")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Back"))));
}
function Confirmation({
  go,
  booking,
  user
}) {
  const city = booking.city;
  const addToCalendar = () => {
    const d = booking.date instanceof Date ? new Date(booking.date) : new Date();
    // parse "4:30 PM" into hours/minutes
    let hh = 16,
      mm = 30;
    if (booking.time) {
      const m = booking.time.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (m) {
        hh = parseInt(m[1]) % 12 + (m[3].toUpperCase() === "PM" ? 12 : 0);
        mm = parseInt(m[2]);
      }
    }
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hh, mm);
    const end = new Date(start.getTime() + 30 * 60000);
    const fmt = x => x.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Dr Fizza Skin Clinic//Booking//EN", "BEGIN:VEVENT", "UID:" + (booking.ref || "DF") + "@drfizza.clinic", "DTSTAMP:" + fmt(new Date()), "DTSTART:" + fmt(start), "DTEND:" + fmt(end), "SUMMARY:Dr. Fizza Skin Clinic — Consultation", "LOCATION:" + (city ? (city.name + ", " + city.address).replace(/,/g, "\\,") : "Dr. Fizza Skin Clinic"), "DESCRIPTION:Booking reference " + (booking.ref || "DF-XXXXX"), "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const blob = new Blob([ics], {
      type: "text/calendar"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dr-fizza-appointment.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen",
    style: {
      display: "grid",
      placeItems: "center",
      padding: "60px 20px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card center",
    style: {
      maxWidth: 560,
      width: "100%",
      padding: 0,
      overflow: "hidden",
      animation: "pop .5s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(165deg,var(--sage-tint),var(--cream-2))",
      padding: "44px 40px 30px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: "50%",
      background: "var(--sage)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 20px",
      boxShadow: "0 12px 30px rgba(143,166,142,.5)",
      animation: "pop .6s .15s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 38,
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      fontSize: 38,
      margin: "0 0 8px"
    }
  }, "You're all booked!"), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 16,
      margin: 0
    }
  }, "A confirmation was sent via ", /*#__PURE__*/React.createElement("strong", null, "Email"), " & ", /*#__PURE__*/React.createElement("strong", null, "WhatsApp"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "30px 40px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "center",
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-rose",
    style: {
      fontSize: 13,
      padding: "8px 16px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hash",
    size: 13
  }), " Ref ", booking.ref || "DF-XXXXX")), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 0,
      textAlign: "left",
      border: "1px solid var(--line)",
      borderRadius: "var(--r-lg)",
      overflow: "hidden"
    }
  }, [["map-pin", "Clinic", city ? city.name : "—", city ? city.address : ""], ["calendar", "Date & time", booking.date ? fmtDate(booking.date) : "—", booking.time || ""], ["user-round", "Patient", user ? user.name : "Guest", user && user.email ? user.email : "Patient"]].map(([ic, k, v, sub], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "row",
    style: {
      gap: 13,
      padding: "15px 18px",
      borderTop: i ? "1px solid var(--line)" : "none",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "summary-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "summary-k"
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "summary-v"
  }, v), sub && /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13
    }
  }, sub))))), /*#__PURE__*/React.createElement("div", {
    className: "grid",
    style: {
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-block btn-lg",
    onClick: () => go("dashboard")
  }, "Go to my dashboard ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-block",
    onClick: addToCalendar
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-plus",
    size: 17
  }), " Add to calendar")))));
}
Object.assign(window, {
  Payment,
  Confirmation
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/payment.jsx", error: String((e && e.message) || e) }); }

// screens/profile.jsx
try { (() => {
/* ============================================================
   Patient Profile — view & edit account, then log out
   ============================================================ */
function Profile({
  go,
  user,
  setUser,
  notify
}) {
  const base = user || {
    name: "Guest",
    email: "",
    phone: ""
  };
  const [name, setName] = React.useState(base.name && base.name !== "Guest" ? base.name : "");
  const [email, setEmail] = React.useState(base.email || "");
  const [phone, setPhone] = React.useState(base.phone || "");
  const [dob, setDob] = React.useState(base.dob || "");
  const [gender, setGender] = React.useState(base.gender || "");
  const [notifs, setNotifs] = React.useState(base.notifs !== false);
  const [saved, setSaved] = React.useState(false);
  const [err, setErr] = React.useState({});
  const clr = k => {
    if (err[k]) setErr(x => ({
      ...x,
      [k]: null
    }));
  };
  const initials = (name || "P").trim().split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
  const save = () => {
    const e = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email";
    if (phone.trim() && !/^[+]?[\d\s-]{10,}$/.test(phone.trim())) e.phone = "Enter a valid phone number";
    setErr(e);
    if (Object.keys(e).length) return;
    setUser(u => ({
      ...(u || {}),
      name: name || "Guest",
      email,
      phone,
      dob,
      gender,
      notifs,
      guest: false
    }));
    setSaved(true);
    notify && notify("Profile updated");
    setTimeout(() => setSaved(false), 2000);
  };
  const logout = () => {
    setUser(null);
    notify && notify("You've been logged out");
    go("landing");
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "screen wrap",
    style: {
      padding: "40px 28px 80px",
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-quiet btn-sm",
    onClick: () => go("dashboard"),
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  }), " Back to dashboard"), /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 96,
      background: "linear-gradient(120deg, var(--rose) 0%, var(--rose-deep) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "profile-head",
    style: {
      padding: "0 28px 24px",
      marginTop: -44,
      display: "flex",
      alignItems: "flex-end",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 88,
      height: 88,
      borderRadius: "50%",
      background: "var(--rose-deeper)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 32,
      fontWeight: 700,
      border: "4px solid var(--white)",
      boxShadow: "var(--sh-sm)",
      flex: "none",
      fontFamily: "var(--serif)"
    }
  }, initials), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 180,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 27,
      fontWeight: 600
    }
  }, name || "Your profile"), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 14,
      marginTop: 2
    }
  }, email || "Add your contact details below")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: logout,
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 16
  }), " Log out"))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad",
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 20,
      fontWeight: 600,
      margin: "0 0 18px"
    }
  }, "Personal details"), /*#__PURE__*/React.createElement("div", {
    className: "grid cols-2",
    style: {
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    error: err.name
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: name,
    onChange: e => {
      setName(e.target.value);
      clr("name");
    },
    placeholder: "Ayesha Khan"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    error: err.email
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      clr("email");
    },
    placeholder: "you@email.com",
    type: "email"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    error: err.phone
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: phone,
    onChange: e => {
      setPhone(e.target.value);
      clr("phone");
    },
    placeholder: "03XX XXXXXXX"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Date of birth"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    value: dob,
    onChange: e => setDob(e.target.value),
    placeholder: "DD / MM / YYYY"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Gender"
  }, /*#__PURE__*/React.createElement("select", {
    className: "input",
    value: gender,
    onChange: e => setGender(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Prefer not to say"), /*#__PURE__*/React.createElement("option", null, "Female"), /*#__PURE__*/React.createElement("option", null, "Male"), /*#__PURE__*/React.createElement("option", null, "Other"))))), /*#__PURE__*/React.createElement("div", {
    className: "card card-pad",
    style: {
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      fontSize: 20,
      fontWeight: 600,
      margin: "0 0 4px"
    }
  }, "Preferences"), /*#__PURE__*/React.createElement("label", {
    className: "row",
    style: {
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      padding: "14px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Appointment reminders"), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13.5
    }
  }, "Get Email & WhatsApp reminders before each visit.")), /*#__PURE__*/React.createElement("span", {
    onClick: () => setNotifs(v => !v),
    style: {
      width: 46,
      height: 27,
      borderRadius: 20,
      flex: "none",
      background: notifs ? "var(--rose-deep)" : "var(--line-2)",
      position: "relative",
      transition: ".2s var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: notifs ? 22 : 3,
      width: 21,
      height: 21,
      borderRadius: "50%",
      background: "#fff",
      transition: ".2s var(--ease)",
      boxShadow: "var(--sh-sm)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      justifyContent: "flex-end",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-quiet",
    onClick: () => go("dashboard")
  }, "Cancel"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: save
  }, /*#__PURE__*/React.createElement(Icon, {
    name: saved ? "check" : "save",
    size: 17
  }), " ", saved ? "Saved" : "Save changes")));
}
Object.assign(window, {
  Profile
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/profile.jsx", error: String((e && e.message) || e) }); }

// screens/ui.jsx
try { (() => {
/* Shared UI primitives — Dr. Fizza Skin Clinic */

/* ---------- Lucide icon ---------- */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.9,
  className = "",
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (el && window.lucide) {
      el.innerHTML = "";
      const i = document.createElement("i");
      i.setAttribute("data-lucide", name);
      el.appendChild(i);
      try {
        window.lucide.createIcons({
          nameAttr: "data-lucide",
          attrs: {
            width: size,
            height: size,
            "stroke-width": strokeWidth
          }
        });
      } catch (e) {}
    }
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: "icon " + className,
    style: {
      width: size,
      height: size,
      fontSize: size,
      lineHeight: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  });
}

/* ---------- Image with graceful gradient fallback ---------- */
function Img({
  src,
  alt = "",
  className = "",
  style,
  children
}) {
  const [ok, setOk] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "photo " + className,
    style: style
  }, ok && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setOk(false),
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      borderRadius: "inherit"
    }
  }), children);
}

/* ---------- Brand mark / logo ---------- */
function Logo({
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "brand",
    onClick: onClick,
    style: {
      cursor: onClick ? "pointer" : "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "stethoscope",
    size: 22,
    strokeWidth: 2,
    style: {
      fontSize: 22,
      alignItems: "center",
      justifyContent: "center"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "brand-name"
  }, "Dr. Fizza"), /*#__PURE__*/React.createElement("div", {
    className: "brand-sub"
  }, "Skin & Aesthetics")));
}

/* ---------- Top nav ---------- */
function Nav({
  go,
  user,
  onLogin,
  onLogout,
  showLogin = true
}) {
  const [menu, setMenu] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!menu) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setMenu(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [menu]);
  const nav = s => {
    setMenu(false);
    go(s);
  };
  const initials = user && user.name && user.name !== "Guest" ? user.name[0].toUpperCase() : "P";
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-inner"
  }, /*#__PURE__*/React.createElement(Logo, {
    onClick: () => go("landing")
  }), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-link hide-sm",
    onClick: () => go("location")
  }, "Locations"), /*#__PURE__*/React.createElement("a", {
    className: "nav-link hide-sm",
    onClick: () => go("landing")
  }, "Treatments"), user ? user.staff ? /*#__PURE__*/React.createElement("button", {
    className: "chip",
    onClick: () => go("admin"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-ava"
  }, initials), " Staff console") : /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "chip",
    onClick: () => setMenu(m => !m),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav-ava"
  }, initials), user.name ? user.name.split(" ")[0] : "My account", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 15,
    style: {
      color: "var(--ink-faint)"
    }
  })), menu && /*#__PURE__*/React.createElement("div", {
    className: "nav-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-menu-head"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14
    }
  }, user.name || "Patient"), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 12.5
    }
  }, user.email || "Signed in")), /*#__PURE__*/React.createElement("button", {
    className: "nav-menu-item",
    onClick: () => nav("profile")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 16
  }), " My profile"), /*#__PURE__*/React.createElement("button", {
    className: "nav-menu-item",
    onClick: () => nav("dashboard")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 16
  }), " My appointments"), /*#__PURE__*/React.createElement("div", {
    className: "nav-menu-sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "nav-menu-item danger",
    onClick: () => {
      setMenu(false);
      onLogout && onLogout();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 16
  }), " Log out"))) : showLogin && /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost btn-sm",
    onClick: onLogin
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-in",
    size: 16
  }), " Log in"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-sm",
    onClick: () => go("location")
  }, "Book appointment"))));
}

/* ---------- Stepper ---------- */
const STEPS = [{
  key: "location",
  label: "Location"
}, {
  key: "calendar",
  label: "Date & time"
}, {
  key: "details",
  label: "Details"
}, {
  key: "payment",
  label: "Payment"
}];
function Stepper({
  current
}) {
  // current may be 'auth' (between calendar & details) — map to calendar index+ .5
  let idx = STEPS.findIndex(s => s.key === current);
  if (current === "auth") idx = 1.5;
  if (current === "confirmation") idx = 4;
  return /*#__PURE__*/React.createElement("div", {
    className: "stepper",
    style: {
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 4
    }
  }, STEPS.map((s, i) => {
    const done = i < idx;
    const active = Math.floor(idx) === i && idx % 1 === 0;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.key
    }, /*#__PURE__*/React.createElement("div", {
      className: "step " + (done ? "done " : "") + (active ? "active" : "")
    }, /*#__PURE__*/React.createElement("span", {
      className: "step-dot"
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      className: "step-label hide-sm"
    }, s.label)), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "step-bar" + (i < idx - 0.5 ? " fill" : "")
    }));
  }));
}

/* ---------- Booking summary panel ---------- */
function fmtDate(d) {
  if (!d) return null;
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
function BookingSummary({
  booking,
  footer
}) {
  const {
    city,
    date,
    time
  } = booking;
  return /*#__PURE__*/React.createElement("aside", {
    className: "summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "summary-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--rose-deeper)"
    }
  }, "Your appointment"), /*#__PURE__*/React.createElement("div", {
    className: "display",
    style: {
      fontSize: 26,
      marginTop: 6
    }
  }, "Booking summary")), /*#__PURE__*/React.createElement("div", {
    className: "summary-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "summary-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "summary-k"
  }, "Location"), /*#__PURE__*/React.createElement("div", {
    className: "summary-v" + (city ? "" : " summary-empty")
  }, city ? city.name : "Not selected"), city && /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13
    }
  }, city.address))), /*#__PURE__*/React.createElement("div", {
    className: "summary-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "summary-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "summary-k"
  }, "Date"), /*#__PURE__*/React.createElement("div", {
    className: "summary-v" + (date ? "" : " summary-empty")
  }, date ? fmtDate(date) : "Not selected"))), /*#__PURE__*/React.createElement("div", {
    className: "summary-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "summary-ico"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "summary-k"
  }, "Time"), /*#__PURE__*/React.createElement("div", {
    className: "summary-v" + (time ? "" : " summary-empty")
  }, time || "Not selected"))), city && /*#__PURE__*/React.createElement("div", {
    className: "summary-row",
    style: {
      background: "var(--cream-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "summary-ico",
    style: {
      background: "var(--gold-tint)",
      color: "var(--gold)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wallet",
    size: 17
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "summary-k"
  }, "Consultation fee"), /*#__PURE__*/React.createElement("div", {
    className: "summary-v"
  }, city.fee))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18
    }
  }, footer));
}

/* ---------- Field ---------- */
function Field({
  label,
  children,
  hint,
  error
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "field" + (error ? " field-invalid" : "")
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "field-err"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert-circle",
    size: 13
  }), " ", error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "faint",
    style: {
      fontSize: 12
    }
  }, hint));
}

/* ---------- Toast ---------- */
function Toast({
  msg,
  icon = "check-circle-2"
}) {
  if (!msg) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  }), " ", msg);
}

/* ---------- Legal modal (Terms / Privacy) ---------- */
const LEGAL_COPY = {
  terms: {
    title: "Terms & Conditions",
    updated: "Last updated 1 July 2026",
    body: [["Appointments & bookings", "Consultation fees are payable at the time of booking to reserve your slot. Bookings are confirmed once payment is received and a reference number is issued via Email and WhatsApp."], ["Cancellations & refunds", "Appointments may be rescheduled or cancelled up to 24 hours before the scheduled time for a full refund. Cancellations within 24 hours may forfeit the consultation fee."], ["Medical disclaimer", "Information provided through this portal is for scheduling purposes and does not constitute medical advice. Always consult your treating dermatologist for diagnosis and treatment."], ["Use of the portal", "You agree to provide accurate personal and medical information. Misuse of the booking system, fraudulent payment, or abusive conduct toward staff may result in suspension of access."]]
  },
  privacy: {
    title: "Privacy Policy",
    updated: "Last updated 1 July 2026",
    body: [["Information we collect", "We collect your name, contact details, medical history and uploaded reports solely to provide dermatology care and manage your appointments."], ["How we use your data", "Your data is used to schedule visits, prepare your treating doctor, process payments and send appointment confirmations. We never sell your personal information."], ["Data security", "Records are encrypted in transit and at rest, and are accessible only to your treating clinicians and authorised clinic staff."], ["Your rights", "You may request a copy of your records, ask for corrections, or request deletion of your account at any time by contacting the clinic."]]
  }
};
function LegalModal({
  which,
  onClose
}) {
  if (!which) return null;
  const doc = LEGAL_COPY[which];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 210,
      background: "rgba(42,28,28,.5)",
      display: "grid",
      placeItems: "center",
      padding: 20,
      animation: "fade .2s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--white)",
      borderRadius: "var(--r-lg)",
      boxShadow: "0 30px 70px rgba(42,28,28,.35)",
      width: "100%",
      maxWidth: 640,
      maxHeight: "84vh",
      overflow: "auto",
      animation: "pop .3s var(--ease) both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      background: "var(--white)",
      padding: "26px 30px 16px",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 27,
      fontWeight: 600
    }
  }, doc.title), /*#__PURE__*/React.createElement("div", {
    className: "faint",
    style: {
      fontSize: 13,
      marginTop: 4
    }
  }, doc.updated)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 17
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 30px 30px"
    }
  }, doc.body.map(([h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h4", {
    className: "serif",
    style: {
      fontSize: 17.5,
      fontWeight: 600,
      margin: "0 0 6px"
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      fontSize: 14.5,
      lineHeight: 1.6,
      margin: 0
    }
  }, p))), /*#__PURE__*/React.createElement("p", {
    className: "faint",
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      margin: "6px 0 0"
    }
  }, "This is a demonstration portal. No real medical, payment or personal data is collected or stored."))));
}

/* ---------- Footer ---------- */
const SOCIALS = [{
  ic: "instagram",
  label: "Instagram",
  href: "https://instagram.com"
}, {
  ic: "facebook",
  label: "Facebook",
  href: "https://facebook.com"
}, {
  ic: "youtube",
  label: "YouTube",
  href: "https://youtube.com"
}, {
  ic: "linkedin",
  label: "LinkedIn",
  href: "https://linkedin.com"
}];
function SiteFooter({
  go
}) {
  const [legal, setLegal] = React.useState(null);
  const openLink = href => window.open(href, "_blank", "noopener,noreferrer");
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap footer-wrap",
    style: {
      padding: "48px 0 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    onClick: go ? () => go("landing") : undefined
  }), /*#__PURE__*/React.createElement("p", {
    className: "faint",
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      margin: "16px 0 18px",
      maxWidth: 260
    }
  }, "Premium dermatology & aesthetics across Pakistan and the UAE. Book a consultation in under a minute."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 10
    }
  }, SOCIALS.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.label,
    className: "social-btn",
    "aria-label": s.label,
    onClick: () => openLink(s.href)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.ic,
    size: 17
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-h"
  }, "Clinics"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-list"
  }, ["Islamabad — F-6 Markaz", "Lahore — Gulberg III", "Karachi — Clifton", "Al Wasl — Dubai", "Jumeirah — Dubai"].map(c => /*#__PURE__*/React.createElement("li", {
    key: c
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go("location")
  }, c))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-h"
  }, "Clinic"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go("location")
  }, "Book an appointment")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go("login")
  }, "Patient portal")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go("admin")
  }, "Staff login")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setLegal("terms")
  }, "Terms & Conditions")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => setLegal("privacy")
  }, "Privacy Policy")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-h"
  }, "Contact"), /*#__PURE__*/React.createElement("ul", {
    className: "footer-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "tel:+92510000000"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), " +92 51 000 0000")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@drfizza.clinic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 14
  }), " hello@drfizza.clinic")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => openLink("https://wa.me/92510000000")
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 14
  }), " WhatsApp us")), /*#__PURE__*/React.createElement("li", {
    className: "row",
    style: {
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), " Mon\u2013Sat \xB7 10 AM \u2013 6 PM")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Dr. Fizza Skin Clinic. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setLegal("terms")
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("a", {
    onClick: () => setLegal("privacy")
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go("admin")
  }, "Staff login")))), /*#__PURE__*/React.createElement(LegalModal, {
    which: legal,
    onClose: () => setLegal(null)
  }));
}
Object.assign(window, {
  Icon,
  Img,
  Logo,
  Nav,
  Stepper,
  BookingSummary,
  Field,
  Toast,
  SiteFooter,
  LegalModal,
  fmtDate,
  STEPS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "screens/ui.jsx", error: String((e && e.message) || e) }); }

})();
