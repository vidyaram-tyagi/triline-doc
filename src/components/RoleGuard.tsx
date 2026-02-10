// import React, { useEffect, useState } from "react";
// import { useHistory, useLocation } from "@docusaurus/router";
// import { getSession } from "../utils/session";

// type SessionUser = {
//   name: string;
//   role: string;
// };

// type Props = {
//   allow?: string[];
//   children: React.ReactNode;
// };

// export default function RoleGuard({ allow = [], children }: Props) {
//   const history = useHistory();
//   const location = useLocation();

//   const [ready, setReady] = useState(false);
//   const [session, setSession] = useState<SessionUser | null>(null);

//   useEffect(() => {
//     setReady(true);
//     setSession(getSession()); // ✅ now types match
//   }, []);

//   useEffect(() => {
//     if (!ready) return;

//     // allow docs root to load
//     if (location.pathname === "/docs") return;

//     // not logged in
//     if (!session) {
//       history.push("/");
//       return;
//     }

//     // role not allowed
//     if (allow.length && !allow.includes(session.role)) {
//       history.push("/");
//     }
//   }, [ready, session, allow, history, location.pathname]);

//   if (!ready) return null;
//   if (!session) return null;
//   if (allow.length && !allow.includes(session.role)) return null;

//   return <>{children}</>;
// }

import React, { useEffect } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import { getSession } from "../utils/session";

export default function RoleGuard({ children }: { children: React.ReactNode }) {
  const history = useHistory();
  const location = useLocation();

  const session = getSession(); // { role: "admin" | "user" }
  const role = session?.role;

  useEffect(() => {
    // 🔒 Not logged in
    if (!session) {
      history.replace("/");
      return;
    }

    const path = location.pathname;

    // 🔴 USER trying to access ADMIN docs
    if (path.startsWith("/docs/admin") && role !== "admin") {
      history.replace("/");
    }

    // ✅ Admin can access everything
    // ✅ User can access /docs/user
  }, [session, role, location.pathname, history]);

  // Prevent flash before redirect
  if (!session) return null;
  if (
    location.pathname.startsWith("/docs/admin") &&
    role !== "admin"
  ) {
    return null;
  }

  return <>{children}</>;
}
