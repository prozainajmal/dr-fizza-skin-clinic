/* Main app — flow controller */
const CITIES = [
  { id: "isb", name: "Islamabad", address: "F-6 Markaz, Islamabad", active: true, open: "Open today", fee: "PKR 5,000", feeNum: 5000, cur: "PKR" },
  { id: "lhr", name: "Lahore", address: "Gulberg III, Lahore", active: true, open: "Open today", fee: "PKR 5,000", feeNum: 5000, cur: "PKR" },
  { id: "khi", name: "Karachi", address: "Clifton Block 5, Karachi", active: true, open: "Open today", fee: "PKR 5,000", feeNum: 5000, cur: "PKR" },
  { id: "alwasl", name: "Al Wasl — Dubai", address: "Al Wasl Road, Jumeirah 1", active: true, open: "Open today", fee: "AED 350", feeNum: 350, cur: "AED" },
  { id: "jumeirah", name: "Jumeirah — Dubai", address: "Jumeirah Beach Road", active: true, open: "Open today", fee: "AED 350", feeNum: 350, cur: "AED" },
];

const FLOW = ["location", "calendar", "auth", "details", "payment"];

function App() {
  const [screen, setScreen] = React.useState("landing");
  const [booking, setBooking] = React.useState({ city: null, date: null, time: null });
  const [user, setUser] = React.useState(null);
  const [toast, setToast] = React.useState("");
  const [loginRole, setLoginRole] = React.useState("patient");

  const go = (s, opts) => {
    if (opts && opts.role) setLoginRole(opts.role);
    setScreen(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  const props = { go, cities: CITIES, booking, setBooking, user, setUser };
  const notify = (m) => setToast(m);
  const showFooter = ["landing", "location", "dashboard", "profile", "treatments"].includes(screen);
  const showNav = !["auth", "confirmation", "admin", "login"].includes(screen);
  const showAssistant = !["admin", "login"].includes(screen);
  const logout = () => { setUser(null); setToast("You've been logged out"); go("landing"); };

  let body;
  switch (screen) {
    case "landing": body = <Landing {...props} />; break;
    case "treatments": body = <Treatments {...props} />; break;
    case "location": body = <LocationSelector {...props} />; break;
    case "calendar": body = <Calendar {...props} />; break;
    case "auth": body = <AuthCheckpoint {...props} />; break;
    case "details": body = <VisitDetails {...props} />; break;
    case "payment": body = <Payment {...props} />; break;
    case "confirmation": body = <Confirmation {...props} />; break;
    case "dashboard": body = <Dashboard {...props} />; break;
    case "profile": body = <Profile {...props} notify={notify} />; break;
    case "login": body = <LoginPage key={loginRole} go={go} setUser={setUser} notify={notify} initialRole={loginRole} />; break;
    case "admin": body = <AdminPanel go={go} notify={notify} onLogout={logout} />; break;
    default: body = <Landing {...props} />;
  }

  return (
    <div className="app">
      {showNav && <Nav go={go} user={user} onLogin={() => go("login")} onLogout={logout} />}
      <main style={{ flex: 1 }}>{body}</main>
      {showFooter && <SiteFooter go={go} />}
      {showAssistant && <Assistant go={go} />}
      <Toast msg={toast} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
