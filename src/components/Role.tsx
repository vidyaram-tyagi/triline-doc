// import React from "react";
// import { getSession } from "../utils/session";

// export function AdminOnly({ children }: { children: React.ReactNode }) {
//   const session = getSession();
//   if (session?.role !== "admin") return null;
//   return <>{children}</>;
// }

// export function UserOnly({ children }: { children: React.ReactNode }) {
//   const session = getSession();
//   if (session?.role !== "user") return null;
//   return <>{children}</>;
// }

import React from "react";
import { getSession } from "../utils/session";

type Props = {
  children: React.ReactNode;
};

/**
 * Admin only content
 */
export function AdminOnly({ children }: Props) {
  const session = getSession();

  if (session?.role !== "admin") return null;
  return <>{children}</>;
}

/**
 * User content (visible to USER + ADMIN)
 */
export function UserOnly({ children }: Props) {
  const session = getSession();

  if (session?.role !== "user" && session?.role !== "admin") {
    return null;
  }

  return <>{children}</>;
}

