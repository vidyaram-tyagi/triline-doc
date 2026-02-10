import React, { useEffect, useState } from "react";
import { logout, getSession } from "@site/src/utils/session";

export default function NavbarContent() {
  const [session, setSession] = useState<any>(null);
    const [showLogin, setShowLogin] = useState(false);
    const [mobile, setMobile] = useState("");


  const doLogout = () => {
    logout();
    setSession(null);
    setMobile("");
    setShowLogin(false);
    window.location.href = '/triline-doc';
  };  


  useEffect(() => {
    const s = getSession();
    setSession(s);

    // Optional: expose role to CSS (sidebar hide, etc.)
    if (s?.role) {
      document.body.dataset.role = s.role;
    }
  }, []);

  // NOT logged in
  if (!session) {
    return (
      <a
        href="/triline-doc"
        style={{
          fontWeight: 500,
          textDecoration: "none",
        }}
      >
        Login
      </a>
    );
  }

  // Logged in
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span>👤 {session.name}</span>

      <button  onClick={doLogout}
        style={{
          padding: "4px 10px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}
